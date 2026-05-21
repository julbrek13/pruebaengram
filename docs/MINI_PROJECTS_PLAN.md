# Plan de Mini-Proyectos: 6 Pilares + 3 Modos SDD

Plan práctico para dominar **Tests**, **Engram**, **Git en equipo**, **Gentleman.Dots**, **AGENTS.md**, **Agent Harnesses**, **conexión VPS real**, **API Bridge** y **criterio profesional** con evidencia operativa.

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
  - [x] branch con cambio complejo
  - [x] evidencia de pipeline SDD completo
  - [ ] merge con historial entendible

#### GE-3 tracking por fase SDD

| Fase | Estado | Evidencia |
|---|---|---|
| proposal | ✅ | Engram `sdd/ge-3-caso-real/proposal` |
| spec | ✅ | Engram `sdd/ge-3-caso-real/spec` |
| design | ✅ | Engram `sdd/ge-3-caso-real/design` |
| tasks | ✅ | Engram `sdd/ge-3-caso-real/tasks` |
| apply | 🟡 | En progreso en working tree (policy docs + verify script) |
| verify | 🔲 | pendiente ejecución/evidencia final |
| archive | 🔲 | pendiente cierre formal |

---

## PILAR 4 — GENTLEMAN.DOTS COMO TALLER PROFESIONAL

### DOTS-0: Separación entorno vs IA
- **Modo:** no-SDD
- **Objetivo:** entender qué resuelve Gentleman.Dots y qué resuelve gentle-ai.
- **Guía:** `docs/GENTLEMAN_DOTS_LEARNING_PATH.md`
- **Vault:** `docs/ObsidianVaults-GentleAI-Course/30-PRACTICE/Tracks/DOTS-TRACKER.md`
- **Checklist:**
  - [ ] explicar `.dots` en 2 frases
  - [ ] explicar `gentle-ai` en 2 frases
  - [ ] mapear editor/shell/terminal/memoria/workflow
  - [ ] guardar decisión inicial en Engram con `topic_key: course/dots/foundation`

### DOTS-1: Supervivencia terminal + Git
- **Modo:** no-SDD
- **Objetivo:** operar el repo sin depender de memoria visual ni comandos copiados.
- **Checklist:**
  - [ ] abrir el repo desde terminal
  - [ ] ejecutar `git status`, `git diff`, `git log`
  - [ ] explicar qué cambió antes de editar
  - [ ] cerrar sesión con `mem_session_summary`

### DOTS-2: Neovim productivo
- **Modo:** parcial-SDD
- **Objetivo:** convertir Neovim/LazyVim en herramienta real de edición y navegación.
- **Pipeline:** `/sdd-explore` → `/sdd-propose` → `/sdd-apply` → `/sdd-verify`
- **Checklist:**
  - [ ] documentar keymaps críticos usados en el curso
  - [ ] completar práctica inicial del Vim Mastery Trainer
  - [ ] modificar docs/tests desde Neovim
  - [ ] guardar aprendizajes en `course/dots/neovim`

### DOTS-3: Workspace reproducible con Tmux/Zellij
- **Modo:** parcial-SDD
- **Objetivo:** trabajar con sesiones por proyecto/TP.
- **Checklist:**
  - [ ] definir layout mínimo editor + comandos + agente
  - [ ] nombrar sesión por repo o TP
  - [ ] documentar cómo retomar una sesión
  - [ ] guardar convención en `course/dots/multiplexer`

### DOTS-4: Flujo completo editor + agente + memoria
- **Modo:** full-SDD
- **Objetivo:** integrar Gentleman.Dots y gentle-ai en un workflow completo de mejora continua.
- **Pipeline completo:** `explore → propose → spec → design → tasks → apply → verify → archive`
- **Dashboard Obsidian:** `docs/ObsidianVaults-GentleAI-Course/00-HQ/Dashboards/COURSE-DASHBOARD.md`
- **Checklist:**
  - [ ] definir flujo de inicio/cierre de sesión
  - [ ] conectar Engram con decisiones de entorno
  - [ ] decidir cuándo una convención pasa a skill
  - [ ] verificar recuperación de contexto en menos de 5 minutos

---

## PILAR 5 — AGENTS.md COMO CONTRATO OPERATIVO

### AGENTS-0: Entender AGENTS.md
- **Modo:** no-SDD
- **Objetivo:** entender `AGENTS.md` como README para agentes de código.
- **Guía:** `docs/AGENTS_MD_COURSE_INTEGRATION.md`
- **Vault:** `docs/ObsidianVaults-GentleAI-Course/30-PRACTICE/Tracks/AGENTS-MD-TRACKER.md`
- **Checklist:**
  - [ ] explicar `AGENTS.md` en 2 frases
  - [ ] diferenciar `README.md`, `AGENTS.md`, skills y Engram
  - [ ] guardar aprendizaje en Engram con `topic_key: course/agents-md/foundation`

