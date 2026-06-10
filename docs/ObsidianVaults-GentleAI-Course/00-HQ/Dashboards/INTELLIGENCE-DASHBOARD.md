---
tags: [course/gentle-ai, intelligence-pipeline, status/design]
type: dashboard
---

# INTELLIGENCE DASHBOARD

Este dashboard organiza el pipeline de inteligencia con aprobación humana. Es una capa independiente del curso: sirve para decir sí/no/revisar antes de decidir si algo se integra al curso, a Qontera Admin o a metadata general.

## Estado actual

| Área | Estado | Nota |
| --- | --- | --- |
| Evidence Pack v1 | Diseñado | Ver `docs/intelligence-pipeline/evidence-pack-v1.md` |
| Conexión a fuentes externas | Requiere aprobación | Ver `docs/intelligence-pipeline/source-connection-approval.md` |
| Obsidian review queue | Diseño inicial | No reemplaza Engram ni Git |
| Análisis diario/current pull | Bajo demanda | Se activa solo cuando el usuario lo pide |
| VPS workers | No habilitado | VPS disponible, pero no usar antes de aprobar conectores y scheduling |

## Cola de revisión

- Pendientes: [[INTELLIGENCE-REVIEW-QUEUE]]
- Aprobados: crear vista cuando existan packs aprobados
- Rechazados: crear vista cuando existan packs rechazados
- Necesitan más evidencia: crear vista cuando aparezca el primer caso

## Reglas de operación

1. Ninguna fuente nueva se conecta sin aprobación humana.
2. Ningún hallazgo entra a metadata general sin Evidence Pack aprobado.
3. El análisis para traer información del día se activa bajo pedido, no en modo 24/7.
4. El VPS se usa solo después de validar localmente el conector y su salida.
5. Los videos, foros, repos, papers y redes sociales deben entrar por adaptadores separados.
6. Ningún hallazgo se integra al curso o a Qontera Admin sin aprobación explícita posterior.

## Próximo paso

Diseñar el primer `source_proposal` antes de conectar cualquier foro o fuente social.
