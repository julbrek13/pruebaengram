# Matriz de Trazabilidad del Curso (operativa)

Objetivo: que puedas auditar **cada cambio** de punta a punta sin adivinar.

---

## 1) Cómo se usa esta matriz

Para cada bloque de trabajo:

1. Definí el **tipo de cambio** (código, tests, docs, skill, SDD).
2. Verificá los **archivos esperados** a tocar.
3. Exigí su **evidencia de validación** (tests/reportes/memoria).
4. Registrá **commit sugerido** (checkpoint didáctico).
5. Confirmá que exista **consistencia** entre objetivo, diff y commit.

> Regla de oro: si un cambio no deja rastro en esta matriz, no está trazado.

---

## 2) Matriz base por tipo de cambio

| Tipo de cambio | Objetivo | Archivos esperados | Validación mínima | Evidencia Engram | Commit sugerido |
|---|---|---|---|---|---|
| Lógica productiva | Cambiar comportamiento funcional | `src/**` + tests relacionados en `tests/**` | `npm run test` verde en suites afectadas | `bugfix` o `decision` con What/Why/Where | `feat:` / `fix:` según impacto |
| Testing (nuevas pruebas o refactor) | Mejorar cobertura/claridad de pruebas | `tests/**` (y `src/**` solo si el diseño lo exige) | tests nuevos pasan + no rompen suites previas | `pattern` (estrategia de test) | `test:` checkpoint por concepto |
| Documentación operativa | Alinear proceso y criterios | `docs/**`, `README.md` (si aplica) | revisión de coherencia con flujo real del repo | `decision` o `pattern` | `docs:` |
| Skills / metodología de agente | Cambiar forma de enseñar u operar | `.agent/skills/**`, `.atl/skill-registry.md` | trigger + reglas claras + consistencia con curso | `preference` / `pattern` | `docs(skill):` o `chore(skill):` |
| Flujo SDD de cambio complejo | Trazabilidad formal por fases | artifacts en Engram + snapshot opcional en `sdd/**` | verify sin CRITICAL + estado recuperable | `sdd/<change>/...` (topic keys canónicas) | commits por fase o por bloque aprobado |

---

## 3) Trazabilidad por lane y módulo

| Lane | Módulos / bloques | Repo paths | Rama o commit evidence | Engram topic keys | Obsidian nodes |
|---|---|---|---|---|---|
| Foundations | TP-1, TP-2, TP-3 tests, CP-0 | `src/**`, `tests/**`, `docs/PROFESSIONAL_CRITERIA_COURSE_INTEGRATION.md` | Rama `tech/tp-*` o commit `test:`/`docs:` por bloque | `course/testing/*`, `course/professional-criteria/technical-critique` | Trackers de práctica y START-HERE |
| SDD+Engram | EN-1 a EN-4, recovery, topic keys | `docs/ENGRAM_RECOVERY_RUNBOOK.md`, `docs/ENGRAM_CONTEXT_MAP.md`, `openspec/changes/**` | Commits por fase o por work unit SDD | `course/engram/*`, `sdd/<change>/*` | Dashboards derivados y trackers Engram |
| Git+Review | GE-1 a GE-3 | `.github/pull_request_template.md`, `docs/MATRIZ_TRAZABILIDAD_CURSO.md`, policy docs | Rama `tech/tp-3-flujo-ramas`, PRs y commits convencionales | `course/git/*`, `sdd/ge-3-caso-real/*` | Master traceability y review notes |
| Agent Harnesses | AGENTS, DOTS, CodeGraph, Hermes, telemetry | `AGENTS.md`, `.agent/skills/**`, `.atl/**`, docs de integración | Commits `docs:`/`chore(skill):` separados por harness | `course/agents-md/*`, `course/agent-harnesses/*`, `course/dots/*`, `course/codegraph/*`, `course/hermes*` | Trackers AGENTS/DOTS/Harnesses |
| Research+Evidence Governance | Evidence Packs, review queue, transcript lineage | `docs/intelligence-pipeline/**`, evidence indexes | Sólo después de review humana explícita | `course/evidence/*`, `course/transcripts/*`, `course/intelligence/*` | Intelligence dashboard y evidence register |
| Transfer+Infrastructure | Qontera, VPS, Engram Cloud, API Bridge | `docs/VPS_*`, `docs/API_BRIDGE_*`, repo handoff docs | Ramas por repo dueño; no mezclar infraestructura con curso local | `course/qontera/*`, `course/vps-connection/*`, `course/engram-cloud-vps/*`, `course/api-bridge/*` | Master traceability y runbooks |

> Regla: si un lane usa evidencia pendiente, la matriz debe decir “pendiente” y no convertirla en contenido aprobado.

---

## 4) Matriz aplicada al repo actual (ejemplos reales)

