---
id: evidence-20260611-crag-safetywashing-evaluation-quality
type: evidence-pack
status: pending_human_review
source_type: arxiv
source_name: "CRAG: Comprehensive RAG Benchmark and Safetywashing: Do AI Safety Benchmarks Actually Measure Safety Progress?"
source_url: "https://arxiv.org/abs/2406.04744 ; https://arxiv.org/abs/2407.21792"
captured_at: "2026-06-11"
language: en
relevance: 5
novelty: 4
confidence: 3
risk: 3
metadata_ready: false
review_decision:
reviewed_by:
reviewed_at:
---

# CRAG vs Safetywashing: Evaluation Quality for RAG and Agents

Focused extraction from public arXiv abstract pages for human review before routing anything to Qontera, `pruebaengram/course`, or EngramSecurity.

## Summary

| Field | Value |
| --- | --- |
| Title | CRAG and Safetywashing comparison for evaluation-quality gates |
| Why it matters | CRAG gives a concrete RAG benchmark frame for factual QA under real-world complexity, while Safetywashing warns that benchmark gains can be capability gains mislabeled as safety progress. Together, they help evaluate RAG/agent systems without confusing a nice score with trustworthy behavior. |
| Recommended action | Review whether these sources should seed Qontera quality gates and course material on Evidence Pack scoring, benchmark limits, and human-review discipline. |
| Metadata targets | `qontera`, `pruebaengram/course`; `engramsecurity` only if framed as governance/auditability rather than security technique. |

## Source Limits

This pack uses only public arXiv pages and abstracts captured on 2026-06-11. It is not a full-paper review. Any downstream integration requiring methods, datasets, experiments, or section-level claims must inspect the full text in a later approved checkpoint.

## Evidence

| Source | arXiv location | Exact quote or page reference | Review value |
| --- | --- | --- | --- |
| CRAG | arXiv abstract, 2406.04744 | "Existing RAG datasets, however, do not adequately represent the diverse and dynamic nature of real-world Question Answering (QA) tasks." | Supports using CRAG as a prompt to test real-world variation, not only clean toy retrieval. |
| CRAG | arXiv abstract, 2406.04744 | "a factual question answering benchmark of 4,409 question-answer pairs and mock APIs to simulate web and Knowledge Graph (KG) search" | Gives a concrete benchmark shape relevant to RAG and agent retrieval evaluation. |
| CRAG | arXiv abstract, 2406.04744 | "designed to encapsulate a diverse array of questions across five domains and eight question categories" | Useful for Qontera quality gates that need domain/category coverage instead of one aggregate score. |
| CRAG | arXiv abstract, 2406.04744 | "temporal dynamisms ranging from years to seconds" | Highlights freshness and time-sensitivity as evaluation dimensions for operational RAG systems. |
| CRAG | arXiv abstract, 2406.04744 | "State-of-the-art industry RAG solutions only answer 63% of questions without any hallucination." | Strong warning that RAG does not automatically eliminate hallucination; needs review before using as a headline claim. |
| CRAG | arXiv page metadata | Comments: "NeurIPS 2024 Datasets and Benchmarks Track" | Establishes publication context from arXiv page metadata, not a quality guarantee. |
| Safetywashing | arXiv abstract, 2407.21792 | "the field of AI safety remains poorly defined and inconsistently measured" | Supports course material on why evaluation definitions must be explicit before scoring. |
| Safetywashing | arXiv abstract, 2407.21792 | "unclear relationship between AI safety benchmarks and upstream general capabilities" | Directly relevant to avoiding fake safety metrics for agents and model evaluations. |
| Safetywashing | arXiv abstract, 2407.21792 | "many safety benchmarks highly correlate with both upstream model capabilities and training compute" | Warns that better benchmark scores may reflect broader capability/compute, not actual safety progress. |
| Safetywashing | arXiv abstract, 2407.21792 | "potentially enabling 'safetywashing'--where capability improvements are misrepresented as safety advancements" | Names the governance failure mode this pack should preserve for human review. |
| Safetywashing | arXiv abstract, 2407.21792 | "clearly delineated research goals that are empirically separable from generic capabilities advancements" | Useful as a design principle for Qontera evaluation dashboards and course scoring rubrics. |
| Safetywashing | arXiv page metadata | Subjects: "Machine Learning (cs.LG); Artificial Intelligence (cs.AI); Computation and Language (cs.CL); Computers and Society (cs.CY)" | Confirms the paper sits at the intersection of ML, AI, language systems, and governance/social impact. |

