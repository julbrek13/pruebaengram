---
tags: [concept, pillar/agent-harnesses, status/todo]
type: concept
---

# SDD Flow Recovery

## Problema

A veces el flujo SDD se rompe cuando el usuario interactúa a mitad de fase: el agente pierde contexto o delega a workers genéricos.

## Recovery ritual

1. Reafirmar fase actual (proposal/spec/design/tasks/apply/verify/archive).
2. Confirmar que `sdd-init` esté resuelto.
3. Verificar artefacto fuente y siguiente salida esperada.
4. Forzar delegación a `sdd-*` o explicitar por qué no se puede.
5. Guardar evidencia en Engram + tracker.

## Regla

Si está en SDD, la delegación debe ser auditable. Si no, hay que pausar y corregir, no improvisar.

## Enlaces

- [[sdd-operating-model]]
- [[AGENT-HARNESSES-TRACKER]]
- [[MASTER-TRACEABILITY]]
