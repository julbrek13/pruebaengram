# Source Connection Approval

This document defines the approval gate for connecting the intelligence pipeline to forums, websites, social-media applications, or any external source that can be polled, scraped, queried, or monitored.

## Core decision

Source connection is the highest-risk step in the pipeline. The system can design adapters and prepare local contracts, but it must not connect to a new live source without explicit human approval.

The default source-analysis mode is **user-triggered**. A request such as "pull today's information" or "run today's AI/source analysis" can activate an approved collection pass. Without that request, collectors stay inactive.

## What requires approval

Human approval is required before any of these actions:

- polling a forum, subreddit, website, social-media app, or API on a schedule;
- using credentials, cookies, tokens, browser sessions, or authenticated APIs;
- deploying a collector to the VPS;
- storing third-party content beyond local evidence packs;
- increasing collection frequency;
- adding a new source category that was not previously modeled;
- integrating approved packs into general metadata.

## What does not require approval

These actions are safe during design or local preparation:

- documenting a proposed source adapter;
- defining the Evidence Pack fields needed for a source;
- creating sample packs from already-provided user material;
- reviewing public documentation for API terms or limitations;
- drafting a risk assessment without connecting to the source.

## Source proposal template

Every new source must start as a proposal:

```yaml
source_proposal_id: source-proposal-YYYYMMDD-slug
source_type: forum | reddit | github | arxiv | hacker-news | x-twitter | blog | newsletter | web | app | other
source_name: ""
source_url: ""

purpose: ""
expected_value: ""
metadata_targets: []

access_method:
  mode: manual | public_api | rss | html_fetch | authenticated_api | browser_session | user_supplied
  requires_credentials: false
  requires_vps: false
  proposed_frequency: manual_only

evidence_policy:
  allowed_artifacts: []
  prohibited_artifacts: []
  quote_required: true
  raw_storage_allowed: false

risk_review:
  terms_or_policy_checked: false
  privacy_risk: low | medium | high | unknown
  rate_limit_risk: low | medium | high | unknown
  content_integrity_risk: low | medium | high | unknown
  notes: []

human_decision:
  status: pending_review | approved | rejected | needs_more_evidence
  decided_by: null
  decided_at: null
```

## Adapter lifecycle

```txt
proposed
→ risk_reviewed
→ approved_for_manual_trial
→ approved_for_local_collection
→ approved_for_scheduled_collection
→ approved_for_vps_worker
→ active
```

No adapter should skip stages. A source can be approved for manual review without being approved for automation.

## Scheduling policy

Approved adapters have three separate scheduling levels:

| Level | Meaning | Approval required |
| --- | --- | --- |
| `manual_only` | Run only when the user asks. | Source approval |
| `daily_on_request` | Pull current/day information only after explicit user request. | Source approval + daily-pull permission |
| `scheduled` | Runs automatically without a same-day user request. | Separate scheduling approval |

The default is `daily_on_request`, not `scheduled`.

## VPS boundary

The VPS is available, but it is not the first step.

Use the VPS only after:

1. the source proposal is approved;
2. local/manual collection was validated;
3. the Evidence Pack output is stable;
4. rate limits and privacy risks are understood;
5. a rollback/disable path exists.

## Human approval rule

The human decides two separate things:

1. whether a source can be connected;
2. whether evidence from that source can be integrated into metadata.

Approving a connector does not automatically approve its findings.