## Comparison

| Dimension | CRAG | Safetywashing | Possible Qontera use | Possible course use | Limitations |
| --- | --- | --- | --- | --- | --- |
| Evaluation target | RAG factual question answering with web/KG-style retrieval simulation. | AI safety benchmarks and whether they measure safety progress separately from generic capabilities. | Build RAG/agent quality gates around factuality, retrieval freshness, hallucination rate, domain coverage, and audit logs. | Teach how Evidence Packs should distinguish source evidence, scoring dimensions, and human approval. | Abstract-only extraction cannot validate benchmark construction details or meta-analysis methods. |
| Failure mode addressed | RAG systems that perform well on narrow/static datasets but fail on diverse, dynamic, long-tail, or complex facts. | Safety claims that improve because models are more capable or compute-rich, not because safety improved. | Prevent operational dashboards from reporting one high score as total trustworthiness. | Show why "score went up" is not a conclusion unless the metric measures the intended construct. | Requires later full-text review before adopting any metric wholesale. |
| Metric design implication | Evaluate by domains, categories, entity popularity, temporal dynamism, complexity, and hallucination-free answers. | Separate safety-specific goals from general capability proxies and compute effects. | Use multi-axis scorecards: retrieval quality, answer correctness, freshness, uncertainty handling, refusal/safety behavior, and auditability. | Use as a learning case for benchmark validity and Goodhart/overfitting risks. | Source abstracts do not provide enough operational thresholds for local implementation. |
| Governance angle | RAG claims need evidence that retrieval actually improves trustworthy QA under realistic conditions. | Safety claims need evidence that metrics are not merely capability metrics with safety branding. | Add review gates before labeling an agent "safe", "production-ready", or "auditable". | Strengthen GentleAI/SDD/Engram methodology: decide metric intent first, preserve evidence second, integrate only after review. | EngramSecurity routing should remain optional unless the user wants a governance/security-evaluation note. |
| Integration risk | Overfitting Qontera evaluation to one public benchmark or copying benchmark categories without local relevance. | Safetywashing: turning benchmark improvement into marketing/governance claims without construct validity. | Require human review and local calibration before adopting benchmark-inspired gates. | Use as conceptual methodology, not as a claim that these papers settle evaluation design. | Full paper inspection needed before deeper claims about experiments, dataset bias, or implementation. |

## Human-Review Questions

- Should Qontera receive a focused architecture note for RAG/agent quality gates inspired by CRAG and constrained by Safetywashing?
- Should `pruebaengram/course` use this as a lesson on benchmark validity, Evidence Pack scoring, and why human review exists?
- Should EngramSecurity receive a governance-only note about safety metric misuse, or is that too broad for the security lane right now?
- Are abstract-page quotes enough for a pending review artifact, or should the next checkpoint inspect full papers before any routing decision?
- Which local metrics should be mandatory before calling a RAG/agent system production-ready: factuality, freshness, hallucination-free answer rate, traceability, safety-separability, or all of them?

## Risk Notes

- Do not overfit Qontera or course methodology to CRAG as a single benchmark; use it as a prompt for local evaluation design.
- Do not label a model, agent, or workflow as safer only because a general benchmark score improved; preserve Safetywashing as a governance guardrail.
- Do not convert these abstracts into a claim of full literature review or experimental validation.
- Do not integrate into downstream metadata until human review explicitly changes `review_decision` and names the target lane.

## Review State

| Field | Value |
| --- | --- |
| Lifecycle | pending_human_review |
| Human decision | pending |
| Integration allowed | no |

## Integration Guardrail

Do not integrate this pack into Qontera, `pruebaengram/course`, EngramSecurity, metadata, dashboards beyond the review queue, or downstream repos until `review_decision` changes by explicit human approval and the integration output references this Evidence Pack ID.
