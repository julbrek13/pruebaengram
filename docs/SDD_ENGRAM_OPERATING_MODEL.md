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

Cuando retomás contexto después de pausa:

1. `mem_context`  
   Recupera últimas sesiones y observaciones recientes.
2. `mem_search "<change-name o tema>"`  
   Filtra por foco de trabajo.
3. `mem_get_observation <id>`  
   Trae contenido completo de la observación clave.

### Señales de recuperación exitosa
- Podés explicar estado actual en < 2 minutos.
- Sabés próximo paso sin releer todo el código.
- Identificás riesgos pendientes.

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
