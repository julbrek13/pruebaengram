# Registro de Sincronización Híbrida

Registro append-only de los eventos que cruzaron el umbral de
`HYBRID_SYNC_PROTOCOL.md`. Es la única prueba auditable de que el protocolo se cumple.

Un evento de umbral sin bloque acá es un hallazgo de la próxima auditoría.

Entrada más reciente arriba.

---

```txt
SYNC 2026-07-24 — pruebaengram:tech/tp-3-flujo-ramas → orquestador OpenCode del mismo repo
Evento:            Cambio en las reglas de orquestación
Qué cambia:        Guardia de identidad en todo prompt que escribe; contraste obligatorio
                   del snapshot de arranque contra el disco; retractación de R6 (sin
                   inventario previo SÍ se puede probar preservación: git es
                   content-addressed).
Impacto cross-repo:Ninguna escritura pendiente. Los 4 owner-repos con rama pusheada, sin PR.
Verificado remoto: sí — ls-remote y gh api por ejecutor y verificador en los 4 repos
Acuse del otro modelo (recibido, ciclo cerrado):
                   - Sin solapamiento: su sesión fue de lectura. Señala que los 2 cambios
                     de .obsidian/ deben quedar fuera de todo commit de esta rama. Cumplido.
                   - CORRIGE al auditor: el AGENTS.md global NO impone el issue aprobado.
                     El bloqueo es exclusivo de las skills branch-pr e issue-creation, que
                     viven en la config personal del operador. Registrado en R1 y en la
                     escalación al PM.
Pendiente humano:  política de PR (PM) y test limpio de autoload
```

```txt
SYNC 2026-07-23 — 4 owner-repos: ramas docs/add-claude-md*
Evento:            Escritura en owner-repos + evidencia que afecta las reglas de PR
Qué cambia:        Los 4 ejecutores OpenCode agregaron CLAUDE.md (+13/-0) en rama. Ninguno
                   abrió PR: los 4 bloquearon por falta de issue con status:approved.
                   Confirma E2 experimentalmente — el bloqueo es de la config global de
                   OpenCode, no de ningún repo.
Impacto cross-repo:platform-infrastructure, admin-wb, app, service-workspace-contract.
                   web excluido (clon huérfano). Decisión de política escalada al PM.
Verificado remoto: sí — los 4 ejecutores corrieron gh api (404) y git ls-remote antes de actuar
Pendiente humano:  (1) política de PR: 4 opciones elevadas al PM, sin recomendación del
                   auditor; (2) discrepancia BLOB-NOT-IN-ODB vs unreachable en
                   service-workspace-contract, sin resolver hasta la ronda B
```

```txt
SYNC 2026-07-23 — pruebaengram:tech/tp-3-flujo-ramas
Evento:            Cambio en las reglas de orquestación
Qué cambia:        Se instituye el protocolo de sincronización híbrida con umbral de
                   notificación bilateral. Se retracta H2 de la auditoría de admin-wb y se
                   agrega verificación remota obligatoria (Paso 0) a todo pedido cross-repo.
Impacto cross-repo:Los cinco repos del ecosistema. Ninguna escritura requerida todavía.
Verificado remoto: sí — git ls-remote y gh api sobre los cinco repos
Pendiente humano:  cuál repositorio de qontera-web es canónico (bloquea ese repo entero)
```
