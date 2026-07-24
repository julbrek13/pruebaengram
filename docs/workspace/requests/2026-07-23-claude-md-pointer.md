# Pedido cross-repo — `CLAUDE.md` puntero en owner-repos

- **Fecha:** 2026-07-23
- **Origen:** `pruebaengram` (auditor — Claude Code)
- **Destino:** `qontera-platform-infrastructure`, `qontera-admin-wb`, `qontera-app`,
  `qontera-service-workspace-contract`
- **Excluido:** `qontera-web` — ver bloqueo al final
- **Tipo:** aditivo, un archivo nuevo, sin tocar código ni contratos

## Hipótesis que motiva el pedido

Las cuatro sesiones Claude que participaron de la auditoría del 2026-07-23 declararon no
cargar ningún archivo del repositorio: operaron solo desde el prompt. Se interpretó como
una propiedad del runtime.

Interpretación probable, **no verificada**: Claude Code carga `CLAUDE.md` de forma
automática y **no** carga `AGENTS.md` por sí solo. Los owner-repos tienen `AGENTS.md` y no
tienen `CLAUDE.md`. Si es así, la ceguera es un archivo faltante, no una limitación.

Consecuencia si se confirma: el verificador arranca con el contrato del repo ya cargado, y
baja el contexto que el humano debe transportar a mano en cada sesión.

## Orden de envío — leer antes de mandar nada

Ambos runtimes están vivos en cada repositorio. Cada prompt indica su destinatario en la
primera línea. **No son intercambiables.**

| # | Runtime destino | Rol | Escribe | Cuándo se envía |
|---|---|---|---|---|
| A1–A4 | **OpenCode — GentleAI / suscripción OpenAI** | Ejecutor | Sí | Primero |
| B1–B4 | **Claude Code** | Verificador | No | Solo después de que vuelva el PR de ese repo |

**Secuencial, no paralelo.** El estándar lo exige para toda tarea que escribe. Acá hay una
razón adicional: **la sesión Claude verificadora es el instrumento que mide la hipótesis.**
Si arranca *después* de que el ejecutor creó `CLAUDE.md`, su respuesta sobre qué cargó al
iniciar confirma o refuta el experimento en un solo paso. Enviada antes, no mide nada.

Los cuatro repos sí pueden ir en paralelo entre sí: son árboles distintos.

---

# Parte A — Prompts para OpenCode (GentleAI / OpenAI)

Rol: **ejecutor**. Escribe en su propio repo. Copiar y pegar tal cual.

## A1 — `qontera-platform-infrastructure`

```text
Actuá como el orquestador embebido de qontera-platform-infrastructure, ejecutando en
OpenCode. Sos el ejecutor de este pedido: podés escribir en este repo y solo en este repo.

Tarea acotada y aditiva: verificar si este repo tiene CLAUDE.md y, si falta, agregarlo.

Paso 0 — obligatorio antes de afirmar nada:
Los refs locales mienten. Contrastá contra el remoto antes de concluir que el archivo falta.
  git ls-remote --heads origin refs/heads/main
  gh api repos/Qontera-Group/qontera-platform-infrastructure/contents/CLAUDE.md --jq .name
En la auditoría del 2026-07-23, 4 de 5 repos tenían main local desactualizado.

Paso 1 — reportar:
- Rama actual y resumen de git status.
- Si CLAUDE.md existe en el remoto (no solo en el clon local).
- Qué archivos del repo carga tu runtime automáticamente al iniciar sesión.

Paso 2 — solo si CLAUDE.md NO existe en el remoto:
Creá rama nueva y agregá CLAUDE.md en la raíz con este contenido exacto:

    # CLAUDE.md

    Claude Code carga este archivo automáticamente al iniciar sesión en este repositorio.

    El contrato operativo de este repo es `AGENTS.md`. Leelo antes de tocar código,
    documentación o estado de Git.

    Reglas que no dependen de leer otro archivo:

    - No commitear ni pushear sin pedido explícito del usuario.
    - No exponer secretos, `.env`, tokens, credenciales ni datos de cliente.
    - Staging explícito por nombre de archivo. Nunca `git add .`.
    - Sin atribución de IA en los mensajes de commit.

Reglas de escritura, sin excepción:
- Preservá todo trabajo no commiteado que ya exista.
- Staging explícito por nombre. Nunca git add .
- Rebasá sobre main y confirmá que el diff sea puramente aditivo antes de abrir el PR.
  Una rama N commits detrás produce un diff que revierte trabajo ya mergeado.
- Sin atribución de IA ni Co-Authored-By.
- No muestres secretos, .env, tokens, claves, credenciales, datos de cliente ni logs.

Si CLAUDE.md ya existe: reportá su contenido y no modifiques nada.

Devolvé: rama, diffstat, link del PR, y si abriste PR o no y por qué.
No mergees. El merge es decisión humana.
```

