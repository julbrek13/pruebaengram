---
id: evidence-20260611-arxiv-ethereum-source-discovery
type: evidence-pack
status: pending_human_review
source_type: arxiv | web
source_name: "arXiv + official Ethereum/EIP source discovery"
source_url: "https://arxiv.org/ ; https://eips.ethereum.org/"
captured_at: "2026-06-11"
language: mixed
relevance: 5
novelty: 4
confidence: 4
risk: 2
metadata_ready: false
review_decision:
reviewed_by:
reviewed_at:
---

# arXiv + Ethereum/EIP Source Discovery

Primer paquete pendiente para revisar fuentes públicas de alta señal antes de decidir si alimentan Qontera, EngramSecurity o el curso `pruebaengram`.

## Summary

| Field | Value |
| --- | --- |
| Title | arXiv + Ethereum/EIP source discovery |
| Why it matters | Abre una cola segura de investigación sobre ciberseguridad, IA/LLM systems, arquitectura multiagente y Ethereum/Web3. |
| Recommended action | Revisar candidatos, elegir 1-2 para extracción profunda y mantener todo como `pending_human_review`. |
| Metadata targets | `qontera`, `engramsecurity`, `pruebaengram/course` |

## Candidate Sources

| Source | URL | Suggested destination | Review question |
| --- | --- | --- | --- |
| CRAG: Comprehensive RAG Benchmark | https://arxiv.org/abs/2406.04744 | `qontera`, `pruebaengram/course` | ¿Lo usamos como base para un micro-benchmark propio de trazabilidad/RAG? |
| Jailbroken: How Does LLM Safety Training Fail? | https://arxiv.org/abs/2307.02483 | `engramsecurity`, `qontera`, `pruebaengram/course` | ¿Lo tratamos como material defensivo conceptual o lo excluimos por riesgo de abuso? |
| Safetywashing: Do AI Safety Benchmarks Actually Measure Safety Progress? | https://arxiv.org/abs/2407.21792 | `qontera`, `pruebaengram/course` | ¿Debe alimentar criterios de evaluación para agentes/skills antes que contenido del curso? |
| More Agents Is All You Need | https://arxiv.org/abs/2402.05120 | `pruebaengram/course`, `qontera` | ¿Comparamos este enfoque contra el modelo GentleAI/SDD actual? |
| EIP-4844: Shard Blob Transactions | https://eips.ethereum.org/EIPS/eip-4844 | `engramsecurity` | ¿Lo priorizamos para mapa de escalabilidad L2 o para labs defensivos de disponibilidad de datos? |
| EIP-7702: Set Code for EOAs | https://eips.ethereum.org/EIPS/eip-7702 | `engramsecurity`, `qontera` | ¿Lo tratamos como prioridad alta para threat modeling de wallets/account abstraction? |
| ERC-4337: Account Abstraction Using Alt Mempool | https://eips.ethereum.org/EIPS/eip-4337 | `engramsecurity`, `qontera` | ¿Conviene armar una nota comparativa ERC-4337 vs EIP-7702? |
| EIP-6780: SELFDESTRUCT only in same transaction | https://eips.ethereum.org/EIPS/eip-6780 | `engramsecurity` | ¿Lo convertimos en checklist de auditoría para contratos que dependan de `SELFDESTRUCT`? |

## Evidence

| Quote or artifact | Location | Confidence |
| --- | --- | --- |
| "Candidate set includes arXiv 2406.04744, 2307.02483, 2407.21792, 2402.05120, discarded 2404.14220 as out of scope, and EIP/ERC 4844, 7702, 4337, 6780." | Engram observation `#1331` | high |
| "Output must remain `pending_human_review`; do not integrate into downstream repos." | Collection task instruction, saved in Engram/session context | high |
| `arXiv:2404.14220` was reviewed and discarded as outside cybersecurity/CS/AI/LLM scope. | Engram observation `#1331` | high |

## Scores

| Score | Value | Reason |
| --- | ---: | --- |
| Relevance | 5 | Candidates map directly to Qontera, EngramSecurity, and course routing lanes. |
| Novelty | 4 | Mixes LLM evaluation, safety, multiagent orchestration, and Ethereum account/scalability changes. |
| Confidence | 4 | Sources are public, stable references; deeper extraction still pending. |
| Risk | 2 | Mostly low-risk, but `Jailbroken` is sensitive and must remain defensive-only. |

## Review State

| Field | Value |
| --- | --- |
| Lifecycle | pending_human_review |
| Human decision | pending |
| Integration allowed | no |

## Risks

- Do not reproduce jailbreak prompts, exploit payloads, malware, dumps, cracks, or ready-to-abuse material.
- Do not route `Jailbroken` into labs without converting it into defensive concepts only.
- Do not treat source discovery as a full literature review; each approved source still needs extraction.

## Open Questions

- ¿La próxima extracción profunda debe ser `EIP-7702 + ERC-4337`?
- ¿CRAG debería convertirse en benchmark propio para Evidence Packs/RAG?
- ¿Safetywashing debe alimentar criterios de evaluación de agentes?
- ¿Qué destino priorizamos primero: Qontera, EngramSecurity o pruebaengram/course?

## Integration Guardrail

No integrar este paquete en Qontera, EngramSecurity, curso ni metadata general hasta que `review_decision` cambie por decisión humana y el output de integración referencie este Evidence Pack ID.
