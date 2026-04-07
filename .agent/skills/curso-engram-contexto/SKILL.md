---
name: curso-engram-contexto
description: >
  Convenciones para guardar contexto del curso (código + conceptos) en Engram
  con topic keys estables, trazabilidad por pilar y recuperación rápida.
  Trigger: cuando el usuario pida continuar el curso, registrar progreso,
  o mejorar memoria/contexto en Engram.
license: Apache-2.0
metadata:
  author: gentleman-programming
  version: "1.0"
---

## Cuándo usar

- Sesiones de curso por etapas (TP-1, TP-2, etc.)
- Cuando se toma una decisión técnica o didáctica
- Cuando se corrige un bug o se descubre un edge case
- Al cerrar una sesión y dejar próximo paso claro

## Patrones críticos

1. Guardar con **topic_key estable** (no inventar uno nuevo cada vez).
2. Separar tipo de nota:
   - `decision`: elecciones de enfoque/arquitectura
   - `bugfix`: error + causa raíz + fix
   - `pattern`: forma reusable de test/flujo
   - `preference`: cómo quiere aprender el usuario
3. Guardar progreso por TP usando `course/testing/tp-*`.
4. Cerrar sesión con `session_summary` y siguiente paso accionable.

## Topic keys recomendadas

- `course/objective`
- `course/preferences`
- `course/progress`
- `course/testing/tp-1`
- `course/testing/patterns`
- `course/engram/workflow`
- `course/git/workflow`

## Plantilla mínima

```md
**What**: ...
**Why**: ...
**Where**: ...
**Learned**: ...
```

## Regla de oro

**Toda decisión que afecte cómo se aprende o cómo se implementa se guarda.**