## A2 — `qontera-admin-wb`

```text
Actuá como el orquestador embebido de qontera-admin-wb, ejecutando en OpenCode. Sos el
ejecutor de este pedido: podés escribir en este repo y solo en este repo.

Tarea acotada y aditiva: verificar si este repo tiene CLAUDE.md y, si falta, agregarlo.

Paso 0 — obligatorio antes de afirmar nada:
Los refs locales mienten. Contrastá contra el remoto antes de concluir que el archivo falta.
  git ls-remote --heads origin refs/heads/main
  gh api repos/Qontera-Group/qontera-admin-wb/contents/CLAUDE.md --jq .name
En la auditoría del 2026-07-23, 4 de 5 repos tenían main local desactualizado. Este repo
fue uno de ellos: su main local estaba atrasado y produjo un hallazgo falso.

Paso 1 — reportar:
- Rama actual y resumen de git status.
- Si CLAUDE.md existe en el remoto (no solo en el clon local).
- Qué archivos del repo carga tu runtime automáticamente al iniciar sesión.

Paso 2 — solo si CLAUDE.md NO existe en el remoto:
Creá rama nueva y agregá CLAUDE.md en la raíz con este contenido exacto:

    # CLAUDE.md

    Claude Code carga este archivo automáticamente al iniciar sesión en este repositorio.

    El contrato operativo de este repo es `AGENTS.md`. Leelo antes de tocar código,
    documentación o estado de Git.

    Reglas que no dependen de leer otro archivo:

    - No commitear ni pushear sin pedido explícito del usuario.
    - No exponer secretos, `.env`, tokens, credenciales ni datos de cliente.
    - Staging explícito por nombre de archivo. Nunca `git add .`.
    - Sin atribución de IA en los mensajes de commit.

Reglas de escritura, sin excepción:
- Preservá todo trabajo no commiteado que ya exista.
- Staging explícito por nombre. Nunca git add .
- Rebasá sobre main y confirmá que el diff sea puramente aditivo antes de abrir el PR.
- Sin atribución de IA ni Co-Authored-By.
- No muestres secretos, .env, tokens, claves, credenciales, datos de cliente ni logs.

Atención específica de este repo: hay un PR #14 abierto. Tu rama debe partir de main, no de
la rama de PR #14, y el diff no debe solaparse con ella.

Si CLAUDE.md ya existe: reportá su contenido y no modifiques nada.

Devolvé: rama, diffstat, link del PR, y si abriste PR o no y por qué.
No mergees. El merge es decisión humana.
```

## A3 — `qontera-app`

```text
Actuá como el orquestador embebido de qontera-app, ejecutando en OpenCode. Sos el ejecutor
de este pedido: podés escribir en este repo y solo en este repo.

Tarea acotada y aditiva: verificar si este repo tiene CLAUDE.md y, si falta, agregarlo.

Paso 0 — obligatorio antes de afirmar nada:
Los refs locales mienten. Contrastá contra el remoto antes de concluir que el archivo falta.
  git ls-remote --heads origin refs/heads/main
  gh api repos/Qontera-Group/qontera-app/contents/CLAUDE.md --jq .name

Atención específica de este repo, verificado el 2026-07-23: main local estaba 2 commits
ADELANTE del remoto, sin pushear, más 4 archivos con blobs dangling. Reportá ese estado
antes de crear la rama y no lo pises. Ese trabajo no tiene respaldo remoto.

Paso 1 — reportar:
- Rama actual y resumen de git status.
- Estado de los 2 commits locales sin pushear y de los archivos sin respaldo.
- Si CLAUDE.md existe en el remoto (no solo en el clon local).
- Qué archivos del repo carga tu runtime automáticamente al iniciar sesión.

Paso 2 — solo si CLAUDE.md NO existe en el remoto:
Creá rama nueva y agregá CLAUDE.md en la raíz con este contenido exacto:

    # CLAUDE.md

    Claude Code carga este archivo automáticamente al iniciar sesión en este repositorio.

    El contrato operativo de este repo es `AGENTS.md`. Leelo antes de tocar código,
    documentación o estado de Git.

    Reglas que no dependen de leer otro archivo:

    - No commitear ni pushear sin pedido explícito del usuario.
    - No exponer secretos, `.env`, tokens, credenciales ni datos de cliente.
    - Staging explícito por nombre de archivo. Nunca `git add .`.
    - Sin atribución de IA en los mensajes de commit.

Reglas de escritura, sin excepción:
- Preservá todo trabajo no commiteado que ya exista. Este repo es el de mayor riesgo.
- Staging explícito por nombre. Nunca git add .
- Rebasá sobre main y confirmá que el diff sea puramente aditivo antes de abrir el PR.
- Sin atribución de IA ni Co-Authored-By.
- No muestres secretos, .env, tokens, claves, credenciales, datos de cliente ni logs.

Si CLAUDE.md ya existe: reportá su contenido y no modifiques nada.

Devolvé: rama, diffstat, link del PR, y si abriste PR o no y por qué.
No mergees. El merge es decisión humana.
```

