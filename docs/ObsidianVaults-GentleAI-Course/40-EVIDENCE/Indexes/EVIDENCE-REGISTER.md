---
tags: [evidence, traceability]
type: evidence-register
---

# EVIDENCE REGISTER

## Cómo registrar evidencia

Cada evidencia debe incluir:

- Fecha.
- Bloque del curso.
- Ruta del repo o commit/PR.
- Topic key o ID de Engram.
- Nodo del vault que explica el aprendizaje.
- Resultado verificable.

## Reglas de integración aprobada

- Este registro lista evidencia aprobada o pendiente del curso; no convierte Evidence Packs pendientes en verdad curricular.
- Un Evidence Pack con `pending_human_review` sólo puede aparecer como input de review, no como resultado aprobado.
- La evidencia aprobada debe incluir el ID del pack, la decisión humana y la ruta donde se integró.
- Las transcripciones se registran por lineage, manifiesto o extracto revisado; no se copian dumps brutos al curso.

## Estados permitidos

| Estado | Significado | Puede integrarse al curso |
|---|---|---|
| Pendiente | Falta revisión humana o verificación suficiente | No |
| Aprobada | Decisión humana registrada y evidencia auditable | Sí, con referencia al pack o lineage |
| Rechazada | No cumple criterios o queda fuera de alcance | No |
| Necesita más evidencia | Requiere fuente, quote o revisión adicional | No |

## Evidencias pendientes

| Fecha | Bloque | Repo | Engram | Vault | Resultado |
|---|---|---|---|---|---|
| — | DOTS-0 | `docs/GENTLEMAN_DOTS_LEARNING_PATH.md` | `course/dots/foundation` | [[DOTS-TRACKER]] | Pendiente |
| — | DOTS-1 | `docs/GENTLEMAN_DOTS_LEARNING_PATH.md` | `course/dots/shell` | [[DOTS-TRACKER]] | Pendiente |
| — | AGENTS-0 | `AGENTS.md` | `course/agents-md/foundation` | [[AGENTS-MD-TRACKER]] | Pendiente |
| — | AGENTS-1 | `AGENTS.md` + PR template | `course/agents-md/audit` | [[AGENTS-MD-TRACKER]] | Pendiente |
| — | AH-0 | `docs/AGENT_HARNESSES_COURSE_INTEGRATION.md` | `course/agent-harnesses/foundation` | [[AGENT-HARNESSES-TRACKER]], [[agent-harnesses]] | Pendiente |
| — | AH-1 | `docs/AGENT_HARNESSES_COURSE_INTEGRATION.md` | `course/agent-harnesses/pi-gentle-pi-gentle-engram` | [[AGENT-HARNESSES-TRACKER]], [[agent-harnesses]] | Pendiente |
| — | AH-2 | `docs/AGENT_HARNESSES_COURSE_INTEGRATION.md` | `course/agent-harnesses/subagent-visibility` | [[AGENT-HARNESSES-TRACKER]], [[sub-agent-statusline]] | Pendiente |
| — | AH-3 | `docs/AGENT_HARNESSES_COURSE_INTEGRATION.md` | `course/agent-harnesses/telemetry-calibration` | [[AGENT-HARNESSES-TRACKER]], [[metronous]] | Pendiente |
| — | AH-4 | `docs/AGENT_HARNESSES_COURSE_INTEGRATION.md` | `course/agent-harnesses/closed-loop` | [[AGENT-HARNESSES-TRACKER]], [[agent-harnesses]] | Pendiente |
| — | AH-5 | `docs/VPS_CONNECTION_COURSE_INTEGRATION.md` | `course/vps-connection/foundation` | [[AGENT-HARNESSES-TRACKER]], [[vps-connection]] | Pendiente |
| — | AH-5b | `docs/VPS_ENGRAM_CLOUD_COURSE_RUNBOOK.md` | `course/engram-cloud-vps/foundation` | [[AGENT-HARNESSES-TRACKER]], [[engram-cloud-vps]] | Pendiente |
| — | AH-6 | `docs/API_BRIDGE_COURSE_INTEGRATION.md` | `course/api-bridge/pattern` | [[AGENT-HARNESSES-TRACKER]], [[api-bridge-pattern]] | Pendiente |
| — | CP-0 | `docs/PROFESSIONAL_CRITERIA_COURSE_INTEGRATION.md` | `course/professional-criteria/technical-critique` | [[professional-criteria]] | Pendiente |
| — | GE-3 | pendiente | `sdd/ge-3-caso-real/*` | [[GE-3-TRACKER]] | Pendiente |

## Anti-patrón

“Lo vi en clase” no es evidencia. Evidencia es algo recuperable y verificable.
