# Estructura del Proyecto

Guía operativa para mantener el repo entendible sin caer en “arquitectura decorativa”.

## Principio rector

No se mueve un archivo por estética. Se mueve cuando mejora al menos una de estas cosas:

- trazabilidad del curso;
- separación de responsabilidades;
- facilidad de testeo;
- recuperación de contexto;
- reducción de ambigüedad para la próxima sesión.

Si no podés explicar el beneficio en una frase, no lo muevas.

## Mapa de responsabilidades

```text
pruebaengram/
├─ src/                  # código TypeScript de práctica
├─ tests/                # tests Vitest y fixtures de aprendizaje
├─ docs/                 # documentación curada del curso y operación
│  └─ gentlaireadme/     # material de referencia/importado, no fuente principal del curso
├─ .agent/skills/        # skills locales que codifican convenciones del proyecto
├─ .atl/                 # registro de skills resuelto para Agent Teams Lite
├─ sdd/                  # snapshots locales ignorados; Engram mantiene el estado persistente
├─ package.json          # scripts y dependencias del entorno TS
└─ README.md             # entrada principal y orden recomendado de lectura
```

## Reglas por carpeta

### `src/`

Contiene unidades de código pequeñas para practicar diseño, testing y refactor.

- Mantener módulos simples mientras el dominio sea chico.
- Crear subcarpetas solo cuando aparezca una responsabilidad estable.
- Evitar mover código antes de tener una razón desde tests o uso real.

### `tests/`

Contiene tests de aprendizaje y evidencia técnica.

- Mantener tests planos mientras el volumen sea bajo.
- Pasar a `tests/lib/`, `tests/integration/` o similar solo si la navegación empieza a doler.
- `fixtures.ts` vive acá porque hoy sirve a tests, no a runtime.

### `docs/`

Es la fuente curada del curso en el repo.

- Los documentos raíz de `docs/` explican operación, progreso y trazabilidad.
- `docs/GENTLEMAN_DOTS_LEARNING_PATH.md` conecta Gentleman.Dots con la curva de aprendizaje del curso.
- `docs/ObsidianVaults-GentleAI-Course/` es el vault de seguimiento visual del curso; usa dashboards, trackers, evidencia y grafo nodal.
- `docs/gentlaireadme/` es referencia importada: sirve como consulta, no como estado canónico del curso.
- Si Engram y repo discrepan sobre estado SDD, usar la regla documentada en `ENGRAM_RECOVERY_RUNBOOK.md`.

### `.agent/skills/`

Contiene convenciones ejecutables por agentes.

- Una skill debe capturar una regla reutilizable, no una instrucción puntual.
- Si la regla solo vale para una sesión, va a Engram o a docs, no a una skill.

### `sdd/`

Snapshots locales de trabajo.

- Está ignorado para evitar convertir borradores en fuente de verdad.
- El estado persistente de cambios SDD vive en Engram con `topic_key` estable.

## Cuándo reestructurar

Reestructurá cuando haya evidencia concreta:

1. un archivo tiene dos responsabilidades incompatibles;
2. un test necesita importar helpers de forma confusa;
3. la documentación contradice el estado real;
4. una carpeta exige explicación oral para entenderse;
5. una convención se repite y merece formalizarse.

## Cuándo NO reestructurar

No reestructures cuando:

- la mejora es solo visual;
- el repo todavía es chico y la estructura plana alcanza;
- el movimiento rompe trazabilidad histórica sin beneficio claro;
- la rama actual está enfocada en otro aprendizaje, como GE-2.

## Estado actual

La estructura actual es sana para el tamaño del proyecto. La próxima reestructuración real debería esperar a que crezca el volumen de tests o aparezca un dominio de código más estable.
