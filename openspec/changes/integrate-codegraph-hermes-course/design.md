# Design: Integrate CodeGraph and Hermes Into the Course

## Technical Approach

Add this as a course architecture change, not tool installation work. Apply should place CodeGraph/Hermes modules inside the existing learning map, preserve SDD/OpenSpec for planning, keep Engram as durable evidence, and treat `.codegraph/` plus Hermes sandbox state as local runtime artifacts.

The design implements `course-codegraph-hermes` by sequencing structural exploration first, then isolated agent-runtime experimentation, then a Qontera transfer appendix that stays outside production deployment.

## Course Placement

| Area | Placement |
| --- | --- |
| `docs/MINI_PROJECTS_PLAN.md` | Add CodeGraph before Hermes near Agent Harnesses, with checkpoints and evidence. |
| `docs/SDD_ENGRAM_OPERATING_MODEL.md` | Add policy: CodeGraph explores structure; Engram stores decisions, evidence, and precedence. |
| `docs/AGENT_HARNESSES_COURSE_INTEGRATION.md` | Add Hermes as advanced sandbox harness/runtime lab, not OpenCode replacement. |
| `docs/ENGRAM_CONTEXT_MAP.md` | Add stable topic keys for CodeGraph/Hermes decisions and module evidence. |
| Obsidian vault docs | Later learner-facing trackers/concepts; not required in this design phase. |

## Learning Sequence

CodeGraph comes first because it is read-only, local, and teaches repository structure before runtime delegation. Hermes comes later because it introduces agent execution, profiles, state, and sandbox boundaries; teaching it first would encourage command-first experimentation.

## Architecture Decisions

| Decision | Alternatives considered | Rationale |
| --- | --- | --- |
| CodeGraph before Hermes | Parallel modules; Hermes first | Structural literacy is prerequisite to safe agent-runtime experiments. |
| Engram remains authority | CodeGraph cache as evidence; Hermes logs as evidence | Course continuity depends on durable topic keys/observations, not local caches. |
| `.codegraph/` is local cache | Commit cache; regenerate in CI | The index is machine-local and should not become repo evidence. |
| Hermes uses isolated `HERMES_HOME` | Default/global home | Prevents global config drift, secret leakage, and accidental production coupling. |
| Qontera guidance is appendix/playbook | Direct rollout tasks | Future enterprise transfer needs repo/VPS boundaries without touching production now. |

## Artifact Model

```
OpenSpec proposal/spec/design/tasks -> planning evidence
Course docs and vault trackers       -> learner-facing material later
Engram topic keys / observation IDs  -> durable decisions and module evidence
.codegraph/ and HERMES_HOME sandbox  -> local runtime/cache, not evidence
```

Suggested topic keys for apply:

- `course/codegraph/foundation`
- `course/codegraph/mcp-policy`
- `course/hermes/sandbox-foundation`
- `course/hermes-codegraph/integration-lab`
- `course/qontera/codegraph-hermes-transfer`

## Operational Policy

CodeGraph may build a local index and expose MCP for structural exploration only. It must not replace file reads, focused checks, Git diffs, OpenSpec artifacts, or Engram evidence.

Hermes labs must use sandbox-first setup, isolated `HERMES_HOME`, no production secrets, no VPS/Nginx/deploy access, and no default/global config mutation. Any command exercises are optional and require explicit approval under the current course rule.

Engram precedence: recover full observations for SDD decisions; Git/repo content reflects current file state.

## Implementation Plan Shape

| File | Action in apply | Purpose |
| --- | --- | --- |
| `.gitignore` | Modify | Add `.codegraph/` if not already ignored. |
| `docs/MINI_PROJECTS_PLAN.md` | Modify | Add staged CodeGraph, Hermes, integration, and Qontera transfer modules. |
| `docs/SDD_ENGRAM_OPERATING_MODEL.md` | Modify | Document authority and MCP/cache policy. |
| `docs/AGENT_HARNESSES_COURSE_INTEGRATION.md` | Modify | Position Hermes as advanced sandbox harness lab. |
| `docs/ENGRAM_CONTEXT_MAP.md` | Modify | Register course topic keys. |
| Obsidian tracker/concept docs | Create/modify if budget allows | Add checklists and evidence links. |

## Risk Controls

- Dirty worktree: apply must inspect status and avoid unrelated `.atl`, Obsidian, and session files.
- Review budget: keep the first apply slice under 400 changed lines; ask before chaining if forecast is high.
- Global drift: never write Hermes state to default home in course exercises.
- Qontera: keep infrastructure in `qontera-platform-infrastructure`; Web/Admin/App remain separate; no secrets or deploy changes.

## Verification Strategy

| Layer | Check |
| --- | --- |
| Document review | Confirm every spec requirement maps to a doc section or planned exercise. |
| Traceability | Confirm repo paths and Engram topic keys are reported separately. |
| Sandbox commands | Optional only with explicit approval; validate local-only CodeGraph/Hermes behavior. |
| Build | Do not run build commands under the current course rule. |

## Alternatives Rejected

- Install and teach Hermes immediately: rejected because it skips structural literacy and increases sandbox risk.
- Commit `.codegraph/`: rejected because cache is not evidence.
- Use Hermes as OpenCode/GentleAI replacement: rejected because this change extends the course, not the operating harness.
- Put Qontera rollout in apply scope: rejected because production deployment, VPS, Nginx, and secrets are out of scope.

## Open Questions

- None blocking. Apply should still ask before optional sandbox command execution or chained PR strategy decisions.
