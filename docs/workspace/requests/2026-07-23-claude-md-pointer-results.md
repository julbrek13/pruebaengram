# Resultados y continuación — pedido `CLAUDE.md` puntero

- **Fecha:** 2026-07-23
- **Pedido original:** `2026-07-23-claude-md-pointer.md`
- **Ronda A enviada:** 4 ejecutores OpenCode. Cuatro respuestas recibidas.

Los prompts B del pedido original quedaron **obsoletos**: verifican un PR que ningún repo
abrió. Se reemplazan por los de este documento.

## Resultado de la ronda A

| Repo | Rama | Commit | Diff | Pusheada | PR |
|---|---|---|---|---|---|
| `platform-infrastructure` | `docs/add-claude-md` | `dc90b87` | +13 / −0 | No | Bloqueado |
| `admin-wb` | `docs/add-claude-runtime-guidance` | `b1e61f7` | +13 / −0 | **Sí** | Bloqueado |
| `app` | `docs/add-claude-md-pr` | `5b93365` | +13 / −0 | No | Bloqueado |
| `service-workspace-contract` | `docs/add-claude-md` | `602991f` | +13 / −0 | No | Bloqueado |

Los cuatro verificaron contra el remoto antes de actuar (Paso 0 cumplido) y los cuatro
confirmaron `CLAUDE.md` ausente vía `gh api` → 404. Ningún diff tocó nada fuera de
`CLAUDE.md`. Ningún merge.

## Hallazgos

### R1 — E2 confirmado experimentalmente: el camino de escritura por agente está cerrado

**Los cuatro ejecutores bloquearon en el mismo punto y por la misma razón:** no existe issue
con `status:approved`, requisito obligatorio de la política cargada en el runtime.

La auditoría había inferido esto del pasado (13 PRs abiertos por un humano, ninguno con
issue ni labels). Ahora está medido en vivo, sobre un cambio aditivo de 13 líneas sin riesgo.

**Atribución corregida el 2026-07-24** por el orquestador de `pruebaengram`. Se escribió que
el bloqueo venía de `~/.config/opencode/AGENTS.md` **y** de las skills. Es falso en la primera
mitad: ese `AGENTS.md` global no menciona issues ni PRs; su única regla pertinente es «Never
add Co-Authored-By or AI attribution to commits. Use conventional commits only».

El bloqueo viene **exclusivamente de dos skills globales**, con texto imperativo:

| Skill | Texto |
|---|---|
| `branch-pr` | «Every PR MUST link an approved issue — no exceptions» / «Verify issue has `status:approved` label» |
| `issue-creation` | «A maintainer MUST add `status:approved` before any PR can be opened» |

Ninguna distingue por tamaño, por tipo de cambio ni por gobernanza. No existe excepción
documentada: `branch-pr` dice literalmente «no exceptions». Los `size:exception` locales son
excepciones de tamaño/TDD de SDD, no al requisito de issue aprobado.

Alcance verificado: las skills son **globales al runtime**, así que cualquier repo que cargue
esa instalación las recibe. OpenCode fusiona el `AGENTS.md` global con el del proyecto de
forma aditiva, y en `pruebaengram` no hay override local que exceptúe la regla. El orquestador
declaró el límite de su afirmación: no puede descartar reglas locales adicionales en los
owner-repos sin inspeccionarlos, pero sí afirma que ninguna regla local elimina textualmente
el «MUST / no exceptions» de las skills globales.

E2 pasa de hallazgo histórico a bloqueo operativo verificado.

### R2 — Orden de autoload de OpenCode, confirmado por tres ejecutores

> OpenCode carga el **primer** archivo de instrucciones que encuentra, en este orden:
> `AGENTS.md`, `CLAUDE.md`, `CONTEXT.md`; más el `AGENTS.md` global configurado.

Como los cuatro repos tienen `AGENTS.md`, **el `CLAUDE.md` agregado es inerte para
OpenCode**. Sin efecto colateral, sin instrucción duplicada, sin divergencia entre runtimes.

Si Claude lo carga, el diseño queda validado: **un contrato, dos rutas de entrada.** OpenCode
entra por `AGENTS.md`; Claude entra por `CLAUDE.md` y el puntero lo devuelve al mismo lugar.

Condición de seguridad derivada: el `CLAUDE.md` puntero **solo es válido donde `AGENTS.md`
existe**. En un repo sin `AGENTS.md`, OpenCode cargaría el puntero y encontraría una
referencia rota. Aplica a cualquier repo futuro, y es una razón más para no tocar
`qontera-web` a ciegas.

### R3 — Discrepancia abierta sobre los 12 archivos de `service-workspace-contract`

