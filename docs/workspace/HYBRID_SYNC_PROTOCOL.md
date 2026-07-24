# Protocolo de Sincronización Híbrida

Norma para mantener entendimiento compartido entre los orquestadores de distinto
proveedor que coexisten en el ecosistema: Claude Code (auditor y verificador) y
OpenCode/GentleAI bajo suscripción OpenAI (ejecutor en owner-repos).

Complementa `QONTERA_ORCHESTRATION_STANDARD.md` (roles y reglas de escritura) y
`CROSS_REPO_HANDOFF.md` (mecánica del pedido por repo). Este documento cubre una sola
pregunta: **cuándo y cómo se entera el otro modelo.**

## El problema real

No hay canal entre runtimes. Claude Code no lee la configuración de OpenCode, y OpenCode
no lee la de Claude. **El humano es el único bus de mensajes del ecosistema**, y no hay
forma de automatizar eso sin violar las fronteras de propiedad.

La consecuencia de diseño es la que importa: si el protocolo pide más transporte manual
del que el operador puede sostener, no produce cumplimiento parcial — produce cero
cumplimiento con apariencia de cobertura.

Precedente verificado en este mismo ecosistema (E2 de la auditoría 2026-07-23): la política
de PR exigía issue aprobado, `status:approved` y taxonomía de labels sobre andamiaje que
ningún repo tenía. Resultado: los 13 PRs los abrió un humano, sin issue y sin labels. **La
política nunca se cumplió porque nunca fue satisfacible.**

Por eso este protocolo define un umbral, no una obligación universal.

## Frontera de proveedor vs. frontera de propiedad

Distinción que ordena el resto:

| Frontera | Qué prohíbe | Dureza |
|---|---|---|
| **Propiedad** | El auditor no escribe en repos de otro dueño | Dura — no se cruza nunca |
| **Runtime / proveedor** | Ningún modelo lee la config del otro | Blanda — se compensa con artefactos versionados |

La frontera de propiedad es la que no se negocia. La de proveedor es un problema de
contexto, no de capacidad: los verificadores Claude en owner-repos produjeron los hallazgos
H8 y H9 —los dos más graves de la auditoría, ambos correcciones del trabajo del auditor—
operando solo desde el prompt.

Corolario: cuando un modelo "no entiende" el trabajo del otro, el diagnóstico por defecto
es **contexto faltante**, no incompatibilidad de proveedor.

## Umbral de notificación bilateral

### Obligatoria

| Evento | Por qué |
|---|---|
| Cambio en un contrato publicado (`engram-cloud-status.v1`, schemas, campos consumidos) | Rompe consumidores en otros repos |
| Cambio de frontera de propiedad o del namespace `ENGRAM_PROJECT` | Redefine quién manda sobre qué |
| Merge a `main` de cualquier owner-repo | Cambia el estado que los demás asumen como base |
| Borrado, reescritura de historia o `push --force` | Irreversible |
| Reestructuración de repo, o mover artefactos entre repos | Invalida rutas calificadas `{repo}:{ruta}` en documentos de otros repos |
| Alta o baja de un repo del ecosistema | Cambia el mapa |
| Cambio en las reglas de orquestación mismas | Ambos modelos operan bajo ellas |

### No requiere notificación

- Lecturas, consultas, análisis y auditorías (no mutan nada).
- Commits en rama sin PR abierto.
- Documentación interna que no cruza frontera de repo.
- Trabajo local en `pruebaengram` sin impacto cross-repo.

Ante la duda, notificar. El costo de un bloque de más es un párrafo; el de uno de menos es
un hallazgo falso, como H2.

## Formato del bloque de sincronización

Un solo artefacto que ambos modelos leen literalmente. **El humano transporta, no
redacta.** Quien produce el cambio produce el bloque; el humano lo pega en la otra sesión
sin editar.

```txt
SYNC <fecha> — <repo>:<rama o PR>
Evento:            <categoría del umbral>
Qué cambia:        <1-3 líneas, concreto>
Impacto cross-repo:<repos afectados, o "ninguno">
Verificado remoto: <sí/no + comando usado>
Pendiente humano:  <decisión requerida, o "ninguna">
```

Se registra append-only en `HYBRID_SYNC_LOG.md`. Ese registro es la única prueba auditable
de que el protocolo se está cumpliendo.

