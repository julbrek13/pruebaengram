---
id: evidence-20260611-graphrag-global-sensemaking
type: evidence-pack
status: pending_human_review
source_type: arxiv
source_name: "From Local to Global: A Graph RAG Approach to Query-Focused Summarization"
source_url: "https://arxiv.org/abs/2404.16130"
captured_at: "2026-06-11"
language: en
relevance: 5
novelty: 4
confidence: 3
risk: 2
metadata_ready: false
review_decision:
reviewed_by:
reviewed_at:
---

# GraphRAG for Global Sensemaking

Focused extraction from the public arXiv abstract page for human review before routing anything to Qontera, `pruebaengram/course`, or EngramSecurity.

## Summary

| Field | Value |
| --- | --- |
| Title | GraphRAG for corpus-level questions and query-focused summarization |
| Why it matters | The abstract separates ordinary retrieval over a corpus from global sensemaking questions over the whole corpus, which is directly relevant to knowledge dashboards, Evidence Pack review, and future Qontera operational intelligence. |
| Recommended action | Review whether this should seed a Qontera knowledge-architecture note and a course lesson on when vector RAG is not enough. |
| Metadata targets | `qontera`, `pruebaengram/course`; `engramsecurity` only if later framed as defensive knowledge-base governance. |

## Source Limits

This pack uses only the public arXiv page and abstract captured on 2026-06-11. It is not a full-paper review. Any downstream claim about methods, experiments, implementation cost, benchmark validity, or production readiness requires a later approved full-text checkpoint.

## Evidence

| Source | arXiv location | Exact quote or page reference | Review value |
| --- | --- | --- | --- |
| GraphRAG paper | Title | "From Local to Global: A Graph RAG Approach to Query-Focused Summarization" | Establishes the paper's stated focus: moving from local retrieval to global corpus summarization. |
| GraphRAG paper | Abstract | "RAG fails on global questions directed at an entire text corpus, such as \"What are the main themes in the dataset?\"" | High-signal distinction for Qontera/course: not every knowledge task is an explicit retrieval task. |
| GraphRAG paper | Abstract | "this is inherently a query-focused summarization (QFS) task, rather than an explicit retrieval task" | Supports a methodology note: classify the user question before choosing a retrieval architecture. |
| GraphRAG paper | Abstract | "Prior QFS methods, meanwhile, do not scale to the quantities of text indexed by typical RAG systems." | Identifies the opposite failure mode: classic summarization can fail at operational corpus scale. |
| GraphRAG paper | Abstract | "we propose GraphRAG, a graph-based approach to question answering over private text corpora" | Relevant to private/internal knowledge-base design, but not enough by itself to approve adoption. |
| GraphRAG paper | Abstract | "derive an entity knowledge graph from the source documents" | Names the first architecture element to evaluate later: graph extraction from source documents. |
| GraphRAG paper | Abstract | "pregenerate community summaries for all groups of closely related entities" | Names the second architecture element: precomputed community summaries for higher-level synthesis. |
| GraphRAG paper | Abstract | "each community summary is used to generate a partial response, before all partial responses are again summarized in a final response" | Describes a multi-stage synthesis flow useful for review, while still requiring full-text validation before implementation. |
| GraphRAG paper | Abstract | "datasets in the 1 million token range" | Gives a scale claim from the abstract; useful but insufficient for production extrapolation. |
| GraphRAG paper | Abstract | "substantial improvements over a conventional RAG baseline for both the comprehensiveness and diversity of generated answers" | Candidate benefit for future review; do not treat as proven locally without full-text and local evaluation. |
| GraphRAG paper | arXiv metadata | Subjects: "Computation and Language (cs.CL); Artificial Intelligence (cs.AI); Information Retrieval (cs.IR)" | Confirms the source is inside the approved arXiv AI/CS/IR scope. |

## Routing Notes

| Destination | Suggested use | Human-review decision needed |
| --- | --- | --- |
| `qontera` | Candidate architecture note for operational intelligence over internal corpora: when to use graph summaries, community summaries, and global sensemaking instead of only vector retrieval. | Decide whether Qontera should track GraphRAG as a future architecture pattern or wait for a full-paper review first. |
| `pruebaengram/course` | Course methodology example: decide the information need first, then choose retrieval, summarization, graph indexing, or human review. | Decide whether this belongs in the intelligence-pipeline lesson as a conceptual example. |
| `engramsecurity` | Optional defensive governance angle for private security knowledge bases, without procedures, payloads, or exploit material. | Approve only if framed around safe knowledge organization and auditability. |

## Human-Review Questions

- Should the next checkpoint inspect the full paper before any Qontera architecture note is drafted?
- Should `pruebaengram/course` use this as a lesson on classifying query type before choosing RAG architecture?
- Should GraphRAG become a recurring watch topic for internal intelligence dashboards and Evidence Pack search/summarization?
- What local evidence would be required before adopting any graph-based RAG approach: corpus size, update cadence, source quality, evaluation questions, or reviewer workload?

## Risk Notes

- Do not overclaim that GraphRAG is generally superior to RAG; this pack only preserves abstract-page evidence for review.
- Do not treat the abstract's improvement claim as local proof for Qontera or Engram workflows.
- Do not implement graph extraction, community summarization, or automated downstream integration without explicit human approval.
- Keep EngramSecurity routing defensive and governance-only unless the user approves a separate safe source checkpoint.

## Review State

| Field | Value |
| --- | --- |
| Lifecycle | pending_human_review |
| Human decision | pending |
| Evidence level | arXiv page and abstract only |
| Integration allowed | no |

## Integration Guardrail

Do not integrate this pack into Qontera, `pruebaengram/course`, EngramSecurity, metadata, dashboards beyond the review queue, or downstream repos until `review_decision` changes by explicit human approval and the integration output references this Evidence Pack ID.