## A4 — `qontera-service-workspace-contract`

```text
Actuá como el orquestador embebido de qontera-service-workspace-contract, ejecutando en
OpenCode. Sos el ejecutor de este pedido: podés escribir en este repo y solo en este repo.

Tarea acotada y aditiva: verificar si este repo tiene CLAUDE.md y, si falta, agregarlo.

Paso 0 — obligatorio antes de afirmar nada:
Contrastá contra el remoto antes de concluir que el archivo falta.
  git ls-remote --heads origin refs/heads/main
  gh api repos/Qontera-Group/qontera-service-workspace-contract/contents/CLAUDE.md --jq .name

Atención específica de este repo, verificado el 2026-07-23: hay 12 archivos en working tree
con BLOB-NOT-IN-ODB. El árbol de trabajo es la única copia que existe de ese contenido.
Preservalos y NO los incluyas en el staging de esta tarea.

Paso 1 — reportar:
- Rama actual y resumen de git status.
- Estado de los 12 archivos sin respaldo en el object database.
- Si CLAUDE.md existe en el remoto (no solo en el clon local).
- Qué archivos del repo carga tu runtime automáticamente al iniciar sesión.

Paso 2 — solo si CLAUDE.md NO existe en el remoto:
Creá rama nueva y agregá CLAUDE.md en la raíz con este contenido exacto:

    # CLAUDE.md

    Claude Code carga este archivo automáticamente al iniciar sesión en este repositorio.

    El contrato operativo de este repo es `AGENTS.md`. Leelo antes de tocar código,
    documentación o estado de Git.

    Reglas que no dependen de leer otro archivo:

    - No commitear ni pushear sin pedido explícito del usuario.
    - No exponer secretos, `.env`, tokens, credenciales ni datos de cliente.
    - Staging explícito por nombre de archivo. Nunca `git add .`.
    - Sin atribución de IA en los mensajes de commit.

Reglas de escritura, sin excepción:
- Preservá todo trabajo no commiteado. Acá el working tree es la única copia de 12 archivos.
- Staging explícito por nombre. Nunca git add .
- Rebasá sobre main y confirmá que el diff sea puramente aditivo antes de abrir el PR.
- Sin atribución de IA ni Co-Authored-By.
- No muestres secretos, .env, tokens, claves, credenciales, datos de cliente ni logs.
- Este repo tiene CI (validate-contracts.yml). Confirmá que quede en verde.

Si CLAUDE.md ya existe: reportá su contenido y no modifiques nada.

Devolvé: rama, diffstat, link del PR, estado del CI, y si abriste PR o no y por qué.
No mergees. El merge es decisión humana.
```

---

# Parte B — Prompts para Claude Code

> **OBSOLETOS (2026-07-23).** Ningún repo abrió PR: los cuatro ejecutores bloquearon por
> falta de issue aprobado. Estos prompts verifican un PR inexistente. Reemplazados por la
> ronda B de `2026-07-23-claude-md-pointer-results.md`. Se conservan como evidencia de lo
> que se envió.

Rol: **verificador**. Read-only, no escribe, no corrige. Enviar **solo después** de que
volvió el PR del repo correspondiente.

Estos prompts cumplen doble función: verifican el trabajo del ejecutor **y** miden la
hipótesis, porque la sesión arranca en un repo que ya debería tener `CLAUDE.md`.

## B1 — `qontera-platform-infrastructure`

