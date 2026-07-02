# Cross-Repo Handoff Protocol

Use this protocol when work in one repo depends on another repo's local state, ownership, runtime, contracts, or pending changes. The owner repo decides its own scope; the origin repo requests evidence and coordination.

## Quick Path

1. Identify the owner repo for the requested change.
2. Ask the owner orchestrator for a safe local report.
3. Compare owner evidence with direct safe local analysis.
4. Stop if reports conflict or if dirty work would be overwritten.
5. Continue only with an owner-approved handoff and PR path.

## Required Evidence

| Evidence | Source |
|----------|--------|
| Branch and `git status` | Owner orchestrator |
| Staged, unstaged, and untracked work | Owner orchestrator |
| Local-only decisions and risks | Owner orchestrator |
| Forbidden data boundaries | Owner orchestrator |
| Direct safe analysis | Origin orchestrator or current agent |
| Handoff recommendation | Owner orchestrator |

## Qontera Owner Prompts

Use the matching prompt and replace `{contexto}` with the concrete request. Do not ask the owner repo to reveal secrets, `.env`, tokens, credentials, private client data, raw memories, prompts, observations, or logs.

## Qontera Owner Handoff Conclusions

These conclusions map generic `pruebaengram` guardrails to owner-repo authority. They do not redefine Qontera contracts.

| Repo | Authority boundary | Safe handoff rule |
|------|--------------------|-------------------|
| `qontera-platform-infrastructure` | Source of truth for Qontera ownership boundaries, Engram Cloud spaces, infra runtime, VPS, Nginx, deploy, DNS, SSL, backups, observability, and `engram-cloud-status.v1`. | Prefer sanitized human/owner-orchestrator handoff; no secrets, raw memory, raw prompts, logs, or private data. |
| `qontera-admin-wb` | Internal read-only cockpit for sanitized operational metadata. | Consume only fields approved by Infra/Admin; never operate deploy, infra, secrets, or raw memory. |
| `qontera-app` | Client-facing product UX, routing, state, flows, app docs/tests, and product-specific contracts. | Reference only sanitized development metadata; never use Engram as runtime user/client data. |
| `qontera-web` | Public website, brand, institutional and commercial presentation. | Public copy may mention only high-level process; never expose Engram slugs, repo names, handoffs, internal contracts, CI/deploy, or infrastructure details. |

Recommended repo follow-ups: Admin/App/Web should document their own `ENGRAM_PROJECT` guardrail, add PR checklist evidence for ownership, git status, secrets, Engram, and handoff, and reference Infra instead of duplicating Infra contracts.

### Infra Owner: `qontera-platform-infrastructure`

```text
Actuá como el orquestador embebido de qontera-platform-infrastructure.

Necesito un informe seguro para coordinación cross-repo de Qontera.

Antes de responder:
1. Revisá el estado del repo con git status.
2. Identificá la rama actual y si hay cambios staged, unstaged o untracked.
3. Preservá cualquier trabajo no commiteado existente.
4. No uses git add .
5. No muestres secretos, .env, tokens, claves, credenciales, datos privados de clientes ni logs sensibles.

Contexto de la consulta:
{contexto}

Respondé con:
- Rama actual.
- Resumen de git status.
- Cambios staged/unstaged/untracked relevantes, sin exponer secretos.
- Decisiones locales recientes que puedan afectar esta coordinación.
- Riesgos o límites de responsabilidad del repo.
- Qué información necesitás del orquestador origen.
- Handoff recomendado y próximos pasos seguros.
```

### Admin Owner: `qontera-admin-wb`

