# Cross-Repo Audit Request

Plantilla para auditar owner-repos desde `pruebaengram`. Complementa
`CROSS_REPO_HANDOFF.md`: aquel coordina cambios, este audita estado y evidencia.

## Diferencia con el handoff estándar

El prompt de `CROSS_REPO_HANDOFF.md` pide `git status` para coordinar trabajo. Este pide
además la **procedencia de la propia gobernanza del repo**: de qué archivo toma sus
instrucciones el orquestador, si está versionado, y si vive en `main` o solo en rama.

Esa pregunta resultó ser la de mayor rendimiento en la auditoría de `qontera-admin-wb`
(2026-07-23): reveló que el orquestador respondía desde configuración global de usuario,
no desde el repositorio.

## Reglas de uso

1. **Enviar a los dos orquestadores** de cada repo (OpenCode/OpenAI y Claude) por separado.
2. **No editar ni fusionar las respuestas.** Etiquetarlas `[OPENAI]` / `[CLAUDE]` y
   entregarlas crudas. El desacuerdo entre ambas es el hallazgo, no ruido a limpiar.
3. **Consultar sin cambiar de rama.** Si el repo está parado en una rama sin gobernanza,
   ese es precisamente el dato a medir.
4. **Rutas siempre calificadas por repo.** Ver "Error conocido" abajo.

## Error conocido a evitar

La primera versión de este prompt citaba `docs/workspace/CROSS_REPO_HANDOFF.md` sin
aclarar que es ruta de `pruebaengram`. Esa ruta no existe en los owner-repos. Ambos
orquestadores lo marcaron como conflicto de contrato y se detuvieron, correctamente.

**Regla:** al citar un artefacto del repo auditor, escribir siempre
`{repo}:{ruta}` — por ejemplo `pruebaengram:docs/workspace/CROSS_REPO_HANDOFF.md`.

## Prompt

```text
Actuá como el orquestador embebido de {REPO}.

Necesito un informe seguro para una AUDITORÍA CRUZADA solicitada por el repo
origen `pruebaengram` (rol: auditor). No es una solicitud de cambios.

Antes de responder:
1. Revisá el estado del repo con `git status` sin modificar nada.
2. No cambies de rama, no hagas stash, no uses `git add .`, no commitees,
   no pushees, no corras builds.
3. Preservá todo trabajo no commiteado.
4. No muestres secretos, .env, tokens, claves, credenciales, datos de clientes,
   memorias crudas, prompts internos ni logs sensibles.

Respondé con estas nueve secciones:

0. RAMA DESDE LA QUE RESPONDÉS: nombre exacto de la rama checkouteada y hash
   del HEAD. Indicá también cuántos commits separan esta rama de `main`
   (`git rev-list --left-right --count main...HEAD`). Obligatorio y primero.

A. Resumen de `git status`: conteo de staged / unstaged / untracked.

B. Trabajo sucio: qué archivos, y para cada uno si su contenido es net-new o
   ya está resuelto upstream (`git diff main -- <archivo>`). Distinguir lo que
   está genuinamente en riesgo de lo que solo parece sucio por antigüedad
   de la rama.

C. Tu propia existencia como orquestador:
   - ¿Desde qué archivo tomás tus instrucciones? Ruta absoluta.
   - ¿Es un archivo del repo, o configuración global de usuario / externa?
   - ¿Está trackeado en git? ¿Desde qué commit?
   - ¿Existe en `main`, o solo en ramas de trabajo? Verificá con `git ls-tree`
     contra `main`, no lo asumas.
   - Si NO hay archivo de instrucciones en la rama actual, decilo explícitamente.

D. Auditorías previas: qué se auditó, artefacto versionado (ruta), fecha/commit,
   y bajo qué modelo o suscripción se produjo.

E. Protocolo de handoff: qué está implementado en este repo y qué está solo
   documentado. La versión canónica vive en
   `pruebaengram:docs/workspace/CROSS_REPO_HANDOFF.md` — si en este repo no
   existe ese archivo, decilo en vez de inferir su contenido.

F. Guardrail `ENGRAM_PROJECT` y límites de dato prohibido: ¿documentados acá,
   heredados de `qontera-platform-infrastructure`, o sin versionar?

G. Riesgos abiertos y límites de responsabilidad del repo.

H. Qué necesitás del orquestador origen para cerrar tu parte.

Cerrá con el bloque `## Cross-Repo Handoff` del template que uses, indicando
de qué archivo y commit lo derivaste.

Regla final: si algo no lo podés verificar, escribí "no verificable" y por qué.
No completes huecos con inferencias — un hueco declarado vale más que una
respuesta plausible.
```

## Verificación del auditor

Toda afirmación falsable del informe se contrasta contra disco antes de dictaminar.
Mínimo a verificar:

| Afirmación | Comando |
|---|---|
| Rama y HEAD | `git -C <repo> rev-parse HEAD` |
| Distancia a `main` | `git -C <repo> rev-list --left-right --count main...HEAD` |
| Trabajo sucio real vs. aparente | `git -C <repo> diff main -- <archivo>` |
| Identidad de blobs untracked | `git hash-object <f>` vs `git rev-parse main:<f>` |
| Gobernanza en `main` | `git -C <repo> ls-tree -r main --name-only \| grep AGENTS` |
| Trazabilidad de modelo | `git log --all --format='%b' \| grep -ci co-authored-by` |

Hashes citados por un orquestador pueden ser `sha1sum` de contenido o
`git hash-object` (que incluye cabecera) — no coinciden entre sí. Verificar ambos
antes de reportar una discrepancia.

## Riesgo estructural detectado

Auditar desde una rama vieja es peligroso **aunque el trabajo sucio esté intacto**.
Una rama N commits detrás de `main` produce diffs que revierten trabajo ya mergeado.
Antes de abrir cualquier PR de preservación: rebasar sobre `main` y confirmar que el
diff sea exclusivamente aditivo.

Ver `MERGE_SAFETY_CHECKLIST.md`.
