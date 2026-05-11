import { existsSync, readFileSync } from "node:fs";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";

import {
  REQUIRED_PR_SECTIONS,
  validateBranchName,
  validatePrTemplateContent,
} from "../scripts/verify-ge3-policy.mjs";

const projectRoot = resolve(__dirname, "..");

describe("GE-3 policy-as-code", () => {
  describe("branch naming convention", () => {
    it("accepts valid tech/docs branches", () => {
      expect(validateBranchName("tech/tp-3-flujo-ramas").isValid).toBe(true);
      expect(validateBranchName("docs/tp-3-flujo-ramas").isValid).toBe(true);
    });

    it("rejects non-conforming branch names", () => {
      expect(validateBranchName("feature/tp-3-flujo-ramas").isValid).toBe(false);
      expect(validateBranchName("tech/tp-x-flujo-ramas").isValid).toBe(false);
    });
  });

  describe("PR contract", () => {
    it("requires all mandatory sections", () => {
      const completeTemplate = REQUIRED_PR_SECTIONS.join("\n\n");

      expect(validatePrTemplateContent(completeTemplate).missingSections).toEqual([]);
    });

    it("reports missing mandatory sections", () => {
      const incomplete = "## Summary\n\n## Scope (in/out)";

      expect(validatePrTemplateContent(incomplete).missingSections).toEqual([
        "## How to verify",
        "## Dual traceability",
        "## GE-3 compliance checklist",
      ]);
    });
  });

  describe("repository artifacts", () => {
    it("contains required GE-3 sections in policy docs", () => {
      const docs = [
        {
          path: ".agent/skills/metodologia-ramas-tp-curso/SKILL.md",
          requiredText: "Patrón oficial GE-3",
        },
        {
          path: "docs/MATRIZ_TRAZABILIDAD_CURSO.md",
          requiredText: "## 10) GE-3 — Política operativa (policy-as-code)",
        },
        {
          path: "docs/SDD_ENGRAM_OPERATING_MODEL.md",
          requiredText: "## 10) GE-3 Operación obligatoria (inicio/cierre)",
        },
        {
          path: "docs/MINI_PROJECTS_PLAN.md",
          requiredText: "GE-3 tracking por fase SDD",
        },
      ];

      for (const doc of docs) {
        const fullPath = resolve(projectRoot, doc.path);
        expect(existsSync(fullPath)).toBe(true);

        const content = readFileSync(fullPath, "utf8");
        expect(content).toContain(doc.requiredText);
      }
    });

    it("has a PR template file with all mandatory sections", () => {
      const templatePath = resolve(projectRoot, ".github/pull_request_template.md");
      expect(existsSync(templatePath)).toBe(true);

      const content = readFileSync(templatePath, "utf8");
      const result = validatePrTemplateContent(content);
      expect(result.missingSections).toEqual([]);
    });
  });
});
