# Evidence Pack Template

Use this template when drafting a pending Evidence Pack from local or approved-source material. A drafted pack is not approved metadata.

## Frontmatter

```yaml
---
id: evidence-YYYYMMDD-source-slug
type: evidence-pack
status: pending_human_review
source_type: youtube | github | arxiv | hacker-news | reddit | x-twitter | blog | newsletter | forum | web | app | other
source_name: ""
source_url: ""
captured_at: "YYYY-MM-DD"
language: es | en | mixed | unknown
relevance: 0
novelty: 0
confidence: 0
risk: 0
metadata_ready: false
review_decision:
reviewed_by:
reviewed_at:
---
```

## Summary

| Field | Value |
| --- | --- |
| Title |  |
| Why it matters |  |
| Recommended action |  |
| Metadata targets | review-only |

## Evidence

| Quote or artifact | Location | Confidence |
| --- | --- | --- |
|  |  | high \| medium \| low |

## Scores

| Score | Value | Reason |
| --- | ---: | --- |
| Relevance | 0 |  |
| Novelty | 0 |  |
| Confidence | 0 |  |
| Risk | 0 |  |

## Review State

| Field | Value |
| --- | --- |
| Lifecycle | pending_human_review |
| Human decision | pending |
| Integration allowed | no |

## Risks

- 

## Open Questions

- 

## Integration Guardrail

Do not integrate this pack into course, Qontera, SDD, security, AI trends, or general metadata until a human decision changes `review_decision` and an integration output references this Evidence Pack ID.
