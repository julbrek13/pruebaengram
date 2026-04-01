# Road to Beginner → Engineer (GentleAI)

Este roadmap está pensado para practicar de forma progresiva, con trazabilidad en Git.

## Reglas del juego

1. **No saltar fases**: primero fundamentos, después automatización.
2. **Commits chicos**: un objetivo por commit.
3. **Siempre explicar el porqué**: no solo “qué cambié”.
4. **Cerrar cada bloque con evidencia**: archivo, test, nota o demo.

---

## Fase 0 — Setup sólido (base)

### Objetivo
Tener entorno listo para trabajar sin fricción.

### Checklist
- [ ] Clonar/crear repo
- [ ] Instalar dependencias (`npm install`)
- [ ] Abrir en VS Code y validar extensiones recomendadas
- [ ] Entender scripts: `dev`, `build`, `test`

### Entregable
- README actualizado con comandos base

### Commit sugerido
`chore: initialize project scaffold and vscode workspace defaults`

---

## Fase 1 — Fundamentos de flujo con AI (Beginner)

### Objetivo
Aprender a pedir bien, verificar, y guardar contexto útil.

### Prácticas
- [ ] Pedir tareas chicas (1 archivo / 1 concepto)
- [ ] Validar cada respuesta en código real
- [ ] Registrar decisiones importantes (memoria/engram)
- [ ] Evitar “copiar-pegar sin entender”

### Entregable
- `docs/learning-notes.md` con 5 aprendizajes técnicos propios

### Commit sugerido
`docs: add beginner workflow notes for gentleai usage`

---

## Fase 2 — SDD básico (Spec-Driven Development)

### Objetivo
Entender el pipeline: explorar → proponer → especificar → tareas.

### Prácticas
- [ ] Correr `/sdd-explore` sobre una mejora simple
- [ ] Correr `/sdd-propose` con alcance claro
- [ ] Correr `/sdd-spec` con escenarios concretos
- [ ] Correr `/sdd-tasks` y revisar granularidad

### Entregable
- Artefactos SDD generados y comprendidos

### Commit sugerido
`docs: add first SDD cycle artifacts and decisions`

---

## Fase 3 — Implementación guiada (Junior)

### Objetivo
Implementar cambios chicos con criterio de arquitectura.

### Prácticas
- [ ] Ejecutar `/sdd-apply` por lotes pequeños
- [ ] Revisar diffs antes de cada commit
- [ ] Corregir naming y estructura antes de mergear

### Entregable
- Feature pequeña funcionando + tests asociados

### Commit sugerido
`feat: implement <small-feature> from approved SDD tasks`

---

## Fase 4 — Verificación y calidad (Semi Senior)

### Objetivo
Dominar validación, riesgos y criterio técnico.

### Prácticas
- [ ] Ejecutar `/sdd-verify`
- [ ] Clasificar hallazgos: critical/warning/suggestion
- [ ] Resolver lo crítico antes de avanzar

### Entregable
- Reporte de verificación + fixes aplicados

### Commit sugerido
`fix: resolve verification findings from sdd-verify`

---

## Fase 5 — Personalización avanzada (Engineer)

### Objetivo
Construir tu sistema de trabajo propio (skills + estándares).

### Prácticas
- [ ] Diseñar skill personalizada para tareas repetitivas
- [ ] Definir convención de prompts por tipo de tarea
- [ ] Estandarizar estructura de PR/commits/issues
- [ ] Automatizar decisiones mecánicas, no decisiones de negocio

### Entregable
- Skill nueva + guía de uso en `docs/`

### Commit sugerido
`chore: add custom gentleai skill and usage guide`

---

## Fase 6 — Orquestación real de proyecto (Engineer+)

### Objetivo
Usar subagentes y fases según complejidad, sin perder control humano.

### Matriz simple de complejidad
- **Simple (1 archivo / cambio mecánico)** → ejecución directa
- **Media (2-4 archivos / algo de análisis)** → delegación puntual
- **Alta (múltiples capas / arquitectura)** → flujo SDD completo

### Entregable
- Caso real documentado de punta a punta (idea → archive)

### Commit sugerido
`docs: capture end-to-end orchestration playbook`

---

## Estrategia de trazabilidad (Git)

Para dominar de verdad, usá esta secuencia siempre:

1. `git status`
2. revisar cambios
3. commit con mensaje claro (qué + por qué)
4. repetir en incrementos chicos

### Plantilla de mensaje (conventional commits)
- `feat: ...`
- `fix: ...`
- `docs: ...`
- `chore: ...`

---

## Próximos pasos recomendados para este repo

1. Instalar dependencias (`npm install`)
2. Crear primer commit del scaffold
3. Crear branch de práctica (`feature/roadmap-practice`)
4. Ejecutar primer mini ciclo SDD con una mejora simple

Si cumplís esto de forma consistente, avanzás de verdad.
