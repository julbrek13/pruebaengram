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

### Lanes, módulos y gates del curso
- `course/lanes/foundations`
- `course/lanes/sdd-engram`
- `course/lanes/git-review`
- `course/lanes/agent-harnesses`
- `course/lanes/research-evidence-governance`
- `course/lanes/transfer-infrastructure`
- `course/gates/evidence-review`
- `course/gates/transcript-lineage`
- `course/gates/dashboard-sync`
- `course/gates/branch-module-traceability`

### Testing
- `course/testing/foundations`
- `course/testing/patterns`
- `course/testing/edge-cases`

### Git
- `course/git/workflow`
- `course/git/commit-style`
- `course/git/pr-patterns`

### Gentleman.Dots / entorno profesional
- `course/dots/foundation`
- `course/dots/shell`
- `course/dots/neovim`
- `course/dots/multiplexer`
- `course/dots/ai-layer`
- `course/dots/progress`

### Obsidian / seguimiento visual
- `course/obsidian/vault-structure`
- `course/obsidian/graph-workflow`
- `course/obsidian/evidence-register`
- `course/obsidian/dashboard-sync`

### Inteligencia, evidencia y transcripciones
- `course/intelligence/review-queue`
- `course/evidence/routing`
- `course/evidence/approved-register`
- `course/transcripts/lineage`

### AGENTS.md / contrato operativo de agentes
- `course/agents-md/foundation`
- `course/agents-md/audit`
- `course/agents-md/contract-updates`

### Agent Harnesses / disciplina operativa de agentes
- `course/agent-harnesses/foundation`
- `course/agent-harnesses/pi-gentle-pi-gentle-engram`
- `course/agent-harnesses/subagent-visibility`
- `course/agent-harnesses/plan-mode-guardrails`
- `course/agent-harnesses/telemetry-calibration`
- `course/agent-harnesses/closed-loop`
- `course/agent-harnesses/gentle-pi-onboarding`
- `course/agent-harnesses/gentle-pi-troubleshooting`

### CodeGraph / lectura estructural del repo
- `course/codegraph/foundation`
- `course/codegraph/mcp-policy`

### Hermes / runtime sandbox de agentes
- `course/hermes/sandbox-foundation`
- `course/hermes-codegraph/integration-lab`

### Qontera / transferencia CodeGraph + Hermes
- `course/qontera/codegraph-hermes-transfer`

### VPS / conexión a infraestructura real
- `course/vps-connection/foundation`
- `course/vps-connection/manual-deploy`
- `course/vps-connection/security-boundaries`
- `course/vps-connection/engram-cloud-spaces`
- `course/vps-connection/nested-runbook`

### Engram Cloud en VPS
- `course/engram-cloud-vps/foundation`
- `course/engram-cloud-vps/context-spaces`
- `course/engram-cloud-vps/availability-control`
- `course/engram-cloud-vps/adminweb-boundary`
- `qontera/engram-cloud-guardrail-automation-gaps`
- `qontera/workspace-guardrail-defaults`
- `qontera/owner-handoff-conclusions`

### API Bridge / integración visual
- `course/api-bridge/pattern`
- `course/api-bridge/secure-flow-contract`
- `course/api-bridge/qontera-service-workspaces`

### Criterio profesional
- `course/professional-criteria/technical-critique`
- `course/professional-criteria/scope-negotiation`
- `course/professional-criteria/poc-mvp-product`
- `course/professional-criteria/portfolio-evidence`

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

Runbook detallado y determinístico:

- `docs/ENGRAM_RECOVERY_RUNBOOK.md`

Regla de conflicto:

- Engram manda para estado SDD/decisiones.
- Repo manda para contenido actual de archivos.
- Docs de progreso se corrigen como artefacto derivado.

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