| Fuente | Clasificación | Recuperable |
|---|---|---|
| Auditoría 2026-07-23 | `BLOB-NOT-IN-ODB`, working tree única copia | No |
| Ejecutor, 2026-07-23 | Objetos *unreachable* en el ODB, sin refs | Sí, vía `fsck`, hasta el `gc` |

No es lo mismo y cambia la severidad. O la auditoría sobreestimó el riesgo, o algo creó
esos objetos después. **Sin resolver.** Se verifica en la ronda B con `git fsck`.

### R4 — Defecto del pedido: el camino alternativo no estaba cubierto

El prompt pedía «rama, diffstat, link del PR» asumiendo que habría PR, y **no dijo qué hacer
con la rama si el PR quedaba bloqueado**. Resultado: `admin-wb` pusheó, los otros tres no.
Los cuatro actuaron de forma razonable ante un hueco del pedido.

Mismo defecto de familia que A2 y A3. Corrección incorporada: todo pedido de escritura
declara qué hacer si el camino principal se bloquea.

### R5 — `app` no verificó lo que se le pidió preservar

Reportó los 2 commits sin pushear, pero **no los 4 archivos con blobs dangling**. «Cambios
locales intactos» es una afirmación plausible, no una verificación — y en ese repo hubo un
rebase. Pendiente en la ronda B.

### R6 — Inventario archivo→hash: por qué importa, corregido

**Versión original de este hallazgo, refutada por el verificador de `app` el 2026-07-24.**
Se afirmó que sin inventario previo «ninguna verificación posterior puede probar
preservación». Es falso, y el error es del auditor.

El verificador lo demostró: **git es content-addressed, el hash *es* el contenido.** Mientras
el archivo siga en disco, `git hash-object` reconstruye la correspondencia sin necesidad de
ningún registro previo. Resolvió los 6 blobs de `app`, 6 de 6, sin inventario.

Inventario reconstruido — `qontera-app`, 2026-07-24:

| Blob unreachable | Bytes | Archivo | Estado |
|---|---|---|---|
| `c7cd89af` | 2103 | `README.md` | tracked, modificado |
| `97d7d5ae` | 5118 | `docs/orchestrator-usage.md` | tracked, modificado |
| `6527b10b` | 2843 | `openspec/config.yaml` | tracked, modificado |
| `398edd27` | 1505 | `.github/pull_request_template.md` | untracked |
| `e4a251bb` | 4780 | `.atl/skill-registry.md` | untracked |
| `61573c14` | 64 | `.atl/.skill-registry.cache.json` | untracked |

**No hay pérdida en `app`.** Cada blob unreachable es byte-idéntico a un archivo presente en
el árbol de trabajo; aun si un `gc` los podara, el contenido seguiría en disco. Los 3 tracked
son los 3 modificados de `git status` con hash distinto al del índice — patrón de `git add`
seguido de `reset`, que explica también por qué el conteo no cambió con el push.

**Lo que sí queda en pie, por una razón distinta a la que se dio:** el inventario importa
para el caso en que el contenido *ya no esté en disco*. Como lo formuló el verificador, la
prueba «es válida ahora; si alguno de esos archivos se modifica o borra, el hash deja de
coincidir y ahí sí la correspondencia pasa a ser indeterminable». Registrar el inventario es
capturar una ventana que se cierra, no suplir una imposibilidad.

Corrección permanente, reformulada: todo hallazgo que declare trabajo en riesgo incluye la
tabla `archivo → hash` **del momento de la observación**, porque esa correspondencia deja de
ser reconstruible en cuanto el working tree cambia.

Dato pendiente: la auditoría habló de «4 archivos» y hay 6. Al menos 2 quedan fuera de
cualquier conjunto de 4. Sin la lista original, el mapeo a esos 4 sigue sin verificarse.

Hallazgo lateral confirmado: `.atl/skill-registry.md` aparece entre los blobs. Es exactamente
el archivo con rutas absolutas del operador que E5 señaló en `web` y `app`.

### R7 — Error de enrutamiento humano, contenido por accidente (proceso)

El prompt AB1, dirigido a `platform-infrastructure`, se pegó en la sesión de `qontera-app`.
El ejecutor frenó y no pusheó nada.

**Pero frenó porque el commit citado (`dc90b87`) no existía en su repo, no porque el repo no
fuera el suyo.** El prompt declaraba su destinatario en la primera línea y eso no bastó:
nadie le había pedido verificar la identidad. Con datos que hubieran coincidido por
casualidad, se ejecutaba un push bajo un prompt ajeno.

La contención fue afortunada, no estructural. Corrección incorporada en
`HYBRID_SYNC_PROTOCOL.md`: guardia de identidad como primer paso de todo prompt que escribe.

