---
tags: [course/gentle-ai, intelligence-pipeline, review-queue]
type: dashboard
---

# INTELLIGENCE REVIEW QUEUE

Esta cola existe para que el usuario apruebe, rechace o pida más evidencia antes de integrar hallazgos a metadata general.

## Pendientes de decisión humana

| Evidence Pack | Fuente | Relevancia | Novedad | Riesgo | Acción humana |
| --- | --- | ---: | ---: | ---: | --- |
| _Sin packs todavía_ | - | - | - | - | - |

## Decisiones posibles

| Decisión | Significado |
| --- | --- |
| `approved` | Puede avanzar como candidato de metadata. |
| `rejected` | No se integra; conservar motivo si aporta aprendizaje. |
| `needs_more_evidence` | Falta cita, fuente, contexto o verificación. |
| `integrated` | Ya fue incorporado a metadata general con referencia al Evidence Pack. |

## Checklist de revisión

- [ ] ¿Hay fuente identificable?
- [ ] ¿Hay evidencia textual o artefacto auditable?
- [ ] ¿El resumen no inventa más allá de la evidencia?
- [ ] ¿La relevancia y novedad están justificadas?
- [ ] ¿Está claro el destino de metadata?
- [ ] ¿La decisión humana quedó registrada?
