# Apply Progress: Integrate CodeGraph and Hermes Into the Course

## Status

Strict TDD docs/config apply completed under approved `size:exception` decision.

This change is documentation/configuration only. No production source or test
files were modified, so the TDD evidence is recorded as a docs-only verification
cycle instead of a runtime behavior cycle.

## Workload Decision

| Field | Value |
| --- | --- |
| Decision | `size:exception` approved |
| Engram evidence | `#1162`, `sdd/integrate-codegraph-hermes-course/size-exception` |
| Chaining | Not used for this recovery apply |
| Review control | Kept to docs/config only; no production/runtime changes |

## Pre-Apply Safety

Recorded dirty status before edits:

- `.atl/.skill-registry.cache.json` staged add, unrelated.
- `docs/ObsidianVaults-GentleAI-Course/.obsidian/app.json` modified, unrelated.
- `docs/ObsidianVaults-GentleAI-Course/.obsidian/appearance.json` staged add, unrelated.
- `docs/ObsidianVaults-GentleAI-Course/.obsidian/graph.json` modified, unrelated.
- `session-ses_1900.md` staged add, unrelated.
- `openspec/` untracked planning artifacts.

No `.obsidian/*`, `.atl/*`, or `session-ses_1900.md` files were edited by this apply.

## Completed Tasks

- [x] Phase 1: Pre-apply safety and cache/evidence boundary.
- [x] Phase 2: CodeGraph foundation and `.codegraph/` cache policy.
- [x] Phase 3: CodeGraph MCP/OpenCode exploration-only policy.
- [x] Phase 4: Hermes sandbox/profile lab and Hermes + CodeGraph gate.
- [x] Phase 5: Qontera transfer appendix/playbook boundaries.
- [x] Phase 6: Engram topic key map.
- [x] Phase 7: Manual documentation verification; no build commands run.

## Files Changed

| File | Action | Purpose |
| --- | --- | --- |
| `.gitignore` | Modified | Ignores `.codegraph/` as local code intelligence cache. |
| `docs/MINI_PROJECTS_PLAN.md` | Modified | Adds staged CodeGraph, MCP, Hermes, integration, and Qontera transfer modules. |
| `docs/SDD_ENGRAM_OPERATING_MODEL.md` | Modified | Defines CodeGraph/Engram/MCP responsibilities and evidence rules. |
| `docs/AGENT_HARNESSES_COURSE_INTEGRATION.md` | Modified | Adds Hermes sandbox lab, CodeGraph foundation, integration gate, and Qontera appendix. |
| `docs/ENGRAM_CONTEXT_MAP.md` | Modified | Registers stable CodeGraph/Hermes/Qontera topic keys. |
| `openspec/changes/integrate-codegraph-hermes-course/tasks.md` | Modified | Marks completed apply tasks. |
| `openspec/changes/integrate-codegraph-hermes-course/apply-progress.md` | Added | Records cumulative apply progress and verification notes. |

## Spec Traceability

| Spec requirement | Repo evidence | Engram key / ID |
| --- | --- | --- |
| Learning Order | `docs/MINI_PROJECTS_PLAN.md`, `docs/AGENT_HARNESSES_COURSE_INTEGRATION.md` | `course/codegraph/foundation`, `course/hermes/sandbox-foundation` |
| CodeGraph Concept Boundary | `docs/SDD_ENGRAM_OPERATING_MODEL.md` | `course/codegraph/foundation` |
| CodeGraph Sandbox Policy | `.gitignore`, `docs/MINI_PROJECTS_PLAN.md` | `course/codegraph/foundation` |
| MCP and OpenCode Usage Policy | `docs/SDD_ENGRAM_OPERATING_MODEL.md` | `course/codegraph/mcp-policy` |
| Hermes Sandbox Isolation | `docs/AGENT_HARNESSES_COURSE_INTEGRATION.md` | `course/hermes/sandbox-foundation` |
| Hermes and CodeGraph Integration Lab | `docs/MINI_PROJECTS_PLAN.md`, `docs/AGENT_HARNESSES_COURSE_INTEGRATION.md` | `course/hermes-codegraph/integration-lab` |
| Qontera Transfer Playbook | `docs/MINI_PROJECTS_PLAN.md`, `docs/AGENT_HARNESSES_COURSE_INTEGRATION.md` | `course/qontera/codegraph-hermes-transfer` |
| Dual Traceability | `docs/SDD_ENGRAM_OPERATING_MODEL.md`, `docs/ENGRAM_CONTEXT_MAP.md` | `#1162`, `sdd/integrate-codegraph-hermes-course/apply-progress` |

## Verification

- Manual markdown review completed for headings, prerequisite order, checklists, and traceability.
- Existing test suite verification completed after the docs/config change: `npm test` passed with 7 files and 30 tests.
- Build commands were intentionally skipped under the repo constraint.
- Runtime sandbox commands for CodeGraph/Hermes were intentionally skipped because exercises are policy/docs only and command execution requires explicit approval.

## TDD Cycle Evidence

| Cycle | RED / Safety Net | GREEN / Verification | Refactor / Review | Scope Note |
| --- | --- | --- | --- | --- |
| Docs/config scope classification | Proposal, spec, design, and tasks identified the change as docs/config-only; no production behavior target existed for a failing runtime test. | Static traceability review confirmed each spec scenario maps to course docs, `.gitignore`, and Engram topic keys. | Kept implementation to docs/config artifacts and did not touch unrelated dirty files. | Docs-only Strict TDD exception for this change; runtime tests are not the proof mechanism for markdown content. |
| Repository safety net | Existing unrelated dirty files were recorded before edits and excluded from scope. | `npm test` passed after apply: 7 files, 30 tests. | No build/type-check command was run because repo rules forbid build commands in this course session. | Global tests are a regression safety net only, not content proof for docs. |
| Acceptance evidence | Spec scenarios required learning order, cache policy, MCP/OpenCode boundary, Hermes sandbox isolation, Qontera transfer boundaries, and dual traceability. | Evidence is recorded in the Spec Traceability table above and verified through changed docs/config inspection. | Review remains section-focused because the user approved `size:exception` for this larger docs update. | Course documentation acceptance is proven by traceability, not by runtime assertions. |

## Docs-Only Strict TDD Exception

This apply records an explicit docs-only exception for the Strict TDD cycle:

- **Reason**: the change updates course documentation, OpenSpec artifacts, `.gitignore`, and Engram topic mapping; it does not alter executable production behavior.
- **Guardrail preserved**: existing Vitest suite was run as a regression safety net and passed.
- **Evidence substitute**: every spec scenario is mapped to static repo evidence and Engram topic keys in the traceability table.
- **Constraint preserved**: build/type-check commands remain skipped because the repo contract forbids build commands unless the user changes that constraint.

## Risks Preserved

- `.codegraph/` remains local cache, not evidence.
- Hermes remains isolated with `HERMES_HOME` and no production secrets.
- Qontera VPS, Nginx, deploy flows, and secrets remain out of sandbox scope.
- Dirty unrelated files remain untouched.

## Deviations

None. Implementation follows the approved docs/config scope and `size:exception` decision.