### R9 — El snapshot de arranque del runtime puede estar desactualizado respecto del disco

Hallazgo general, surgido de los cuatro verificadores. En **cuatro de cuatro** sesiones, la
rama que el runtime reportó al iniciar no era la que tenía el disco:

| Repo | Rama según el snapshot | Rama en disco |
|---|---|---|
| `app` | `main` | `docs/add-claude-md` |
| `platform-infrastructure` | `docs/infra-workspace-standard` @ `436be5b` | `docs/add-claude-md` @ `dc90b87` |
| `admin-wb` | `chore/preserve-uncommitted-admin-governance` @ `7a9b0ad` | `docs/add-claude-runtime-guidance` @ `b1e61f7` |
| `service-workspace-contract` | `main` | `docs/add-claude-md` — **en las 55 entradas del transcript, desde el primer mensaje** |

El último caso es el más fuerte: el disco nunca estuvo en `main` durante esa sesión, y el
snapshot igual lo declaró. El desfase medido fue de ~51 minutos.

**Consecuencia operativa, del mismo orden que H8:** así como los refs locales mienten
respecto del remoto, **el snapshot de arranque puede mentir respecto del disco.** Un
verificador que tome sus premisas del snapshot sin contrastarlas emite hallazgos sobre un
estado que no existe.

Regla incorporada a `HYBRID_SYNC_PROTOCOL.md`: todo verificador contrasta el snapshot contra
`git symbolic-ref HEAD` y `git status` reales antes de usarlo como premisa.

### R8-bis — Test limpio: autoload CONFIRMADO (2026-07-24)

Sesión nueva en `service-workspace-contract`, sin *bridge*, arrancada con `CLAUDE.md` ya
commiteado en la rama activa, y primer mensaje ciego (no nombró el archivo). Resultado:

> «Hay exactamente uno: CLAUDE.md. Cómo llegó: **inyectado por el runtime al iniciar la
> sesión.** Aparece dentro de un bloque `<system-reminder>` bajo `# claudeMd` […] Yo no lo
> leí con ninguna herramienta.»

Y esta vez **el snapshot coincidió con el disco**, archivo por archivo — la condición que
faltó en las cuatro sesiones anteriores. Con esa variable controlada, el archivo se cargó.

**Queda probada la hipótesis (B):** el autoload de `CLAUDE.md` ocurre. Los cuatro negativos
previos eran artefactos del snapshot desactualizado (R9), no evidencia contra el mecanismo.

Consecuencia sobre el diseño: **una fuente, dos entradas, confirmado de punta a punta.**
OpenCode entra por `AGENTS.md`; Claude entra por `CLAUDE.md` inyectado y el puntero lo
devuelve al mismo contrato. La línea 3 de los cuatro archivos —«Claude Code carga este
archivo automáticamente al iniciar sesión»— **es verdadera.** No hay que reescribir nada.

Cierra también la sección «premisa bajo verificación» de `QONTERA_ORCHESTRATION_STANDARD.md`:
la asimetría de runtimes es real y el puntero la resuelve. La ventaja del ejecutor OpenCode
que subsiste es `permission.bash`, no la carga de contrato.

### R8 (histórico) — Los cuatro tests previos: tres inválidos y uno no concluyente

El verificador respondió que **no** cargó `CLAUDE.md` automáticamente, y probó por qué el
resultado no cuenta como refutación:

- `main` no versiona `CLAUDE.md` (`git ls-tree main -- CLAUDE.md` vacío).
- El snapshot de arranque de la sesión lista rama `main` y no muestra `?? CLAUDE.md`.
- El reflog fecha el checkout a `docs/add-claude-md` a las 23:40:49 y el commit a las
  23:41:37 del 2026-07-23.

Conclusión: **la sesión arrancó parada en `main`, sin `CLAUDE.md` en disco.** «Nada lo
autocargó porque no había nada que cargar.» El archivo apareció después del snapshot.

El mismo modo de falla se repitió en `platform-infrastructure` (sesión iniciada en
`docs/infra-workspace-standard`, el checkout ocurrió a las 23:37:30 y el commit a las
23:39:22) y en `admin-wb` (iniciada en `chore/preserve-uncommitted-admin-governance`;
`CLAUDE.md` escrito a las 23:39:21 y commiteado 11 segundos después).

**`service-workspace-contract` es el único caso distinto, y por eso el más informativo.**
Ahí el archivo estaba en disco 51 minutos antes del arranque, verificado por *birth time* del
inode, y HEAD estaba en la rama correcta desde la primera entrada del transcript. Aun así no
se autocargó. El verificador se negó a declararlo negativo limpio y dejó dos hipótesis que no
puede distinguir desde adentro:

- **(A)** El autoload de `CLAUDE.md` no ocurre por diseño en esta configuración.
- **(B)** El autoload sí ocurre, pero se resolvió sobre el mismo estado *stale* que reportó
  el snapshot (`main`, sin `CLAUDE.md`), y por eso no encontró nada que cargar.

(B) explica con una sola causa las dos anomalías —snapshot desactualizado y ausencia de
autoload— lo que la vuelve la más económica. Sigue siendo inferencia.

**Evidencia externa que inclina el fiel hacia (B):** el mecanismo de autoload existe y está
funcionando en el repositorio auditor. En la sesión de `pruebaengram` desde la que se
coordina este pedido, el `CLAUDE.md` del repo **está cargado en el contexto como instrucciones
de proyecto, sin que nadie lo pidiera con `Read`**. La diferencia con los cuatro owner-repos
es exactamente la condición que ninguno cumplió: el archivo estaba commiteado en la rama
activa desde antes del arranque, y sin desfase de snapshot.

Estado de la hipótesis: **el autoload existe** (evidencia directa de primera mano). Lo que
sigue sin probarse es por qué no se disparó en los owner-repos, y las dos explicaciones
candidatas están arriba.

Falta un test limpio: sesión nueva, sin *bridge*, arrancada con `CLAUDE.md` ya commiteado en
la rama que HEAD tiene puesta.

Observación del propio verificador, que conviene no perder: la línea 3 del `CLAUDE.md` que
escribimos afirma que Claude Code lo carga automáticamente, y **esa afirmación no está
verificada por ningún arranque en esos repos**. Está en cuatro repositorios como declaración.
Si el test limpio confirma (A), hay cuatro archivos que mienten sobre sí mismos y hay que
reescribir esa línea.

### R10 — Inventario de `service-workspace-contract`, capturado el 2026-07-24

Los 12 blobs reconciliados 1:1 contra el working tree, biyección sin sobrantes. Es el
registro que R6 exige, tomado mientras la ventana sigue abierta.

| Blob | Bytes | Archivo | Estado |
|---|---|---|---|
| `8f7323397a5f…` | 7909 | `README.md` | M |
| `bdaad3ecd91d…` | 2487 | `prompts/bootstrap-service-workspace.md` | M |
| `d23576408054…` | 2753 | `scripts/validate-contracts.mjs` | M |
| `367a76125e03…` | 1881 | `templates/base-service-workspace/memory-policy.md` | M |
| `86620a0a944f…` | 3211 | `templates/service-specific/cellphone-technical-service/memory-policy.md` | M |
| `77160f68c916…` | 2284 | `docs/workspace-tool-selection.md` | ?? |
| `78f1e31799e4…` | 3326 | `openspec/changes/qontera-workspace-legal-governance/proposal.md` | ?? |
| `09c8686584da…` | 4927 | `schemas/tooling-selection.schema.json` | ?? |
| `8ac34e986554…` | 786 | `templates/base-service-workspace/docs/tooling-decision-record.md` | ?? |
| `0cdb0f6c7ae4…` | 1252 | `templates/base-service-workspace/docs/tooling-onboarding-checklist.md` | ?? |
| `853930ba79de…` | 1206 | `templates/base-service-workspace/docs/tooling/claude-code-profile.md` | ?? |
| `68d161ca14f0…` | 504 | `templates/base-service-workspace/tooling-selection.yaml` | ?? |

Total 32 526 bytes. Checksum del inventario: `e960cf4b417836b5c13f193b891d208c`.

**Ventana de pérdida, cuantificada por el verificador:** los 12 blobs están sueltos, escritos
todos en el mismo segundo (2026-07-23 20:38:22 −0300) — una única operación de staging
posteriormente deshecha. Con `gc.pruneExpire` en su default, son elegibles para poda **a
partir del 2026-08-06**. Hay 249 objetos sueltos contra un `gc.auto` de 6700, así que no hay
`gc` automático inminente; pero `git gc --prune=now` los destruye hoy.

El respaldo real sigue siendo el contenido en disco, no el ODB. Nada de esto está commiteado
en ninguna rama.

## Decisiones tomadas

1. **Pushear las tres ramas faltantes, sin abrir PR.** Da respaldo remoto sin violar la
   política que las frenó: pushear una rama no es abrir un PR.
2. **La política de PR se escala al PM como decisión formal**, sin modificarla desde acá.
   Se separa deliberadamente de este cambio: «agregar `CLAUDE.md`» y «rediseñar la política
   de PR del ecosistema» son decisiones de tamaño incomparable y no deben acoplarse.

