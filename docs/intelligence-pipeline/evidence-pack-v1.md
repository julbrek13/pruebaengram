# Evidence Pack v1

This document defines the first contract for a human-reviewed intelligence pipeline. The goal is to collect information from many sources, preserve auditable evidence, and prepare it for human approval before it becomes general metadata.

The pipeline is designed to be resumable, but not continuously active by default. Daily or current-information analysis runs only when the user explicitly asks for them.

This pipeline lives inside `pruebaengram` for traceability and future auditability, but it is independent from the course by default. Approved evidence can be integrated into the course, Qontera Admin, or general metadata only after an explicit human decision.

## Purpose

The pipeline is designed for continuous, source-agnostic research.

It can start with YouTube transcripts and later support GitHub repositories, arXiv papers, Hacker News, Reddit, X/Twitter lists, blogs, newsletters, forums, websites, and social-media applications.

The system must not act as a raw link forwarder. It should summarize, rank, verify, and present evidence in a format that a human can approve, reject, or send back for more evidence.

## Non-goals

- Do not integrate unreviewed findings into general metadata.
- Do not treat source popularity as truth.
- Do not classify content without quotes, transcripts, text, or other auditable evidence.
- Do not couple the system to one source such as YouTube.
- Do not require VPS infrastructure before the local/documentation contract is clear.
- Do not run continuous 24/7 source collection by default.
- Do not treat this pipeline as part of the course roadmap unless the user explicitly approves that integration.

## Core rule

```txt
External source ≠ knowledge.
External source + evidence + human review = integrable knowledge.
```

## Evidence Pack schema

Use `docs/intelligence-pipeline/templates/evidence-pack-template.md` when drafting a local pack for human review.

```yaml
id: evidence-YYYYMMDD-source-slug
type: evidence-pack

source:
  type: youtube | github | arxiv | hacker-news | reddit | x-twitter | blog | newsletter | forum | web | app | other
  name: ""
  url: ""
  captured_at: ""
  language: es | en | mixed | unknown

status:
  lifecycle: captured | normalized | evidence_checked | scored | pending_human_review | approved | rejected | needs_more_evidence | integrated
  review_decision: null
  reviewed_by: null
  reviewed_at: null

content:
  title: ""
  summary: ""
  why_it_matters: ""
  recommended_action: ""

evidence:
  quotes:
    - text: ""
      location: "" # timestamp, paragraph, comment id, commit, section, etc.
      confidence: high | medium | low
  artifacts:
    - path_or_url: ""
      kind: transcript | metadata | paper | repo | comment | article | newsletter | screenshot | other

scores:
  relevance: 0 # 0-5
  novelty: 0 # 0-5
  confidence: 0 # 0-5
  risk: 0 # 0-5

metadata_targets:
  - course
  - qontera
  - sdd
  - security
  - ai-trends

notes:
  risks: []
  open_questions: []
  duplicate_candidates: []
```

## Human review flow

```txt
captured
→ normalized
→ evidence_checked
→ scored
→ pending_human_review
→ approved | rejected | needs_more_evidence
→ integrated
```

Only `approved` packs can become metadata candidates. Only `integrated` packs are considered part of the general metadata base.

## Operating mode

The default mode is **on-demand analysis**:

```txt
user asks for a daily/current pull
→ approved sources are checked
→ Evidence Packs are generated
→ human review queue is updated
→ approved packs can move toward metadata integration
```

The system should remain ready to resume at any time, but it must not poll external sources continuously unless a future policy explicitly approves scheduled collection.

This keeps token usage, source risk, and review load controlled.

## System modules

| Module | Responsibility |
| --- | --- |
| Source adapters | Collect source-specific data without deciding truth. |
| Normalizer | Convert source output into the Evidence Pack schema. |
| Evidence verifier | Check that every claim has quotes, transcripts, links, or artifacts. |
| Scoring engine | Rank relevance, novelty, confidence, and risk. |
| Human review queue | Present packs for approval, rejection, or more evidence. |
| Obsidian publisher | Generate readable notes, dashboards, and indexes. |
| Metadata integrator | Integrate only human-approved packs into general metadata. |
| Memory layer | Persist decisions, rejections, patterns, and gotchas in Engram. |

## Obsidian dashboard structure

```txt
00-HQ/
  Intelligence-Dashboard.md
  Review-Queue.md
  Approved-Insights.md
  Rejected-Insights.md
  Needs-More-Evidence.md

10-Sources/
  YouTube.md
  GitHub-Trending.md
  arXiv.md
  Hacker-News.md
  Reddit.md
  X-Twitter.md
  Blogs-Newsletters.md
  Forums-Web-Apps.md

20-Evidence-Packs/
  pending/
  approved/
  rejected/
  needs-more-evidence/

30-Decisions/
  Metadata-Integration-Decisions.md
  Human-Approval-Log.md
```

## Obsidian note frontmatter

```yaml
---
type: evidence-pack
status: pending_human_review
source_type: youtube
relevance: 4
novelty: 5
confidence: 3
risk: 2
metadata_ready: false
review_decision:
---
```

## Dashboard views

The dashboard should make these groups easy to read:

- pending review;
- approved but not integrated;
- rejected;
- needs more evidence;
- high novelty;
- high risk;
- grouped by source;
- grouped by metadata target.

## VPS role

The VPS is optional at this stage. It can become useful later for scheduled jobs, source polling, temporary storage, internal APIs, or a review dashboard.

Do not move to VPS execution until the local Evidence Pack contract, review flow, and Obsidian structure are stable.

## Source connection approval

Connecting to a live forum, website, API, social-media app, or scheduled collection worker requires explicit human approval. Designing an adapter is allowed; activating it is not.

See `docs/intelligence-pipeline/source-connection-approval.md` for the source proposal template, adapter lifecycle, and VPS boundary.

## Integration rule

General metadata integration must be explicit and reviewable:

1. Evidence Pack exists.
2. Evidence is auditable.
3. Human decision is recorded.
4. Target metadata area is declared.
5. Integration output references the approved Evidence Pack ID.

Possible targets include the course, Qontera Admin, a new dedicated section, or general metadata. The default target is review-only until the user chooses one.
