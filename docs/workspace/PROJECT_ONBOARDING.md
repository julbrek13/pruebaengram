# Project Onboarding Checklist

Use this checklist when a new or existing project enters the workspace. The goal is to make ownership, memory boundaries, and safe synchronization explicit before implementation starts.

## Quick Path

1. Name the project and owner repo.
2. Assign a unique `ENGRAM_PROJECT` for that repo/orchestrator.
3. Document what the repo owns and what it only consumes.
4. Confirm sensitive data exclusions.
5. Save the onboarding decision in Engram.

## Checklist

- [ ] Project name and repo path are known.
- [ ] Owner repo is identified.
- [ ] Local orchestrator or agent entry point is identified.
- [ ] `ENGRAM_PROJECT` is unique to this repo/orchestrator.
- [ ] `AGENTS.md` states the repo-specific `ENGRAM_PROJECT` expectation or where it is exported.
- [ ] PR template asks for `ENGRAM_PROJECT`, topic keys, observation IDs, and handoff evidence.
- [ ] CODEOWNERS status is explicit: active with real owners, or intentionally placeholder/commented.
- [ ] Existing Engram context was checked before decisions were made.
- [ ] Runtime ownership is clear.
- [ ] Contract ownership is clear.
- [ ] Dependencies on other repos are documented as consumed contracts, not assumed authority.
- [ ] Secrets, credentials, private client data, raw memories, and logs are excluded from docs and Engram.
- [ ] PR workflow and verification expectations are known.
- [ ] Cross-repo handoff is required for any change outside this repo's ownership.

## Onboarding Template

```md
# Project Onboarding: <project-name>

## Owner
- Repo:
- Primary responsibility:
- Local orchestrator/agent:

## Engram Boundary
- ENGRAM_PROJECT:
- Where configured/exported:
- Related topic keys:
- Memory exclusions:

## Default Guardrails
- AGENTS.md updated:
- PR template updated:
- CODEOWNERS status:
- Manual gaps accepted:

## Owns
- <runtime, product, docs, contracts, or workflows this repo owns>

## Consumes
- <contracts, APIs, infrastructure, or docs owned elsewhere>

## Verification
- Focused checks allowed:
- Broad checks/builds restricted:

## Handoff Needs
- Cross-repo owner to consult:
- Reason:
```

## Engram Save

Save the onboarding result with a stable topic key when it establishes a durable boundary, for example `qontera/<project>/workspace-onboarding`.
