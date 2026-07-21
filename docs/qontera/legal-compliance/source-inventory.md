# Inventario Maestro de Fuentes

> **Ninguna fuente fue verificada localmente en este repo.** Provienen de investigación previa.
> `🔎 source to verify` = pendiente de verificación (web o counsel). No se transcriben articulados.

## Marco legal argentino

| # | Norma | Materia | Estado |
|---|---|---|---|
| 1 | Ley 11.723 | Propiedad intelectual / derecho de autor (incl. software) | 🔎 source to verify (counsel) |
| 2 | Ley 25.506 | Firma digital / electrónica | 🔎 source to verify (counsel) |
| 3 | Ley 25.326 | Protección de datos personales | 🔎 source to verify (counsel) |
| 4 | Ley 24.766 | Confidencialidad / secreto comercial | 🔎 source to verify (counsel) |
| 5 | Ley 24.240 | Defensa del consumidor | 🔎 source to verify (counsel) |
| 6 | Ley 26.994 (Cód. Civ. y Com.) | Marco contractual/obligacional | 🔎 source to verify (counsel) |
| 7 | Decreto 1558/2001 | Reglamentación de protección de datos | 🔎 source to verify (counsel) |
| 8 | Guía AAIP | Guía de autoridad de aplicación de datos | 🔎 source to verify (counsel) |

## OSS / compliance

| Recurso | Uso | Estado |
|---|---|---|
| SPDX (identifiers + SBOM) | Identificación de licencias / SBOM | 🔎 verificar versión de lista |
| CycloneDX | Formato SBOM | 🔎 verificar |
| SBOM minimum elements (NTIA/NIST) | Campos mínimos | 🔎 verificar fuente/campos |
| NIST SSDF | Marco de proceso seguro | 🔎 verificar |
| GitHub Dependency Review | Evidencia deps en PR | 🔎 verificar límites |
| GitHub SBOM export | SBOM de deps declaradas | 🔎 verificar |
| GitHub artifact attestations | Procedencia de builds | 🔎 verificar |
| GitHub audit logs | Actividad de la org | 🔎 verificar retención |
| FOSSA | Policy enforcement (SaaS) | 🔎 verificar |
| ORT (OSS Review Toolkit) | Pipeline reproducible (OSS) | 🔎 verificar |
| ScanCode | Detección profunda (OSS) | 🔎 verificar |
| Syft | Generación de SBOM (OSS) | 🔎 verificar |

## Fuentes internas del repo (verificadas localmente)

| Documento | Uso |
|---|---|
| `docs/workspace/ENGRAM_PROJECT_BOUNDARIES.md` | Fronteras por repo / owner-truth |
| `docs/workspace/CROSS_REPO_HANDOFF.md` | Roles de repos Qontera / handoffs |
| `docs/workspace/GUARDRAIL_DEFAULTS.md` | Guardrails por repo |
| `AGENTS.md` | Contrato operativo del repo |

## Evidencia local verificada (2026-07-21)

Barrido read-only sobre `pruebaengram` (sin owner-repos, sin secretos). Registra el estado
**técnico actual** del repo como línea base, separado de lo `🔎 source to verify`.

### Manifiestos y licencias de primera parte

| Ítem | Hallazgo | Nota |
|---|---|---|
| `package.json` (raíz) | `private: true`, `type: module`, **sin campo `license`** | Workspace, no paquete distribuible |
| Dependencias runtime | **Ninguna**; solo 3 devDependencies (`tsx`, `typescript`, `vitest`) | Toolchain de desarrollo |
| `package-lock.json` | Lockfile npm del toolchain dev | — |
| Otros manifiestos (Python/Rust/Go/Ruby/PHP) | **No presentes** | — |

### Artefactos de licencia / SBOM propios

| Ítem | Hallazgo |
|---|---|
| LICENSE / COPYING / NOTICE de primera parte | **Ninguno** (los ~40 LICENSE están todos en `node_modules/`) |
| Identificadores SPDX en código propio | **Ninguno** |
| Archivos SBOM (`.spdx`, `.cdx.json`, `bom.xml`) | **Ninguno** |

> Implicación: el modelo OSS/SBOM de este dossier es **aspiracional** hoy — no hay evidencia
> técnica generada aún en este repo. La generación real (SBOM, SPDX, notices) corresponde a cada
> owner-repo.

### Menciones de privacidad fuera del dossier

| Archivo | Contenido |
|---|---|
| `docs/intelligence-pipeline/source-connection-approval.md` | Campo `privacy_risk: low\|medium\|high\|unknown` en schema de aprobación de fuentes |
| `docs/intelligence-pipeline/source-proposals/youtube-transcripts-local-trial.md` | Metadata `privacy_risk: low` |

Sin coincidencias de `confidential`, `NDA`, `GDPR`, `datos personales`, `copyright` ni `counsel`
fuera de este dossier → el contenido legal sustantivo vive solo acá y (por puntero) en los
owner-repos off-limits.

### Boundaries de repos ya documentados localmente

| Archivo | Rol para el dossier |
|---|---|
| `docs/MINI_PROJECTS_PLAN.md` | Fronteras separadas de los 4 repos; infra solo en `qontera-platform-infrastructure` |
| `openspec/changes/integrate-codegraph-hermes-course/specs/course-codegraph-hermes/spec.md` | Requisito de respetar las fronteras de los 4 repos |

## Estado de verificación

- Fuentes legales: **0 verificadas** localmente → toda cita es `🔎 source to verify`.
- Fuentes OSS: conceptuales de investigación previa → `🔎 verificar`.
- Fuentes internas: verificadas por lectura directa en esta sesión.
- Evidencia técnica local: verificada por barrido read-only (2026-07-21); ver sección anterior.
