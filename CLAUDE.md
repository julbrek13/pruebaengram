# Claude Code — Auditor Entry Point

This repository is the active auditor workspace. Claude Code configuration is nested here from `Qontera-Group/claude-code-config`, but that external repository is only a versioned configuration source — do not treat it as the daily work repository.

## Quick path

1. Read and follow `AGENTS.md` before touching code, docs, Git state, or workspace files.
2. Preserve evidence: check current repo state before edits and do not mix unrelated dirty work.
3. Do not run builds, commit, push, or expose secrets unless the user explicitly approves that exact action.
4. Use this repo as the execution root for Claude Code:

   ```bash
   cd /home/maca/pruebaengram
   claude
   ```

## Operating contract

| Topic | Rule |
| --- | --- |
| Primary contract | `AGENTS.md` is authoritative for coding-agent behavior in this repo. |
| Memory and traceability | Preserve dual evidence: repo files/commands plus Engram observations when available. |
| SDD | Use the mode guidance in `AGENTS.md`; do not jump into implementation when planning artifacts are required. |
| Git | Do not commit or push unless the user explicitly asks. Never add AI attribution. |
| Builds | Do not run build commands under the current course constraints. |
| Secrets | Do not read, print, summarize, move, or commit `.env`, credentials, tokens, private keys, customer data, or raw sensitive logs. |
| Cross-repo Qontera work | Use sanitized handoffs and preserve owner-repo boundaries. |
| Model routing | Claude model changes belong to Claude Code (`/model`, `claude --model`). GPT/OpenCode remains an external router, not something to embed inside Claude Code. |

## Context to read when needed

- `AGENTS.md` — repo-level operating contract.
- `README.md` — project entry point.
- `docs/SDD_ENGRAM_OPERATING_MODEL.md` — SDD and Engram workflow.
- `docs/ENGRAM_CONTEXT_MAP.md` — stable memory topic keys.
- `docs/workspace/OPERATING_STANDARD.md` — workspace safety, merge safety, and handoffs.
- `docs/workspace/GUARDRAIL_DEFAULTS.md` — default guardrails and known manual gaps.
- `docs/AGENTS_MD_COURSE_INTEGRATION.md` — course integration for agent instructions.

## Suggested first prompt

```text
Act as the Claude Code auditor for this repository.
First read CLAUDE.md and AGENTS.md.
Work read-only until you report the current repo state: branch, git status summary, existing dirty work, and any safety blockers.
Do not run builds, do not commit, do not push, and do not read secrets.
Then propose the smallest safe next step for auditing the infrastructure/orchestrator setup.
```

## Model switching

The repo default is configured in `.claude/settings.json`. Override it per session when needed:

```bash
claude --model sonnet
claude --model opus
```

Inside Claude Code, use:

```text
/model
```
