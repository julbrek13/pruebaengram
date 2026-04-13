---
name: trazabilidad-doble-canal
description: >
  Protocolo de reporte obligatorio en dos canales para evitar confusión de trazabilidad:
  separar explícitamente cambios en archivos del repo versus cambios de memoria Engram.
  Trigger: cuando el usuario pida trazabilidad clara, seguimiento paso a paso,
  o mencione confusión entre cambios visibles en git y operaciones `mem_*`.
license: Apache-2.0
metadata:
  author: gentleman-programming
  version: "1.0"
---

## Cuándo usar

- En sesiones de curso/mentoría con checkpoints frecuentes.
- Cuando haya mezcla de cambios en archivos + memoria.
- Cuando el usuario pida "dejar asentado" el formato de seguimiento.

## Patrones críticos (OBLIGATORIOS)

1. **Reporte en dos secciones fijas**
   - `Cambios en archivos (repo)`
   - `Cambios en Engram (memoria)`

2. **No mezclar evidencia**
   - Repo se valida con `git status`/`git diff`.
   - Engram se valida con `mem_context`/`mem_search`/`mem_get_observation`.

3. **Cuando no haya cambios en uno de los canales, declararlo explícitamente**
   - Ejemplo: "Cambios en archivos: ninguno".

4. **Nombrar rutas e IDs concretos**
   - Repo: rutas de archivos modificados.
   - Engram: título + `id` de observación cuando aplique.

5. **Cerrar cada bloque con estado de trazabilidad**
   - `Estado: 🟢 claro / 🟡 parcial / 🔴 confuso`.

## Plantilla obligatoria

```md
## Cambios en archivos (repo)
- [archivo/ruta] — [qué cambió y por qué]

## Cambios en Engram (memoria)
- [id/título/topic_key] — [qué se guardó y por qué]

## Estado de trazabilidad
- [🟢/🟡/🔴] [justificación breve]
```

## Regla de oro

**Si no está separado en dos canales, la trazabilidad del curso se considera incompleta.**
