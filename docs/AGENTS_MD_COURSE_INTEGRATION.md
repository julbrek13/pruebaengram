# AGENTS.md en la curva de aprendizaje

Guía para integrar **AGENTS.md** como contrato operativo de agentes dentro del curso **GentleAI + SDD Orchestrator + Engram + Git + Gentleman.Dots**.

## 1) Qué es AGENTS.md

Según `https://github.com/agentsmd/agents.md`, **AGENTS.md** es un formato simple y abierto para guiar agentes de código.

La idea central: así como `README.md` orienta humanos, `AGENTS.md` orienta agentes. Define un lugar predecible para contexto, instrucciones, comandos, testing y reglas de PR.

## 2) Por qué faltaba en la arquitectura

La estructura previa cubría:

- entorno: Gentleman.Dots;
- método: SDD;
- memoria: Engram;
- seguimiento visual: Obsidian;
- colaboración: Git/PR.

Pero faltaba una pieza crítica: **el contrato estable que leen los agentes al entrar al repo**.

Sin `AGENTS.md`, cada sesión depende demasiado del prompt actual, de memoria externa o de skills dispersas. Eso rompe una idea central del curso: el sistema tiene que ser recuperable sin explicación oral.

## 3) Responsabilidad dentro del sistema

| Capa | Herramienta | Responsabilidad |
|---|---|---|
| Entrada humana | `README.md` | Explica propósito, rutas y modelo mental a personas |
| Entrada de agentes | `AGENTS.md` | Explica restricciones, comandos y contrato operativo a agentes |
| Memoria persistente | Engram | Guarda decisiones, aprendizajes y estado recuperable |
| Ejecución estructurada | SDD | Controla cambios por riesgo y fases |
| Seguimiento visual | Obsidian | Conecta conceptos, prácticas y evidencia |
| Entorno profesional | Gentleman.Dots | Da editor, shell, terminal y workspace |

## 4) Qué debe contener en este repo

El `AGENTS.md` raíz debe definir:

- propósito del repo;
- restricciones no negociables;
- política de memoria y trazabilidad;
- selección de modo SDD;
- comandos de verificación permitidos;
- reglas de PR;
- rutas de lectura inicial.

## 5) Qué NO debe contener

- Secretos, tokens o credenciales.
- Explicaciones largas que pertenecen a docs del curso.
- Estado temporal de una sesión.
- Reglas contradictorias con `docs/SDD_ENGRAM_OPERATING_MODEL.md` o con Engram.
- Preferencias personales no verificadas.

## 6) Práctica del curso

### AGENTS-0 — Entender el contrato

- **Modo:** no-SDD
- **Objetivo:** explicar en 2 frases para qué sirve `AGENTS.md`.
- **Evidencia:** nota Engram `course/agents-md/foundation`.

### AGENTS-1 — Auditar instrucciones del repo

- **Modo:** parcial-SDD
- **Objetivo:** verificar que `AGENTS.md`, README, SDD docs y PR template no se contradigan.
- **Evidencia:** checklist en Obsidian + Engram `course/agents-md/audit`.

### AGENTS-2 — Convertir repetición en contrato

- **Modo:** parcial-SDD o full-SDD según impacto
- **Objetivo:** cuando una regla se repite en varias sesiones, decidir si va a `AGENTS.md`, skill local, docs o Engram.
- **Evidencia:** decisión con tradeoffs en Engram.

## 7) Regla de decisión

| Necesidad | Lugar correcto |
|---|---|
| Instrucción estable para cualquier agente que entre al repo | `AGENTS.md` |
| Procedimiento reutilizable ejecutable por agentes | `.agent/skills/` |
| Estado histórico, decisión o aprendizaje | Engram |
| Explicación pedagógica extensa | `docs/` |
| Seguimiento visual / grafo conceptual | Obsidian vault |

## 8) Regla de oro

`AGENTS.md` no reemplaza al criterio humano. Reduce ambigüedad operativa para que el agente no improvise las reglas básicas del proyecto.
