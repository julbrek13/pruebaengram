---
tags: [dashboard, course/gentle-ai, status/doing]
type: dashboard
---

# COURSE DASHBOARD

## Foco actual

| Campo | Valor |
|---|---|
| Lane activa | Foundations |
| Módulo activo | DOTS-0 / DOTS-1 antes de escalar a Agent Harnesses |
| Gate actual | Branch/module traceability + dashboard sync |
| Próxima acción del learner | Completar base de entorno y registrar evidencia repo + Engram |
| Fuente canónica | `docs/MINI_PROJECTS_PLAN.md` |

## Lanes del curso

| Lane | Estado | Próxima acción | Gate visible | Nodo |
|---|---|---|---|---|
| Foundations | #status/doing | Completar DOTS-0, DOTS-1, AGENTS-0, AH-0 y CP-0 antes de automatizar más | Revisión documental o tests enfocados + reporte repo/Engram | [[DOTS-TRACKER]], [[AGENTS-MD-TRACKER]], [[professional-criteria]] |
| SDD+Engram | #status/doing | Mantener proposal/spec/design/tasks/apply-progress recuperables | Artefactos SDD y topic keys estables | [[engram-memory]], [[sdd-operating-model]] |
| Git+Review | #status/todo | Retomar GE-3 con diff acotado y evidencia verificable | Rama/commit/PR trazable + review budget | [[GE-3-TRACKER]] |
| Agent Harnesses | #status/todo | Completar AH-0 y mapear visibilidad, sandbox y telemetry | Harness con límites, evidencia y rollback | [[AGENT-HARNESSES-TRACKER]], [[agent-harnesses]] |
| Research+Evidence Governance | #status/todo | Revisar cola de inteligencia sin integrar packs pendientes | Evidence Packs siguen `pending_human_review` hasta aprobación explícita | [[INTELLIGENCE-DASHBOARD]], [[INTELLIGENCE-REVIEW-QUEUE]] |
| Transfer+Infrastructure | #status/todo | Preparar transferencia Qontera/VPS sólo con runbook y sin secretos | Fronteras por repo/servicio y no producción | [[vps-connection]], [[engram-cloud-vps]], [[api-bridge-pattern]] |

## Gates transversales

| Gate | Cuándo se revisa | Evidencia mínima |
|---|---|---|
| Evidence review | Un módulo usa packs, papers, transcripts o inteligencia acumulada | Estado pendiente preservado o aprobación humana explícita |
| Transcript lineage | Un módulo toma ideas de transcripciones o scratch externo | Referencia a manifiesto/lineage; no dumps brutos |
| Dashboard sync | Cambian navegación, lane, módulo o gate visible | Este dashboard, [[INTELLIGENCE-DASHBOARD]] y [[MASTER-TRACEABILITY]] quedan alineados |
| Branch/module traceability | Se abre o cierra un TP, lane o work unit | Rama o commit, rutas repo, topic key Engram y nodo Obsidian asociado |

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
- Por inteligencia: abrir [[INTELLIGENCE-DASHBOARD]] antes de usar cualquier Evidence Pack como input del curso.
