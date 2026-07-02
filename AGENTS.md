# AGENTS.md — Operating Contract for Coding Agents

This file is the repo-level contract for AI coding agents working on `pruebaengram`.

Think of it as a README for agents: predictable context, constraints, and verification rules before touching code or documentation.

## Project purpose

`pruebaengram` is an educational repo for practicing **GentleAI + SDD Orchestrator + Engram + Git + Gentleman.Dots** with one rule:

> Decide first. Execute second. Preserve evidence.

## Non-negotiable constraints

- Do **not** run build commands unless the user explicitly changes this constraint.
- Do **not** push unless the user explicitly asks.
- Do **not** commit unless the user explicitly asks.
- Do **not** add AI attribution or `Co-Authored-By` trailers.
- Keep unrelated changes separated. If the working tree is dirty, report it before mixing scopes.
- Do not commit local Obsidian workspace state such as `.obsidian/workspace.json` or `.obsidian/appearance.json` unless explicitly requested.

## Memory and traceability

- Start by checking relevant Engram context when the user references previous work.
- Save important decisions, discoveries, bug fixes, conventions, and configuration changes to Engram.
- Use stable topic keys from `docs/ENGRAM_CONTEXT_MAP.md`.
- For workspace onboarding, merge safety, Engram project boundaries, and cross-repo handoffs, use `docs/workspace/OPERATING_STANDARD.md` first.
- For default guardrails and manual gaps, use `docs/workspace/GUARDRAIL_DEFAULTS.md` before changing workspace process docs.
- For course work, preserve dual traceability:
  - repo evidence: files, commits, tests, PRs;
  - Engram evidence: topic keys / observation IDs.

## SDD mode selection

- Use **no-SDD** for small mechanical changes.
- Use **partial-SDD** for scoped changes with a few decisions.
- Use **full-SDD** for architecture, conventions, multi-file workflows, or high-risk changes.
- If SDD artifacts exist in Engram, retrieve full observations before acting.

## Local verification

- Prefer focused checks over broad commands.
- GE-3 policy verification: `npm run verify:ge3`.
- GE-3 tests: `npm test -- tests/ge3-policy.test.ts`.
- Do not run `npm run build` under the current course rules.

## Video transcription timebox

- For Gentleman video transcription / AJ rebaseline work, use `.agent/skills/video-transcription-timebox/SKILL.md`.
- If missing-bundle recovery takes more than 10 minutes, stop waiting and regenerate inventory as a new evidence lineage with a checkpoint.

## PR expectations

Use `.github/pull_request_template.md` when opening or updating PRs. Every PR should explain:

- summary;
- scope in / out;
- how to verify;
- dual traceability: repo + Engram;
- relevant checklist items.

## Course map

Read these first when context is missing:

1. `README.md`
2. `docs/SDD_ENGRAM_OPERATING_MODEL.md`
3. `docs/MINI_PROJECTS_PLAN.md`
4. `docs/ENGRAM_CONTEXT_MAP.md`
5. `docs/workspace/OPERATING_STANDARD.md`
6. `docs/workspace/GUARDRAIL_DEFAULTS.md`
7. `docs/AGENTS_MD_COURSE_INTEGRATION.md`
8. `docs/ObsidianVaults-GentleAI-Course/00-HQ/Indexes/START-HERE.md`