### AGENTS-1: Auditar instrucciones del repo
- **Modo:** parcial-SDD
- **Objetivo:** validar que las instrucciones del repo no se contradigan entre sí.
- **Checklist:**
  - [ ] revisar `AGENTS.md` vs `README.md`
  - [ ] revisar `AGENTS.md` vs `docs/SDD_ENGRAM_OPERATING_MODEL.md`
  - [ ] revisar compatibilidad con template PR GE-3
  - [ ] guardar auditoría en Engram con `topic_key: course/agents-md/audit`

### AGENTS-2: Promover reglas estables
- **Modo:** parcial-SDD o full-SDD según impacto
- **Objetivo:** decidir cuándo una regla repetida pasa a contrato de repo, skill, doc o memoria.
- **Checklist:**
  - [ ] detectar regla repetida
  - [ ] decidir ubicación correcta
  - [ ] documentar tradeoff
  - [ ] actualizar contrato solo si la regla es estable

---

## PILAR 6 — AGENT HARNESSES COMO DISCIPLINA OPERATIVA

Un harness no es “otra app de IA”: es la **estructura que contiene, mide y disciplina** al agente. Este pilar enseña a pasar de usar agentes sueltos a operar un sistema observable, gobernado y recuperable.

### AH-0: Entender qué es un Agent Harness
- **Modo:** no-SDD
- **Objetivo:** explicar el harness como contenedor operativo: interfaz, reglas, memoria, delegación, medición, visibilidad y verificación.
- **Guía:** `docs/AGENT_HARNESSES_COURSE_INTEGRATION.md`
- **Vault:** `docs/ObsidianVaults-GentleAI-Course/30-PRACTICE/Tracks/AGENT-HARNESSES-TRACKER.md`
- **Checklist:**
  - [ ] diferenciar modelo, agente, orquestador y harness
  - [ ] explicar por qué SDD + Engram + AGENTS.md forman un harness educativo
  - [ ] guardar aprendizaje en Engram con `topic_key: course/agent-harnesses/foundation`

### AH-1: Pi, gentle-pi y gentle-engram como capas de harness
- **Modo:** parcial-SDD
- **Objetivo:** mapear una progresión de menor a mayor disciplina operativa.
- **FAQ base:** `docs/GENTLE_PI_BEGINNER_FAQ.md`
- **Checklist:**
  - [ ] Pi: terminal coding harness minimalista
  - [ ] gentle-pi: SDD, subagentes, guardrails, skills y model routing
  - [ ] gentle-engram: memoria persistente, recuperación y continuidad entre sesiones
  - [ ] documentar tradeoff simplicidad vs disciplina
  - [ ] responder “¿qué agrega Pi si ya uso Claude Code/OpenCode?” sin vender humo
  - [ ] inventariar packages con `pi list` y clasificar qué problema resuelve cada uno

### AH-2: Visibilidad de subagentes con `sub-agent-statusline`
- **Modo:** parcial-SDD
- **Fuente:** `https://github.com/Joaquinvesapa/sub-agent-statusline`
- **Objetivo:** enseñar que delegar sin visibilidad es perder control operativo.
- **Despiece curricular:** estado de subagentes, fallos, tiempo transcurrido, navegación a sesiones hijas y uso de tokens/contexto cuando está disponible.
- **Checklist:**
  - [ ] explicar el problema “los subagentes desaparecen en background”
  - [ ] diseñar una práctica con 2 subagentes paralelos y tracking manual
  - [ ] definir qué evidencia mínima debe verse antes de confiar en una delegación
  - [ ] registrar si el agente mantiene o pierde el flujo cuando el usuario interactúa a mitad de SDD
  - [ ] guardar decisión en Engram con `topic_key: course/agent-harnesses/subagent-visibility`

### AH-2b: Plan mode y guardrails de ejecución
- **Modo:** parcial-SDD
- **Fuente conceptual:** dudas de foro sobre `/plan`, `@porche/pi-plan-lock` y miedo a que la IA edite sin permiso.
- **Objetivo:** separar planificación read-only de ejecución y mostrar que un guardrail de runtime vale más que “portate bien” en prompt.
- **Checklist:**
  - [ ] explicar diferencia entre plan mode y SDD design
  - [ ] simular exploración read-only sin escribir archivos
  - [ ] documentar qué tools quedan permitidas/bloqueadas
  - [ ] explicar por qué bloquear MCP/Engram en plan mode puede ser correcto
  - [ ] guardar aprendizaje en Engram con `topic_key: course/agent-harnesses/plan-mode-guardrails`