---

# Ronda A-bis — Prompts para OpenCode (GentleAI / OpenAI)

Rol: **ejecutor**. Solo push de una rama ya existente. No abre PR. No toca `main`.

## AB1 — `qontera-platform-infrastructure`

```text
Actuá como el orquestador embebido de qontera-platform-infrastructure, ejecutando en
OpenCode. Sos el ejecutor: podés escribir en este repo y solo en este repo.

Tarea única: pushear al remoto la rama docs/add-claude-md que ya creaste (commit dc90b87).

Contexto de la decisión: el PR sigue bloqueado por falta de issue aprobado, y está bien que
así sea. No abras PR. El push es solo respaldo remoto: hoy ese commit existe únicamente en
este clon, y esa es la clase de riesgo que la auditoría del 2026-07-23 documentó en otros
repos del ecosistema.

Pasos:
1. Confirmá que estás parado en docs/add-claude-md y que el working tree está limpio.
2. Confirmá que la rama sigue siendo +13 / -0 contra origin/main y que no toca nada más.
3. git push -u origin docs/add-claude-md
4. Verificá que llegó: git ls-remote --heads origin refs/heads/docs/add-claude-md

Prohibido en esta tarea:
- Abrir PR.
- Tocar, pushear o mergear main.
- Usar --force bajo cualquier forma.
- git add . o stagear cualquier cosa nueva.

Devolvé: confirmación del push, el SHA remoto de la rama, y el estado de main (que debe
quedar exactamente como estaba).
```

## AB2 — `qontera-app`

```text
Actuá como el orquestador embebido de qontera-app, ejecutando en OpenCode. Sos el ejecutor:
podés escribir en este repo y solo en este repo.

Tarea: verificar preservación y después pushear la rama docs/add-claude-md-pr (commit
5b93365). No abras PR.

Paso 1 — verificación pendiente, hacela ANTES del push:
En tu reporte anterior confirmaste los 2 commits locales sin pushear, pero no reportaste el
estado de los 4 archivos con blobs dangling que se te pidió preservar. Como hubo un rebase
en el medio, hace falta comprobarlo, no asumirlo:

  git fsck --unreachable --no-progress
  git count-objects -v

Reportá cuántos objetos unreachable hay y si corresponden a esos 4 archivos. Si no podés
determinarlo, decilo explícitamente en vez de estimar.

Paso 2 — push, solo si el paso 1 no encontró pérdida:
1. Confirmá que estás en docs/add-claude-md-pr y que sigue rebasada sobre origin/main.
2. git push -u origin docs/add-claude-md-pr
3. Verificá: git ls-remote --heads origin refs/heads/docs/add-claude-md-pr

Prohibido en esta tarea:
- Abrir PR.
- Pushear main. Ese main local está 2 commits ADELANTE del remoto y su publicación es una
  decisión separada que nadie tomó todavía. Dejalo intacto.
- Usar --force bajo cualquier forma.
- git gc, git prune o cualquier cosa que pode objetos.
- git add . o stagear archivos nuevos.

Devolvé: resultado del fsck, confirmación del push, SHA remoto de la rama, y confirmación de
que main local quedó igual.
```

## AB3 — `qontera-service-workspace-contract`

```text
Actuá como el orquestador embebido de qontera-service-workspace-contract, ejecutando en
OpenCode. Sos el ejecutor: podés escribir en este repo y solo en este repo.

Tarea: reconciliar una discrepancia y después pushear la rama docs/add-claude-md (commit
602991f). No abras PR.

Paso 1 — reconciliación, hacela ANTES del push:
Hay una contradicción entre dos fuentes sobre los 12 archivos sin respaldo (5 modificados,
7 untracked):

- La auditoría del 2026-07-23 los clasificó como BLOB-NOT-IN-ODB: el contenido nunca se
  hasheó a objeto, y el working tree sería la única copia. No recuperable.
- Tu reporte dice que sus blobs existen como objetos unreachable en el ODB. Recuperable
  vía fsck hasta el próximo gc.

No es lo mismo y cambia la severidad. Resolvelo con evidencia:

  git fsck --unreachable --no-progress
  git status --short
  git hash-object <cada-archivo-modificado>   # y comparalo contra la salida del fsck

Decí cuál de las dos descripciones es correcta y con qué comando lo comprobaste. Si son
ambas parcialmente ciertas (por ejemplo, algunos en ODB y otros no), desglosalo por archivo.

Paso 2 — push, solo después de reportar el paso 1:
1. Confirmá que estás en docs/add-claude-md y que el working tree conserva los 12 archivos.
2. git push -u origin docs/add-claude-md
3. Verificá: git ls-remote --heads origin refs/heads/docs/add-claude-md

Prohibido en esta tarea:
- Abrir PR.
- Tocar, pushear o mergear main.
- git gc, git prune, git stash o cualquier cosa que pode o mueva objetos unreachable.
- Stagear, normalizar o "limpiar" los 12 archivos. No son tuyos y no son de esta tarea.
- git add . bajo ninguna circunstancia.

Devolvé: veredicto del paso 1 con su evidencia, confirmación del push y SHA remoto.
```

