---
tags: [concept, pillar/agent-harnesses, status/todo]
type: concept
---

# pi-plan-lock

## Idea central

`pi-plan-lock` enseña una cosa CRÍTICA: para planificar en serio no alcanza con decir “no edites”. El runtime debe poder **bloquear herramientas de ejecución**.

## Qué aporta

- modo plan con tools read-only;
- bloqueo de escritura/MCP según configuración;
- reglas anti-bypass;
- lock/unlock de sesión.

## Relación con SDD

No compite con SDD: plan mode controla ejecución; SDD estructura fases y decisiones.

## Enlaces

- [[sdd-operating-model]]
- [[sdd-flow-recovery]]
- [[AGENT-HARNESSES-TRACKER]]
