# Auditoría cruzada — `qontera-admin-wb`

- **Fecha:** 2026-07-23
- **Repo auditado:** `Qontera-Group/qontera-admin-wb`
- **Repo auditor:** `pruebaengram` (rama `tech/tp-3-flujo-ramas`)
- **Método:** doble orquestador (OpenCode/OpenAI + Claude) contrastado contra verificación
  directa en disco desde el repo auditor
- **Alcance:** rama `engram-cloud-readonly-metadata-view-clean`, HEAD `3da870a`
- **Objeto auditado:** la auditoría preexistente, producida bajo suscripción OpenAI

## Resultado de verificación

Ninguna de las dos respuestas contiene una afirmación falsa. Todo lo falsable se
contrastó contra disco.

| Afirmación | Fuente | Verificado |
|---|---|---|
| Rama `engram-cloud-readonly-metadata-view-clean`, HEAD `3da870a` | ambos | ✅ |
| `main` 5 commits adelante; rama ya mergeada (`5 0`) | Claude | ✅ |
| 0 staged / 4 unstaged / 2 untracked | ambos | ✅ |
| `.gitignore`: diff vs `main` vacío → resuelto en `e248a17` | Claude | ✅ |
| svg `sha1sum 48e24dcb…` idéntico al de `main` (`43fce28`) | Claude | ✅ |
| `.jpg` sin contraparte en ningún commit | Claude | ✅ |
| `Co-Authored-By` = 0 en toda la historia | Claude | ✅ |
| AGENTS.md solo en `0ddccd2`; `.opencode/agent` solo en `eb1888e`; ninguno en `main` | ambos | ✅ |
| Sin `.github/workflows/` | Claude | ✅ |
| ADR-001 y ADR-002 en `Proposed` | OpenAI | ✅ |
| 2 hits de "Cross-Repo Handoff": `AGENTS.md:37`, `admin-workspace-operating-standard.md:56` | Claude | ✅ |
| `docs/workspace/` nunca existió en la historia | Claude | ✅ |
| Instrucciones desde `~/.config/opencode/AGENTS.md` (global) | OpenAI | ✅ |

Nota metodológica: el `sha1` citado por Claude no coincide con `git hash-object` porque es
`sha1sum` del contenido. Verificado antes de reportarlo como discrepancia. No lo era.

## Hallazgos

### H1 — El orquestador de Admin no es del repo (alto)

`~/.config/opencode/AGENTS.md` (11.486 bytes) es configuración **global de usuario**, junto
a `commands/`, `plugins/`, `skills/` y `opencode.json` globales. No está versionada, no
viaja con el clon, y quien clone el repo no la obtiene.

El `.opencode/agent/qontera-admin-orchestrator.md` propio del repo existe en `eb1888e`,
rama sin mergear: no se está cargando.

**Corolario metodológico:** Claude Code no lee `~/.config/opencode/`, por lo que las dos
sesiones corrieron con instrucciones genuinamente distintas. La independencia del
contraste es real, no nominal. Aplica a este repo; reverificar en los demás.

### H2 — Gobernanza ausente de `main` (alto)

`AGENTS.md` (`0ddccd2`) y `.opencode/agent/` (`eb1888e`) viven solo en ramas sin mergear.
Cualquier agente que opere sobre `main` lo hace sin contrato de identidad cargado.

Ramas candidatas, ambas con diff puramente aditivo:

| Rama | vs `main` | Contenido |
|---|---|---|
| `docs/admin-workspace-standard` | `0 1` | AGENTS.md +49, operating standard +79, PR template +16, README |
| `docs/admin-read-only-cockpit-governance` | `14 2` | `.opencode/agent` +45, cross-repo-orchestration +149 |

**Bloqueo:** `docs/admin-workspace-standard` **conflictúa con PR #14** en
`.github/PULL_REQUEST_TEMPLATE.md` (verificado con `git merge-tree`). Requiere resolución
del owner antes de mergear. No se abrieron esas PRs desde el repo auditor: es decisión de
Admin.

### H3 — Trabajo de gobernanza sin respaldo (resuelto)

38 líneas y un binario existían únicamente en el working tree. `ENGRAM_PROJECT` no
aparecía en ningún commit de ninguna rama de la historia.

**Acción:** PR #14 — https://github.com/Qontera-Group/qontera-admin-wb/pull/14 (+38 / −0).
`ENGRAM_PROJECT` queda versionado por primera vez.

