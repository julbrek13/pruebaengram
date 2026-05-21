---
tags: [concept, pillar/agent-harnesses, status/todo]
type: concept
---

# metronous

## Rol en el curso

`metronous` representa la capa de **telemetry y calibración** del harness: sesiones, tool calls, costos, benchmarks, thresholds y recomendaciones de cambio de modelo.

## Qué enseña

- No decidir por sensación cuando se puede medir.
- Cada fase puede necesitar distinto perfil de modelo: razonamiento, escritura, aplicación o verificación.
- Las métricas necesitan umbrales y sample size; sin eso, la telemetry engaña.

## Relación con el ecosistema

- Concepto marco: [[agent-harnesses]].
- Práctica: AH-3 en [[AGENT-HARNESSES-TRACKER]].
- Decisiones recuperables: [[engram-memory]].
- Evidencia: [[MASTER-TRACEABILITY]] y [[EVIDENCE-REGISTER]].

## Límite importante

Telemetry mal definida no mejora decisiones: solo automatiza una mala intuición. Primero se define qué significa “bueno” para el curso.