| Caso del curso | Qué debería tocar | Qué NO debería tocar | Cómo se valida |
|---|---|---|---|
| TP-1 string utils | `src/string-utils.ts`, `tests/string-utils.test.ts` | `sdd/**` (innecesario para no-SDD) | tests unit verdes + commit atómico |
| TP-2 fixtures/helpers | `tests/fixtures.ts`, tests que reutilizan helpers | lógica de negocio no relacionada | menos duplicación + suite verde |
| TP-3 edge cases | `tests/edge-cases.test.ts` (y solo `src/**` si aparece bug real) | cambios cosméticos fuera del alcance | casos borde justificados por riesgo |
| TP-4 integración/errores | `tests/integration.test.ts`, `tests/errors.test.ts`, `tests/mocks.test.ts`, soporte en `src/lib/**` | cambios fuera de flujo async/notificación | verify SDD + evidencia de escenarios |
| Ajuste de metodología del curso | `.agent/skills/**`, `.atl/skill-registry.md`, `docs/**` | `src/**` (si no cambia funcionalidad) | trigger claro + guía consistente |

---

## 5) Checklist de trazabilidad por PR/commit

- [ ] El objetivo del cambio está escrito en 1-2 frases.
- [ ] El diff coincide con la fila de matriz elegida.
- [ ] Hay validación mínima ejecutada (tests o revisión documental según tipo).
- [ ] El mensaje de commit explica **por qué** (no solo qué).
- [ ] Se guardó memoria útil en Engram (`mem_save`) si hubo decisión/hallazgo.
- [ ] El reporte al usuario está separado en dos canales: **repo** vs **Engram**.
- [ ] Si el cambio mezcla documentación y operación sin mismo objetivo, se separa en commits distintos.
- [ ] Si el bloque conceptual crece demasiado, se corta en 2 checkpoints en vez de forzar 1 commit grande.
- [ ] Si el cambio toca lanes/módulos/gates, queda mapeado a repo paths, rama/commit, Engram y nodo Obsidian.
- [ ] Si hay Evidence Packs o transcripts, quedan como input pendiente salvo aprobación humana explícita.

---

## 6) Heurísticas de corte para commits del curso

Usar estas reglas para decidir si un bloque va en **1 commit** o en **2+ commits**:

| Situación | Decisión recomendada | Motivo |
|---|---|---|
| Un solo objetivo y mismos archivos/razón | 1 commit | Mantiene historia simple |
| Documentación + cambio operativo con objetivos distintos | 2 commits | Evita mensajes ambiguos |
| Un TP trae dos conceptos enseñables distintos | 2 checkpoints | Mejora revisión comparativa |
| Hay cleanup técnico sin valor didáctico central | commit separado `chore:` | No contaminar el concepto principal |
| Snapshot/local cache/tooling auxiliar | ignorar o aislar | Reduce ruido en Git |

> Regla práctica: si el mensaje del commit necesita una “y” que une objetivos distintos, probablemente tenés que partirlo.

---

## 7) Protocolo cuando repo y Engram difieren

Aplicar siempre en este orden:

1. Declarar el conflicto explícitamente (`repo: X` / `Engram: Y`).
2. Resolver fuente de verdad por tipo:
   - **Artefactos SDD/decisiones:** Engram manda.
   - **Contenido de archivos versionados:** repo Git manda.
   - **Tablas de progreso en docs:** son derivadas y deben corregirse.
3. Dejar evidencia concreta (hash de commit + observation id) en el reporte.

> Sin evidencia dual (repo + memoria), el estado queda en 🟡 como “no concluyente”.

---

## 8) Formato obligatorio de reporte (consigna asentada)

Desde este punto, todo avance del curso se reporta SIEMPRE con esta estructura:

```md
## Cambios en archivos (repo)
- [ruta] — [qué cambió + por qué]

## Cambios en Engram (memoria)
- [id/título/topic_key] — [qué se guardó + por qué]

## Estado de trazabilidad
- [🟢/🟡/🔴] [justificación breve]
```

Si no hubo cambios en alguno de los canales, debe declararse explícitamente:

- `Cambios en archivos (repo): ninguno`
- `Cambios en Engram (memoria): ninguno`

---

## 9) Plantilla rápida para cada nuevo bloque

```md
### Bloque
- Lane:
- Tipo de cambio:
- Objetivo:
- Archivos esperados:
- Validación mínima:
- Topic key/memoria:
- Nodo Obsidian:
- Commit sugerido:
```

---

## 10) Criterio de calidad (tu semáforo)

- 🟢 **Excelente**: objetivo claro, diff acotado, validación completa, commit auditables, memoria guardada.
- 🟡 **Aceptable**: funciona, pero falta una pieza de trazabilidad (ej. memoria o justificación de commit).
- 🔴 **Débil**: cambios mezclados, sin validación o sin relación con objetivo.

Si queda en amarillo o rojo, se corrige **antes** de avanzar al siguiente bloque del curso.

---

## 11) GE-3 — Política operativa (policy-as-code)

### Criterios de apertura
- Rama inicia en convención GE-3: `tech/tp-N-<tema>` o `docs/tp-N-<tema>`.
- Existe contrato de PR en `.github/pull_request_template.md`.
- Se declara trazabilidad dual objetivo: repo + Engram.

### Criterios de cierre
- `npm run verify:ge3` ejecuta con salida exitosa (`exit 0`).
- PR incluye evidencia de verify y checklist GE-3 completo.
- Engram registra progreso/cierre del cambio en topics `sdd/ge-3-caso-real/*`.

### Evidencia obligatoria por canal
| Canal | Evidencia mínima |
|---|---|
| Repo | Ruta de archivos cambiados + referencia de rama + salida de `verify:ge3` |
| Engram | `topic_key` y/o observation ids para spec/design/tasks/apply/verify/archive |
