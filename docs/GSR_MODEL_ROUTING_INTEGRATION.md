# Integración GSR + SDD Orchestrator + Engram

Guía de integración basada en:

- `docs/gentlaireadme/refactoriced.md` (Gentle SDD Router)
- `docs/gentlaireadme/GUIA-SDD-COMPLETA.pdf` (asignación de modelos por fase y perfil)

---

## 1) Qué se integra exactamente

### A. Límite operacional (CRÍTICO)

De `refactoriced.md`: **GSR no ejecuta modelos ni orquesta runtime**.

- GSR **declara** rutas, contratos e invocaciones.
- El host/orchestrator **ejecuta**.

Regla para este repo:

1. Definir flujo y fases (SDD)
2. Definir routing/fallback (GSR)
3. Ejecutar con orchestrator
4. Persistir evidencia en Engram

---

## 2) Mapeo de responsabilidades

| Capa | Responsabilidad |
|---|---|
| `gentle` | identidad/contexto de agentes (AGENTS.md + persona) |
| `sdd` | fases, artefactos y criterios de cierre |
| `router` | selección de modelo por fase + fallback |
| Orchestrator | ejecución y coordinación real |
| Engram | memoria persistente y trazabilidad |

---

## 3) Perfiles de routing adoptados

Tomado de `GUIA-SDD-COMPLETA.pdf` (Premium / Mixto / Free).

Para este curso se adopta por defecto **perfil Mixto** (balance costo/calidad):

- Orchestrator: modelo rápido de instruction following
- Explore/Propose/Verify: prioridad razonamiento
- Apply: prioridad modelo code-specialized
- Tasks/Archive: prioridad costo/velocidad

Si no hay disponibilidad, aplicar **graceful degradation** por fallback en cadena.

---

## 4) Reglas prácticas que sí usamos desde ahora

1. **No usar modelos frontier en tareas administrativas** (`tasks`, `archive`).
2. **Reservar modelos de razonamiento** para `explore/propose/verify`.
3. **Preferir modelos especializados en código** para `apply`.
4. **Mantener fallback x4 por fase** cuando el host/plataforma lo permita.
5. **Registrar decisión de perfil** en Engram al inicio de sesión relevante.

---

## 5) Evidencia mínima por cambio

Para cada cambio SDD, registrar en Engram:

- perfil usado (`premium|mixto|free`)
- fase afectada
- modelo primario intentado + fallback usado (si aplica)
- resultado (`ok`, `degraded`, `blocked`)

Esto evita “me funcionó” sin trazabilidad de routing.
