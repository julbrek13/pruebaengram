---
id: evidence-20260612-swe-bench-real-world-issues
type: evidence-pack
status: pending_human_review
source_type: arxiv
source_name: "SWE-bench: Can Language Models Resolve Real-World GitHub Issues?"
source_url: "https://arxiv.org/abs/2310.06770"
captured_at: "2026-06-12"
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

# SWE-bench for Real-World Issue Evaluation

Focused extraction from the public arXiv abstract page for human review before routing anything to Qontera, `pruebaengram/course`, or defensive EngramSecurity.

## Summary

| Field | Value |
| --- | --- |
| Title | SWE-bench: evaluating language models on real-world GitHub issue resolution |
| Why it matters | The abstract frames real software engineering as a demanding evaluation testbed that requires codebase editing, long-context processing, execution-environment interaction, and multi-file reasoning. |
| Recommended action | Review whether SWE-bench should inform course/Qontera guidance on why coding-agent performance requires repository-level evidence, not toy examples. |
| Metadata targets | `pruebaengram/course`, `qontera`; defensive `engramsecurity` only for safe software-agent evaluation and review discipline. |

## Source Limits

This pack uses only the public arXiv page and abstract captured on 2026-06-12. It is not a full-paper review. Any downstream claim about dataset construction, repository selection, leaderboard results, evaluation harnesses, issue difficulty, or local adoption requires a later approved full-text checkpoint.

## Evidence

| Source | arXiv location | Exact quote or page reference | Review value |
| --- | --- | --- | --- |
| SWE-bench paper | Title | "SWE-bench: Can Language Models Resolve Real-World GitHub Issues?" | Establishes the source focus: software-engineering issue resolution. |
| SWE-bench paper | Abstract | "Language models have outpaced our ability to evaluate them effectively" | Supports the need for stronger evaluation discipline in coding-agent workflows. |
| SWE-bench paper | Abstract | "real-world software engineering to be a rich, sustainable, and challenging testbed" | Relevant to course/Qontera routing around realistic repository tasks. |
| SWE-bench paper | Abstract | "2,294 software engineering problems drawn from real GitHub issues and corresponding pull requests across 12 popular Python repositories" | Establishes the abstract's evidence of real-issue sourcing; exact dataset details still need full review. |
| SWE-bench paper | Abstract | "a language model is tasked with editing the codebase to address the issue" | Maps directly to coding-agent evaluation and review workflows. |
| SWE-bench paper | Abstract | "requires understanding and coordinating changes across multiple functions, classes, and even files simultaneously" | Useful for teaching why isolated code-generation examples understate real engineering difficulty. |
| SWE-bench paper | Abstract | "interact with execution environments, process extremely long contexts and perform complex reasoning" | Raises safety and verification boundaries for autonomous coding agents. |
| SWE-bench paper | Abstract | "Claude 2, is able to solve a mere 1.96% of the issues" | Useful cautionary benchmark quote; must not be generalized beyond the abstract/version. |
| SWE-bench paper | arXiv metadata | Subjects: "Computation and Language (cs.CL); Artificial Intelligence (cs.AI); Software Engineering (cs.SE)" | Confirms the source is inside approved arXiv AI/CS/software-engineering scope. |

## Routing Notes

| Destination | Suggested use | Human-review decision needed |
| --- | --- | --- |
| `pruebaengram/course` | Candidate lesson on repository-level coding-agent evaluation, multi-file changes, and why verification evidence matters. | Decide whether abstract-level evidence is enough for a conceptual note or whether full-paper review is required. |
| `qontera` | Candidate watch item for future coding-agent acceptance criteria and issue-resolution workflows. | Decide whether Qontera needs SWE-bench-inspired internal evaluation criteria before relying on agents for product changes. |
| `engramsecurity` | Optional defensive governance note for software-agent evaluation, not exploit generation. | Approve only if framed around safe evaluation, verification, and change control. |

## Human-Review Questions

- Should SWE-bench become a required reference for explaining why coding-agent claims need repository-level verification?
- Should future `pruebaengram` or Qontera agent reviews record whether a task is single-file, multi-file, execution-dependent, or long-context?
- Is full-paper review required before mentioning the 1.96% result in teaching material?
- Should local Evidence Packs include an `evaluation_scope` field for agent/coding benchmarks?

## Risk Notes

- Do not treat SWE-bench leaderboard or dataset details as reviewed from this abstract-level pack.
- Do not run benchmark tooling, install packages, or fetch datasets from this checkpoint.
- Do not use this pack to rank current tools or models in local workflows without a separate approved evaluation plan.

## Review State

| Field | Value |
| --- | --- |
| Lifecycle | pending_human_review |
| Human decision | pending |
| Evidence level | arXiv page and abstract only |
| Integration allowed | no |

## Integration Guardrail

Do not integrate this pack into Qontera, `pruebaengram/course`, EngramSecurity, metadata, dashboards beyond the review queue, or downstream repos until `review_decision` changes by explicit human approval and the integration output references this Evidence Pack ID.