### AH-3: Medición y calibración con `metronous`
- **Modo:** full-SDD
- **Fuente:** `https://github.com/kiosvantra/metronous`
- **Objetivo:** enseñar que un agente profesional se calibra con datos, no con sensaciones.
- **Despiece curricular:** telemetry local, sesiones, tool calls, costos, benchmarks, thresholds, ROI, recomendaciones de cambio de modelo y dashboard TUI.
- **Checklist:**
  - [ ] definir métricas mínimas: costo por sesión, errores, accuracy aproximada, ROI y sample size
  - [ ] explicar `KEEP` / `SWITCH` / `URGENT_SWITCH` / `INSUFFICIENT_DATA`
  - [ ] diseñar un ejercicio de comparación entre agentes/fases SDD
  - [ ] guardar decisión en Engram con `topic_key: course/agent-harnesses/telemetry-calibration`

### AH-4: Harness completo: gobernar, observar, medir, corregir
- **Modo:** full-SDD
- **Objetivo:** integrar SDD, Engram, AGENTS.md, statusline y telemetry como circuito cerrado de mejora.
- **Checklist:**
  - [ ] planificar un cambio con SDD
  - [ ] delegar con visibilidad de subagentes
  - [ ] registrar decisiones y recovery en Engram
  - [ ] verificar `sdd-init` antes de exigir delegación SDD
  - [ ] confirmar que phases SDD delegan a `sdd-*` y no a workers genéricos cuando corresponde
  - [ ] evaluar costo/calidad antes de cambiar modelo o flujo
  - [ ] cerrar con evidencia repo + Engram + dashboard/tracker

### AH-5: Conexión VPS orquestada como caso real
- **Modo:** full-SDD
- **Guía:** `docs/VPS_CONNECTION_COURSE_INTEGRATION.md`
- **Runbook anidado:** `docs/VPS_ENGRAM_CLOUD_COURSE_RUNBOOK.md`
- **Fuente real:** `/home/maca/qontera-platform-infrastructure`
- **Objetivo:** entender la VPS como infraestructura gobernada por contratos: SSH, deploy user, deploy keys, Nginx, rutas runtime, validación pública y Engram Cloud.
- **Checklist:**
  - [ ] explicar proveedor/OS/topología sin tocar secretos
  - [ ] diferenciar `root`, `deploy`, deploy keys y aliases SSH por repo
  - [ ] mapear `repo → /opt/qontera/<service> → build → Nginx → dominio`
  - [ ] justificar “manual first” antes de CI/CD
  - [ ] explicar espacios Engram Cloud por proyecto
  - [ ] explicar flujo anidado provisioning → SSH → deploy user → Nginx → TLS
  - [ ] diferenciar operación AdminWeb vs operación Infra
  - [ ] guardar aprendizaje en Engram con `topic_key: course/vps-connection/foundation`

### AH-5b: Engram Cloud montado en VPS
- **Modo:** full-SDD
- **Guía:** `docs/VPS_ENGRAM_CLOUD_COURSE_RUNBOOK.md`
- **Fuente real:** `/home/maca/qontera-platform-infrastructure/docs/engram-cloud.md`
- **Objetivo:** comprender Engram Cloud como memoria compartida con espacios aislados por repo/orquestador.
- **Checklist:**
  - [ ] explicar runtime `/opt/qontera/engram`, Nginx site y listener loopback
  - [ ] mapear `qontera-web`, `qontera-admin-wb`, `qontera-app`, `qontera-platform-infrastructure`
  - [ ] explicar `ENGRAM_CLOUD_SERVER`, `ENGRAM_CLOUD_TOKEN`, `ENGRAM_PROJECT` sin exponer secretos
  - [ ] diferenciar token de autenticación vs `project` como frontera de contexto
  - [ ] explicar estados `online`, `public-offline`, `stopped`
  - [ ] justificar por qué no usar `docker compose down -v`
  - [ ] guardar aprendizaje en Engram con `topic_key: course/engram-cloud-vps/foundation`

### AH-6: API Bridge como integración visual y webhook mapper
- **Modo:** full-SDD
- **Guía:** `docs/API_BRIDGE_COURSE_INTEGRATION.md`
- **Fuente:** `https://github.com/AlannFernandez/api-bridge`
- **Objetivo:** estudiar API Bridge como patrón de integración visual: nodos, execution engine, data mapper, proxy y webhook output.
- **Checklist:**
  - [ ] explicar `flow config → execution engine → mapped response → webhook endpoint`
  - [ ] separar UI visual de motor de ejecución
  - [ ] listar riesgos: SSRF, secrets, auth, rate limits, logs y tenant isolation
  - [ ] diseñar contrato mínimo de flow seguro
  - [ ] conectar el patrón con Qontera Service Workspaces
  - [ ] guardar aprendizaje en Engram con `topic_key: course/api-bridge/pattern`

