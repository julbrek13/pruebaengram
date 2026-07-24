# Qontera — Estándar de Orquestación Multi-Modelo

Norma de trabajo para desarrollo, mantenimiento, análisis y auditoría en el ecosistema
Qontera cuando intervienen orquestadores de más de un proveedor.

Deriva de la auditoría cruzada del 2026-07-23 (`docs/qontera/audits/`), que verificó ocho
informes de cinco repos contra evidencia en disco. Complementa
`CROSS_REPO_HANDOFF.md` (coordinación), `CROSS_REPO_AUDIT_REQUEST.md` (auditoría) y
`HYBRID_SYNC_PROTOCOL.md` (cuándo se entera el otro modelo).

## Los tres roles

| Rol | Dónde corre | Runtime / modelo | Puede escribir |
|---|---|---|---|
| **Auditor** | `pruebaengram` | Claude Code — `claude-opus-4-8` | Solo en `pruebaengram` |
| **Ejecutor** | owner-repo | OpenCode — ver tabla de modelos | Solo en su propio repo |
| **Verificador** | owner-repo | Claude Code — `claude-opus-4-8` | Nunca |

### Por qué el ejecutor es OpenCode

No es preferencia de proveedor. Los `.opencode/agent/*.md` versionados son la identidad que
ese runtime carga efectivamente.

> **Corregido y cerrado (2026-07-24).** La versión anterior decía que las sesiones Claude
> «no cargan ningún archivo del repo». Era falso, y el error era del auditor: esas cuatro
> sesiones arrancaron con un snapshot desactualizado (R9) y por eso no había archivo que
> cargar. Un test limpio lo probó (R8-bis en `requests/2026-07-23-claude-md-pointer-results.md`):
> con `CLAUDE.md` commiteado en la rama activa y snapshot al día, Claude Code lo inyecta
> automáticamente al iniciar. La asimetría es un archivo faltante, no una propiedad del
> runtime, y el `CLAUDE.md` puntero la resuelve. **La ventaja del ejecutor OpenCode que
> subsiste es `permission.bash`**, no la carga de contrato.

Para **escribir** conviene el runtime que corre bajo el contrato versionado del repo. El
caso más claro es `qontera-service-workspace-contract`, cuyo agente define
`permission.bash` con `"*": ask` y allowlist de comandos de lectura — el único control
técnico real del ecosistema, y solo aplica en OpenCode.

### Por qué el verificador es Claude

Independencia real, verificada: Claude Code no lee `~/.config/opencode/AGENTS.md`, así que
ejecutor y verificador no comparten instrucciones. En la auditoría los informes de Claude
detectaron sistemáticamente más superficie (delta resuelto upstream vs. net-new, tercer
workspace de tenant, `/qinit` inexistente).

### Modelos declarados por agente — estado verificado 2026-07-23

| Repo | `mode` | `model` |
|---|---|---|
| `qontera-platform-infrastructure` | `primary` | `openai/gpt-5.5` |
| `qontera-app` | `primary` | `openai/gpt-5.5` |
| `qontera-service-workspace-contract` | `primary` | **sin declarar** — hereda default |
| `qontera-admin-wb` (en `eb1888e`) | `primary` | **sin declarar** — hereda default |
| `qontera-web` | — | **sin `.opencode/`** |

Inconsistencia abierta: 2 de 5 repos no fijan modelo y 1 no tiene agente. Un cambio de
default del runtime altera silenciosamente quién ejecuta. Pendiente de normalizar.

## Modo por tipo de tarea

**La regla que evita el daño:** en paralelo solo lo que no escribe.

| Tarea | Modo | Por qué |
|---|---|---|
| Auditoría, análisis, diagnóstico | **Ambos en paralelo** | Solo lectura: no colisionan y los hallazgos son complementarios |
| Desarrollo, mantenimiento, refactor | **Ejecutor → Verificador**, secuencial | Dos escritores en el mismo árbol se pisan |
| Cambio de una línea, config trivial | **Ejecutor → Auditor** | El auditor verifica directo contra disco |
| Decisión de arquitectura o contrato | **Ambos en paralelo, sin escribir** | Se busca divergencia de criterio, no un PR |

