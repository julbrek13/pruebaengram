# Qontera — Dossier de Soporte Legal / Compliance (Modelo)

> **AVISO — NO ES ASESORÍA LEGAL.**
> Esta documentación es **soporte a compliance**, no asesoría jurídica. No sustituye a un/a
> abogado/a matriculado/a. Todo lo vinculante requiere **revisión de counsel argentino/a**.
> Cada interpretación jurídica está marcada como `⚖️ requiere counsel review`.
> Cada fuente no verificada localmente está marcada como `🔎 source to verify`.

## Qué es este dossier

Un **modelo/plantilla reutilizable** de compliance para el ecosistema Qontera, mantenido en
`pruebaengram` en su rol de **workspace auditor**. Este repo **no es owner** de los artefactos
legales finales: acá vive el modelo; los artefactos vinculantes por repo se materializan en los
**owner-repos** vía handoff sanitizado (coherente con `docs/workspace/ENGRAM_PROJECT_BOUNDARIES.md`
y `docs/workspace/CROSS_REPO_HANDOFF.md`).

## Qué NO es

- No es asesoría legal ni opinión jurídica.
- No es un contrato ni un artefacto vinculante.
- No reemplaza la revisión de counsel argentino/a.
- No transcribe articulados legales (para evitar citas inventadas): cita normas por número y materia.

## Alcance y frontera de owner-repo

| Principio | Regla |
|---|---|
| Rol de este repo | Workspace auditor / modelo, no owner de artefactos legales finales. |
| Materialización | Los artefactos vinculantes por repo se generan en el owner-repo vía handoff. |
| No copiar contratos | No se copian contratos de owners a `pruebaengram`; se referencian por handoff. |
| Secretos | Nunca se incluyen secretos, tokens, credenciales, datos de clientes ni logs sensibles. |

## Índice

| Documento | Contenido | Madurez |
|---|---|---|
| [argentina-legal-framework.md](argentina-legal-framework.md) | Marco legal AR + materias | draft · to-verify |
| [software-ip-and-ownership.md](software-ip-and-ownership.md) | Titularidad de software / IP | draft |
| [oss-licenses-and-sbom.md](oss-licenses-and-sbom.md) | SPDX, SBOM, herramientas, evidencia | draft |
| [privacy-data-processing.md](privacy-data-processing.md) | Datos personales, categorías, transferencia | draft |
| [contracts-signatures-confidentiality.md](contracts-signatures-confidentiality.md) | Contratos, firmas, NDA | draft |
| [repo-checklist-template.md](repo-checklist-template.md) | Checklist reutilizable por proyecto | draft |
| [repo-applicability-matrix.md](repo-applicability-matrix.md) | Matriz de aplicabilidad por repo | draft |
| [risk-ranking.md](risk-ranking.md) | Ranking de riesgo por dimensión | draft |
| [source-inventory.md](source-inventory.md) | Inventario maestro de fuentes | draft · to-verify |

## Convención de marcado

- `⚖️ requiere counsel review` — interpretación jurídica que necesita validación profesional.
- `🔎 source to verify` — fuente citada pero no verificada localmente en este repo.
- Niveles de riesgo (Alto / Medio / Bajo) son **heurística de diseño**, no conclusiones jurídicas.

## Estado

Fase actual: **docs-only (modelo + inventario)**. Sin acceso a owner-repos. Sin verificación web
de normas (pendiente de fase posterior o de counsel).
