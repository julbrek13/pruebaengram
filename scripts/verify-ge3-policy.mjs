import { existsSync, readFileSync } from "node:fs";
import { execSync } from "node:child_process";
import { resolve } from "node:path";

export const TECH_BRANCH_REGEX = /^tech\/tp-[0-9]+-[a-z0-9-]+$/;
export const DOCS_BRANCH_REGEX = /^docs\/tp-[0-9]+-[a-z0-9-]+$/;

export const REQUIRED_PR_SECTIONS = [
  "## Summary",
  "## Scope (in/out)",
  "## How to verify",
  "## Dual traceability",
  "## GE-3 compliance checklist",
];

export function validateBranchName(branchName) {
  const isValid = TECH_BRANCH_REGEX.test(branchName) || DOCS_BRANCH_REGEX.test(branchName);

  return {
    isValid,
    branchName,
    reason: isValid
      ? undefined
      : "Branch must match tech/tp-N-<tema> or docs/tp-N-<tema> in lowercase kebab-case",
  };
}

export function validatePrTemplateContent(content) {
  const missingSections = REQUIRED_PR_SECTIONS.filter((section) => !content.includes(section));

  return {
    isValid: missingSections.length === 0,
    missingSections,
  };
}

function runMinimumCases() {
  const cases = [
    { label: "valid tech branch", pass: validateBranchName("tech/tp-3-flujo-ramas").isValid },
    { label: "invalid branch prefix", pass: !validateBranchName("feature/tp-3-flujo-ramas").isValid },
    {
      label: "complete template sections",
      pass: validatePrTemplateContent(REQUIRED_PR_SECTIONS.join("\n\n")).isValid,
    },
    {
      label: "incomplete template detection",
      pass: !validatePrTemplateContent("## Summary\n\n## Scope (in/out)").isValid,
    },
  ];

  return {
    cases,
    isValid: cases.every((item) => item.pass),
  };
}

function getCurrentBranch() {
  return execSync("git rev-parse --abbrev-ref HEAD", { encoding: "utf8" }).trim();
}

function main() {
  const projectRoot = process.cwd();
  const templatePath = resolve(projectRoot, ".github/pull_request_template.md");
  const branch = getCurrentBranch();
  const branchCheck = validateBranchName(branch);

  let templateCheck = { isValid: false, missingSections: REQUIRED_PR_SECTIONS };

  if (existsSync(templatePath)) {
    templateCheck = validatePrTemplateContent(readFileSync(templatePath, "utf8"));
  }

  const minimumCases = runMinimumCases();

  const checks = [
    { label: "Branch naming", ok: branchCheck.isValid, detail: branchCheck.reason ?? branch },
    {
      label: "PR template exists",
      ok: existsSync(templatePath),
      detail: existsSync(templatePath) ? templatePath : "Missing .github/pull_request_template.md",
    },
    {
      label: "PR mandatory sections",
      ok: templateCheck.isValid,
      detail: templateCheck.isValid
        ? "All required sections present"
        : `Missing: ${templateCheck.missingSections.join(", ")}`,
    },
    {
      label: "Minimum reproducible cases",
      ok: minimumCases.isValid,
      detail: minimumCases.cases
        .map((item) => `${item.pass ? "OK" : "FAIL"} ${item.label}`)
        .join(" | "),
    },
  ];

  for (const check of checks) {
    const icon = check.ok ? "✅" : "❌";
    console.log(`${icon} ${check.label}: ${check.detail}`);
  }

  const hasFailure = checks.some((item) => !item.ok);
  process.exit(hasFailure ? 1 : 0);
}

if (import.meta.url === `file://${process.argv[1]}`) {
  main();
}
