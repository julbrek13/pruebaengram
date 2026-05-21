---
tags: [dashboard, course/gentle-ai, status/doing]
type: dashboard
---

# COURSE DASHBOARD

## Estado actual

| Área | Estado | Próxima acción | Nodo |
|---|---|---|---|
| Gentleman.Dots | #status/doing | Completar DOTS-0/DOTS-1 | [[DOTS-TRACKER]] |
| AGENTS.md | #status/doing | Completar AGENTS-0/AGENTS-1 | [[AGENTS-MD-TRACKER]] |
| Agent Harnesses | #status/todo | Completar AH-0 y mapear visibilidad/telemetry | [[AGENT-HARNESSES-TRACKER]] |
| Git en equipo | #status/todo | Retomar GE-3 con baseline limpio | [[GE-3-TRACKER]] |
| Engram | #status/doing | Mantener summaries y topic keys | [[engram-memory]] |
| SDD | #status/doing | Elegir modo por riesgo | [[sdd-operating-model]] |

## Rutina de inicio

- [ ] Verificar repo: `git status --short --branch`.
- [ ] Recuperar memoria: `mem_context`.
- [ ] Elegir modo: no-SDD / parcial-SDD / full-SDD.
- [ ] Abrir tracker activo.

## Rutina de cierre

- [ ] Registrar evidencia en [[EVIDENCE-REGISTER]].
- [ ] Guardar decisión/aprendizaje en Engram si aplica.
- [ ] Cerrar sesión con `mem_session_summary`.
- [ ] Actualizar estado de trackers.

## Vistas útiles del graph

- Por pilar: `tag:#pillar/dots OR tag:#pillar/git OR tag:#pillar/engram OR tag:#pillar/agent-harnesses`.
- Por estado: `tag:#status/doing`.
- Por evidencia: `tag:#evidence/repo OR tag:#evidence/engram`.
