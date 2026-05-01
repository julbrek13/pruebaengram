# Plan de Mini-Proyectos: 3 Pilares + 3 Modos SDD

Plan práctico para dominar **Tests**, **Engram** y **Git en equipo** con criterio operativo real.

---

## Reglas del plan

1. Cada mini-proyecto declara modo: **no-SDD**, **parcial-SDD** o **full-SDD**.
2. Toda decisión no-obvia se guarda en Engram (`mem_save`).
3. Todo cierre de sesión termina con `mem_session_summary`.
4. 1 objetivo = 1 commit atómico.

---

## Cómo elegir el modo en cada mini-proyecto

| Condición | Modo |
|---|---|
| Cambio mecánico, bajo riesgo, 1 archivo | no-SDD |
| 2-4 archivos y decisiones acotadas | parcial-SDD |
| Arquitectura, múltiples capas, riesgo alto | full-SDD |

---

## PILAR 1 — TESTS

### TP-1: TDD desde cero
- **Modo:** no-SDD
- **Objetivo:** practicar loop red → green → refactor
- **Archivos:** `src/string-utils.ts`, `tests/string-utils.test.ts`
- **Checklist:**
  - [ ] `capitalize(str)`
  - [ ] `reverse(str)`
  - [ ] `isPalindrome(str)`
- **Evidencia:** tests verdes + commit `test:`

### TP-2: Fixtures y helpers
- **Modo:** parcial-SDD
- **Pipeline:** `/sdd-explore` → `/sdd-propose` → `/sdd-apply` → `/sdd-verify`
- **Archivos:** `tests/fixtures.ts` + refactor tests actuales
- **Checklist:**
  - [x] fixture de usuario mock
  - [ ] helper de setup/teardown
  - [ ] refactor de test repetitivo

### TP-3: Edge cases con criterio
- **Modo:** parcial-SDD
- **Archivo:** `tests/edge-cases.test.ts`
- **Nota de naming:** este TP-3 es de **tests**. No confundir con el bloque metodológico transversal “TP-3 flujo de ramas”.
- **Checklist:**
  - [ ] vacío
  - [ ] null/undefined
  - [ ] límites numéricos
  - [ ] caracteres especiales
- **Consigna:** cada caso edge debe justificar un riesgo real.

### TP-4: Integración + manejo de errores
- **Modo:** full-SDD
- **Pipeline completo:** `explore → propose → spec → design → tasks → apply → verify → archive` *(con `sdd-init` ya resuelto para el proyecto)*
- **Archivos sugeridos:** `tests/integration.test.ts`, `tests/errors.test.ts`, módulos de soporte
- **Checklist:**
  - [x] test de integración entre módulos
  - [x] cobertura de rutas de error
  - [x] evidencia de verify y archive

---

## PILAR 2 — ENGRAM

### EN-1: mem_save operativo
- **Modo:** no-SDD
- **Objetivo:** guardar decisiones en caliente
- **Checklist:**
  - [x] 3 observaciones con formato What/Why/Where
  - [x] verificación de recuperación en `mem_context`

### EN-2: Recovery runbook
- **Modo:** parcial-SDD
- **Objetivo:** recuperar contexto en forma determinística
- **Rama técnica objetivo:** `tech/en-2-recovery-runbook`
- **Checklist:**
  - [x] ejecutar `mem_context`
  - [x] refinar con `mem_search`
  - [x] abrir detalle con `mem_get_observation`
  - [x] documentar protocolo determinístico en `docs/ENGRAM_RECOVERY_RUNBOOK.md`
  - [x] explicitar regla de conflicto repo vs Engram

### EN-3: Topic keys evolutivos
- **Modo:** parcial-SDD
- **Objetivo:** mantener continuidad de decisiones
- **Checklist:**
  - [ ] elegir 2 decisiones evolutivas
  - [ ] reutilizar mismo `topic_key`
  - [ ] validar agrupación por búsqueda

### EN-4: Artefactos SDD en Engram
- **Modo:** full-SDD
- **Objetivo:** conectar cada fase SDD con su topic_key
- **Checklist:**
  - [x] proposal/spec/design/tasks persistidos
  - [x] apply-progress actualizado
  - [x] verify y archive guardados

---

## PILAR 3 — GIT EN EQUIPO

### GE-1: Commits atómicos y claros
- **Modo:** no-SDD
- **Checklist:**
  - [x] 5 commits con conventional commits correctos
  - [x] mensaje con qué + por qué
  - [x] working tree limpio antes de pasar a parcial-SDD
  - [x] política definida para snapshots locales (`sdd/` ignorado; Engram manda)

### GE-2: PR efectivo
- **Modo:** parcial-SDD
- **Checklist:**
  - [x] PR con Summary / Why / How to test
  - [x] resolver al menos 1 feedback

### GE-3: Caso real punta a punta
- **Modo:** full-SDD
- **Checklist:**
  - [ ] branch con cambio complejo
  - [ ] evidencia de pipeline SDD completo
  - [ ] merge con historial entendible

---

## 📊 Registro de progreso

| ID | Pilar | Modo | Estado | Fecha evidencia | Evidencia |
|----|-------|------|--------|----------------|-----------|
| BASE-0 | Curso | no-SDD | ✅ | 2026-04-07 | commit `2b85dc7` |
| TP-1 (tests) | Tests | no-SDD | 🔲 | — | sin evidencia verificable en repo/memoria |
| EN-1 | Engram | no-SDD | ✅ | 2026-04-07 | commit `dea9150`, commit `c361377` |
| GE-1 | Git | no-SDD | ✅ | 2026-04-13 | commit `46587d1` |
| TP-2 (fixtures/helpers) | Tests | parcial-SDD | 🟡 | 2026-04-13 | commit `9a98f3c` (fixture mínimo verificado) |
| TP-3 flujo de ramas (metodológico) | Curso transversal | parcial-SDD | ✅ | 2026-04-14 | commit `eae7cf3` + memoria `#224` |
| EN-2 | Engram | parcial-SDD | ✅ | 2026-04-15 | runbook `docs/ENGRAM_RECOVERY_RUNBOOK.md` |
| GE-2 | Git | parcial-SDD | ✅ | 2026-05-01 | PR `#1` mergeado (`a7069b6`) con body efectivo y feedback resuelto |
| TP-4 (integración/errores) | Tests | full-SDD | ✅ | 2026-04-10 | commit `27daf9f` + memoria `#205/#208` (archive) |
| EN-4 | Engram | full-SDD | ✅ | 2026-04-10 | memoria `#205` (`archive-report`) |
| GE-3 | Git | full-SDD | 🔲 | — | pendiente |

---

## Ruta recomendada

1. no-SDD: TP-1 → EN-1 → GE-1
2. parcial-SDD: TP-2 → EN-2 → GE-2
3. full-SDD: TP-4 → EN-4 → GE-3

### Siguiente bloque técnico sugerido

- `GE-3` (caso real punta a punta): practicar un cambio complejo con pipeline SDD completo y merge con historial entendible.

Si no podés justificar el modo elegido, frená y redefiní alcance.