---

# Ronda B — Prompts para Claude Code

Rol: **verificador**. Read-only. No escribe, no corrige, no commitea.

**Enviar solo después de confirmar el push de cada repo.** Reemplazan a los prompts B del
pedido original, que verificaban un PR inexistente.

Los cuatro miden además la hipótesis del autoload. Para que la medición valga, la sesión
tiene que arrancar con la rama que contiene `CLAUDE.md` puesta en el árbol de trabajo.

## B1 — `qontera-platform-infrastructure`

```text
Actuá como verificador read-only de qontera-platform-infrastructure, ejecutando en Claude
Code. No escribís, no corregís, no commiteás. Reportás y parás.

Primero, antes de mirar nada más, respondé con precisión sobre tu propio arranque:
- ¿Cargaste algún archivo de este repositorio automáticamente al iniciar esta sesión?
- Si sí: ¿cuál o cuáles, y qué decían?
- ¿En qué rama estás parado? ¿Existe CLAUDE.md en el árbol de trabajo ahora mismo?
- Si CLAUDE.md existe: ¿llegó a tu contexto solo, o lo estás leyendo porque yo lo nombro?

Esa respuesta es el objeto del experimento. Si no podés distinguir qué cargó tu runtime de
lo que leíste por instrucción, decilo — es un resultado válido y más útil que una
afirmación segura pero inventada.

Después verificá la rama docs/add-claude-md (commit dc90b87), ya pusheada, sin PR:
- ¿El diff contra origin/main es puramente aditivo? ¿Toca algo además de CLAUDE.md?
- ¿El contenido de CLAUDE.md apunta a AGENTS.md y AGENTS.md efectivamente existe en el repo?
- ¿Entró algo que no debía: caches, rutas absolutas del operador, binarios, secretos, .env,
  session-*.md, .atl/?
- ¿El mensaje de commit tiene atribución de IA o Co-Authored-By? No debe tenerla.
- ¿Quedó trabajo local pisado o perdido respecto de lo que había antes?

Contrastá contra el remoto, no solo contra el clon:
  git ls-remote --heads origin
  gh api repos/Qontera-Group/qontera-platform-infrastructure/contents/CLAUDE.md --jq .name

Nota esperada: ese último comando debería seguir dando 404, porque el archivo está en una
rama y no en main. Confirmalo en vez de asumirlo.

Reglas:
- Toda afirmación falsable se contrasta contra disco o API antes de dictaminar.
- "No verificable" con el motivo vale más que una respuesta plausible.
- Si hay divergencia con lo que reportó el ejecutor, pará y escalá. No la arregles.
- No expongas secretos, .env, tokens, credenciales, datos de cliente ni logs.
```

## B2 — `qontera-admin-wb`

```text
Actuá como verificador read-only de qontera-admin-wb, ejecutando en Claude Code. No
escribís, no corregís, no commiteás. Reportás y parás.

Primero, antes de mirar nada más, respondé con precisión sobre tu propio arranque:
- ¿Cargaste algún archivo de este repositorio automáticamente al iniciar esta sesión?
- Si sí: ¿cuál o cuáles, y qué decían?
- ¿En qué rama estás parado? ¿Existe CLAUDE.md en el árbol de trabajo ahora mismo?
- Si CLAUDE.md existe: ¿llegó a tu contexto solo, o lo estás leyendo porque yo lo nombro?

Si no podés distinguir qué cargó tu runtime de lo que leíste por instrucción, decilo.

Después verificá la rama docs/add-claude-runtime-guidance (commit b1e61f7), ya pusheada:
- ¿El diff contra origin/main es puramente aditivo? ¿Toca algo además de CLAUDE.md?
- ¿Se solapa con PR #14? No debería. Verificalo, no lo asumas.
- ¿CLAUDE.md apunta a AGENTS.md y AGENTS.md existe en este repo?
- ¿Entró algo que no debía: caches, rutas absolutas, binarios, secretos, .env, session-*.md?
- ¿El mensaje de commit tiene atribución de IA o Co-Authored-By? No debe tenerla.

Contexto que necesitás para no repetir un error previo: la auditoría del 2026-07-23 emitió
un hallazgo falso sobre este repo (H2, «gobernanza ausente de main») por leer el main local
desactualizado. AGENTS.md sí está en main desde PR #13. Contrastá siempre contra el remoto:
  git ls-remote --heads origin
  gh pr list --repo Qontera-Group/qontera-admin-wb --state all --limit 5

Reglas:
- Toda afirmación falsable se contrasta contra disco o API antes de dictaminar.
- "No verificable" con el motivo vale más que una respuesta plausible.
- Si hay divergencia con lo que reportó el ejecutor, pará y escalá. No la arregles.
- No expongas secretos, .env, tokens, credenciales, datos de cliente ni logs.
```

