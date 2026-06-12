---
id: evidence-20260610-local-youtube-transcripts-trial
type: evidence-pack
status: pending_human_review
source_type: other
source_name: "Local intelligence-pipeline documentation"
source_url: "docs/intelligence-pipeline/"
captured_at: "2026-06-10"
language: en
relevance: 4
novelty: 3
confidence: 4
risk: 1
metadata_ready: false
review_decision:
reviewed_by:
reviewed_at:
---

# Evidence Pack Example: Local YouTube Transcripts Trial

This example validates the Evidence Pack format using only existing local repository evidence. It is a review artifact, not approved metadata.

## Summary

| Field | Value |
| --- | --- |
| Title | Local YouTube transcripts trial as first low-risk source |
| Why it matters | It tests Evidence Pack generation before connecting live forums, social media, APIs, or VPS workers. |
| Recommended action | Human should review whether this example is clear enough to become the baseline pack format. |
| Metadata targets | review-only |

## Evidence

| Quote or artifact | Location | Confidence |
| --- | --- | --- |
| "It uses already acquired/local YouTube transcript evidence before adding forums, social media, or live web sources." | `docs/intelligence-pipeline/source-proposals/youtube-transcripts-local-trial.md:3` | high |
| "Validate Evidence Pack generation, review queues, and metadata-readiness without connecting to new live forums or social-media sources." | `docs/intelligence-pipeline/source-proposals/youtube-transcripts-local-trial.md:13` | high |
| "Do not classify without transcript quotes." | `docs/intelligence-pipeline/source-proposals/youtube-transcripts-local-trial.md:47` | high |
| "Only `approved` packs can become metadata candidates. Only `integrated` packs are considered part of the general metadata base." | `docs/intelligence-pipeline/evidence-pack-v1.md:101` | high |
| "Do not integrate this pack into course, Qontera, SDD, security, AI trends, or general metadata until a human decision changes `review_decision` and an integration output references this Evidence Pack ID." | `docs/intelligence-pipeline/templates/evidence-pack-template.md:70` | high |

## Scores

| Score | Value | Reason |
| --- | ---: | --- |
| Relevance | 4 | Directly exercises the first local trial source and review workflow. |
| Novelty | 3 | It creates the first concrete pack example, but all evidence comes from existing docs. |
| Confidence | 4 | Claims are backed by exact local quotes and file locations. |
| Risk | 1 | No live connector, external fetch, metadata integration, or course integration is activated. |

## Review State

| Field | Value |
| --- | --- |
| Lifecycle | pending_human_review |
| Human decision | pending |
| Integration allowed | no |

## Risks

- The example references a trial source proposal, not an actual transcript artifact.
- The Obsidian review queue is intentionally not updated in this microtask.
- Metadata targets remain `review-only` until a human decision explicitly changes that state.

## Open Questions

- Should the next pack example use an actual local transcript artifact once one is selected?
- Should pending Evidence Packs later be listed in an Obsidian review queue after human approval of the folder convention?

## Integration Guardrail

Do not integrate this pack into course, Qontera, SDD, security, AI trends, or general metadata until a human decision changes `review_decision` and an integration output references this Evidence Pack ID.
