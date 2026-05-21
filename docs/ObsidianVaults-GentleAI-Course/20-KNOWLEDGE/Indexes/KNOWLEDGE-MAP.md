---
tags: [knowledge-map, course/gentle-ai]
type: index
---

# KNOWLEDGE MAP

## Núcleo conceptual

- [[gentleman-dots-workshop]]: el taller profesional.
- [[engram-memory]]: memoria persistente y recuperación.
- [[sdd-operating-model]]: proceso según riesgo.
- [[git-teamwork]]: colaboración verificable.
- [[agents-md-contract]]: contrato operativo para agentes.
- [[agent-harnesses]]: sistema que gobierna, observa, mide y cierra el trabajo con agentes.
- [[pi-runtime]]: runtime mínimo y componible para operar agentes.
- [[gentle-pi]]: capa disciplinada de packages/workflows sobre Pi.
- [[sub-agent-statusline]]: visibilidad viva de subagentes durante delegaciones.
- [[metronous]]: telemetry/calibración para decidir con datos.
- [[pi-plan-lock]]: guardrail de plan mode para bloquear ejecución durante exploración.
- [[sdd-flow-recovery]]: recuperación de continuidad cuando SDD se desordena.
- [[vps-connection]]: conexión a infraestructura real con SSH, deploy, Nginx y Engram Cloud.
- [[engram-cloud-vps]]: montaje de Engram Cloud en VPS con espacios por orquestador.
- [[api-bridge-pattern]]: integración visual de APIs, mapper y webhook output.
- [[professional-criteria]]: criterio técnico, comunicación y decisiones profesionales.

## Relaciones clave

```text
gentleman-dots-workshop -> agents-md-contract -> agent-harnesses -> sdd-operating-model -> git-teamwork
              |                         |                  |                    |
              v                         v                  v                    v
        engram-memory ------------> evidence-register <--- metronous <--- sub-agent-statusline
                                              ^
                                              |
                                     pi-runtime -> gentle-pi -> pi-plan-lock
```

## Cómo usar este mapa

No estudies archivos aislados. Elegí un concepto, conectalo con una práctica y cerralo con evidencia.
