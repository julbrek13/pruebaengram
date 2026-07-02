## Summary
- What changed:
- Why this change is needed:

## Scope (in/out)
- In scope:
- Out of scope:

## How to verify
- [ ] Focused check(s) only:
- Result:

## Dual traceability
### Repo evidence
- Branch:
- Files changed:
- Commits/PR refs:

### Engram evidence
- ENGRAM_PROJECT:
- Where `ENGRAM_PROJECT` is configured/confirmed:
- topic_key(s):
- observation id(s):

## Cross-repo handoff
- [ ] Not applicable; this change is fully owned by this repo.
- [ ] Applicable; owner-orchestrator handoff is linked or summarized below.
- Owner repo consulted:
- Handoff summary:
- Reference: `docs/workspace/CROSS_REPO_HANDOFF.md`
- Qontera boundary, if applicable: Infra remains source of truth for platform/operation contracts; Admin/App/Web consume or apply their repo boundaries without duplicating Infra contracts.

## Public/private boundary
- [ ] No secrets, `.env` values, tokens, credentials, private data, raw memories, raw prompts, or sensitive logs are exposed.
- [ ] Public Web copy, if touched, does not expose Engram slugs, repo names, handoffs, internal contracts, CI/deploy, or infrastructure details.
- [ ] App runtime behavior, if touched, does not use Engram as user/client data source.

## Merge safety
- [ ] `docs/workspace/MERGE_SAFETY_CHECKLIST.md` was reviewed.
- [ ] Unrelated changes are excluded.
- [ ] Secrets, credentials, private data, raw memories, and sensitive logs are excluded.
- [ ] Local Obsidian workspace state is excluded unless explicitly requested.
- [ ] Workspace guardrail defaults were reviewed when this PR changes onboarding, Engram boundaries, handoff, ownership, or PR process.

## GE-3 compliance checklist
- [ ] Branch naming follows `tech/tp-N-...` or `docs/tp-N-...`
- [ ] PR includes scope in/out and verification evidence
- [ ] Dual traceability (repo + Engram) is complete
- [ ] No CI/protections/bots/heavy automation were introduced