```text
Actuá como verificador read-only de qontera-platform-infrastructure, ejecutando en Claude
Code. No escribís, no corregís, no commiteás. Reportás y parás.

Antes que nada, y aunque parezca trivial, respondé con precisión:
- ¿Cargaste algún archivo de este repositorio automáticamente al iniciar esta sesión?
- Si sí: ¿cuál o cuáles, y qué decían?
- ¿Ves un archivo CLAUDE.md en la raíz? ¿Lo cargaste vos o lo estás leyendo porque te lo
  pregunto ahora?

Esa respuesta es el objeto del experimento. No la infieras ni la adornes: si no estás
seguro de qué cargó tu runtime, decilo.

Después, verificá el PR que agregó CLAUDE.md a este repo:
- ¿El diff es puramente aditivo? ¿Toca algo además de CLAUDE.md?
- ¿La rama está rebasada sobre main, o revierte trabajo ya mergeado?
- ¿Entró algún archivo que no debía: caches, rutas absolutas del operador, binarios,
  secretos, .env, session-*.md, .atl/?
- ¿El mensaje de commit tiene atribución de IA o Co-Authored-By? No debe tenerla.
- ¿Quedó trabajo no commiteado que el ejecutor haya pisado?

Contrastá contra el remoto, no solo contra el clon local:
  gh api repos/Qontera-Group/qontera-platform-infrastructure/contents/CLAUDE.md --jq .name

Reglas:
- Toda afirmación falsable se contrasta contra disco o contra la API antes de dictaminar.
- "No verificable" con el motivo vale más que una respuesta plausible.
- Si encontrás una divergencia con lo que reportó el ejecutor, pará y escalá. No la arregles.
- No expongas secretos, .env, tokens, credenciales, datos de cliente ni logs sensibles.
```

## B2 — `qontera-admin-wb`

```text
Actuá como verificador read-only de qontera-admin-wb, ejecutando en Claude Code. No
escribís, no corregís, no commiteás. Reportás y parás.

Antes que nada, y aunque parezca trivial, respondé con precisión:
- ¿Cargaste algún archivo de este repositorio automáticamente al iniciar esta sesión?
- Si sí: ¿cuál o cuáles, y qué decían?
- ¿Ves un archivo CLAUDE.md en la raíz? ¿Lo cargaste vos o lo estás leyendo porque te lo
  pregunto ahora?

Esa respuesta es el objeto del experimento. No la infieras ni la adornes.

Después, verificá el PR que agregó CLAUDE.md a este repo:
- ¿El diff es puramente aditivo? ¿Toca algo además de CLAUDE.md?
- ¿La rama parte de main y no de la rama de PR #14? ¿Se solapa con PR #14?
- ¿Entró algún archivo que no debía: caches, rutas absolutas, binarios, secretos, .env,
  session-*.md, .atl/?
- ¿El mensaje de commit tiene atribución de IA o Co-Authored-By? No debe tenerla.

Contexto que necesitás para no repetir un error previo: la auditoría del 2026-07-23 emitió
un hallazgo falso sobre este repo (H2, gobernanza ausente de main) por leer el main local
desactualizado. AGENTS.md sí está en main desde PR #13. Contrastá contra el remoto:
  gh api repos/Qontera-Group/qontera-admin-wb/contents/CLAUDE.md --jq .name

Reglas:
- Toda afirmación falsable se contrasta contra disco o contra la API antes de dictaminar.
- "No verificable" con el motivo vale más que una respuesta plausible.
- Si encontrás divergencia con lo que reportó el ejecutor, pará y escalá. No la arregles.
- No expongas secretos, .env, tokens, credenciales, datos de cliente ni logs sensibles.
```

## B3 — `qontera-app`

