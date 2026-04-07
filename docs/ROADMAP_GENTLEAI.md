# Road to Beginner → Engineer (GentleAI)

Roadmap de madurez para operar con **SDD Orchestrator + Engram** sin improvisación.

## Principios rectores

1. **Decision-first**: primero marco de decisión, después comandos.
2. **Modo correcto para cada problema**: no-SDD, parcial-SDD o full-SDD.
3. **Trazabilidad obligatoria**: Git + Engram en cada paso relevante.
4. **Control humano activo**: el orquestador ejecuta, vos gobernás.

---

## Fase 0 — Base operativa

### Objetivo
Tener entorno y hábitos mínimos para no perder contexto.

### Checklist
- [ ] Instalar dependencias (`npm install`)
- [ ] Entender scripts (`dev`, `build`, `test`)
- [ ] Revisar `docs/SDD_ENGRAM_OPERATING_MODEL.md`
- [ ] Ejecutar `mem_context` al inicio de sesión

### Done criteria
- README y docs alineados al modelo decisión-primero
- Primera sesión cerrada con `mem_session_summary`

---

## Fase 1 — Dominio no-SDD (Beginner)

### Objetivo
Resolver cambios triviales con calidad profesional.

### Cuándo usar
- typo/docs
- rename mecánico
- ajuste puntual de bajo riesgo

### Prácticas
- [ ] Explicar el cambio en 2 frases (qué + por qué)
- [ ] Implementar directo (sin pipeline SDD)
- [ ] Commit atómico (`docs:`, `fix:`, `chore:`)
- [ ] `mem_save` si hubo decisión o descubrimiento

### Done criteria
- 5 cambios triviales correctos sin sobre-procesar
- 0 contradicciones entre commit message y diff

---

## Fase 2 — SDD parcial (Junior)

### Objetivo
Practicar estructura liviana para cambios medianos.

### Pipeline recomendado
`/sdd-explore` → `/sdd-propose` → `/sdd-apply` → `/sdd-verify`

### Cuándo usar
- 2-4 archivos
- 1-2 decisiones técnicas
- riesgo moderado

### Prácticas
- [ ] Definir alcance explícito antes de aplicar
- [ ] Mantener lotes chicos de implementación
- [ ] Corregir hallazgos críticos de verify
- [ ] Guardar resumen de avance en Engram

### Done criteria
- Propuesta aprobada + implementación validada
- Evidencia de verify sin críticos abiertos

---

## Fase 3 — SDD full (Semi Senior)

### Objetivo
Operar cambios de alto impacto sin perder control.

### Pipeline completo
Precondición (una vez por proyecto): `/sdd-init` + `/skill-registry`.

Luego por cada cambio complejo:
`/sdd-explore` → `/sdd-propose` → `/sdd-spec` → `/sdd-design` → `/sdd-tasks` → `/sdd-apply` → `/sdd-verify` → `/sdd-archive`

### Cuándo usar
- arquitectura o límites de módulos
- múltiples capas/sistemas
- impacto en testing, deployment o seguridad

### Prácticas
- [ ] Aprobar proposal + spec + design antes de aplicar
- [ ] Ejecutar apply por tasks explícitas
- [ ] No saltear verify/archive
- [ ] Persistir cada artefacto con topic_key estable

### Done criteria
- Trazabilidad de punta a punta (idea → archive)
- Criterios de verify cumplidos + lecciones archivadas

---

## Fase 4 — Operación avanzada (Engineer)

### Objetivo
Escalar consistencia del sistema de trabajo.

### Prácticas
- [ ] Mantener skill registry actualizado (`/skill-registry`)
- [ ] Usar `engram sync` para versionar memoria relevante en `.engram/`
- [ ] Estandarizar templates de PR/issue/commit
- [ ] Revisar drift de proyectos (`engram projects consolidate`)

### Done criteria
- Workflow repetible y auditado por docs
- Recuperación de contexto en < 5 minutos

---

## Matriz de decisión rápida

| Señal | no-SDD | parcial-SDD | full-SDD |
|---|:---:|:---:|:---:|
| 1 archivo mecánico | ✅ | — | — |
| 2-4 archivos con análisis | — | ✅ | — |
| cambio de arquitectura | — | — | ✅ |
| alto riesgo de regresión | — | ⚠️ | ✅ |
| múltiples decisiones acopladas | — | ⚠️ | ✅ |

---

## Próximo paso sugerido en este repo

1. Ejecutar un caso **parcial-SDD** real y documentarlo.
2. Ejecutar un caso **full-SDD** corto con evidencia completa.
3. Consolidar aprendizaje en `docs/MINI_PROJECTS_PLAN.md` y `docs/ENGRAM_CONTEXT_MAP.md`.
