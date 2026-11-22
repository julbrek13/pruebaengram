# Merge Safety Checklist

Use this before merging, synchronizing, or normalizing project changes. The goal is to prevent unrelated work, local workspace state, secrets, or cross-repo assumptions from entering the review path.

## Quick Path

1. Inspect status before staging or merging.
2. Separate unrelated changes.
3. Confirm owner-repo scope.
4. Verify focused checks only.
5. Preserve repo evidence and Engram evidence.

## Checklist

- [ ] Current branch is correct for this work unit.
- [ ] `git status` was inspected before staging or merge.
- [ ] Staged, unstaged, and untracked files were reviewed.
- [ ] Unrelated changes are not mixed into this scope.
- [ ] Local Obsidian workspace state is excluded unless explicitly requested.
- [ ] Secrets, `.env` files, tokens, credentials, private data, and sensitive logs are excluded.
- [ ] Generated or cache files are excluded unless intentionally part of the change.
- [ ] Cross-repo changes have an owner-orchestrator handoff.
- [ ] `ENGRAM_PROJECT` used by this work unit is listed in the PR.
- [ ] Owner handoff, if applicable, is linked or summarized in the PR.
- [ ] Repo evidence and Engram evidence are both present.
- [ ] PR description includes scope in/out and verification evidence.
- [ ] Engram memory was saved for decisions, discoveries, bug fixes, or conventions.
- [ ] Engram evidence includes topic keys or observation IDs.

## Synchronization Rules

| Risk | Required Action |
|------|-----------------|
| Dirty worktree | Identify whether each change belongs to this work unit before staging. |
| Untracked files | Treat as unsafe until reviewed. Do not use `git add .`. |
| Cross-repo dependency | Ask the owner orchestrator for a handoff before changing behavior. |
| Obsidian workspace state | Exclude `.obsidian/workspace.json` and `.obsidian/appearance.json` unless explicitly requested. |
| Broad verification | Do not run builds or broad tests when repo constraints prohibit them. |

## Evidence To Preserve

- Files changed.
- Focused verification commands and results.
- PR or branch reference.
- Engram topic keys and observation IDs.
- Cross-repo handoff summary when applicable.
