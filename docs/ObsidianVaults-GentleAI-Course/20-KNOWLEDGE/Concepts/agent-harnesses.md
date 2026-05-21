---
tags: [concept, pillar/agent-harnesses, status/todo]
type: concept
---

# Agent Harnesses

## Idea central

Un **Agent Harness** es el sistema que contiene al agente: interfaz, contrato, planificación, memoria, delegación, visibilidad, medición y cierre con evidencia.

El punto docente es simple: el modelo no alcanza. Sin harness hay actividad; con harness hay decisiones recuperables, evidencias y mejora continua.

## Capas del curso

| Capa | En el curso | Nodo relacionado |
|---|---|---|
| Interfaz | OpenCode, terminal, Gentleman.Dots | [[gentleman-dots-workshop]] |
| Contrato | `AGENTS.md`, skills, PR template | [[agents-md-contract]] |
| Planificación | SDD por riesgo | [[sdd-operating-model]] |
| Memoria | Engram, topic keys, summaries | [[engram-memory]] |
| Delegación | Orquestador + subagentes | [[AGENT-HARNESSES-TRACKER]] |
| Visibilidad | Estado vivo de subagentes | [[sub-agent-statusline]] |
| Medición | Costos, sesiones, thresholds | [[metronous]] |
| Cierre | Git, verify, PR, Engram | [[EVIDENCE-REGISTER]] |

## Prácticas

- AH-0: explicar modelo vs agente vs orquestador vs harness.
- AH-1: mapear Pi / gentle-pi / gentle-engram como madurez incremental.
- AH-2: practicar delegación observable con [[sub-agent-statusline]].
- AH-3: practicar calibración con [[metronous]].
- AH-4: cerrar un cambio con decisión, delegación, medición, memoria y evidencia.

## Evidencia esperada

- Repo: `docs/AGENT_HARNESSES_COURSE_INTEGRATION.md`.
- Engram: `course/agent-harnesses/*`.
- Vault: [[AGENT-HARNESSES-TRACKER]] + [[MASTER-TRACEABILITY]] + [[EVIDENCE-REGISTER]].

## Anti-patrón

Instalar herramientas antes de entender el dolor operacional. Herramienta sin criterio es decoración; harness con evidencia es disciplina profesional.
