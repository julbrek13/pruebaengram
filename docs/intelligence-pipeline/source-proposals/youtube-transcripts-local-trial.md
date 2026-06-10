# Source Proposal — YouTube Transcripts Local Trial

This proposal defines the first low-risk test source for the intelligence pipeline. It uses already acquired/local YouTube transcript evidence before adding forums, social media, or live web sources.

## Proposal

```yaml
source_proposal_id: source-proposal-20260609-youtube-transcripts-local-trial
source_type: youtube
source_name: Gentleman YouTube transcript evidence
source_url: user-provided / locally acquired transcript artifacts

purpose: Validate Evidence Pack generation, review queues, and metadata-readiness without connecting to new live forums or social-media sources.
expected_value: Reduce schema, scoring, and review errors before adding broader information sources.
metadata_targets:
  - course
  - sdd
  - ai-trends

access_method:
  mode: user_supplied
  requires_credentials: false
  requires_vps: false
  proposed_frequency: daily_on_request

evidence_policy:
  allowed_artifacts:
    - transcript
    - subtitles
    - metadata
    - recovery manifests
    - batch reports
  prohibited_artifacts:
    - audio
    - video
    - inferred content without transcript evidence
  quote_required: true
  raw_storage_allowed: true

risk_review:
  terms_or_policy_checked: false
  privacy_risk: low
  rate_limit_risk: low
  content_integrity_risk: medium
  notes:
    - Use local artifacts first.
    - Do not classify without transcript quotes.
    - Do not treat this as approval for future live forum/social connectors.

human_decision:
  status: pending_review
  decided_by: null
  decided_at: null
```

## Trial success criteria

- At least one Evidence Pack can be generated from existing transcript evidence.
- The pack includes quotes and artifact references.
- The pack appears in the Obsidian review queue.
- Human decision fields remain empty until the user approves/rejects.
- No live external connector is activated.

## Boundary

This trial validates the pipeline format. It does not approve continuous collection, forum scraping, social-media polling, or VPS workers.
