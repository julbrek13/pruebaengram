# pruebaengram

Starter educativo para practicar **GentleAI + SDD Orchestrator + Engram + Git** con foco en una idea simple: **primero decidimos, después ejecutamos**.

---

## 🎯 Objetivo del repo

Pasar de **Beginner → Engineer** construyendo un sistema operativo personal de trabajo:

- decisiones explícitas antes de tocar código
- uso correcto de SDD según complejidad (no-SDD / parcial / full)
- trazabilidad con Engram (`topic_key` estable)
- disciplina Git (commits atómicos, claros, auditables)
- dominio progresivo de **Gentleman.Dots** como taller profesional de aprendizaje
- contrato operativo para agentes con **AGENTS.md**

---

## 🧠 Modelo operativo: decisión primero, comando después

No arrancamos por “qué comando tiro”, arrancamos por **qué tipo de problema tengo**.

| Tipo de cambio | Modo | Qué hacer |
|---|---|---|
| Typo, rename aislado, ajuste mecánico (1 archivo) | **no-SDD** | ejecutar directo + commit chico + `mem_save` si hubo decisión |
| Cambio acotado con 1-2 decisiones técnicas | **SDD parcial** | `explore → propose → apply → verify` |
| Cambio de arquitectura, múltiples capas, alto riesgo | **SDD full** | ciclo completo `explore → propose → spec → design → tasks → apply → verify → archive` *(con `sdd-init` ya resuelto para el proyecto)* |

> Regla práctica: si no podés explicar el **por qué** del cambio en 2 frases, todavía no estás para ejecutar.

### ⚡ Cómo elijo modo SDD en 30 segundos

- **no-SDD**: cambio mecánico y aislado (ej: typo, rename simple, docs de 1 archivo) sin decisiones técnicas relevantes.
- **SDD parcial**: cambio acotado con 1-2 decisiones técnicas y validación necesaria (ej: script + documentación + check funcional).
- **SDD full**: cambio de arquitectura, convenciones de equipo o múltiples capas con impacto alto y necesidad de trazabilidad completa.

---

## 🧭 Responsabilidades: Humano vs Orchestrator

| Humano (vos) | SDD Orchestrator |
|---|---|
| Define objetivo, alcance y restricciones | Orquesta fases y selecciona subagente/flujo |
| Aprueba decisiones clave (propuesta, diseño, riesgos) | Genera artefactos por fase |
| Prioriza tradeoffs de producto | Ejecuta implementación según tareas aprobadas |
| Decide cuándo mergear / releasear | Persiste contexto y resultados en Engram |

**Principio:** AI ejecuta, humano gobierna.

---

## 🚀 Quick start del repo

```bash
npm install
npm run dev
```

Scripts disponibles:

- `npm run dev` → ejecuta `src/main.ts` con `tsx`
- `npm run build` → compila TypeScript con `tsc`
- `npm run test` → ejecuta tests en **one-shot** (`vitest run`) y **sale**; usalo para checks rápidos, CI y validaciones no interactivas
- `npm run test:ci` → alias explícito para CI (también ejecuta `vitest run` en modo no interactivo)
- `npm run test:watch` → ejecuta `vitest` en **watch mode**; usalo durante desarrollo cuando querés reruns automáticos al guardar

---

## 🧱 Estructura base

```text
pruebaengram/
├─ .atl/
│  └─ skill-registry.md
├─ .agent/
│  └─ skills/
├─ AGENTS.md
├─ docs/
│  ├─ ROADMAP_GENTLEAI.md
│  ├─ MINI_PROJECTS_PLAN.md
│  ├─ ENGRAM_CONTEXT_MAP.md
│  ├─ SDD_ENGRAM_OPERATING_MODEL.md
│  ├─ ENGRAM_RECOVERY_RUNBOOK.md
│  ├─ MATRIZ_TRAZABILIDAD_CURSO.md
│  ├─ PROJECT_STRUCTURE.md
│  ├─ GSR_MODEL_ROUTING_INTEGRATION.md
│  ├─ intelligence-pipeline/
│  └─ gentlaireadme/
├─ src/
├─ tests/
├─ sdd/              # snapshots locales ignorados; Engram es la fuente de verdad SDD
└─ README.md
```

Para criterios de ubicación, ownership y cuándo mover archivos, ver `docs/PROJECT_STRUCTURE.md`.

---

## 📚 Guías operativas (orden recomendado)

1. `docs/SDD_ENGRAM_OPERATING_MODEL.md` → modelo completo de operación
2. `docs/ROADMAP_GENTLEAI.md` → plan de madurez Beginner → Engineer
3. `docs/MINI_PROJECTS_PLAN.md` → práctica incremental por pilar
4. `docs/ENGRAM_RECOVERY_RUNBOOK.md` → recuperación determinística + regla repo vs Engram
5. `docs/MATRIZ_TRAZABILIDAD_CURSO.md` → mapa operativo para auditar cada cambio del curso
6. `docs/PROJECT_STRUCTURE.md` → reglas de estructura y reestructuración incremental
7. `docs/ENGRAM_CONTEXT_MAP.md` → mapa de `topic_key`
8. `docs/GSR_MODEL_ROUTING_INTEGRATION.md` → integración de routing por fase + fallback
9. `docs/GENTLEMAN_DOTS_LEARNING_PATH.md` → curva de aprendizaje para aprovechar `.dots` + gentle-ai
10. `docs/ObsidianVaults-GentleAI-Course/` → vault Obsidian para seguimiento visual, grafo nodal y evidencia del curso
11. `docs/AGENTS_MD_COURSE_INTEGRATION.md` → contrato operativo para agentes de código

### Sistemas auxiliares independientes

- `docs/intelligence-pipeline/evidence-pack-v1.md` → dashboard/capa independiente para recopilar, verificar y aprobar evidencia antes de decidir si se integra al curso, a Qontera Admin o a otra metadata general.

---

## ✅ Checklist de sesión

Antes de empezar:

- [ ] `git status`
- [ ] recuperar contexto (`mem_context`)
- [ ] si falta contexto: `mem_search` y `mem_get_observation`
- [ ] definir modo (no-SDD / parcial / full)

Al terminar:

- [ ] guardar decisiones/hallazgos (`mem_save`)
- [ ] cerrar con `mem_session_summary`
- [ ] commit atómico con conventional commits

---

## 🧪 Referencias oficiales usadas

Esta remodelación se alinea con los docs oficiales en `docs/gentlaireadme/`:

- `intended-usage.md` (modelo mental)
- `components.md` (Engram + SDD + skills)
- `usage.md` (comandos de mantenimiento `gentle-ai`)
- `agents.md` (rol del orchestrator y delegación)
- `https://github.com/agentsmd/agents.md` (formato abierto AGENTS.md como README para agentes)
- `rollback.md` (backup y recuperación)
- `refactoriced.md` (GSR: límite no-ejecutor + capas gentle/sdd/router)
- `GUIA-SDD-COMPLETA.pdf` (asignación de modelos por fase/perfil)

---

## 📝 Regla de oro

- 1 decisión clara → 1 ejecución concreta
- 1 ejecución concreta → 1 commit entendible
- 1 sesión cerrada → memoria persistente útil
