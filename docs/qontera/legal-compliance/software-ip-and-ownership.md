# Software, Propiedad Intelectual y Titularidad

> `⚖️ requiere counsel review` en todo lo interpretativo. Modelo de compliance, no asesoría legal.

## Objetivo

Establecer cómo se determina y documenta la **titularidad del código** producido en el ecosistema
Qontera, y qué evidencia respalda esa titularidad.

## Fuentes de titularidad

| Origen del código | Riesgo de titularidad | Instrumento recomendado (⚖️) |
|---|---|---|
| Empleados en relación de dependencia | Bajo-Medio | Cláusula de titularidad en contrato laboral |
| Contratistas / freelance | **Alto** | Cesión expresa de derechos / work-for-hire |
| Contribuciones OSS externas | Medio | CLA/DCO según política del proyecto |
| Código generado con asistencia IA | A definir | Política interna + revisión counsel |

## Cadena de custodia de autoría

- Historial de commits como evidencia de autoría (no como prueba legal suficiente por sí sola).
- Registro de cesiones firmadas por contratistas antes de incorporar su código.
- Inventario de terceros embebidos (ver `oss-licenses-and-sbom.md`).

## Riesgos principales

| Riesgo | Descripción | Mitigación (⚖️) |
|---|---|---|
| IP de terceros embebida | Código sin licencia clara incorporado al producto | SBOM + revisión de licencias |
| Contribución sin cesión | Contratista sin cesión firmada | Cesión previa a merge |
| Marca / activos no formalizados | Titularidad de marca/logo sin registrar | Consultar counsel de IP |

## Checklist mínima (ver plantilla completa)

- [ ] Titularidad del código confirmada por tipo de autor.
- [ ] Cesiones de contratistas archivadas.
- [ ] Terceros embebidos inventariados.
- [ ] Ley 11.723 confirmada como marco aplicable `🔎 source to verify` / `⚖️`.

## Preguntas para counsel

1. ¿La cláusula estándar de titularidad cubre a todos los tipos de colaborador?
2. ¿El código asistido por IA requiere tratamiento contractual específico?
