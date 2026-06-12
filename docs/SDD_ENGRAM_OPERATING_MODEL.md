# SDD + Engram Operating Model (Decision-First)

Documento operativo del repo para maximizar uso de **SDD Orchestrator + Engram**.

Basado en referencias oficiales bajo `docs/gentlaireadme/`:
- `intended-usage.md`
- `components.md`
- `usage.md`
- `agents.md`
- `rollback.md`
- `refactoriced.md`
- `GUIA-SDD-COMPLETA.pdf`

---

## 1) De command-first a decision-first

### Anti-patrón (command-first)
"¿Qué comando sigue?" sin definir riesgo, alcance ni tradeoff.

### Patrón correcto (decision-first)
1. Definir tipo de problema.
2. Elegir modo: no-SDD / parcial-SDD / full-SDD.
3. Recién ahí ejecutar comandos/fases.

**Regla:** comandos son ejecución; decisiones son arquitectura operativa.

---

## 2) Cuándo usar no-SDD, parcial-SDD y full-SDD

| Señal | no-SDD | parcial-SDD | full-SDD |
|---|:---:|:---:|:---:|
| Cambio mecánico, 1 archivo | ✅ | — | — |
| 2-4 archivos con impacto acotado | — | ✅ | — |
| Múltiples módulos/capas | — | ⚠️ | ✅ |
| Arquitectura o contratos | — | — | ✅ |
| Riesgo alto de regresión | — | ⚠️ | ✅ |

### Flujos sugeridos

- **no-SDD**: implementar directo + validar + commit + memoria.
- **parcial-SDD**: `explore → propose → apply → verify`.
- **full-SDD**: `explore → propose → spec → design → tasks → apply → verify → archive` *(con `sdd-init` ya ejecutado para el proyecto)*.

---

## 3) Marco de responsabilidades: Humano vs Orchestrator

| Área | Humano | Orchestrator |
|---|---|---|
| Dirección | define objetivo, alcance, prioridades | propone flujo según complejidad |
| Decisión | aprueba proposal/spec/design y tradeoffs | produce artefactos y recomendaciones |
| Ejecución | valida resultados y acepta riesgo residual | coordina fases y ejecutores |
| Memoria | exige calidad de contexto | persiste artefactos y hallazgos en Engram |
| Cierre | decide merge/release | entrega verify/archive y estado final |

Principio rector: **AI ejecuta; humano gobierna**.

---

## 4) Mapeo SDD: fase → artefacto → topic_key → done criteria

> Para cada cambio usar `<change-name>` estable.

| Fase SDD | Artefacto esperado | topic_key Engram | Done criteria |
|---|---|---|---|
| `sdd-init` | contexto de stack/testing + registry inicial | `sdd-init/{project}` | stack y capacidades detectadas, modo resuelto |
| `sdd-explore` | hallazgos técnicos y riesgos | `sdd/<change-name>/explore` | problema, restricciones y opciones claras |
| `sdd-propose` | propuesta de cambio | `sdd/<change-name>/proposal` | alcance, no-objetivos y plan aprobables |
| `sdd-spec` | requerimientos + escenarios | `sdd/<change-name>/spec` | criterios verificables, sin ambigüedad |
| `sdd-design` | diseño técnico | `sdd/<change-name>/design` | decisiones de arquitectura justificadas |
| `sdd-tasks` | checklist ejecutable | `sdd/<change-name>/tasks` | tareas chicas, ordenadas y trazables |
| `sdd-apply` | progreso de implementación | `sdd/<change-name>/apply-progress` | tareas completadas + archivos modificados |
| `sdd-verify` | reporte de hallazgos | `sdd/<change-name>/verify-report` | críticos resueltos o riesgo explícito aceptado |
| `sdd-archive` | cierre y lecciones | `sdd/<change-name>/archive-report` | cambio archivado, aprendizajes y follow-ups |
| Estado del cambio | snapshot DAG/dependencias | `sdd/<change-name>/state` | estado recuperable para continuar sin ambigüedad |

---

## 5) Session recovery runbook

El runbook operativo y determinístico vive en:

- `docs/ENGRAM_RECOVERY_RUNBOOK.md`

Resumen mínimo obligatorio:

1. `git status --short --branch` + `git log --oneline --decorate -10` (estado repo).
2. `mem_context` (estado reciente Engram).
3. `mem_search "<change-name o tema>"` + `mem_get_observation <id>` (evidencia completa).

Regla de conflicto (fuente de verdad):

- **Engram manda** para estado de artefactos SDD y decisiones.
- **Repo Git manda** para contenido actual de archivos.
- `docs/**` de progreso se corrigen como artefacto derivado cuando hay drift.

### Señales de recuperación exitosa
- Podés explicar estado actual en < 2 minutos.
- Sabés próximo paso sin releer todo el código.
- Identificás riesgos pendientes y su evidencia (hash/observation).

---

## 6) Command cookbook (práctico y oficial)

## A. Mantenimiento gentle-ai

```bash
gentle-ai version
gentle-ai update
gentle-ai upgrade
gentle-ai sync
gentle-ai sync --component sdd
gentle-ai sync --component engram
gentle-ai install --dry-run --agent opencode --preset full-gentleman
```

Cuándo usar:
- `upgrade` + `sync` después de release nueva.
- `sync --component` cuando solo querés refrescar una parte.
- `--dry-run` para validar plan sin tocar configs.

## B. Operaciones Engram (CLI)

```bash
engram tui
engram search "sdd verify"
engram projects list
engram projects consolidate
engram sync
engram sync --import
```

Cuándo usar:
- `tui` para explorar memoria visualmente.
- `sync` para versionar `.engram/` tras sesiones importantes.
- `consolidate` para resolver drift de nombres de proyecto.

## C. Operaciones Engram (en sesión de agente)

Usar según necesidad:

- `mem_save` (decisiones, bugfixes, hallazgos)
- `mem_context` (inicio de sesión)
- `mem_search` (búsqueda temática)
- `mem_get_observation` (detalle completo)
- `mem_session_summary` (cierre obligatorio)

## D. SDD orchestrator commands

Inicialización/contexto:

- `/sdd-init`
- `/skill-registry`

Flujo parcial:

- `/sdd-explore`
- `/sdd-propose`
- `/sdd-apply`
- `/sdd-verify`

Flujo completo:

- `/sdd-spec`
- `/sdd-design`
- `/sdd-tasks`
- `/sdd-archive`

Atajo habitual:

- `/sdd-new` (cuando el agente/plataforma lo soporte)

## E. Higiene Git mínima

```bash
git status
git diff
git add .
git commit -m "docs: <que + por que>"
```

---

## 7) Criterios de coherencia del modelo

Este modelo está bien aplicado cuando:

- no se fuerza SDD en cambios triviales,
- no se saltean fases en cambios complejos,
- cada fase deja evidencia auditable (artefacto + topic_key),
- recuperar contexto es un proceso mecánico, no memoria humana heroica.

---

## 8) Integración con GSR (router) y perfiles de modelo

Tomado de `refactoriced.md`:

- **GSR NO ejecuta** modelos ni orquestación runtime.
- GSR declara `routing + fallback + contratos`.
- El **orchestrator** ejecuta; **Engram** persiste evidencia.

Tomado de `GUIA-SDD-COMPLETA.pdf`:

- Usar perfiles por costo/capacidad (`premium`, `mixto`, `free`).
- Aplicar separación por fase:
  - razonamiento: `explore/propose/verify`
  - código: `apply`
  - velocidad/costo: `tasks/archive`

### Reglas operativas

1. No gastar frontier models en fases administrativas.
2. Mantener fallback por fase cuando la plataforma lo soporte.
3. Si hay degradación de modelo, registrar en Engram (`mem_save`).
4. Si cambia el perfil activo de la sesión, documentarlo en `mem_session_summary`.

---

## 8.1) Agent Harnesses: cerrar el loop operativo

SDD + Engram + AGENTS.md forman la base del harness educativo del repo. La integración de Agent Harnesses agrega dos preguntas nuevas:

1. **Visibilidad:** ¿sé qué están haciendo mis subagentes mientras delego?
2. **Medición:** ¿sé cuánto cuesta y qué calidad produce cada agente/modelo/fase?

### Integraciones curriculares

| Herramienta | Rol en el harness | Uso docente | Límite |
|---|---|---|---|
| `sub-agent-statusline` | Visibilidad de subagentes en OpenCode TUI | Enseñar delegación observable: running/done/failed, elapsed time y contexto/tokens cuando estén disponibles | No reemplaza Engram ni verify; muestra estado vivo |
| `metronous` | Telemetry, benchmarks y calibración local | Enseñar decisiones por datos: costo, eventos, ROI, thresholds y recomendaciones de modelo | Métricas mal definidas producen malas decisiones automatizadas |

### Regla operativa

No cambiar modelo, agente o flujo por sensación si hay forma de observar o medir. Primero recuperar evidencia, después decidir.

Referencia curricular: `docs/AGENT_HARNESSES_COURSE_INTEGRATION.md`.

---

## 8.2) CodeGraph, MCP y evidencia durable

CodeGraph se incorpora al curso como lectura estructural del repositorio. Sirve para explorar relaciones entre archivos, símbolos y dependencias; no reemplaza SDD, Engram, Git, `Read`, diffs ni verificación enfocada.

### Responsabilidades

| Herramienta | Responsabilidad | No es |
|---|---|---|
| CodeGraph | mapa estructural local del código | memoria durable o prueba de implementación |
| CodeGraph MCP en OpenCode | navegación y preguntas estructurales | autoridad final para cambios |
| Engram | decisiones, evidencia, contexto y precedencia histórica | índice de símbolos del repo |
| Git/repo | estado actual de archivos y diffs | memoria de intención si no está documentada |

### Política operativa

- `.codegraph/` es cache local y está fuera de la evidencia del curso.
- Una conclusión obtenida con CodeGraph debe confirmarse con lectura de archivos, diff, docs o checks enfocados.
- Los reportes deben separar rutas del repo de topic keys u observation IDs de Engram.
- Si CodeGraph MCP no está disponible, el curso puede continuar con `Read`, `Grep`, `Glob` y evidencia repo/Engram.

### Evidencia mínima del módulo

| Resultado | Evidencia aceptada |
|---|---|
| Concepto CodeGraph vs Engram | explicación breve + `course/codegraph/foundation` |
| Uso MCP/OpenCode | pregunta estructural + archivos confirmados + `course/codegraph/mcp-policy` |
| Sandbox limpio | `git status` sin `.codegraph/` como evidencia committeable |

---

## 9) Checklist operativo por sesión

Inicio:
- [ ] `mem_context`
- [ ] elegir modo (no/parcial/full)
- [ ] definir objetivo y done criteria

Durante:
- [ ] guardar decisiones y hallazgos (`mem_save`)
- [ ] mantener commits atómicos

Cierre:
- [ ] `mem_session_summary`
- [ ] documentar próximos pasos concretos

---

## 10) GE-3 Operación obligatoria (inicio/cierre)

### Inicio GE-3
1. Crear rama conforme (`tech/tp-N-...` o `docs/tp-N-...`).
2. Confirmar artefactos base del cambio en Engram:
   - `sdd/ge-3-caso-real/spec`
   - `sdd/ge-3-caso-real/design`
   - `sdd/ge-3-caso-real/tasks`
3. Abrir/actualizar PR con contrato obligatorio y trazabilidad dual.

### Cierre GE-3
1. Ejecutar `npm run verify:ge3` y registrar salida en PR.
2. Confirmar evidencia repo + Engram en checklist de PR.
3. Guardar estado de cierre en topics del cambio (`sdd/ge-3-caso-real/apply-progress`, `.../verify-report`, `.../archive-report` según fase).

### Topic keys explícitos requeridos
- `sdd/ge-3-caso-real/spec`
- `sdd/ge-3-caso-real/design`
- `sdd/ge-3-caso-real/tasks`
- `sdd/ge-3-caso-real/apply-progress`
- `sdd/ge-3-caso-real/verify-report`
- `sdd/ge-3-caso-real/archive-report`