```text
Actuá como verificador read-only de qontera-app, ejecutando en Claude Code. No escribís, no
corregís, no commiteás. Reportás y parás.

Antes que nada, y aunque parezca trivial, respondé con precisión:
- ¿Cargaste algún archivo de este repositorio automáticamente al iniciar esta sesión?
- Si sí: ¿cuál o cuáles, y qué decían?
- ¿Ves un archivo CLAUDE.md en la raíz? ¿Lo cargaste vos o lo estás leyendo porque te lo
  pregunto ahora?

Esa respuesta es el objeto del experimento. No la infieras ni la adornes.

Después, verificá el PR que agregó CLAUDE.md a este repo, con foco en preservación:
- Al 2026-07-23 este repo tenía 2 commits locales sin pushear y 4 archivos con blobs
  dangling. ¿Siguen existiendo? ¿El ejecutor pisó algo?
- ¿El diff es puramente aditivo? ¿Toca algo además de CLAUDE.md?
- ¿La rama está rebasada sobre main?
- ¿Entró algún archivo que no debía: caches, .atl/ con rutas absolutas del operador,
  binarios, secretos, .env, session-*.md?
- ¿El mensaje de commit tiene atribución de IA o Co-Authored-By? No debe tenerla.

Contrastá contra el remoto:
  gh api repos/Qontera-Group/qontera-app/contents/CLAUDE.md --jq .name

Reglas:
- Toda afirmación falsable se contrasta contra disco o contra la API antes de dictaminar.
- "No verificable" con el motivo vale más que una respuesta plausible.
- Si encontrás divergencia con lo que reportó el ejecutor, pará y escalá. No la arregles.
- No expongas secretos, .env, tokens, credenciales, datos de cliente ni logs sensibles.
```

## B4 — `qontera-service-workspace-contract`

```text
Actuá como verificador read-only de qontera-service-workspace-contract, ejecutando en
Claude Code. No escribís, no corregís, no commiteás. Reportás y parás.

Antes que nada, y aunque parezca trivial, respondé con precisión:
- ¿Cargaste algún archivo de este repositorio automáticamente al iniciar esta sesión?
- Si sí: ¿cuál o cuáles, y qué decían?
- ¿Ves un archivo CLAUDE.md en la raíz? ¿Lo cargaste vos o lo estás leyendo porque te lo
  pregunto ahora?

Esa respuesta es el objeto del experimento. No la infieras ni la adornes.

Después, verificá el PR que agregó CLAUDE.md a este repo, con foco en preservación:
- Al 2026-07-23 había 12 archivos en working tree con BLOB-NOT-IN-ODB, sin ninguna otra
  copia. ¿Siguen ahí? ¿El ejecutor los stageó, los movió o los perdió?
- ¿El diff es puramente aditivo? ¿Toca algo además de CLAUDE.md?
- ¿El CI (validate-contracts.yml) quedó en verde?
- ¿Entró algún archivo que no debía: caches, rutas absolutas, binarios, secretos, .env?
- ¿El mensaje de commit tiene atribución de IA o Co-Authored-By? No debe tenerla.

Contrastá contra el remoto:
  gh api repos/Qontera-Group/qontera-service-workspace-contract/contents/CLAUDE.md --jq .name

Reglas:
- Toda afirmación falsable se contrasta contra disco o contra la API antes de dictaminar.
- "No verificable" con el motivo vale más que una respuesta plausible.
- Si encontrás divergencia con lo que reportó el ejecutor, pará y escalá. No la arregles.
- No expongas secretos, .env, tokens, credenciales, datos de cliente ni logs sensibles.
```

---

## Verificación posterior (auditor, en `pruebaengram`)

Cuando vuelvan las ocho respuestas, se contrasta contra el remoto —no contra ningún clon
local— y se cierra o reabre:

```bash
gh api repos/Qontera-Group/<repo>/contents/CLAUDE.md --jq .name
gh pr list --repo Qontera-Group/<repo> --state all --limit 5
```

La hipótesis se resuelve con las respuestas B1–B4 a la primera pregunta:

| Resultado | Consecuencia |
|---|---|
| Las sesiones Claude cargaron `CLAUDE.md` solas | Confirmada. Se corrige `QONTERA_ORCHESTRATION_STANDARD.md`: la ventaja del ejecutor OpenCode queda reducida a `permission.bash` |
| No lo cargaron | Refutada. El estándar mantiene su justificación actual y el humano sigue transportando el contrato a mano |

## Bloqueo — `qontera-web`

**No enviar ningún prompt de este pedido a `qontera-web`, ni el A ni el B.**

Ningún commit del clon local existe en el remoto (`gh api .../commits/<sha>` → 422 en los
cuatro probados). El remoto fue reconstruido desde cero el 2026-06-13 y las dos historias
no comparten ancestro. Crear una rama y abrir un PR desde ese clon es operar sobre un
repositorio que ya no es el publicado.

Bloqueado hasta que el PM decida cuál repositorio es canónico.

## Cumplimiento del protocolo

Este pedido cae bajo el umbral de notificación bilateral de `HYBRID_SYNC_PROTOCOL.md`
(cambio en las reglas de orquestación). Corresponde bloque SYNC en `HYBRID_SYNC_LOG.md`
cuando se envíe.
