---
tags: [dashboard, traceability]
type: traceability
---

# MASTER TRACEABILITY

## Contrato de trazabilidad

Cada bloque importante debe poder responder:

1. ¿Qué aprendí?
2. ¿Dónde está aplicado en el repo?
3. ¿Qué decisión quedó en Engram?
4. ¿Qué evidencia demuestra avance?
5. ¿Qué nodo del vault explica la relación?

## Matriz viva

| Lane | Bloque / módulo | Repo | Rama o commit evidence | Engram topic | Vault | Estado |
| --- | --- | --- | --- | --- | --- | --- |
| Foundations | DOTS-0 | `docs/GENTLEMAN_DOTS_LEARNING_PATH.md` | Commit `docs:` o checkpoint de práctica | `course/dots/foundation` | [[DOTS-TRACKER]] | #status/todo |
| Foundations | DOTS-1 | `docs/GENTLEMAN_DOTS_LEARNING_PATH.md` | Commit `docs:` o checkpoint de práctica | `course/dots/shell` | [[DOTS-TRACKER]] | #status/todo |
| Foundations | CP-0 | `docs/PROFESSIONAL_CRITERIA_COURSE_INTEGRATION.md` | Commit `docs:` por criterio aplicado | `course/professional-criteria/technical-critique` | [[professional-criteria]] | #status/todo |
| SDD+Engram | EN-1 a EN-4 | `docs/ENGRAM_RECOVERY_RUNBOOK.md`, `docs/ENGRAM_CONTEXT_MAP.md`, `openspec/changes/**` | Commits por fase o work unit SDD | `course/engram/*`, `sdd/<change>/*` | [[engram-memory]], [[sdd-operating-model]] | #status/doing |
| Git+Review | GE-3 | `.github/pull_request_template.md`, `docs/MATRIZ_TRAZABILIDAD_CURSO.md`, policy docs | Rama `tech/tp-*` o PR trazable | `sdd/ge-3-caso-real/*` | [[GE-3-TRACKER]] | #status/todo |
| Agent Harnesses | AGENTS-0 / AGENTS-1 | `AGENTS.md`, `docs/AGENTS_MD_COURSE_INTEGRATION.md` | Commit `docs:` o PR metodológico | `course/agents-md/foundation`, `course/agents-md/audit` | [[AGENTS-MD-TRACKER]] | #status/todo |
| Agent Harnesses | AH-0 a AH-6 | `docs/AGENT_HARNESSES_COURSE_INTEGRATION.md`, `docs/VPS_*`, `docs/API_BRIDGE_*` | Commit `docs:` separado por harness | `course/agent-harnesses/*`, `course/vps-connection/*`, `course/api-bridge/*` | [[AGENT-HARNESSES-TRACKER]], [[agent-harnesses]] | #status/todo |
| Research+Evidence Governance | Review queue y transcript lineage | `docs/intelligence-pipeline/**`, `docs/ObsidianVaults-GentleAI-Course/40-EVIDENCE/Indexes/EVIDENCE-REGISTER.md` | Sólo después de decisión humana explícita | `course/evidence/*`, `course/transcripts/*`, `course/intelligence/*` | [[INTELLIGENCE-DASHBOARD]], [[EVIDENCE-REGISTER]] | #status/todo |
| Transfer+Infrastructure | Qontera, VPS, Engram Cloud, API Bridge | `docs/VPS_*`, `docs/API_BRIDGE_*`, handoff docs por repo dueño | Ramas por repo dueño; no mezclar infraestructura con curso local | `course/qontera/*`, `course/vps-connection/*`, `course/engram-cloud-vps/*` | [[vps-connection]], [[engram-cloud-vps]], [[api-bridge-pattern]] | #status/todo |

## Gates de consistencia

| Gate | Debe conectar | Evidencia |
| --- | --- | --- |
| Evidence review | Intelligence dashboard -> review queue -> evidence register | Pack pendiente o decisión humana registrada |
| Transcript lineage | Scratch/manifiesto -> módulo candidato | Lineage o extracto revisado; no dump bruto |
| Dashboard sync | Roadmap -> course dashboard -> master traceability | Lanes, módulos y gates con nombres consistentes |
| Branch/module traceability | Módulo -> repo path -> rama/commit -> Engram -> vault | Fila completa antes de cerrar el bloque |

## Enlaces operativos

- Dashboard: [[COURSE-DASHBOARD]]
- Evidencia: [[EVIDENCE-REGISTER]]
- Health check: [[COURSE-HEALTH-CHECK]]
