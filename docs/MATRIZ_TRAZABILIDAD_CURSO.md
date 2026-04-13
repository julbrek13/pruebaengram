# Matriz de Trazabilidad del Curso (operativa)

Objetivo: que puedas auditar **cada cambio** de punta a punta sin adivinar.

---

## 1) Cómo se usa esta matriz

Para cada bloque de trabajo:

1. Definí el **tipo de cambio** (código, tests, docs, skill, SDD).
2. Verificá los **archivos esperados** a tocar.
3. Exigí su **evidencia de validación** (tests/reportes/memoria).
4. Registrá **commit sugerido** (checkpoint didáctico).
5. Confirmá que exista **consistencia** entre objetivo, diff y commit.

> Regla de oro: si un cambio no deja rastro en esta matriz, no está trazado.

---

## 2) Matriz base por tipo de cambio

| Tipo de cambio | Objetivo | Archivos esperados | Validación mínima | Evidencia Engram | Commit sugerido |
|---|---|---|---|---|---|
| Lógica productiva | Cambiar comportamiento funcional | `src/**` + tests relacionados en `tests/**` | `npm run test` verde en suites afectadas | `bugfix` o `decision` con What/Why/Where | `feat:` / `fix:` según impacto |
| Testing (nuevas pruebas o refactor) | Mejorar cobertura/claridad de pruebas | `tests/**` (y `src/**` solo si el diseño lo exige) | tests nuevos pasan + no rompen suites previas | `pattern` (estrategia de test) | `test:` checkpoint por concepto |
| Documentación operativa | Alinear proceso y criterios | `docs/**`, `README.md` (si aplica) | revisión de coherencia con flujo real del repo | `decision` o `pattern` | `docs:` |
| Skills / metodología de agente | Cambiar forma de enseñar u operar | `.agent/skills/**`, `.atl/skill-registry.md` | trigger + reglas claras + consistencia con curso | `preference` / `pattern` | `docs(skill):` o `chore(skill):` |
| Flujo SDD de cambio complejo | Trazabilidad formal por fases | artifacts en Engram + snapshot opcional en `sdd/**` | verify sin CRITICAL + estado recuperable | `sdd/<change>/...` (topic keys canónicas) | commits por fase o por bloque aprobado |

---

## 3) Matriz aplicada al repo actual (ejemplos reales)

| Caso del curso | Qué debería tocar | Qué NO debería tocar | Cómo se valida |
|---|---|---|---|
| TP-1 string utils | `src/string-utils.ts`, `tests/string-utils.test.ts` | `sdd/**` (innecesario para no-SDD) | tests unit verdes + commit atómico |
| TP-2 fixtures/helpers | `tests/fixtures.ts`, tests que reutilizan helpers | lógica de negocio no relacionada | menos duplicación + suite verde |
| TP-3 edge cases | `tests/edge-cases.test.ts` (y solo `src/**` si aparece bug real) | cambios cosméticos fuera del alcance | casos borde justificados por riesgo |
| TP-4 integración/errores | `tests/integration.test.ts`, `tests/errors.test.ts`, `tests/mocks.test.ts`, soporte en `src/lib/**` | cambios fuera de flujo async/notificación | verify SDD + evidencia de escenarios |
| Ajuste de metodología del curso | `.agent/skills/**`, `.atl/skill-registry.md`, `docs/**` | `src/**` (si no cambia funcionalidad) | trigger claro + guía consistente |

---

## 4) Checklist de trazabilidad por PR/commit

- [ ] El objetivo del cambio está escrito en 1-2 frases.
- [ ] El diff coincide con la fila de matriz elegida.
- [ ] Hay validación mínima ejecutada (tests o revisión documental según tipo).
- [ ] El mensaje de commit explica **por qué** (no solo qué).
- [ ] Se guardó memoria útil en Engram (`mem_save`) si hubo decisión/hallazgo.
- [ ] El reporte al usuario está separado en dos canales: **repo** vs **Engram**.

---

## 5) Formato obligatorio de reporte (consigna asentada)

Desde este punto, todo avance del curso se reporta SIEMPRE con esta estructura:

```md
## Cambios en archivos (repo)
- [ruta] — [qué cambió + por qué]

## Cambios en Engram (memoria)
- [id/título/topic_key] — [qué se guardó + por qué]

## Estado de trazabilidad
- [🟢/🟡/🔴] [justificación breve]
```

Si no hubo cambios en alguno de los canales, debe declararse explícitamente:

- `Cambios en archivos (repo): ninguno`
- `Cambios en Engram (memoria): ninguno`

---

## 6) Plantilla rápida para cada nuevo bloque

```md
### Bloque
- Tipo de cambio:
- Objetivo:
- Archivos esperados:
- Validación mínima:
- Topic key/memoria:
- Commit sugerido:
```

---

## 7) Criterio de calidad (tu semáforo)

- 🟢 **Excelente**: objetivo claro, diff acotado, validación completa, commit auditables, memoria guardada.
- 🟡 **Aceptable**: funciona, pero falta una pieza de trazabilidad (ej. memoria o justificación de commit).
- 🔴 **Débil**: cambios mezclados, sin validación o sin relación con objetivo.

Si queda en amarillo o rojo, se corrige **antes** de avanzar al siguiente bloque del curso.
