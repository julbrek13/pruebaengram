# Workspace Guardrail Defaults

Este documento convierte el estándar operativo en defaults iniciales para repos y orquestadores. La meta no es reemplazar criterio profesional: es reducir los puntos donde una persona puede olvidarse de verificar límites básicos.

## Quick Path

1. Crear o revisar `AGENTS.md` del repo con `ENGRAM_PROJECT`, alcance, restricciones de build/commit/push y ruta a estos docs.
2. Usar `.github/pull_request_template.md` para exigir evidencia de proyecto Engram, handoff y trazabilidad dual.
3. Si hay `.github/`, agregar `CODEOWNERS` real cuando existan owners definidos; mientras tanto dejar placeholders comentados.
4. Para cualquier cambio cross-repo, pegar el prompt del owner-orchestrator correspondiente antes de decidir.
5. Guardar en Engram la decisión durable con topic key estable.

## Guardrails Ya Configurados Por Default

| Guardrail | Default actual | Evidencia |
|-----------|----------------|-----------|
| Contrato de agente | `AGENTS.md` define restricciones, memoria, trazabilidad y verificación local. | `AGENTS.md` |
| Flujo workspace | El estándar centraliza onboarding, merge safety, boundaries y handoff. | `docs/workspace/OPERATING_STANDARD.md` |
| PR con trazabilidad | El template pide scope, verificación, evidencia repo, evidencia Engram y handoff. | `.github/pull_request_template.md` |
| Separación de memoria | Las reglas exigen `ENGRAM_PROJECT` por repo/orquestador. | `docs/workspace/ENGRAM_PROJECT_BOUNDARIES.md` |
| Handoff cross-repo | Hay protocolo y prompt reutilizable para consultar owner-orchestrator. | `docs/workspace/CROSS_REPO_HANDOFF.md` |
| Merge seguro | Hay checklist para dirty work, secretos, Obsidian local y cambios no relacionados. | `docs/workspace/MERGE_SAFETY_CHECKLIST.md` |

## Todavía Manual O Dependiente De Disciplina

| Punto | Riesgo | Guardrail mínimo recomendado |
|-------|--------|------------------------------|
| `ENGRAM_PROJECT` real del proceso | Un agente puede guardar memoria en el proyecto equivocado. | Declararlo en `AGENTS.md`, PR template y onboarding; si existe wrapper local, exportarlo allí. |
| Owners reales | Sin owners, la revisión depende de memoria humana. | Activar `.github/CODEOWNERS` sólo cuando existan usernames/equipos confirmados. |
| CI/PR checks | El template puede completarse mal o omitirse. | Agregar checks livianos después de estabilizar el curso; no inventarlos en repos sin política acordada. |
| Handoff validado | El prompt puede no ejecutarse en el repo owner. | Pegar resumen y referencia en PR; bloquear merge humano si falta. |
| Secret scanning y datos privados | La doc prohíbe secretos, pero no escanea. | Usar protecciones de plataforma cuando el repo real lo permita. |

## Defaults Iniciales Para Nuevos Repos U Orquestadores

| Parámetro | Default |
|-----------|---------|
| `ENGRAM_PROJECT` | Nombre exacto del repo o workspace owner, sin clave genérica compartida. |
| `AGENTS.md` | Obligatorio; debe listar restricciones de build/commit/push, memoria, trazabilidad y docs workspace. |
| PR template | Obligatorio; debe pedir `ENGRAM_PROJECT`, topic keys, observation IDs, handoff y verificación. |
| Branch/PR scope | Un work unit reviewable por PR; no mezclar cambios no relacionados. |
| Cross-repo | Owner-orchestrator consultado antes de tocar responsabilidad ajena. |
| Datos sensibles | Secretos, `.env`, tokens, credenciales, datos privados, raw memories y logs quedan fuera de docs, PRs y Engram. |
| Verificación | Checks enfocados permitidos por el repo; builds amplios sólo si el contrato local los permite. |

## Qontera Owner Handoff Conclusions

`pruebaengram` enseña y genera guardrails genéricos. No es source of truth para ownership, espacios Engram, runtime, VPS, Nginx, deploy, DNS, SSL, backups, observabilidad, contratos operativos ni política final de handoff de Qontera.

| Repo | Conclusión de ownership | Siguiente paso recomendado |
|------|--------------------------|----------------------------|
| `qontera-platform-infrastructure` | Infra es la fuente de verdad para contratos Qontera, `engram-cloud-status.v1`, espacios Engram por repo, runtime, deploy y operación. | Mantener `ENGRAM_PROJECT=qontera-platform-infrastructure`, handoff sanitizado vía owner-orchestrator, PR evidence de Engram/handoff/secrets y documentar primero; automatizar después. |
| `qontera-admin-wb` | Admin consume metadata operacional read-only y sanitizada; no opera infraestructura, deploy, secretos ni raw memory. | Formalizar `ENGRAM_PROJECT=qontera-admin-wb` donde corresponda y documentar sólo campos consumer permitidos: versión, source, project/workspace slugs, repo, owner, counts/timestamps, health/public/backup state, `error_class`, runbook y notas sanitizadas. |
| `qontera-app` | App posee UX de producto, routing, state, flows y contratos ligados a experiencia cliente; no posee runtime infra-wide, deploy, secretos ni CI compartida. | Agregar guardrail explícito de `ENGRAM_PROJECT=qontera-app`, checklist PR de ownership/git status/secrets/Engram/handoff, y prohibir usar Engram como fuente runtime de datos de usuarios/clientes. |
| `qontera-web` | Web posee UX pública, marca y páginas institucionales/comerciales; su contenido público no debe filtrar metadata interna. | Agregar guardrail interno `ENGRAM_PROJECT=qontera-web`, referenciar Infra como source of truth y exigir PR evidence de que no se expusieron slugs, repo names, handoffs, contratos internos, CI/deploy ni detalles de infraestructura. |

Para Qontera, cualquier contradicción se resuelve contra el owner repo correspondiente, especialmente Infra cuando el tema sea plataforma u operación.

## PR Evidence Obligatoria

Todo PR que toque guardrails, memoria, handoff o workspace debe poder probar:

- `ENGRAM_PROJECT` usado y por qué corresponde al repo owner.
- Topic keys y observation IDs relevantes.
- Archivos cambiados y scope in/out.
- Resultado de verificación enfocada o razón explícita para no ejecutarla.
- Handoff owner-orchestrator cuando el cambio afecte Infra/Admin/App/Web u otro repo.
- Confirmación de que dirty work, secretos, Obsidian local y cambios no relacionados quedaron fuera.

## CODEOWNERS

`CODEOWNERS` es recomendable pero no debe mentir. Si no hay usernames o equipos confirmados, dejar sólo comentarios con el patrón esperado y abrir una decisión de ownership antes de activarlo.

```txt
# Example only. Replace with real GitHub users or teams before uncommenting.
# docs/workspace/ @org/workspace-owners
# AGENTS.md @org/agent-contract-owners
# .github/pull_request_template.md @org/review-process-owners
```

## Next Step

Antes de cerrar un PR, revisar `MERGE_SAFETY_CHECKLIST.md` y copiar la evidencia requerida en `.github/pull_request_template.md`.
