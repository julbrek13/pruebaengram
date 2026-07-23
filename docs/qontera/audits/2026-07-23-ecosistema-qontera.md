# Auditoría cruzada — Ecosistema Qontera (consolidado)

- **Fecha:** 2026-07-23
- **Repo auditor:** `pruebaengram`
- **Repos auditados:** `qontera-platform-infrastructure`, `qontera-admin-wb`, `qontera-app`,
  `qontera-web`, `qontera-service-workspace-contract`
- **Método:** doble orquestador (OpenCode/OpenAI + Claude) contrastado contra verificación
  directa en disco **y contra el remoto** vía `git ls-remote` y `gh api`
- **Objeto auditado:** la auditoría preexistente, producida bajo suscripción OpenAI

Complementa el informe por repo de `2026-07-23-qontera-admin-wb.md`.

## 1. Sincronización local vs. remoto

El dato que ordena todo lo demás. Verificado con `git ls-remote`, no con refs locales.

| Repo | `main` local | `main` remoto | Estado |
|---|---|---|---|
| `service-workspace-contract` | `f968b3b` | `f968b3b` | al día |
| `app` | `a32c3c3` | `69b49e4` | local **adelante 2** — sin pushear |
| `admin-wb` | `e1d0b37` | `500a7f6` | local **atrasado** |
| `platform-infrastructure` | `00904da` | `9b78eed` | local **atrasado 2 merges** |
| `web` | `efcd046` | `33d54b9` | **sin ancestro común** |

Cuatro de cinco desincronizados. Cualquier conclusión emitida contra refs locales sin este
contraste es sospechosa por defecto.

## 2. Gobernanza publicada — estado real

Contra el remoto, no contra el clon local.

| Repo | `AGENTS.md` en `main` remoto | Agente OpenCode | Vía |
|---|---|---|---|
| `platform-infrastructure` | ✅ | ✅ en `main` | PR #5, 2026-07-02 |
| `admin-wb` | ✅ | rama sin mergear | PR #13, 2026-07-02 |
| `service-workspace-contract` | ✅ | ✅ + 2 skills | `202faa7` / `9438986` |
| `app` | — | ✅ en `main` local, **sin pushear** | `cf9de56` |
| `web` | ❌ el repo publicado no lo tiene | ❌ sin `.opencode/` | — |

Corrección respecto del primer informe: se afirmó que Infra y Admin no tenían su
gobernanza en `main`. **Era falso**, producto de leer refs locales desactualizados. Ambas
se mergearon el 2026-07-02.

## 3. `ENGRAM_PROJECT` — cobertura real

Verificado con `git grep -c ENGRAM_PROJECT $(git rev-list --all)` en cada repo.

| Repo | Versionado | Detalle |
|---|---|---|
| `platform-infrastructure` | ✅ | 12 commits; primera aparición `942421f` |
| `admin-wb` | ✅ | vía PR #14 (abierto) — antes era 0 |
| `app` | ❌ | **0 ocurrencias**; ni la cadena `engram` aparece |
| `service-workspace-contract` | ❌ | **0 ocurrencias** |
| `web` | ❌ | **0 ocurrencias** |

Infra es el único que lo tenía versionado antes de esta auditoría. Los tres consumidores
lo tienen solo en working tree o directamente no lo tienen.

Naturaleza según Infra: el **valor** es guardrail local por repo; el **espacio de nombres**
es contrato Infra-owned vía ADR-007. Ambas posiciones son compatibles.

## 4. Contrato `engram-cloud-status.v1` — reconciliación cerrada

Existe en `platform-infrastructure:main` remoto, blob `084f65b`, alta en `c41fdc3`,
mergeado por PR #1.

La tabla de campos que Admin declara consumir es **match 1:1 exacto** con los 20 campos
permitidos del contrato: mismos nombres, mismo orden, ningún campo fuera. Reconciliado por
el auditor con ambos repos en disco; no requirió ida y vuelta entre orquestadores.

Salvedad menor: la lista en prosa de Admin enumera 11 clases y omite `sanitization_level`,
que sí está en su tabla. El artefacto ejecutable es la tabla y está correcta.

## 5. Trabajo en riesgo de pérdida

Contenido cuyo blob no existe en ningún commit de ningún repo ni remoto.

| Repo | Volumen | Estado del respaldo |
|---|---|---|
| `service-workspace-contract` | 12 archivos | `BLOB-NOT-IN-ODB` — el working tree es la única copia |
| `app` | 4 archivos + 2 commits | blobs *dangling* (recuperables hasta el próximo `gc`); commits sin remoto |
| `web` | 2 archivos | working tree único, **y en un clon huérfano** |
| `admin-wb` | — | resuelto por PR #14 |

`service-workspace-contract` es el de mayor volumen; `web` el de mayor severidad, porque el
respaldo por push no es una opción segura ahí.

## 6. Hallazgos estructurales

### E1 — `qontera-web`: el clon local está huérfano del repositorio publicado (crítico)

Ningún commit del clon existe en el remoto: `gh api .../commits/{efcd046, 9b3890e, 66d53b4,
66e4f80}` → **422 "No commit found"** en los cuatro. El remoto fue reconstruido desde cero
el 2026-06-13 (`feat: bootstrap qontera-web-2`), tiene 13 commits y 4 ramas, ninguna
compartida.