## Todo prompt se entrega etiquetado por runtime destino

**Ambos runtimes están vivos en cada repositorio de la organización.** Un pedido que no dice
a cuál va obliga al humano a decidirlo en el momento del envío, que es donde se pierde el
contexto.

Todo pedido cross-repo se entrega con:

1. **Runtime destino en la primera línea del prompt**, dentro del bloque copiable —
   no solo en el encabezado del documento, porque lo que se pega es el bloque.
2. **Rol explícito**: ejecutor (escribe) o verificador (read-only).
3. **Tabla de orden de envío** cuando hay más de un prompt, indicando qué espera a qué.
4. **Prompts completos, nunca variantes por sustituir.** El error A2 de la auditoría
   entregó bloques con `{PAYLOAD}` sin ensamblar y bloqueó ocho sesiones. Un documento más
   largo cuesta menos que un prompt mal ensamblado.

Regla de secuencia derivada del estándar: cuando el pedido escribe, ejecutor y verificador
**nunca** salen juntos. El verificador se envía después de que volvió el PR.

### Guardia de identidad — primer paso de todo prompt que escribe

El transporte manual falla: el 2026-07-23 un prompt dirigido a
`qontera-platform-infrastructure` se pegó en la sesión de `qontera-app`. El ejecutor frenó,
pero **frenó porque el commit citado no existía, no porque el repo no fuera el suyo** —
declarar la identidad en la primera línea no alcanzó, porque nadie le pidió verificarla.
Con datos que hubieran coincidido por casualidad, el push ajeno se ejecutaba.

Todo prompt de escritura abre con:

```txt
Paso de identidad, antes que nada: confirmá que el repositorio en el que estás corriendo es
<repo>. Si no lo es, no ejecutes nada más y decime en qué repo estás. Este prompt no aplica
a ningún otro repositorio.
```

El costo es una línea. El daño que evita es una escritura en el repo equivocado.

## Regla que hace verificable al protocolo

> Un evento de umbral sin su bloque en `HYBRID_SYNC_LOG.md` es un hallazgo de la próxima
> auditoría, con la misma severidad que una afirmación no verificada.

Sin esta regla el protocolo sería aspiracional, que es exactamente el modo en que falló la
política de PR. Con ella, el incumplimiento deja rastro y se detecta.

## Ciclo

```
1. Quien cambia   → produce el bloque SYNC junto con el cambio
2. Humano         → lo pega en la sesión del otro modelo, sin editar
3. Otro modelo    → acusa recibo indicando qué de su trabajo queda afectado
4. Humano         → registra el bloque en HYBRID_SYNC_LOG.md
5. Auditor        → contrasta el log contra el estado real en la próxima auditoría
```

El paso 3 no es ceremonia: es donde aparece el conflicto que nadie previó. Si el otro
modelo responde que nada lo afecta y después resulta que sí, eso también queda registrado.

## Antes de afirmar el estado de un repo

Heredado de H8, sin excepciones: **los refs locales mienten.** Ningún bloque SYNC declara
el estado de un repositorio sin contraste contra el remoto.

```bash
git ls-remote --heads <url> refs/heads/main     # solo lectura; git fetch muta refs
gh api repos/<org>/<repo>/contents/<ruta> --jq .name
```

En la auditoría del 2026-07-23, 4 de 5 repos tenían `main` local desincronizado.

### Y el snapshot de arranque también miente

Segundo orden del mismo problema, medido el 2026-07-24 en **4 de 4** sesiones verificadoras:
la rama que el runtime reporta al iniciar puede no ser la que tiene el disco. El desfase
observado llegó a ~51 minutos, y en un caso el disco nunca estuvo en la rama que el snapshot
declaraba.

Todo verificador contrasta antes de usar el snapshot como premisa:

```bash
git symbolic-ref HEAD        # rama real, ahora
git status --short           # estado real, ahora
git reflog -n 5              # qué pasó entre el arranque y el primer comando
```

Un hallazgo emitido sobre la rama del snapshot, sin este contraste, describe un repositorio
que puede no existir.

## Bloqueo vigente

`qontera-web` queda **fuera de todo pedido de escritura** hasta resolver cuál repositorio
es canónico. El clon local no comparte ancestro con el publicado; ninguna operación git
sobre él es segura. La preservación ahí es copia de archivos, nunca push.
