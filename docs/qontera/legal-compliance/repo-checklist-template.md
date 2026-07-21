# Plantilla de Checklist por Proyecto

> Copiar esta plantilla al owner-repo correspondiente. Modelo de compliance, no asesoría legal.
> `⚖️` marca ítems que requieren validación de counsel.

## Identificación

- **Repo:** `<nombre-repo>`
- **Rol:** `<web / admin / app / infra / config-source>`
- **Responsable:** `<owner>`
- **Fecha de revisión:** `<YYYY-MM-DD>`
- **ENGRAM_PROJECT:** `<repo>` (ver `docs/workspace/ENGRAM_PROJECT_BOUNDARIES.md`)

## Checklist

### Ownership / IP
- [ ] Titularidad del código confirmada por tipo de autor.
- [ ] Cesiones de contratistas archivadas (⚖️).
- [ ] Marca/activos formalizados si aplica (⚖️).

### Dependencias de terceros
- [ ] SBOM generado (SPDX o CycloneDX).
- [ ] Dependencias transitivas revisadas.

### License notices
- [ ] Licencias identificadas con SPDX IDs.
- [ ] Atribuciones / notices presentes.
- [ ] Copyleft evaluado (⚖️).

### Privacidad / categorías de datos
- [ ] Categorías de datos personales identificadas.
- [ ] Base legal del tratamiento definida (⚖️).
- [ ] Transferencia internacional evaluada (⚖️).

### Exclusión de secretos
- [ ] Sin `.env`, tokens, credenciales, keys en el repo.
- [ ] Sin secretos en la evidencia/SBOM.

### Evidencia de deployment
- [ ] Evidencia de build/deploy retenida.
- [ ] Integridad de evidencia asegurada.
- [ ] Plazos de retención definidos (⚖️).

### Estado de revisión de counsel
- [ ] Estado: `pendiente` / `en revisión` / `revisado`
- [ ] Fecha de revisión de counsel: `<YYYY-MM-DD>`
- [ ] Observaciones de counsel: `<...>`

## Firma de la revisión

- Revisor técnico: `<nombre>`
- Counsel: `<nombre / pendiente>`
