---
name: metodologia-ramas-tp-curso
description: >
  Metodología de ramas por TP técnico para curso: obliga a declarar primero
  contexto de ramas (técnica obligatoria + docs opcional) antes de implementar.
  Trigger: cuando se planifique/inicie un TP, se pida alcance de trabajo,
  o haya dudas sobre cómo separar código y documentación por ramas.
license: Apache-2.0
metadata:
  author: gentleman-programming
  version: "1.0"
---

## Cuándo usar

- Al arrancar cualquier TP técnico del curso.
- Cuando se define alcance antes de implementar.
- Cuando hay que decidir si documentación va en la misma rama o separada.

## Patrones críticos (OBLIGATORIOS)

1. **Todo TP declara rama técnica (siempre)**
   - Formato: `tech/tp-N-<tema>`.
   - Sin rama técnica declarada, no se avanza a detalles de implementación.

2. **Rama de documentación es opcional y explícita**
   - Formato: `docs/tp-N-<tema>`.
   - Debe declararse `sí/no` con criterio (por qué se separa o no).

3. **Primero contexto de rama, después implementación**
   - Orden obligatorio: ramas → objetivo → alcance → ejecución técnica.

4. **Estructura de respuesta estándar para trabajo de curso**
   - `Rama técnica`
   - `Objetivo técnico`
   - `Alcance`
   - `Criterio de salida`
   - `Commit esperado`
   - `Relación con flujo Git`

5. **No commitear sin pedido explícito**
   - Se propone commit esperado como checkpoint, pero no se ejecuta sin confirmación.

## Convención de nombres

### Patrón oficial GE-3

- Técnica: `^tech/tp-[0-9]+-[a-z0-9-]+$`
- Documentación: `^docs/tp-[0-9]+-[a-z0-9-]+$`

Ejemplos válidos:
- `tech/tp-3-flujo-ramas`
- `docs/tp-3-flujo-ramas`

Ejemplos inválidos:
- `feature/tp-3-flujo-ramas` (prefijo fuera de política)
- `tech/tp-x-flujo-ramas` (N no numérico)
- `tech/tp-3-Flujo-Ramas` (mayúsculas no permitidas)

Manejo de no conformidad:
1. Marcar rama como no conforme en checklist operativo.
2. Renombrar local/remoto o recrear rama con convención correcta.
3. Revalidar con `npm run verify:ge3` antes de continuar.

- TP 1 autenticación: `tech/tp-1-autenticacion`
- TP 2 api-rest: `tech/tp-2-api-rest`
- Docs TP 2 (si aplica): `docs/tp-2-api-rest`

Reglas de naming:
- `tp-N` con N numérico del curso.
- Tema en minúsculas y kebab-case.
- Evitar términos ambiguos (`fix`, `cambios`, `misc`).

## Criterio para separar rama de docs

Separar en `docs/tp-N-<tema>` cuando se cumpla al menos uno:
- Documentación extensa que puede revisarse en paralelo al código.
- Público/reviewer distinto para docs vs implementación técnica.
- Riesgo de mezclar narrativa didáctica con cambios de código en un mismo PR.

Mantener docs en la rama técnica cuando:
- Son notas cortas directamente acopladas al cambio técnico.
- El objetivo es un único PR pequeño y atómico.

## Tradeoffs (rama docs separada)

- **Pros**: mejor foco de revisión, historial más claro por tipo de cambio.
- **Contras**: más overhead de coordinación y sincronización entre ramas.

## Plantilla operativa (obligatoria)

```md
## Contexto de ramas
- Rama técnica: `tech/tp-N-<tema>`
- Rama docs: `docs/tp-N-<tema>` | `no aplica` (motivo)

## Objetivo técnico
- [resultado técnico concreto del TP]

## Alcance
- Incluye: [...]
- No incluye: [...]

## Criterio de salida
- [condición verificable para dar TP por terminado]

## Commit esperado
- `feat(tp-N): <resultado principal>`

## Relación con flujo Git
- [cómo se integra con branch strategy y checkpoints del curso]
```

## Regla de oro

**Sin contexto de ramas definido, no hay implementación válida de TP.**
