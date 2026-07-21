# Licencias OSS, SBOM y Evidencia

> Modelo de compliance técnico. `⚖️ requiere counsel review` para suficiencia legal de la evidencia.
> `🔎 source to verify` en estándares y herramientas (conceptos de investigación previa).

## 1. Identificación de licencias — SPDX

- Usar **SPDX license identifiers** como estándar de identificación de licencias (`MIT`,
  `Apache-2.0`, `GPL-3.0-only`, etc.). `🔎 verificar versión de la lista SPDX`.
- Beneficio: identificación no ambigua, machine-readable, base para automatización.

## 2. SBOM (Software Bill of Materials)

| Formato | Uso | Nota |
|---|---|---|
| SPDX | SBOM estándar ISO, fuerte en licencias | 🔎 verificar |
| CycloneDX | SBOM orientado a seguridad/supply-chain | 🔎 verificar |

- **Minimum elements** (referencia NTIA/NIST): componente, proveedor, versión, identificadores,
  relaciones de dependencia, autor del SBOM, timestamp. `🔎 verificar fuente y campos exactos`.
- **NIST SSDF** como marco de proceso de desarrollo seguro que enmarca la generación de SBOM.
  `🔎 verificar`.

## 3. Límites de GitHub como fuente de evidencia

| Capacidad GitHub | Cubre | NO cubre (caveat) |
|---|---|---|
| Dependency Review | Deltas de deps en PR | Detección profunda a nivel archivo |
| SBOM export | SBOM de dependencias declaradas | Licencias implícitas / código copiado sin manifiesto |
| Artifact attestations | Procedencia de builds | Suficiencia legal de la evidencia (⚖️) |
| Audit logs | Actividad de la org | Retención legal / integridad probatoria (⚖️) |

`⚖️` — GitHub aporta evidencia técnica útil, pero su **suficiencia legal** debe validarla counsel.

## 4. Herramientas de escaneo — tradeoffs

| Herramienta | Fuerte en | Limitación | Modelo |
|---|---|---|---|
| FOSSA | Policy enforcement, UI, licencias | SaaS / costo / el dato sale del entorno | Comercial SaaS |
| ORT (OSS Review Toolkit) | Pipeline completo, reproducible | Curva de setup | OSS |
| ScanCode | Detección profunda a nivel archivo | Ruido, requiere curación | OSS |
| Syft | Generación rápida de SBOM | No es motor de policy legal | OSS |

Combinación típica sugerida (modelo): **Syft** (genera SBOM) + **ScanCode/ORT** (detección
profunda) + política de licencias. FOSSA como alternativa SaaS si el dato puede salir del entorno.

## 5. Retención de evidencia — caveats

- Definir dónde se almacena el SBOM, por cuánto tiempo y con qué integridad.
- Los **plazos legales de retención** los determina counsel `⚖️`.
- Excluir secretos de todo artefacto de evidencia (nunca `.env`, tokens, keys).

## Checklist mínima

- [ ] SBOM generado por repo (SPDX o CycloneDX).
- [ ] Licencias identificadas con SPDX IDs.
- [ ] License notices / atribuciones presentes.
- [ ] Copyleft / transitivas revisadas.
- [ ] Evidencia retenida sin secretos (⚖️ plazos).
