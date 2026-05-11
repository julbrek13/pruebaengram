---
tags: [pillar/engram, concept, evidence/engram]
type: concept
---

# Engram Memory

Engram es memoria operacional persistente. Sirve para recuperar decisiones, aprendizajes, bugs, arquitectura y estado de sesiones.

## Enlaces

- Dashboard: [[COURSE-DASHBOARD]]
- Evidencia: [[EVIDENCE-REGISTER]]
- Proceso: [[SESSION-RUNBOOK]]

## Reglas

- Usar `mem_context` al inicio.
- Usar `mem_search` + `mem_get_observation` para temas pasados.
- Usar `mem_save` para decisiones o descubrimientos.
- Usar `mem_session_summary` al cierre.

## Anti-patrón

Si solo queda en chat, se pierde. Si queda en Engram con topic key, se recupera.