Nunca dos ejecutores sobre el mismo repo. Ambos crearían rama, ambos stagearían los mismos
archivos sucios, ambos abrirían PR — y el segundo trabajaría sobre un árbol que cambió
debajo suyo.

## Reglas permanentes

### Fronteras
1. El auditor no escribe en owner-repos. Produce el pedido; el dueño ejecuta.
2. Repos anidados y de tenant tienen owner propio. Se escala, no se entra.
3. Al citar un artefacto de otro repo, ruta calificada: `{repo}:{ruta}`.

### Escritura
4. Rama nueva + PR. Nunca commit directo a `main`.
5. Staging explícito por nombre de archivo. **Nunca `git add .`** — en varios repos hay
   untracked no ignorados (`.atl/`, `openspec/`, `.github/`) que se colarían.
6. **Rebasar sobre `main` y confirmar diff puramente aditivo antes de abrir el PR.** Una
   rama N commits detrás produce un diff que revierte trabajo ya mergeado. El riesgo no es
   el trabajo sucio: es la antigüedad de la rama.
7. Si un cambio acopla archivos (un script que referencia un schema nuevo), van en el mismo
   commit. Orden equivocado = CI en rojo.
8. Sin atribución de IA en mensajes de commit.

### Verificación
9. El verificador no arregla. Reporta y para. La corrección la ejecuta quien hizo el cambio.
10. Divergencia entre ejecutor y verificador → parar y escalar al humano.
11. Toda afirmación falsable se contrasta contra disco antes de dictaminar.
12. "No verificable" con el motivo vale más que una respuesta plausible. Un hueco declarado
    es un hallazgo; un hueco rellenado es un defecto.

### Dato prohibido
13. Nunca exponer: secretos, `.env`, tokens, credenciales, claves privadas, datos de
    cliente, memorias Engram crudas, prompts internos, logs sensibles, volcados de memoria.
14. Antes de commitear, verificar que no se cuelen caches, rutas absolutas del operador ni
    binarios grandes.

## Trazabilidad

`Co-Authored-By` = 0 en la historia de todos los repos auditados: no hay forma de probar qué
modelo produjo qué trabajo previo. La regla 8 mantiene esa política.

En consecuencia, la trazabilidad de modelo se registra **en el artefacto de auditoría**, no
en el commit: cada informe en `docs/qontera/audits/` declara qué runtime produjo qué
sección. Es el único registro auditable de atribución del ecosistema.

## Ciclo de un cambio

```
1. Auditor    → detecta y planifica; redacta el pedido
2. Humano     → envía el pedido al Ejecutor del owner-repo
3. Ejecutor   → rama + commit + PR en su repo; devuelve link y diffstat
4. Humano     → envía el pedido de verificación al Verificador
5. Verificador→ read-only; confirma o reporta divergencia; para
6. Auditor    → contrasta ambas respuestas contra disco; cierra o reabre
7. Humano     → decide el merge
```

El merge siempre es decisión humana. Ningún orquestador mergea.

## Estado de aplicabilidad por repo

| Repo | Ejecutor disponible | Verificador | Nota |
|---|---|---|---|
| `qontera-platform-infrastructure` | ✅ agente en `main` | ✅ | Único con agente publicado en `main` |
| `qontera-app` | ✅ agente en `main` | ✅ | Agente sin pushear a origin |
| `qontera-service-workspace-contract` | ✅ agente + 2 skills en `main` | ✅ | Único con CI y con `permission.bash` |
| `qontera-admin-wb` | ⚠️ agente solo en rama sin mergear | ✅ | Ver conflicto de PR #14 |
| `qontera-web` | ❌ sin `.opencode/` | ✅ | Ejecuta bajo config global no versionada |