## B3 — `qontera-app`

```text
Actuá como verificador read-only de qontera-app, ejecutando en Claude Code. No escribís, no
corregís, no commiteás. Reportás y parás.

Primero, antes de mirar nada más, respondé con precisión sobre tu propio arranque:
- ¿Cargaste algún archivo de este repositorio automáticamente al iniciar esta sesión?
- Si sí: ¿cuál o cuáles, y qué decían?
- ¿En qué rama estás parado? ¿Existe CLAUDE.md en el árbol de trabajo ahora mismo?
- Si CLAUDE.md existe: ¿llegó a tu contexto solo, o lo estás leyendo porque yo lo nombro?

Si no podés distinguir qué cargó tu runtime de lo que leíste por instrucción, decilo.

Este repo es el de mayor riesgo de la ronda. Prioridad de la verificación, en este orden:

1. Preservación. Al 2026-07-23 había 2 commits locales sin pushear y 4 archivos con blobs
   dangling. Después hubo un rebase. Verificá con evidencia, no con inferencia:
     git fsck --unreachable --no-progress
     git log origin/main..main --oneline
     git status --short
   ¿Siguen los 2 commits? ¿Siguen los objetos unreachable? ¿Se perdió algo?

2. La rama docs/add-claude-md-pr (commit 5b93365), ya pusheada:
   - ¿Diff puramente aditivo contra origin/main? ¿Toca algo además de CLAUDE.md?
   - ¿Está rebasada sobre origin/main y no sobre el main local, que está 2 commits adelante?
   - ¿Entró algo que no debía: caches, .atl/ con rutas absolutas del operador, binarios,
     secretos, .env, session-*.md?
   - ¿Atribución de IA o Co-Authored-By en el commit? No debe haber.

3. ¿main local quedó exactamente como estaba, sin pushear?

Reglas:
- Toda afirmación falsable se contrasta contra disco o API antes de dictaminar.
- "No verificable" con el motivo vale más que una respuesta plausible. En preservación, esto
  es especialmente importante: el ejecutor ya reportó "cambios locales intactos" sin haberlo
  comprobado. No repitas ese patrón.
- Si hay divergencia con lo que reportó el ejecutor, pará y escalá. No la arregles.
- No corras git gc, git prune ni nada que pode objetos. Sos read-only.
- No expongas secretos, .env, tokens, credenciales, datos de cliente ni logs.
```

## B4 — `qontera-service-workspace-contract`

```text
Actuá como verificador read-only de qontera-service-workspace-contract, ejecutando en
Claude Code. No escribís, no corregís, no commiteás. Reportás y parás.

Primero, antes de mirar nada más, respondé con precisión sobre tu propio arranque:
- ¿Cargaste algún archivo de este repositorio automáticamente al iniciar esta sesión?
- Si sí: ¿cuál o cuáles, y qué decían?
- ¿En qué rama estás parado? ¿Existe CLAUDE.md en el árbol de trabajo ahora mismo?
- Si CLAUDE.md existe: ¿llegó a tu contexto solo, o lo estás leyendo porque yo lo nombro?

Si no podés distinguir qué cargó tu runtime de lo que leíste por instrucción, decilo.

Después, en este orden:

1. Reconciliación de una discrepancia abierta. Sobre los 12 archivos sin respaldo (5
   modificados, 7 untracked) hay dos descripciones incompatibles:
   - La auditoría dice BLOB-NOT-IN-ODB: el contenido nunca se hasheó, working tree como
     única copia, no recuperable.
   - El ejecutor dice que existen como objetos unreachable en el ODB, recuperables vía fsck.
   Determiná cuál es correcta, con el comando que lo pruebe. Si es mixto, desglosá por
   archivo. Este es el punto más importante de tu verificación.

2. La rama docs/add-claude-md (commit 602991f), ya pusheada:
   - ¿Diff puramente aditivo contra origin/main? ¿Toca algo además de CLAUDE.md?
   - ¿Los 12 archivos siguen fuera del staging y sin modificar?
   - ¿Atribución de IA o Co-Authored-By? No debe haber.

3. CI: validate-contracts.yml corre en PR o push a main, así que no debería haberse
   ejecutado. Confirmalo. ¿La validación local (48 YAML) es reproducible?

Reglas:
- Toda afirmación falsable se contrasta contra disco o API antes de dictaminar.
- "No verificable" con el motivo vale más que una respuesta plausible.
- Si hay divergencia con lo que reportó el ejecutor, pará y escalá. No la arregles.
- No corras git gc, git prune, git stash ni nada que pode o mueva objetos. Sos read-only.
- No toques, normalices ni stagees los 12 archivos.
- No expongas secretos, .env, tokens, credenciales, datos de cliente ni logs.
```

