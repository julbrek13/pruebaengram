---
tags: [course/gentle-ai, intelligence-pipeline, status/design]
type: dashboard
---

# INTELLIGENCE DASHBOARD

Este dashboard organiza el pipeline de inteligencia con aprobación humana. Es una capa independiente del curso: sirve para decir sí/no/revisar antes de decidir si algo se integra al curso, a Qontera Admin o a metadata general.

## Frontera con el curso

| Canal | Autoridad | Regla |
| --- | --- | --- |
| Repo docs | Fuente canónica del curso durable | Sólo reflejan contenido aprobado o rutas pendientes claramente etiquetadas |
| Engram | Decisiones, memoria y SDD artifacts | No convierte Evidence Packs pendientes en conocimiento aprobado |
| OpenSpec | Cambio activo `restructure-course-from-intelligence` | Define requisitos y tareas hasta archive |
| Obsidian | Navegación visual y cola de revisión | Muestra estado y routing; no aprueba evidencia |

Los packs en `pending_human_review` pueden aparecer acá como cola de revisión, pero no como lecciones, metadata aprobada ni evidencia curricular integrada.

## Estado actual

| Área | Estado | Nota |
| --- | --- | --- |
| Evidence Pack v1 | Diseñado | Ver `docs/intelligence-pipeline/evidence-pack-v1.md` |
| Conexión a fuentes externas | Requiere aprobación | Ver `docs/intelligence-pipeline/source-connection-approval.md` |
| Obsidian review queue | Activa | Packs pendientes: arXiv + Ethereum/EIPs; EIP-7702 vs ERC-4337; CRAG vs Safetywashing; GraphRAG global sensemaking; Self-RAG reflective retrieval; ReAct reasoning/action loops; Toolformer tool use; Tree of Thoughts deliberate search; AgentBench agent evaluation; Reflexion verbal feedback loops; SWE-bench real-world issue evaluation |
| Análisis diario/current pull | Bajo demanda | Se activa solo cuando el usuario lo pide |
| VPS workers | No habilitado | VPS disponible, pero no usar antes de aprobar conectores y scheduling |

## Routing hacia el curso

| Entrada | Estado permitido | Ruta segura |
| --- | --- | --- |
| Evidence Pack pendiente | `pending_human_review` | Mantener en [[INTELLIGENCE-REVIEW-QUEUE]]; no integrar al curso |
| Evidence Pack aprobado | `approved` con decisión humana | Registrar en [[EVIDENCE-REGISTER]] antes de tocar roadmap o módulos |
| Transcript lineage | Manifiesto o extracto revisado | Referenciar lineage; no copiar dumps brutos al curso |
| Idea de módulo | Candidata, no verdad | Pasar por gate de Evidence review y Branch/module traceability |

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
7. Si este dashboard contradice `docs/intelligence-pipeline/**`, manda el repo y este dashboard se corrige como vista derivada.

## Próximo paso

Revisar los packs pendientes y decidir routing hacia `engramsecurity`, `qontera` o `pruebaengram/course`, empezando por `GraphRAG global sensemaking` si la prioridad es arquitectura de conocimiento, `Self-RAG reflective retrieval` si la prioridad es recuperación adaptativa y factualidad, `CRAG + Safetywashing` si la prioridad es evaluación de calidad de RAG/agentes, `ReAct` si la prioridad es ciclos razón-acción, `Toolformer` si la prioridad es permisos de herramientas, `Tree of Thoughts` si la prioridad es búsqueda deliberada antes de decidir, `AgentBench` si la prioridad es evaluación de agentes, `Reflexion` si la prioridad es feedback/memoria gobernada, o `SWE-bench` si la prioridad es evaluación realista de coding agents.
