# Registro de Sincronización Híbrida

Registro append-only de los eventos que cruzaron el umbral de
`HYBRID_SYNC_PROTOCOL.md`. Es la única prueba auditable de que el protocolo se cumple.

Un evento de umbral sin bloque acá es un hallazgo de la próxima auditoría.

Entrada más reciente arriba.

---

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
