---
tags: [track, pillar/agent-harnesses, status/todo]
type: tracker
---

# Agent Harnesses Tracker

## Propósito

Seguir la integración de Agent Harnesses como disciplina operativa: gobernar, observar, medir y corregir agentes con evidencia.

## Módulos

| ID | Tema | Estado | Evidencia esperada |
|---|---|---|---|
| AH-0 | Fundamentos de harness | #status/todo | `course/agent-harnesses/foundation` |
| AH-1 | Pi / gentle-pi / gentle-engram | #status/todo | `course/agent-harnesses/pi-gentle-pi-gentle-engram` |
| AH-2 | Visibilidad con sub-agent-statusline | #status/todo | `course/agent-harnesses/subagent-visibility` |
| AH-3 | Telemetry/calibración con metronous | #status/todo | `course/agent-harnesses/telemetry-calibration` |
| AH-4 | Circuito cerrado harness completo | #status/todo | `course/agent-harnesses/closed-loop` |
| AH-5 | Conexión VPS orquestada | #status/todo | `course/vps-connection/foundation` |
| AH-5b | Engram Cloud en VPS | #status/todo | `course/engram-cloud-vps/foundation` |
| AH-6 | API Bridge / webhook mapper | #status/todo | `course/api-bridge/pattern` |

## Ruta de aprendizaje

1. [[agent-harnesses]] — entender el sistema completo antes de instalar herramientas.
2. [[sub-agent-statusline]] — observar delegaciones vivas y fallos de subagentes.
3. [[metronous]] — medir costo/calidad y calibrar decisiones.
4. [[vps-connection]] — llevar el harness a infraestructura real sin romper límites de seguridad.
5. [[engram-cloud-vps]] — montar memoria compartida sin mezclar contextos.
6. [[api-bridge-pattern]] — convertir integración de APIs en flow visual con contratos.
7. [[professional-criteria]] — defender decisiones técnicas con criterio y evidencia.
8. [[EVIDENCE-REGISTER]] — cerrar cada módulo con repo + Engram.

## Checklist docente

- [ ] Explicar modelo vs agente vs orquestador vs harness.
- [ ] Mapear el harness actual del curso: SDD + Engram + AGENTS.md + skills + Git.
- [ ] Responder “qué agrega Pi si ya uso Claude Code/OpenCode” con tradeoffs reales.
- [ ] Separar costo de runtime vs costo de inferencia (tokens/suscripciones).
- [ ] Inventariar `pi list` y clasificar cada package por problema que resuelve.
- [ ] Verificar `sdd-init` antes de exigir delegación `sdd-*`.
- [ ] Practicar recovery cuando el flujo SDD se rompe tras interacción del usuario.
- [ ] Explicar conexión VPS sin pedir secretos ni tocar producción sin runbook.
- [ ] Mapear deploy manual: repo → VPS → build → Nginx → dominio.
- [ ] Mapear Engram Cloud: orquestador → project → cloud → Postgres.
- [ ] Explicar online/offline/stopped sin destruir volúmenes.
- [ ] Explicar API Bridge como patrón: flow config → engine → mapper → webhook.
- [ ] Separar crítica técnica de preferencia tecnológica usando evidencia.
- [ ] Practicar delegación observable antes de automatizarla.
- [ ] Definir métricas antes de usar telemetry.
- [ ] Cerrar cada práctica con evidencia repo + Engram.

## Nodos relacionados

- [[sdd-operating-model]]
- [[engram-memory]]
- [[AGENTS-MD-TRACKER]]
- [[agent-harnesses]]
- [[sub-agent-statusline]]
- [[metronous]]
- [[pi-runtime]]
- [[gentle-pi]]
- [[pi-plan-lock]]
- [[sdd-flow-recovery]]
- [[vps-connection]]
- [[engram-cloud-vps]]
- [[api-bridge-pattern]]
- [[professional-criteria]]
- [[MASTER-TRACEABILITY]]
- [[EVIDENCE-REGISTER]]
- [[COURSE-DASHBOARD]]
