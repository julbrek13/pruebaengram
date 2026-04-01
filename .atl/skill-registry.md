# Skill Registry

Project: `pruebaengram`
Generated: `2026-03-31`

## Resolution Order
1. Project-level skills (`.claude/skills`, `.gemini/skills`, `.agent/skills`, `skills`) — none detected.
2. User-level skills (`~/.claude/skills`, `~/.config/opencode/skills`, `~/.gemini/skills`, `~/.cursor/skills`, `~/.copilot/skills`) — deduplicated by name; earlier sources win.

## Registered Skills (active)

| Skill | Source | Trigger (summary) |
|---|---|---|
| `branch-pr` | `~/.config/opencode/skills/branch-pr/SKILL.md` | When creating/opening pull requests or preparing changes for review |
| `go-testing` | `~/.config/opencode/skills/go-testing/SKILL.md` | When writing Go tests, Bubbletea/teatest tests, or adding coverage |
| `issue-creation` | `~/.config/opencode/skills/issue-creation/SKILL.md` | When creating GitHub issues for bugs/features |
| `judgment-day` | `~/.config/opencode/skills/judgment-day/SKILL.md` | When user requests adversarial dual review ("judgment day") |
| `skill-creator` | `~/.config/opencode/skills/skill-creator/SKILL.md` | When creating/documenting new reusable AI skills |

## Exclusions
- `sdd-*` skills excluded by registry policy.
- `_shared` and `skill-registry` excluded by registry policy.

## Project Conventions Files
- No project-level convention files detected (`agents.md`, `AGENTS.md`, `CLAUDE.md`, `.cursorrules`, `GEMINI.md`, `copilot-instructions.md`).

## Compact Rules (auto-resolution hints)
- If task is **PR creation**: load `branch-pr`.
- If task is **GitHub issue creation/triage**: load `issue-creation`.
- If task is **Go test implementation**: load `go-testing`.
- If task requests **"judgment day" / adversarial dual review**: load `judgment-day`.
- If task is **creating a new reusable AI skill**: load `skill-creator`.
