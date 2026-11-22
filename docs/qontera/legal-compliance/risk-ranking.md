# Ranking de Riesgo por Dimensión

> Niveles = **heurística de diseño** para priorizar trabajo, no conclusiones jurídicas.
> Todos requieren validación antes de tratarse como conclusión. `⚖️ requiere counsel review`.

## Ranking global

| # | Dimensión | Nivel inicial | Justificación (modelo) |
|---|---|---|---|
| 1 | Privacidad / transferencia de datos | **Alto** | Datos personales + posible transferencia internacional |
| 2 | Legal / IP | **Alto** | Cesión de derechos y titularidad no siempre formalizadas |
| 3 | OSS / licencias | Medio-Alto | Transitivas y copyleft sin detección profunda |
| 4 | Evidencia operacional | Medio | Retención/integridad no estandarizada |
| 5 | Consumer / comercial | Medio | Exposición vía web pública / defensa del consumidor |

## Detalle por dimensión

### 1. Legal / IP
- Riesgo: código sin cesión, IP de terceros embebida, marca no formalizada.
- Mitigación: cesiones firmadas, SBOM, revisión de counsel de IP.

### 2. OSS / licencias
- Riesgo: copyleft no advertido, transitivas sin detectar.
- Mitigación: SBOM + detección profunda (ScanCode/ORT), política de licencias.

### 3. Privacidad / transferencia de datos
- Riesgo: tratamiento sin base legal, transferencia internacional sin garantías.
- Mitigación: clasificación de datos, minimización, evaluación de transferencia (⚖️).

### 4. Evidencia operacional
- Riesgo: evidencia de deploy sin integridad ni plazos definidos.
- Mitigación: retención estandarizada, exclusión de secretos, integridad.

### 5. Consumer / comercial
- Riesgo: exposición pública (web) y defensa del consumidor.
- Mitigación: revisión de copy público, no filtrar metadata interna.

## Priorización sugerida

Orden de atención recomendado (modelo): **1 → 2 → 3 → 4 → 5**, con `qontera-app` y
`qontera-platform-infrastructure` como repos de mayor prioridad por superficie de datos e IP.
