# README STRUCTURE — GentleAI Course Vault

Vault de Obsidian para seguir el curso **GentleAI + SDD Orchestrator + Engram + Git + Gentleman.Dots** con navegación nodal, evidencia y recuperación de contexto.

## Objetivo

- Convertir el curso en un grafo navegable: conceptos, prácticas, evidencias y automatización.
- Evitar notas sueltas sin trazabilidad.
- Separar aprendizaje conceptual, ejecución práctica y prueba de avance.

## Capas y responsabilidad

- `00-HQ/`: gobierno del curso, dashboards, decisiones y punto de entrada.
- `20-KNOWLEDGE/`: conceptos atómicos reutilizables.
- `30-PRACTICE/`: tracks, ejercicios, mini-proyectos y checklists.
- `40-EVIDENCE/`: evidencias, retrospectivas, commits, PRs y memorias Engram.
- `90-AUTOMATION/`: runbooks, checks de salud y protocolos repetibles.

## Reglas de escala

1. Todo concepto estable vive en `20-KNOWLEDGE/Concepts/` y enlaza al menos una práctica.
2. Toda práctica vive en `30-PRACTICE/` y enlaza evidencia.
3. Toda evidencia vive en `40-EVIDENCE/` y referencia repo + Engram cuando aplique.
4. Todo proceso repetible se promueve a `90-AUTOMATION/`.
5. Los dashboards de `00-HQ/` son la puerta de entrada; si no enlazan algo importante, ese algo queda invisible.

## Uso del graph de Obsidian

Tags recomendados:

- `#status/todo`, `#status/doing`, `#status/done`
- `#mode/no-sdd`, `#mode/partial-sdd`, `#mode/full-sdd`
- `#pillar/tests`, `#pillar/engram`, `#pillar/git`, `#pillar/dots`
- `#evidence/repo`, `#evidence/engram`, `#evidence/pr`

La regla es simple: el grafo tiene que mostrar relaciones reales, no decoración. Si una nota no tiene enlaces de entrada ni salida, probablemente no está integrada al aprendizaje.
