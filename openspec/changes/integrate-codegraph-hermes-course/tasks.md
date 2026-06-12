# Tasks: Integrate CodeGraph and Hermes Into the Course

## Review Workload Forecast

| Field | Value |
| --- | --- |
| Estimated changed lines | 450-750 |
| Changed files | 5-8 docs/config files |
| 400-line budget risk | High |
| Chained PRs recommended | Yes |
| Suggested split | PR 1 CodeGraph + cache policy -> PR 2 Hermes labs -> PR 3 Qontera transfer + topic map |
| Delivery strategy | ask-always, interactive |
| Chain strategy | pending |

Decision needed before apply: Yes
Chained PRs recommended: Yes
Chain strategy: pending
400-line budget risk: High

### Suggested Work Units

| Unit | Goal | Likely PR | Notes |
| --- | --- | --- | --- |
| 1 | CodeGraph foundation, MCP policy, `.codegraph/` cache rule | PR 1 | Independent course/policy slice. |
| 2 | Hermes sandbox/profile and Hermes + CodeGraph lab | PR 2 | Depends on CodeGraph prerequisites. |
| 3 | Qontera transfer appendix and Engram topic map | PR 3 | Depends on final module names. |

## Phase 1: Pre-Apply Safety

- [x] 1.1 Run `git status --short` and `git diff --stat`; record unrelated dirty files before edits.
- [x] 1.2 Avoid touching `.atl/`, `session-ses_1900.md`, and Obsidian workspace/config state unless explicitly approved.
- [x] 1.3 Confirm `.codegraph/` is absent or untracked local cache; do not treat it as repo evidence.

## Phase 2: CodeGraph Foundation

- [x] 2.1 Update `.gitignore` with minimal `.codegraph/` cache policy if still missing.
- [x] 2.2 Update `docs/MINI_PROJECTS_PLAN.md` to place CodeGraph before Hermes with a read-only sandbox checkpoint.
- [x] 2.3 Update `docs/SDD_ENGRAM_OPERATING_MODEL.md` to distinguish CodeGraph structure exploration from Engram durable evidence.

## Phase 3: MCP and OpenCode Policy

- [x] 3.1 Add CodeGraph MCP/OpenCode usage rules to `docs/SDD_ENGRAM_OPERATING_MODEL.md`: exploration only, not proof.
- [x] 3.2 Add learner evidence expectations: repo paths plus Engram IDs/topic keys, never `.codegraph/` cache.

## Phase 4: Hermes Labs

- [x] 4.1 Update `docs/AGENT_HARNESSES_COURSE_INTEGRATION.md` with Hermes as an advanced sandbox/profile lab.
- [x] 4.2 Require isolated `HERMES_HOME`, no production secrets, no VPS/Nginx/deploy access, and no global config mutation.
- [x] 4.3 Add Hermes + CodeGraph integration lab gated by completed standalone CodeGraph and Hermes modules.

## Phase 5: Qontera Transfer

- [x] 5.1 Add a Qontera transfer playbook/appendix that preserves `qontera-web`, `qontera-admin-wb`, `qontera-app`, and infrastructure boundaries.
- [x] 5.2 Mark VPS, Nginx, deploy flows, and secrets as out of sandbox scope.

## Phase 6: Engram Map

- [x] 6.1 Update `docs/ENGRAM_CONTEXT_MAP.md` with `course/codegraph/foundation`, `course/codegraph/mcp-policy`, `course/hermes/sandbox-foundation`, `course/hermes-codegraph/integration-lab`, and `course/qontera/codegraph-hermes-transfer`.

## Phase 7: Verification

- [x] 7.1 Markdown-review changed docs for concise headings, checklists, and prerequisite order.
- [x] 7.2 Trace every spec requirement to a repo path and Engram topic key or observation ID.
- [x] 7.3 Do not run build commands unless the user changes the repo constraint.