Un `push --force` desde el clon destruiría deploy Docker, tests, `openspec/`, contrato de
API y tres PRs mergeadas. El `[ahead 1]` de `git status` compara contra un ref muerto.

**Ninguna operación git sobre ese clon es segura** hasta decidir cuál repositorio es
canónico. La preservación ahí debe ser copia de archivos, no push.

### E2 — La política de PR vive fuera de todo repositorio (alto)

`~/.config/opencode/skills/branch-pr/` e `issue-creation/` exigen issue aprobado,
`status:approved` y taxonomía `type:*`. No están en ningún repo, no están versionadas, no
viajan con el clon.

Presuponen andamiaje que **ningún repo de Qontera tiene**: sin plantillas de issue
(`.github/ISSUE_TEMPLATE` → 404), sin las labels requeridas (solo las 9 por defecto), cero
issues en la historia.

Consecuencia verificada: **los 13 PRs del ecosistema los abrió un humano**, sin issue y sin
labels. La política nunca se cumplió porque nunca fue satisfacible. El camino de escritura
por agente no existe — no se rompió, nunca estuvo cableado.

### E3 — Brecha entre el orquestador declarado y el que ejecuta (medio)

Los agentes versionados declaran `model: openai/gpt-5.5` (Infra, App) o no declaran modelo
(Workspace, Admin). Las sesiones Claude no cargan esos archivos: operan solo desde el
prompt. La gobernanza se cumple por lectura deliberada, no por configuración.

### E4 — Enforcement automatizado casi inexistente (medio)

`service-workspace-contract` es el único con CI (`validate-contracts.yml`) y el único con
un control técnico real (`permission.bash` con `"*": ask`). Los otros cuatro no tienen
workflows. Todas las checklists dependen de disciplina humana.

Limitaciones del único validador que existe: `additionalProperties: true` en todos los
niveles — un campo extra con un secreto pasa la validación; y `workspace/` está
gitignorado, así que las configs de tenants reales nunca llegan a CI.

### E5 — La plantilla base no define política de artefactos (medio)

`templates/base-service-workspace/` no contiene `.gitignore` (9 archivos, ninguno lo es) y
`prompts/bootstrap-service-workspace.md` no menciona `gitignore` ni una vez.

Todo workspace instanciado nace sin política de artefactos de runtime. Evidencia de lo que
se coló por ese hueco: `tui.heapsnapshot` (62 MB, con patrones de teléfono y email) en un
workspace instanciado; `.atl/skill-registry.md` con rutas absolutas del operador en Web y
App; `session-ses_*.md` en Admin, que necesitó commit correctivo.

### E6 — Trazabilidad de modelo estructuralmente imposible (medio)

`Co-Authored-By` = 0 en la historia de todos los repos. No hay forma de probar qué modelo
produjo qué trabajo previo. La migración OpenAI → Claude no puede apoyarse en reconstruir
autoría pasada.

## 7. Calidad de los orquestadores

Diez informes verificados contra disco y remoto. **Ninguna afirmación falsa.** Line
numbers, hashes de commit, `sha1sum` de contenido, conteos de hits: todo exacto.

- **Una omisión material**: el informe OpenAI de Infra no listó
  `.opencode/agent/…-orchestrator.md` en su sección C — el único agente publicado en `main`
  del ecosistema. Claude lo reportó con commit y estado.
- **Autocorrecciones**: los verificadores Claude de Infra y Web corrigieron afirmaciones de
  sus propios informes previos antes de evaluar el trabajo ajeno.
- **Los ocho ejecutores y verificadores bloquearon correctamente** ante un pedido con
  `{PAYLOAD}` sin sustituir, en vez de inferir alcance. Defecto del auditor, manejado bien
  por todos.

El doble orquestador se justifica empíricamente: ninguno solo dio el cuadro completo.

## 8. Errores del auditor

- **A1 — Refs locales presentados como estado del repositorio.** Origen de dos hallazgos
  falsos (H2 de Admin, pedido P4 a Infra) y del análisis entero de Web. Corregido con paso
  de contraste remoto obligatorio en `CROSS_REPO_AUDIT_REQUEST.md`.
- **A2 — Prompts entregados con `{PAYLOAD}` sin ensamblar**, esperando que el humano
  empalmara bloques. Bloqueó ocho sesiones.
- **A3 — Se confundió preservar con abrir un PR.** La preservación requiere commit + push;
  el PR fue un agregado del auditor que activó una política inaplicable y derivó en
  proponer andamiaje nuevo que la operación no necesitaba.
- **A4 — PR #14 viola E2.** Se abrió sin issue ni labels. Pasó porque Claude Code no carga
  esas skills. No fue más correcto por funcionar: fue más permisivo por accidente de
  runtime.

## 9. Decisiones abiertas

- [ ] **Web: cuál repositorio es canónico.** Bloquea toda operación sobre ese clon. — **PM**
- [ ] Dónde vive la política de PR: versionada por repo, en el repo contrato, o declarada
      preferencia del operador. El estado actual hace que el resultado dependa del runtime. — **PM**
- [ ] Normalizar la declaración de modelo en los agentes (2 de 5 no lo fijan). — **PM**
- [ ] `.gitignore` en la plantilla base + enforcement en el validador. — **Workspace**
- [ ] Remediación del `tui.heapsnapshot` en el workspace instanciado. — **owner de esa instancia**
- [ ] Resolver PR #14. — **Admin**
