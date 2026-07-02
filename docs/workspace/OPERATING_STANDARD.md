# Workspace Operating Standard

This standard keeps workspace onboarding, merge synchronization, Engram memory, and cross-repo work safe. The happy path is simple: decide ownership first, preserve evidence, then change only the owner repo.

## Quick Path

1. Identify the owner repo and its orchestrator before changing files.
2. Confirm the repo uses its own `ENGRAM_PROJECT` and does not reuse another repo's project key.
3. Check relevant Engram context and repo docs before making decisions.
4. Make changes in the owner repo only, through a focused branch and PR.
5. Record repo evidence and Engram evidence before merge or handoff.

## Core Rules

| Area | Standard |
|------|----------|
| Ownership | Runtime, deployment, DNS, SSL, backups, Nginx, and infrastructure contracts belong to the infrastructure repo. |
| App boundaries | Product, admin, and website repos may consume documented contracts but must not own infrastructure runtime. |
| Engram | Each repo and orchestrator uses its own `ENGRAM_PROJECT`; do not share a generic workspace key. |
| Evidence | Every meaningful change needs repo evidence and Engram evidence. |
| Cross-repo work | Use owner-orchestrator handoff before changing another repo's responsibility. |
| Sensitive data | Do not store secrets, credentials, raw private memory, client data, or logs in docs, PRs, or Engram. |

## Roles

| Role | Responsibility |
|------|----------------|
| Owner repo | Makes and reviews changes for its own runtime, contracts, or product area. |
| Origin repo | Requests coordination and provides context without rewriting owner decisions. |
| Owner orchestrator | Reports local branch/status, dirty work, local decisions, risks, and safe next steps. |
| Engram | Preserves decisions, discoveries, bug fixes, and session summaries by project boundary. |

## Workflow

1. For a new or existing project, start with `PROJECT_ONBOARDING.md`.
2. Before merging or syncing changes, use `MERGE_SAFETY_CHECKLIST.md`.
3. For work crossing repo ownership, use `CROSS_REPO_HANDOFF.md`.
4. For memory boundaries and exclusions, use `ENGRAM_PROJECT_BOUNDARIES.md`.
5. For default guardrails and remaining manual gaps, use `GUARDRAIL_DEFAULTS.md`.

## Default Guardrail Layers

| Layer | Status | Required evidence |
|-------|--------|-------------------|
| Agent contract | Configured by default in `AGENTS.md`. | Repo-specific constraints and workspace docs linked. |
| Engram project boundary | Configured as a documented rule; runtime export remains repo-specific. | `ENGRAM_PROJECT`, topic keys, and observation IDs in PRs. |
| Cross-repo handoff | Configured as reusable prompts; execution remains manual until owner repo responds. | Owner-orchestrator summary linked or pasted in PR. |
| Ownership review | Manual until real CODEOWNERS owners are known. | `CODEOWNERS` enabled only with confirmed GitHub users or teams. |
| CI/PR enforcement | Manual in this repo; do not add broad automation without an explicit decision. | PR template completed and reviewed. |

## Review Expectations

- PRs must use `.github/pull_request_template.md`.
- PRs must include scope in/out, focused verification, repo evidence, and Engram evidence.
- PRs that touch workspace guardrails must prove `ENGRAM_PROJECT`, owner handoff when applicable, and dual traceability.
- Cross-repo PRs must link or summarize the owner-orchestrator handoff.
- Merge safety must be checked before synchronizing project changes.
