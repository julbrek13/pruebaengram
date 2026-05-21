---
tags: [automation, runbook]
type: runbook
---

# SESSION RUNBOOK

## Inicio de sesión

1. Abrir [[COURSE-DASHBOARD]].
2. Ejecutar `git status --short --branch`.
3. Ejecutar `mem_context`.
4. Elegir tracker activo.
5. Confirmar modo SDD según riesgo.

## Durante la sesión

1. Enlazar conceptos nuevos desde [[KNOWLEDGE-MAP]].
2. Registrar decisiones importantes en Engram.
3. Mantener prácticas conectadas a evidencia.
4. Evitar mezclar cambios no relacionados.
5. Si hay subagentes, registrar qué se observó en [[sub-agent-statusline]] y qué quedó como evidencia persistente.
6. Si hay telemetry, registrar qué métrica de [[metronous]] justifica la decisión y cuál es su límite.

## Cierre de sesión

1. Actualizar [[EVIDENCE-REGISTER]].
2. Ejecutar resumen Engram (`mem_session_summary`).
3. Revisar [[COURSE-HEALTH-CHECK]].
4. Dejar explícito el próximo paso en [[COURSE-DASHBOARD]].
