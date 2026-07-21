# Matriz de Aplicabilidad por Repo Qontera

> Niveles = **heurística de diseño**, no conclusiones jurídicas. `⚖️ requiere counsel review`.
> Roles alineados con `docs/workspace/CROSS_REPO_HANDOFF.md` y `GUARDRAIL_DEFAULTS.md`.

## Matriz principal

| Repo | Rol | IP/titular | OSS/licencias | Privacidad/datos | Evidencia/deploy | Consumer/comercial |
|---|---|---|---|---|---|---|
| `qontera-web` | Web pública / marca | Alta | Media | Media | Media | **Alta** |
| `qontera-admin-wb` | Cockpit read-only sanitizado | Media | Media | Media | Media | Baja |
| `qontera-app` | App producto / cliente | **Alta** | **Alta** | **Alta** | Alta | Alta |
| `qontera-platform-infrastructure` | Infra / source of truth | Alta | Media | **Alta** | **Alta** | Baja (interno) |
| `claude-code-config` | Fuente de config, **no runtime** | Baja | Baja | Baja | Baja | Baja |

## Notas por repo

- **`qontera-web`**: exposición pública máxima → defensa del consumidor y no filtrar metadata
  interna (slugs, repos, handoffs, CI/deploy).
- **`qontera-admin-wb`**: consume solo metadata sanitizada read-only; no opera infra ni secretos.
- **`qontera-app`**: mayor superficie de datos de usuario e IP → prioridad de revisión.
- **`qontera-platform-infrastructure`**: source of truth de contratos/infra; owner de secretos y
  deploy; máxima evidencia operacional.
- **`claude-code-config`**: repo de configuración versionada, **no producto en runtime** →
  aplicabilidad legal mínima; se audita como tooling, no como servicio.

## Uso

Para cada repo, instanciar `repo-checklist-template.md` en su owner-repo vía handoff. Esta matriz
es orientación de prioridad, no sustituye la evaluación caso por caso (⚖️).