---

## Cierre de la ronda A-bis — las cuatro ramas con respaldo remoto

| Repo | Rama | SHA remoto | `main` |
|---|---|---|---|
| `platform-infrastructure` | `docs/add-claude-md` | `dc90b8706d86…` | intacto, `9b78eed` |
| `admin-wb` | `docs/add-claude-runtime-guidance` | `b1e61f7` | intacto |
| `app` | `docs/add-claude-md-pr` | `5b933657b676…` | intacto, local `a32c3c3` / remoto `69b49e4` |
| `service-workspace-contract` | `docs/add-claude-md` | `602991f46fc6…` | intacto, `f968b3b` |

Ningún PR abierto, ningún `main` tocado, ningún `--force`, ningún merge. Los cuatro
verificaron el push contra `git ls-remote`.

Aclaración de la rama homónima en `app`, **corregida el 2026-07-24**: se la describió como
«191 inserciones, no es nuestra». Impreciso en las dos mitades. El conteo depende de la base:

| Base | Inserciones | Archivos |
|---|---|---|
| vs `main` local (`a32c3c3`) | **13** | solo `CLAUDE.md` — la contribución propia de la rama |
| vs `origin/main` (`69b49e4`) | 191 | 5, arrastrando los 2 commits de `main` sin pushear |

`docs/add-claude-md` (`14061d2`) sí es nuestra: agrega el mismo `CLAUDE.md`, blob `beef165e`,
idéntico al de `docs/add-claude-md-pr`. Lo que arrastra son los 2 commits locales, por estar
ramificada desde el `main` adelantado.

El ejecutor de la ronda A detectó eso por su cuenta y creó `docs/add-claude-md-pr` rebasada
sobre `origin/main`, para que el cambio quedara aditivo sobre lo publicado. Decisión correcta
y no solicitada explícitamente — es la que evitó publicar 178 líneas que nadie revisó.

## Escalación al PM — política de PR

**Evidencia:** cuatro ejecutores independientes, en cuatro repositorios distintos,
bloquearon el mismo cambio aditivo de 13 líneas por el mismo requisito: issue con
`status:approved`.

**Estado del andamiaje que la política presupone**, verificado en la auditoría:
sin `.github/ISSUE_TEMPLATE` (404), sin las labels requeridas (solo las 9 por defecto),
cero issues en la historia de los cinco repos.

**Dónde vive la política**, verificado con el orquestador el 2026-07-24:
`~/.config/opencode/skills/branch-pr/` e `issue-creation/`. **No** en el `AGENTS.md` global,
que no menciona issues ni PRs. Texto literal: «Every PR MUST link an approved issue — no
exceptions» y «A maintainer MUST add `status:approved` before any PR can be opened».

**Y esto es lo que más importa para la decisión:** esas skills viven en la configuración
personal del operador, en su máquina. No están versionadas, no viajan con el clon, y no son
una política de la organización — son la preferencia de una instalación, expresada como
`MUST` absoluto. Otra persona del equipo, con otra instalación, no tendría este requisito.

Lo que el ecosistema tiene hoy no es una política de PR incumplida: es la ausencia de una
política organizacional, más un requisito local que se comporta como si lo fuera.

**Consecuencia estructural:** el camino de escritura por agente no existe. No se rompió —
nunca estuvo cableado. Todo PR del ecosistema requiere un humano que salte la política.

**Opciones para el PM**, sin recomendación desde el auditor:

1. Montar el andamiaje (templates, labels, issues) y que la política se cumpla como está.
2. Versionar la política en cada repo, para que viaje con el clon y sea auditable.
3. Declararla preferencia del operador y no requisito.
4. Dejarla como está, aceptando que todo PR lo abre un humano.

La opción 4 es el estado actual de facto. Elegirla explícitamente sería válido; lo que no
es sostenible es seguir declarando un requisito que ningún repo puede cumplir.
