# ENGRAM Context Map — Operación SDD + Curso

Objetivo: usar Engram como memoria operacional del repo, no como bloc de notas suelto.

---

## 1) Qué guardar siempre (mínimo viable)

1. **Decisiones**: arquitectura, tradeoffs, convenciones.
2. **Bugfixes**: síntoma → causa raíz → fix.
3. **Hallazgos no obvios**: límites, gotchas, riesgos.
4. **Progreso por fase SDD**: artefacto generado + estado.
5. **Preferencias del curso**: estilo, ritmo, profundidad.

---

## 2) Topic keys canónicas

### Contexto del curso
- `course/objective`
- `course/preferences`
- `course/progress`

### Testing
- `course/testing/foundations`
- `course/testing/patterns`
- `course/testing/edge-cases`

### Git
- `course/git/workflow`
- `course/git/commit-style`
- `course/git/pr-patterns`

### Operación SDD (global)
- `sdd/operating-model`
- `sdd/recovery-runbook`
- `sdd-init/{project}`

### Artefactos por cambio (plantilla)
Para un cambio `<change-name>` usar siempre:

- `sdd/<change-name>/proposal`
- `sdd/<change-name>/explore`
- `sdd/<change-name>/spec`
- `sdd/<change-name>/design`
- `sdd/<change-name>/tasks`
- `sdd/<change-name>/apply-progress`
- `sdd/<change-name>/verify-report`
- `sdd/<change-name>/archive-report`
- `sdd/<change-name>/state`

---

## 3) Cadencia de guardado

- Al tomar una decisión que afecta implementación.
- Al cerrar cada lote de trabajo (no esperar “al final del día”).
- Al corregir un bug o descubrir una limitación.
- Al cerrar sesión: `mem_session_summary` obligatorio.

---

## 4) Runbook de recuperación de sesión (obligatorio)

Cuando retomás sin contexto:

1. `mem_context` → recuperar últimas sesiones rápido.
2. `mem_search "<tema/cambio>"` → filtrar por foco.
3. `mem_get_observation <id>` → abrir detalle completo.

Si con esos 3 pasos no podés resumir estado actual en 1 minuto, faltó calidad en la memoria guardada.

---

## 5) Template corto de mem_save

```md
**What**: [qué se decidió o arregló]
**Why**: [qué problema lo motivó]
**Where**: [rutas o artefactos afectados]
**Learned**: [hallazgo/gotcha no obvio]
```

---

## 6) Criterio de calidad de observaciones

Una observación está bien escrita si permite:

- retomar trabajo en menos de 5 minutos,
- entender el porqué sin abrir 20 archivos,
- decidir próximo paso sin adivinar.
