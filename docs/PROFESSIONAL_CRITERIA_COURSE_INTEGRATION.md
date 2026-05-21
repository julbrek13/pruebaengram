# Criterio profesional — Integración curricular desde preguntas reales

Este documento transforma preguntas reales de foro/comunidad en una capa transversal del curso. La meta no es sumar teoría blanda: es enseñar a decidir y comunicar como profesional.

## Tesis

Un desarrollador no falla solo por no saber código. Falla por:

- elegir stack por moda;
- aceptar requerimientos imposibles;
- no comunicar riesgo;
- no distinguir crítica técnica de preferencia;
- no convertir proyectos en evidencia;
- no saber negociar alcance;
- no saber cuándo hacer POC, MVP o producto.

El curso necesita una capa explícita de **criterio profesional**.

## Ejes detectados en preguntas reales

### 1. Crítica técnica vs preferencia tecnológica

Caso: Django vs FastAPI/DRF + frontend JS.

Regla:

```text
Una crítica técnica habla de restricciones, riesgos, evidencia y tradeoffs.
Una preferencia tecnológica habla de gustos, modas o absolutismos.
```

Preguntas guía:

- ¿Qué problema concreto resuelve cambiar de stack?
- ¿Qué costo de migración introduce?
- ¿Qué riesgo actual mitiga?
- ¿Qué evidencia existe?
- ¿El proyecto realmente necesita esa separación ahora?

### 2. Stack profesional y deuda aceptable

Casos:

- ERP grande con React sin TypeScript.
- Formularios a puro `useState`.
- Next.js rechazado por “tiene errores”.
- Backend valida todo, entonces frontend no necesita contratos.

Regla:

```text
La deuda técnica no es pecado si es consciente, acotada y tiene plan de pago.
La deuda inconsciente es una bomba.
```

### 3. Arquitectura según contexto

Casos:

- microfrontends;
- hexagonal;
- arquitectura Go;
- ERP con 150 tablas;
- escalabilidad cloud.

Regla:

```text
Arquitectura no es patrón favorito. Arquitectura es decidir límites según riesgo, equipo, dominio y evolución esperada.
```

### 4. Comunicación y negociación de alcance

Caso: empresa que acepta “detalles adicionales” y espera velocidad imposible.

Regla:

```text
Si no convertís el cambio en costo/riesgo/plazo, el cambio parece gratis.
```

Herramientas docentes:

- checklist de impacto;
- registro de cambio;
- tradeoff escrito;
- “sí, pero entra en fase 2”;
- evidencia de estimación.

### 5. Producto, POC y MVP

Casos:

- idea hasta POC/MVP;
- entrar como socio técnico;
- proyecto personal que quiere crecer;
- integraciones tipo API Bridge.

Regla:

```text
POC prueba posibilidad técnica.
MVP prueba valor con usuarios.
Producto prueba operación repetible.
```

### 6. Carrera, confianza y evidencia

Casos:

- primer trabajo;
- universidad vs autodidacta;
- portfolio;
- hablar de proyectos;
- burnout / impostor;
- freelance y pricing.

Regla:

```text
No se demuestra seniority diciendo “sé mucho”. Se demuestra con decisiones, evidencia, comunicación y consistencia.
```

## Prácticas propuestas

### CP-0 — Crítica técnica o preferencia

Objetivo: evaluar una recomendación tecnológica sin obedecer ni rechazar por ego.

Evidencia:

- tabla restricción/riesgo/tradeoff;
- decisión final;
- memoria `course/professional-criteria/technical-critique`.

### CP-1 — Cambio de alcance no gratuito

Objetivo: convertir “es un detalle” en análisis profesional.

Evidencia:

- impacto en tiempo;
- impacto en riesgo;
- opción fase 2;
- mensaje profesional al stakeholder;
- memoria `course/professional-criteria/scope-negotiation`.

### CP-2 — POC vs MVP vs producto

Objetivo: clasificar una idea antes de construir.

Evidencia:

- hipótesis técnica;
- hipótesis de usuario;
- criterio de éxito;
- qué NO se construye todavía;
- memoria `course/professional-criteria/poc-mvp-product`.

### CP-3 — Proyecto como evidencia laboral

Objetivo: convertir un proyecto personal en evidencia profesional.

Evidencia:

- README orientado a decisión;
- arquitectura resumida;
- tradeoffs;
- tests/verificación;
- demo o screenshots;
- memoria `course/professional-criteria/portfolio-evidence`.

## Relación con el curso técnico

| Pilar técnico | Criterio profesional asociado |
|---|---|
| Tests | evidencia y confianza |
| Engram | memoria de decisiones |
| Git | trazabilidad y comunicación |
| Gentleman.Dots | entorno reproducible |
| AGENTS.md | contratos operativos |
| Agent Harnesses | gobernanza de agentes |
| VPS | operación y riesgo real |
| API Bridge | producto, integración y seguridad |

## Regla de oro

No alcanza con construir. Tenés que poder explicar por qué, bajo qué restricciones, con qué riesgos y cómo se verifica.
