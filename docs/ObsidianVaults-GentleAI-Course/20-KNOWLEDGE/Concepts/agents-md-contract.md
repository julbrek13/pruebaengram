---
tags: [concept, agents-md, course/gentle-ai, status/doing]
type: concept
---

# AGENTS.md como contrato operativo

AGENTS.md es el punto de entrada para agentes de código: un README para IA que declara contexto, restricciones, comandos válidos y reglas de colaboración.

## Conecta con

- Guía repo: `docs/AGENTS_MD_COURSE_INTEGRATION.md`
- Práctica: [[AGENTS-MD-TRACKER]]
- SDD: [[sdd-operating-model]]
- Git/PR: [[git-teamwork]]
- Memoria: [[engram-memory]]

## Problema que resuelve

Sin un contrato estable, cada agente depende del prompt de la sesión. Eso produce drift: comandos incorrectos, verificaciones inconsistentes, commits mezclados o falta de trazabilidad.

## Preguntas de dominio

- ¿Puedo explicar qué va en `AGENTS.md` y qué va en una skill?
- ¿El agente sabe qué no puede hacer sin preguntarme?
- ¿Las reglas de testing, PR y memoria son recuperables desde el repo?

## Evidencia esperada

- `AGENTS.md` raíz creado y alineado al curso.
- Engram `course/agents-md/foundation`.
- Tracker [[AGENTS-MD-TRACKER]] actualizado.
