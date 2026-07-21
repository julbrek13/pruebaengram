# Design: Restructure Course From Intelligence

## Technical Approach

Restructure the course as a lane/module/gate architecture while preserving the existing decision-first operating model. Repo docs remain the canonical course source, Engram stores decisions and SDD artifacts, OpenSpec stores this active change, and Obsidian dashboards provide visual navigation only. Pending Evidence Packs and transcript artifacts may shape candidates, but cannot become curricular truth until human review promotes them.

## Architecture Decisions

| Decision | Choice | Alternatives | Rationale |
| --- | --- | --- | --- |
| Course architecture | Lanes -> modules -> gates | Patch current pillars; replace with research topics | Lanes keep foundations stable while making gates, evidence status, and sequencing visible. |
| Evidence authority | Quarantine all `pending_human_review` packs | Integrate useful packs directly | `docs/intelligence-pipeline/evidence-pack-v1.md` requires approval before metadata/course integration. |
| Dashboard sync | Update repo docs and Obsidian dashboards in same implementation slice | Update dashboards later | Prevents drift between learner navigation and canonical docs. |
| Transcript routing | Reference manifests/lineage only | Copy raw transcript content into lessons | Avoids transcript bloat and preserves review/quote requirements. |
| Branch traceability | One branch/work unit per learning block or TP | One branch per isolated concept | Matches existing course traceability and keeps review units auditable. |

## Course Data Flow

```txt
Explore/proposal intelligence
  -> lane/module/gate model in repo docs
  -> Engram topic keys + SDD artifacts
  -> Obsidian dashboards/trackers
  -> human-reviewed evidence gates
  -> approved course integration only when lifecycle allows it
```

Evidence gate:

```txt
Evidence Pack pending_human_review
  -> INTELLIGENCE-REVIEW-QUEUE
  -> approved | rejected | needs_more_evidence
  -> integrated course metadata only with explicit decision
```

## File Changes

| File | Action | Description |
| --- | --- | --- |
| `docs/MINI_PROJECTS_PLAN.md` | Modify | Convert pillar-heavy roadmap into lanes: Foundations, SDD+Engram, Git+Review, Agent Harnesses, Research+Evidence Governance, Transfer+Infrastructure. |
| `docs/SDD_ENGRAM_OPERATING_MODEL.md` | Modify | Add intelligence-backed change gates, review budget policy, and source-of-truth boundaries. |
| `docs/ENGRAM_CONTEXT_MAP.md` | Modify | Add stable topic keys for lanes, gates, transcript lineage, evidence routing, and this change. |
| `docs/MATRIZ_TRAZABILIDAD_CURSO.md` | Modify | Clarify branch/TP traceability and module-to-evidence mapping. |
| `docs/intelligence-pipeline/**` | Modify | Add review-flow references only; do not approve or relocate pending packs. |
| `docs/ObsidianVaults-GentleAI-Course/00-HQ/Dashboards/COURSE-DASHBOARD.md` | Modify | Show current lane, active module, gates, and next learner action. |
| `docs/ObsidianVaults-GentleAI-Course/00-HQ/Dashboards/INTELLIGENCE-DASHBOARD.md` | Modify | Keep intelligence queue independent from course truth. |
| `docs/ObsidianVaults-GentleAI-Course/00-HQ/Dashboards/MASTER-TRACEABILITY.md` | Modify | Map lane/module to repo paths, Engram topics, branch/commit evidence, and vault nodes. |
| `docs/ObsidianVaults-GentleAI-Course/40-EVIDENCE/Indexes/EVIDENCE-REGISTER.md` | Modify | Record approved evidence and transcript lineage references, not pending truth. |

Do not modify `.obsidian/workspace.json` or `.obsidian/appearance.json`.

## Contracts

| Boundary | Source of Truth |
| --- | --- |
| Current file content | Git/repo files |
| Decisions and SDD phase artifacts | Engram topic keys `sdd/restructure-course-from-intelligence/*` |
| Active change artifact | `openspec/changes/restructure-course-from-intelligence/` |
| Learner navigation | Obsidian dashboards derived from repo/Engram |
| Evidence lifecycle | `docs/intelligence-pipeline/evidence-pack-v1.md` and review queue |

## Verification Strategy

| Layer | What to Verify | Approach |
| --- | --- | --- |
| Design/docs | Lanes, gates, and source boundaries are consistent | Focused read/diff review; no build. |
| Evidence quarantine | Pending packs remain `pending_human_review` and `metadata_ready: false` | Search changed files for lifecycle/status drift. |
| Dashboard sync | Dashboard rows match roadmap and traceability docs | Compare affected docs in the same slice. |
| Strict TDD context | No implementation without tests in later code phases | In apply, write/update tests before behavior changes; runner is `npm test`. |

This design phase runs no tests/builds.

## Migration / Rollout

No data migration required. Roll out in reviewable slices: core roadmap/traceability docs, Obsidian dashboard synchronization, then intelligence/transcript review indexes. If task forecast exceeds 850 changed lines, chain slices to protect the 1000-line review budget.

## Risk Controls

- Keep every pending Evidence Pack in quarantine until explicit human approval.
- Never present abstract-page packs as full-paper reviews.
- Reference transcript lineage without copying raw scratch transcripts into course docs.
- Preserve unrelated dirty work and local Obsidian state.
- Keep Qontera/VPS/production/secrets out of scope.

## Open Questions

- None blocking. Task planning should decide final slice boundaries from changed-line forecast.
