# Engram Project Boundaries

Each repo and orchestrator must use its own `ENGRAM_PROJECT`. Engram is shared evidence infrastructure, not a shared scratchpad where all repos write into one generic project key.

## Quick Path

1. Set or confirm the repo-specific `ENGRAM_PROJECT` before saving memory.
2. Search only the project context needed for the task unless cross-repo coordination is explicit.
3. Save decisions, discoveries, bug fixes, conventions, and session summaries in the owner project.
4. Exclude sensitive data from every memory.
5. Reference Engram topic keys or observation IDs in PRs.

## Boundary Rules

| Topic | Rule |
|-------|------|
| Project key | Use one `ENGRAM_PROJECT` per repo/orchestrator. |
| Default value | Use the owner repo name unless a documented workspace boundary requires a different key. |
| Proof | PRs must state the `ENGRAM_PROJECT` used; do not rely on reviewer memory. |
| Owner decisions | Save decisions in the repo that owns the decision. |
| Cross-repo context | Reference other projects through handoff summaries, not by merging memory boundaries. |
| Admin metadata | Admin-style surfaces may show sanitized read-only metadata only when the contract allows it. |
| Infra runtime | Infrastructure runtime and operational contracts remain owned by infrastructure. |

## What To Save

- Architecture and design decisions.
- Bug fixes with root cause.
- Non-obvious discoveries and gotchas.
- Configuration or environment changes.
- Durable conventions and workflow changes.
- Session summaries for meaningful work.

## What Not To Save

- Secrets, tokens, credentials, connection strings, or `.env` values.
- Private client data or personal data.
- Sensitive logs or production incident details that expose private systems.
- Raw prompts, raw observations, or private memory dumps unless explicitly sanitized and needed.
- Control-plane actions that belong in infrastructure tooling, not docs or memory.

## PR Evidence

Every reviewable change should list:

- `ENGRAM_PROJECT` used.
- Where that project key is configured or confirmed for the current run.
- Topic keys touched.
- Observation IDs for important decisions or discoveries.
- Any cross-repo handoff summary used to justify the scope.

## Recommended Initial Defaults

| Repo type | `ENGRAM_PROJECT` default | Notes |
|-----------|--------------------------|-------|
| Single repo | Exact repo name. | Avoid generic workspace names. |
| Embedded orchestrator | Exact owner repo name. | The orchestrator writes decisions for its own repo. |
| Cross-repo coordination | Origin saves origin decisions; owner saves owner decisions. | Reference the other side through handoff summaries and observation IDs. |
| Course sandbox | Course repo name. | Keep learning evidence separate from product/infrastructure repos. |

## Qontera Notes

For Qontera, use owner-repo truth instead of copying contracts into `pruebaengram`:

- Infra documents the canonical Engram Cloud project spaces and operational contracts.
- Admin/App/Web should document their own `ENGRAM_PROJECT` guardrail locally before saving repo decisions.
- App must not treat Engram as runtime source data for users or clients.
- Web public content must not expose internal project slugs, repo names, handoffs, contracts, CI/deploy, or infrastructure details.