---

## BLOQUE TRANSVERSAL — CRITERIO PROFESIONAL

Este bloque toma preguntas reales de comunidad y las convierte en entrenamiento de decisión, comunicación y criterio.

### CP-0: Crítica técnica vs preferencia tecnológica
- **Modo:** no-SDD
- **Guía:** `docs/PROFESSIONAL_CRITERIA_COURSE_INTEGRATION.md`
- **Objetivo:** distinguir feedback técnico útil de “mi stack es mejor que el tuyo”.
- **Checklist:**
  - [ ] identificar restricción real
  - [ ] separar riesgo de gusto
  - [ ] estimar costo de migración
  - [ ] guardar aprendizaje en Engram con `topic_key: course/professional-criteria/technical-critique`

### CP-1: Negociar alcance y “detalles adicionales”
- **Modo:** parcial-SDD
- **Objetivo:** convertir cambios aparentemente chicos en impacto visible.
- **Checklist:**
  - [ ] describir cambio solicitado
  - [ ] estimar impacto en plazo/riesgo
  - [ ] proponer fase 2 o tradeoff
  - [ ] redactar respuesta profesional
  - [ ] guardar aprendizaje en Engram con `topic_key: course/professional-criteria/scope-negotiation`

### CP-2: POC vs MVP vs producto
- **Modo:** parcial-SDD
- **Objetivo:** clasificar una idea antes de construirla.
- **Checklist:**
  - [ ] definir hipótesis técnica
  - [ ] definir hipótesis de usuario
  - [ ] decidir qué NO construir todavía
  - [ ] guardar aprendizaje en Engram con `topic_key: course/professional-criteria/poc-mvp-product`

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
| DOTS-0 | Gentleman.Dots | no-SDD | 🔲 | — | pendiente |
| DOTS-1 | Gentleman.Dots | no-SDD | 🔲 | — | pendiente |
| DOTS-2 | Gentleman.Dots | parcial-SDD | 🔲 | — | pendiente |
| DOTS-3 | Gentleman.Dots | parcial-SDD | 🔲 | — | pendiente |
| DOTS-4 | Gentleman.Dots | full-SDD | 🔲 | — | pendiente |
| AGENTS-0 | AGENTS.md | no-SDD | 🔲 | — | pendiente |
| AGENTS-1 | AGENTS.md | parcial-SDD | 🔲 | — | pendiente |
| AGENTS-2 | AGENTS.md | parcial/full-SDD | 🔲 | — | pendiente |
| AH-0 | Agent Harnesses | no-SDD | 🔲 | — | pendiente |
| AH-1 | Agent Harnesses | parcial-SDD | 🔲 | — | pendiente |
| AH-2 | Agent Harnesses | parcial-SDD | 🔲 | — | pendiente |
| AH-2b | Agent Harnesses | parcial-SDD | 🔲 | — | pendiente |
| AH-3 | Agent Harnesses | full-SDD | 🔲 | — | pendiente |
| AH-4 | Agent Harnesses | full-SDD | 🔲 | — | pendiente |
| AH-5 | VPS Connection | full-SDD | 🔲 | — | pendiente |
| AH-5b | Engram Cloud VPS | full-SDD | 🔲 | — | pendiente |
| AH-6 | API Bridge | full-SDD | 🔲 | — | pendiente |
| CP-0 | Criterio profesional | no-SDD | 🔲 | — | pendiente |
| CP-1 | Criterio profesional | parcial-SDD | 🔲 | — | pendiente |
| CP-2 | Criterio profesional | parcial-SDD | 🔲 | — | pendiente |

---

## Ruta recomendada

1. no-SDD: DOTS-0 → DOTS-1 → AGENTS-0 → AH-0 → CP-0 → TP-1 → EN-1 → GE-1
2. parcial-SDD: DOTS-2 → DOTS-3 → AGENTS-1 → AH-1 → AH-2 → AH-2b → CP-1 → CP-2 → TP-2 → EN-2 → GE-2
3. full-SDD: TP-4 → EN-4 → DOTS-4 → AGENTS-2 → AH-3 → AH-4 → AH-5 → AH-5b → AH-6 → GE-3

### Siguiente bloque técnico sugerido

- `DOTS-0` y `DOTS-1`: consolidar la base de entorno antes de seguir escalando el curso.
- `AH-0`: introducir Agent Harnesses como marco mental antes de instalar o adoptar herramientas concretas.

Si no podés justificar el modo elegido, frená y redefiní alcance.
