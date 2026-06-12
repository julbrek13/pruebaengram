---
tags: [course/gentle-ai, intelligence-pipeline, review-queue]
type: dashboard
---

# INTELLIGENCE REVIEW QUEUE

Esta cola existe para que el usuario apruebe, rechace o pida más evidencia antes de integrar hallazgos a metadata general.

## Pendientes de decisión humana

| Evidence Pack | Fuente | Relevancia | Novedad | Riesgo | Acción humana |
| --- | --- | ---: | ---: | ---: | --- |
| [[../../../../intelligence-pipeline/evidence-packs/pending/evidence-20260611-arxiv-ethereum-source-discovery\|arXiv + Ethereum/EIP source discovery]] | arXiv + Ethereum/EIPs | 5 | 4 | 2 | Decidir extracción profunda, destino o descarte |
| [[../../../../intelligence-pipeline/evidence-packs/pending/evidence-20260611-eip-7702-erc-4337-account-abstraction\|EIP-7702 vs ERC-4337 account abstraction]] | Official EIP-7702 + ERC-4337 | 5 | 4 | 2 | Decidir routing: EngramSecurity, Qontera o metodología del curso |
| [[../../../../intelligence-pipeline/evidence-packs/pending/evidence-20260611-crag-safetywashing-evaluation-quality\|CRAG vs Safetywashing evaluation quality]] | arXiv CRAG + Safetywashing | 5 | 4 | 3 | Decidir routing: Qontera quality gates, curso o governance note |
| [[../../../../intelligence-pipeline/evidence-packs/pending/evidence-20260611-graphrag-global-sensemaking\|GraphRAG global sensemaking]] | arXiv GraphRAG abstract page | 5 | 4 | 2 | Decidir si requiere full-paper review antes de routing a Qontera/curso |
| [[../../../../intelligence-pipeline/evidence-packs/pending/evidence-20260611-self-rag-reflective-retrieval\|Self-RAG reflective retrieval]] | arXiv Self-RAG abstract page | 5 | 4 | 2 | Decidir si requiere full-paper review antes de routing a curso/Qontera |
| [[../../../../intelligence-pipeline/evidence-packs/pending/evidence-20260612-react-reasoning-acting\|ReAct reasoning and acting loops]] | arXiv ReAct abstract page | 5 | 4 | 2 | Decidir si requiere full-paper review antes de routing a curso/Qontera/gobernanza defensiva |
| [[../../../../intelligence-pipeline/evidence-packs/pending/evidence-20260612-toolformer-self-supervised-tool-use\|Toolformer self-supervised tool use]] | arXiv Toolformer abstract page | 5 | 4 | 3 | Decidir si requiere full-paper review antes de routing a permisos de herramientas |
| [[../../../../intelligence-pipeline/evidence-packs/pending/evidence-20260612-tree-of-thoughts-deliberate-search\|Tree of Thoughts deliberate search]] | arXiv Tree of Thoughts abstract page | 5 | 4 | 2 | Decidir si requiere full-paper review antes de routing a metodología de decisiones |
| [[../../../../intelligence-pipeline/evidence-packs/pending/evidence-20260612-agentbench-agent-evaluation\|AgentBench agent evaluation]] | arXiv AgentBench abstract page | 5 | 4 | 2 | Decidir si requiere full-paper review antes de routing a evaluación de agentes |
| [[../../../../intelligence-pipeline/evidence-packs/pending/evidence-20260612-reflexion-verbal-feedback\|Reflexion verbal feedback loops]] | arXiv Reflexion abstract page | 5 | 4 | 3 | Decidir si requiere full-paper review antes de routing a memoria/reflexión gobernada |
| [[../../../../intelligence-pipeline/evidence-packs/pending/evidence-20260612-swe-bench-real-world-issues\|SWE-bench real-world issue evaluation]] | arXiv SWE-bench abstract page | 5 | 4 | 2 | Decidir si requiere full-paper review antes de routing a evaluación de coding agents |

## Decisiones posibles

| Decisión | Significado |
| --- | --- |
| `approved` | Puede avanzar como candidato de metadata. |
| `rejected` | No se integra; conservar motivo si aporta aprendizaje. |
| `needs_more_evidence` | Falta cita, fuente, contexto o verificación. |
| `integrated` | Ya fue incorporado a metadata general con referencia al Evidence Pack. |

## Checklist de revisión

- [ ] ¿Hay fuente identificable?
- [ ] ¿Hay evidencia textual o artefacto auditable?
- [ ] ¿El resumen no inventa más allá de la evidencia?
- [ ] ¿La relevancia y novedad están justificadas?
- [ ] ¿Está claro el destino de metadata?
- [ ] ¿La decisión humana quedó registrada?