```text
Actuá como el orquestador embebido de qontera-admin-wb.

Necesito un informe seguro para coordinación cross-repo de Qontera.

Antes de responder:
1. Revisá el estado del repo con git status.
2. Identificá la rama actual y si hay cambios staged, unstaged o untracked.
3. Preservá cualquier trabajo no commiteado existente.
4. No uses git add .
5. No muestres secretos, .env, tokens, claves, credenciales, datos privados de clientes ni logs sensibles.

Contexto de la consulta:
{contexto}

Respondé con:
- Rama actual.
- Resumen de git status.
- Cambios staged/unstaged/untracked relevantes, sin exponer secretos.
- Decisiones locales recientes que puedan afectar esta coordinación.
- Riesgos o límites de responsabilidad del repo.
- Qué información necesitás del orquestador origen.
- Handoff recomendado y próximos pasos seguros.
```

### App Owner: `qontera-app`

```text
Actuá como el orquestador embebido de qontera-app.

Necesito un informe seguro para coordinación cross-repo de Qontera.

Antes de responder:
1. Revisá el estado del repo con git status.
2. Identificá la rama actual y si hay cambios staged, unstaged o untracked.
3. Preservá cualquier trabajo no commiteado existente.
4. No uses git add .
5. No muestres secretos, .env, tokens, claves, credenciales, datos privados de clientes ni logs sensibles.

Contexto de la consulta:
{contexto}

Respondé con:
- Rama actual.
- Resumen de git status.
- Cambios staged/unstaged/untracked relevantes, sin exponer secretos.
- Decisiones locales recientes que puedan afectar esta coordinación.
- Riesgos o límites de responsabilidad del repo.
- Qué información necesitás del orquestador origen.
- Handoff recomendado y próximos pasos seguros.
```

### Web Owner: `qontera-web`

```text
Actuá como el orquestador embebido de qontera-web.

Necesito un informe seguro para coordinación cross-repo de Qontera.

Antes de responder:
1. Revisá el estado del repo con git status.
2. Identificá la rama actual y si hay cambios staged, unstaged o untracked.
3. Preservá cualquier trabajo no commiteado existente.
4. No uses git add .
5. No muestres secretos, .env, tokens, claves, credenciales, datos privados de clientes ni logs sensibles.

Contexto de la consulta:
{contexto}

Respondé con:
- Rama actual.
- Resumen de git status.
- Cambios staged/unstaged/untracked relevantes, sin exponer secretos.
- Decisiones locales recientes que puedan afectar esta coordinación.
- Riesgos o límites de responsabilidad del repo.
- Qué información necesitás del orquestador origen.
- Handoff recomendado y próximos pasos seguros.
```

## Rules

- Do not overwrite, stage, commit, or normalize dirty work from another repo without explicit approval.
- Do not expose secrets, `.env`, tokens, credentials, private client data, raw memories, prompts, observations, or logs.
- If owner and origin analysis conflict, stop and ask the human.
- Keep implementation in the owner repo when the change belongs to that repo.
- Use owner-repo PRs for reviewable changes.

## Reusable Owner-Orchestrator Prompt

```text
Actuá como el orquestador embebido de {repo}.

Necesito un informe seguro para coordinación cross-repo de Qontera.

Antes de responder:
1. Revisá el estado del repo con git status.
2. Identificá la rama actual y si hay cambios staged, unstaged o untracked.
3. Preservá cualquier trabajo no commiteado existente.
4. No uses git add .
5. No muestres secretos, .env, tokens, claves, credenciales, datos privados de clientes ni logs sensibles.

Contexto de la consulta:
{contexto}

Respondé con:
- Rama actual.
- Resumen de git status.
- Cambios staged/unstaged/untracked relevantes, sin exponer secretos.
- Decisiones locales recientes que puedan afectar esta coordinación.
- Riesgos o límites de responsabilidad del repo.
- Qué información necesitás del orquestador origen.
- Handoff recomendado y próximos pasos seguros.
```

## Handoff Summary Template

```md
## Cross-Repo Handoff
- Owner repo:
- Origin repo:
- Owner branch/status summary:
- Relevant dirty work:
- Local decisions:
- Risks:
- Forbidden data confirmed excluded:
- Recommended next step:
- PR evidence location:
```
