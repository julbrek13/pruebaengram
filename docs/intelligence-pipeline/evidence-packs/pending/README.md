# Pending Evidence Packs

This folder contains Evidence Packs that are waiting for human review. They are not approved metadata and must not be integrated into dashboards, indexes, course material, or Engram knowledge bases until a human decision is recorded.

## Review Path

1. Open the pending pack.
2. Confirm the frontmatter keeps `status: pending_human_review` and `metadata_ready: false`.
3. Check that every claim has an auditable quote, artifact, or local file reference.
4. Decide whether the pack should stay pending, be rejected, need more evidence, or become approved in a later checkpoint.

## Current Pending Pack

| Evidence Pack | Review Focus | Integration State |
| --- | --- | --- |
| `evidence-20260610-local-youtube-transcripts-trial.md` | Validate whether the local YouTube transcript trial example is clear enough to become the baseline pack format. | Review-only; not metadata-ready. |
| `evidence-20260611-graphrag-global-sensemaking.md` | Decide whether arXiv abstract-page evidence is enough to route GraphRAG toward Qontera knowledge architecture or `pruebaengram/course`, or whether a full-paper review is required first. | Review-only; not metadata-ready. |
| `evidence-20260611-self-rag-reflective-retrieval.md` | Decide whether arXiv abstract-page evidence is enough to route Self-RAG toward retrieval quality gates, course methodology, or Qontera knowledge architecture. | Review-only; not metadata-ready. |
| `evidence-20260612-react-reasoning-acting.md` | Decide whether arXiv abstract-page evidence is enough to route ReAct toward agent reasoning/action-loop methodology for course, Qontera, or defensive governance. | Review-only; not metadata-ready. |
| `evidence-20260612-toolformer-self-supervised-tool-use.md` | Decide whether arXiv abstract-page evidence is enough to route Toolformer toward tool-permission methodology for course, Qontera, or defensive governance. | Review-only; not metadata-ready. |
| `evidence-20260612-tree-of-thoughts-deliberate-search.md` | Decide whether arXiv abstract-page evidence is enough to route Tree of Thoughts toward deliberate-search methodology for course, Qontera, or defensive governance. | Review-only; not metadata-ready. |
| `evidence-20260612-agentbench-agent-evaluation.md` | Decide whether arXiv abstract-page evidence is enough to route AgentBench toward agent-evaluation methodology for course, Qontera, or defensive governance. | Review-only; not metadata-ready. |
| `evidence-20260612-reflexion-verbal-feedback.md` | Decide whether arXiv abstract-page evidence is enough to route Reflexion toward verbal feedback loops, memory hygiene, or defensive governance. | Review-only; not metadata-ready. |
| `evidence-20260612-swe-bench-real-world-issues.md` | Decide whether arXiv abstract-page evidence is enough to route SWE-bench toward coding-agent evaluation and repository-level verification methodology. | Review-only; not metadata-ready. |

## Human Review Checklist

- [ ] The evidence locations are specific enough for another reviewer to verify.
- [ ] The scores are justified by the quoted/local evidence.
- [ ] The risks and open questions are explicit enough to support a decision.
- [ ] No external connector, metadata integration, or dashboard update is implied by this pack.
- [ ] A future decision can be recorded without losing the original pending evidence trail.

## Guardrail

Pending packs are review inputs only. Moving a pack out of this folder or changing its decision fields requires explicit human approval in a separate checkpoint.
