# Road to Beginner → Engineer (GentleAI)

Roadmap de madurez para operar con **SDD Orchestrator + Engram** sin improvisación.

## Principios rectores

1. **Decision-first**: primero marco de decisión, después comandos.
2. **Modo correcto para cada problema**: no-SDD, parcial-SDD o full-SDD.
3. **Trazabilidad obligatoria**: Git + Engram en cada paso relevante.
4. **Control humano activo**: el orquestador ejecuta, vos gobernás.
5. **Entorno como aula**: Gentleman.Dots no se trata como decoración; se usa para entrenar hábitos profesionales.

---

## Fase 0 — Base operativa

### Objetivo
Tener entorno y hábitos mínimos para no perder contexto.

### Checklist
- [ ] Instalar dependencias (`npm install`)
- [ ] Entender scripts (`dev`, `build`, `test`)
- [ ] Leer `docs/GENTLEMAN_DOTS_LEARNING_PATH.md`
- [ ] Abrir `docs/ObsidianVaults-GentleAI-Course/` como vault de seguimiento visual
- [ ] Distinguir responsabilidades: Gentleman.Dots = entorno; gentle-ai = capa IA; este repo = curso/práctica
- [ ] Revisar `docs/SDD_ENGRAM_OPERATING_MODEL.md`
- [ ] Ejecutar `mem_context` al inicio de sesión

### Done criteria
- README y docs alineados al modelo decisión-primero
- Separación `.dots` / `gentle-ai` explicable sin ambigüedad
- Dashboard Obsidian inicial conectado a conceptos, prácticas y evidencia
- Primera sesión cerrada con `mem_session_summary`

---

## Fase 0.5 — Taller profesional con Gentleman.Dots

### Objetivo
Convertir el entorno instalado por Gentleman.Dots en una plataforma de práctica diaria.

### Tiempo sugerido
2 a 4 semanas, en paralelo con las fases Beginner/Junior.

### Subfases
- **Terminal/shell:** moverse, ejecutar y diagnosticar sin depender de UI.
- **Neovim/LazyVim:** navegación, LSP, búsqueda, edición modal y Vim Mastery Trainer.
- **Tmux/Zellij:** sesiones reproducibles por repo/TP.
- **AI layer:** conectar el flujo del entorno con Engram, SDD y skills.

### Prácticas
- [ ] Crear una sesión de trabajo por proyecto.
- [ ] Ejecutar checklist de inicio: Git + Engram + modo SDD.
- [ ] Usar Neovim para modificar docs/tests sin perder navegación.
- [ ] Registrar aprendizajes con topic keys `course/dots/*`.
- [ ] Mantener el graph de Obsidian sin notas huérfanas críticas.

### Done criteria
- Podés retomar una sesión anterior sin pedir contexto desde cero.
- Tu editor, terminal, agente y memoria trabajan como un sistema, no como herramientas sueltas.

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

1. Completar `DOTS-0` y `DOTS-1` del pilar `.dots` en `docs/MINI_PROJECTS_PLAN.md`.
2. Ejecutar un caso **parcial-SDD** real y documentarlo.
3. Ejecutar un caso **full-SDD** corto con evidencia completa.
4. Consolidar aprendizaje en `docs/MINI_PROJECTS_PLAN.md` y `docs/ENGRAM_CONTEXT_MAP.md`.
