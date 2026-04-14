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
  - [ ] fixture de usuario mock
  - [ ] helper de setup/teardown
  - [ ] refactor de test repetitivo

### TP-3: Edge cases con criterio
- **Modo:** parcial-SDD
- **Archivo:** `tests/edge-cases.test.ts`
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
  - [ ] test de integración entre módulos
  - [ ] cobertura de rutas de error
  - [ ] evidencia de verify y archive

---

## PILAR 2 — ENGRAM

### EN-1: mem_save operativo
- **Modo:** no-SDD
- **Objetivo:** guardar decisiones en caliente
- **Checklist:**
  - [ ] 3 observaciones con formato What/Why/Where
  - [ ] verificación de recuperación en `mem_context`

### EN-2: Recovery runbook
- **Modo:** parcial-SDD
- **Objetivo:** recuperar contexto en forma determinística
- **Checklist:**
  - [ ] ejecutar `mem_context`
  - [ ] refinar con `mem_search`
  - [ ] abrir detalle con `mem_get_observation`
  - [ ] documentar tiempo total de recuperación

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
  - [ ] proposal/spec/design/tasks persistidos
  - [ ] apply-progress actualizado
  - [ ] verify y archive guardados

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
  - [ ] PR con Summary / Why / How to test
  - [ ] resolver al menos 1 feedback

### GE-3: Caso real punta a punta
- **Modo:** full-SDD
- **Checklist:**
  - [ ] branch con cambio complejo
  - [ ] evidencia de pipeline SDD completo
  - [ ] merge con historial entendible

---

## 📊 Registro de progreso

| ID | Pilar | Modo | Estado | Fecha | Commit |
|----|-------|------|--------|-------|--------|
| BASE-0 | Curso | no-SDD | ✅ | 2026-04-07 | `2b85dc7` |
| TP-1 | Tests | no-SDD | 🔲 | — | — |
| EN-1 | Engram | no-SDD | ✅ | 2026-04-07 | `c361377` |
| GE-1 | Git | no-SDD | ✅ | 2026-04-13 | `46587d1` |
| TP-2 | Tests | parcial-SDD | 🔲 | — | — |
| EN-2 | Engram | parcial-SDD | 🔲 | — | — |
| GE-2 | Git | parcial-SDD | 🔲 | — | — |
| TP-4 | Tests | full-SDD | 🔲 | — | — |
| EN-4 | Engram | full-SDD | 🔲 | — | — |
| GE-3 | Git | full-SDD | 🔲 | — | — |

---

## Ruta recomendada

1. no-SDD: TP-1 → EN-1 → GE-1
2. parcial-SDD: TP-2 → EN-2 → GE-2
3. full-SDD: TP-4 → EN-4 → GE-3

Si no podés justificar el modo elegido, frená y redefiní alcance.
