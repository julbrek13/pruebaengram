# Skill Registry

Project: `pruebaengram`
Generated: `2026-04-07`

## Resolution Order
1. Project-level skills (`.claude/skills`, `.gemini/skills`, `.agent/skills`, `skills`) — highest priority.
2. User-level skills (`~/.claude/skills`, `~/.config/opencode/skills`, `~/.gemini/skills`, `~/.cursor/skills`, `~/.copilot/skills`) — deduplicated by name; first source in order wins.

## Registered Skills (active)

| Skill | Source | Trigger (summary) |
|---|---|---|
| `branch-pr` | `~/.config/opencode/skills/branch-pr/SKILL.md` | Creating/opening PRs or preparing changes for review |
| `curso-engram-contexto` | `.agent/skills/curso-engram-contexto/SKILL.md` | Continuing course sessions and persisting progress/decisions in Engram |
| `go-testing` | `~/.config/opencode/skills/go-testing/SKILL.md` | Writing Go tests, Bubbletea/teatest tests, or adding coverage |
| `issue-creation` | `~/.config/opencode/skills/issue-creation/SKILL.md` | Creating GitHub issues for bugs/features |
| `judgment-day` | `~/.config/opencode/skills/judgment-day/SKILL.md` | Triggered by “judgment day”/dual adversarial review requests |
| `metodologia-ensenanza-paso-a-paso` | `.agent/skills/metodologia-ensenanza-paso-a-paso/SKILL.md` | Triggered by concept-first, “paso a paso”, or deep-learning requests |
| `skill-creator` | `~/.config/opencode/skills/skill-creator/SKILL.md` | Creating new reusable AI skills and agent instructions |
| `trazabilidad-commits-curso` | `.agent/skills/trazabilidad-commits-curso/SKILL.md` | Triggered by course sessions requiring commit checkpoints per concept and key-file changes |

## Exclusions
- `sdd-*` skills excluded by policy.
- `_shared` and `skill-registry` excluded by policy.

## Project Conventions Files
- No project-root convention files detected (`agents.md`, `AGENTS.md`, `CLAUDE.md`, `.cursorrules`, `GEMINI.md`, `copilot-instructions.md`).

## Compact Rules (auto-resolution hints)
- PR workflow → load `branch-pr`.
- Course continuity + memory persistence → load `curso-engram-contexto`.
- Issue creation/triage → load `issue-creation`.
- Go testing work → load `go-testing`.
- “judgment day” / adversarial dual review → load `judgment-day`.
- “explicame el concepto” / “paso a paso” / “modo curso” → load `metodologia-ensenanza-paso-a-paso`.
- New skill authoring/documentation → load `skill-creator`.
- Course traceability / commit evidence / checkpoint requests → load `trazabilidad-commits-curso`.