### H4 — Auditar desde rama vieja revierte trabajo mergeado (alto, transversal)

La rama de preservación creada sobre HEAD (5 commits detrás de `main`) producía un diff
que **revertía** `.gitignore` (−4) y borraba el `.svg` (−185). El trabajo sucio estaba
intacto; el riesgo venía de la antigüedad de la rama.

Corregido por rebase sobre `main` antes de publicar; respaldos comparados post-rebase,
byte-idénticos. Cero pérdida.

**Aplica a todos los owner-repos.** Incorporado a `CROSS_REPO_AUDIT_REQUEST.md`.

### H5 — Trazabilidad de modelo estructuralmente imposible (medio)

`Co-Authored-By` = 0 en toda la historia. No hay forma de probar qué modelo produjo qué
trabajo previo. Ambos orquestadores lo declararon "no verificable", correctamente.

**Consecuencia para la migración OpenAI → Claude:** no puede apoyarse en reconstruir
autoría pasada. La trazabilidad debe fijarse hacia adelante.

### H6 — Cero enforcement automatizado (medio)

Sin `.github/workflows/`. Todas las checklists (secretos, ownership, handoff, dato
prohibido) dependen de disciplina humana.

### H7 — Defecto del prompt del auditor (resuelto)

El pedido citaba `docs/workspace/CROSS_REPO_HANDOFF.md` sin calificar el repo. Esa ruta no
existe en Admin. Ambos orquestadores lo marcaron como conflicto de contrato y se negaron a
inferir — comportamiento correcto y la mejor señal de calidad de ambos informes.

Corregido en `pruebaengram:docs/workspace/CROSS_REPO_AUDIT_REQUEST.md`.

## Calidad comparada de los orquestadores

Complementarios, no redundantes. Ninguno solo habría dado el cuadro completo.

- **Claude** separó trabajo sucio genuino de delta ya resuelto upstream — el hallazgo
  operativo de mayor valor (H3). Rastreo de procedencia más profundo.
- **OpenAI** aportó el dato decisivo de H1, invisible para Claude, y detectó los ADRs en
  `Proposed`. Más conciso.

Ambos usaron "no verificable" donde correspondía en lugar de rellenar huecos.

**Recomendación:** mantener el doble orquestador para los repos restantes.

## Respuestas a la sección H de los orquestadores

1. **Ruta del protocolo:** `pruebaengram:docs/workspace/CROSS_REPO_HANDOFF.md`. No es
   ruta de Admin. El defecto era del pedido (H7).
2. **Autoridad de `pruebaengram`:** repo auditor, no owner. No muta owner-repos salvo
   aprobación humana explícita por acción. No figura en el mapa de ownership de Admin y no
   pretende figurar.
3. **`engram-cloud-status.v1`:** pendiente de confirmar con
   `qontera-platform-infrastructure`. No verificable desde el auditor.
4. **Ref de auditoría:** rama checkouteada, para medir el estado real de operación. La
   comparación con `main` es parte del hallazgo, no ruido. El trabajo sucio entra en
   alcance.
5. **Destino del artefacto:** este archivo,
   `pruebaengram:docs/qontera/audits/2026-07-23-qontera-admin-wb.md`.
6. **AGENTS.md a `main`:** el auditor no acepta ni rechaza gobernanza en rama. Reporta que
   hoy `main` opera sin contrato y que existe un conflicto bloqueante (H2). Decisión de
   Admin.
7. **Formato de handoff:** el de `CROSS_REPO_HANDOFF.md`. Derivarlo del template local
   ante ausencia fue correcto.
8. **`ENGRAM_PROJECT` para evidencia cruzada:** sin resolver. No guardar evidencia de esta
   auditoría en Engram hasta definirlo.

## Decisiones abiertas

- [ ] Resolver el conflicto de `PULL_REQUEST_TEMPLATE.md` entre PR #14 y
      `docs/admin-workspace-standard`, y decidir si la gobernanza va a `main`. — **Admin**
- [ ] Confirmar existencia y versión de `engram-cloud-status.v1`. — **Infra**
- [ ] Definir `ENGRAM_PROJECT` para evidencia de auditoría cruzada. — **PM / Infra**
- [ ] Fijar trazabilidad de modelo hacia adelante (H5). — **PM**
- [ ] Auditar repos restantes: `qontera-web` (sin `.opencode` en disco), `qontera-app`,
      `qontera-platform-infrastructure`, `qontera-service-workspace-contract`.
