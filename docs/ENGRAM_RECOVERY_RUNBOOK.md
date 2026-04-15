# EN-2 Recovery Runbook (determinístico)

Objetivo: retomar una sesión del curso sin depender de memoria humana, en pasos mecánicos y auditables.

> **Rama técnica recomendada para ejecutar EN-2:** `tech/en-2-recovery-runbook`

---

## 1) Definición de fuente de verdad (cuando hay conflicto)

Antes de recuperar contexto, fijá esta regla para evitar ambigüedad:

1. **Estado de artefactos SDD y narrativa de decisiones:** **Engram manda**.
   - Ejemplos: `sdd/<change>/verify-report`, `archive-report`, `state`, decisiones de tradeoff.
2. **Estado actual de archivos versionados:** **repo Git manda**.
   - Ejemplos: contenido de `docs/**`, `src/**`, commits presentes en el grafo local.
3. **Tablas de progreso del curso (`docs/**`):** son **derivadas**.
   - Si difieren de repo/Engram, se corrigen y se documenta la evidencia usada.

---

## 2) Protocolo de recuperación en 6 pasos

### Paso 0 — Snapshot mínimo de repo (30 segundos)

1. `git status --short --branch`
2. `git log --oneline --decorate -10`

Salida esperada:
- rama activa identificada,
- working tree conocido,
- últimos commits visibles para cruzar con memoria.

### Paso 1 — Contexto rápido (Engram)

1. `mem_context` (limit 20 recomendado)
2. Identificar la sesión más reciente relevante.

Salida esperada:
- objetivo de la sesión previa,
- próximos pasos declarados,
- archivos clave mencionados.

### Paso 2 — Búsqueda dirigida (Engram)

1. `mem_search` con palabras del bloque actual (ej: `EN-2`, `TP-4`, `runbook`, `tp-3 flujo ramas`).
2. Seleccionar observaciones con evidencia (decisions, session_summary, bugfix, architecture).

Salida esperada:
- IDs candidatos para leer completos,
- señales de drift detectadas explícitamente.

### Paso 3 — Lectura completa de evidencia crítica

1. `mem_get_observation <id>` para cada observación candidata.
2. Extraer 4 datos obligatorios:
   - Qué se hizo.
   - Por qué.
   - Dónde (files/topic_key/commit).
   - Qué quedó pendiente.

Salida esperada:
- resumen reproducible en < 2 minutos,
- siguiente acción concreta y verificable.

### Paso 4 — Resolución de conflictos repo vs Engram

Si hay desalineación:

1. **No inventar estado intermedio.**
2. Declarar conflicto en texto: `repo dice X / Engram dice Y`.
3. Aplicar regla de fuente de verdad (sección 1).
4. Abrir follow-up explícito (docs update o tarea técnica) para cerrar drift.

### Paso 5 — Cierre operativo de recuperación (obligatorio)

Registrar un `mem_save` con topic recomendado `sdd/recovery-runbook` o `course/progress`:

```md
**What**: [qué estado recuperaste y qué drift encontraste]
**Why**: [por qué necesitabas retomar este bloque]
**Where**: [commits, docs y observation IDs usados]
**Learned**: [qué regla evitó ambigüedad]
```

---

## 3) Criterio de “recuperación exitosa”

La recuperación se considera **exitosa** solo si podés responder TODO esto:

- ¿Cuál es la rama técnica activa/recomendada?
- ¿Cuál fue el último bloque realmente cerrado con evidencia?
- ¿Qué bloque sigue y por qué?
- ¿Dónde está la evidencia (commit/hash/doc/observation id)?

Si falta una respuesta, la recuperación está incompleta.

---

## 4) Plantilla corta para usar en cada retomada

```md
## Recovery snapshot
- Rama actual: `...`
- Rama técnica objetivo: `...`
- Evidencia repo: [hashes/archivos]
- Evidencia Engram: [observation IDs/topic_keys]
- Conflictos detectados: [ninguno | detalle]
- Siguiente bloque recomendado: `...`
```

---

## 5) Caso guía validado en este proyecto

- Drift observado: snapshot local histórico de `sdd/tp4-integracion-manejo-errores/*` vs cierre formal en Engram.
- Resolución aplicada: Engram como fuente de verdad para estado SDD (`archive-report` y `state`), repo como fuente de verdad para archivos presentes.
- Siguiente bloque técnico recomendado: `EN-2` en `tech/en-2-recovery-runbook`.
