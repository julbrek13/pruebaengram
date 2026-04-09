---
name: trazabilidad-commits-curso
description: >
  Protocolo de trazabilidad didáctica por commits para curso: obliga a sugerir
  checkpoint de commit al enseñar conceptos y ante creación/modificación/eliminación
  de archivos clave. Trigger: cuando estemos en modo curso/mentoría o el usuario
  pida evidencia de cambios por etapa.
license: Apache-2.0
metadata:
  author: gentleman-programming
  version: "1.0"
---

## Cuándo usar

- En sesiones de curso con avance por etapas.
- Cuando se enseñe un concepto con aplicación práctica.
- Cuando haya cambios en archivos clave para el aprendizaje.
- Cuando el usuario pida trazabilidad, evidencia o checkpoints.

## Patrones críticos (OBLIGATORIOS)

1. **Checkpoint didáctico por concepto**
   - Al cerrar cada bloque conceptual aplicado, proponer un commit de checkpoint.
   - Formato sugerido: `feat(course): checkpoint <seccion> - <concepto>`.

2. **Checkpoint por archivo clave tocado**
   - Si se crea/modifica/elimina un archivo clave de la sección, proponer commit.
   - Archivos clave típicos: `README`, `package.json`, `src/**`, `tests/**`, `.agent/**`, `.atl/**`.

3. **Nunca commitear sin pedido explícito**
   - Regla de seguridad: sugerir el commit y esperar confirmación del usuario.
   - Si el usuario confirma, recién ahí ejecutar flujo de commit.

4. **Mensaje orientado a aprendizaje**
   - Explicar el **por qué** del checkpoint en 1 línea.
   - Ejemplo: "Este commit separa el concepto de integración real del manejo de errores async para revisar evolución sin mezclar contextos".

5. **Micro bitácora por checkpoint**
   - Registrar: sección, concepto, archivos afectados, riesgo controlado.
   - Si aplica, guardar en Engram una observación `pattern` con topic key estable del curso.

6. **Optimización continua del skill (auto-mejora)**
   - Después de cada uso, hacer mini retro de 30 segundos:
     - ¿El checkpoint propuesto fue claro?
     - ¿El corte fue demasiado grande o demasiado chico?
     - ¿Mejoraría el naming del commit para búsqueda futura?
   - Si hay mejora, actualizar heurística operativa para la siguiente sesión.

## Protocolo operativo (paso a paso)

1. Detectar cierre de bloque conceptual o cambio en archivo clave.
2. Proponer checkpoint con mensaje de commit + motivo didáctico.
3. Esperar confirmación del usuario.
4. Si confirma: ejecutar commit y mostrar `git status` post-commit.
5. Guardar memoria breve de trazabilidad (si aplica).

## Plantilla de propuesta de checkpoint

```md
### Checkpoint recomendado
- **Motivo**: [concepto o cambio clave]
- **Archivos clave**: [lista corta]
- **Commit sugerido**: `feat(course): checkpoint <seccion> - <concepto>`

¿Querés que lo commitee ahora?
```

## Regla de oro

**Si no hay trazabilidad por checkpoint, se pierde capacidad de aprendizaje comparativo.**
