# Tasks: Restructure Course From Intelligence

## Review Workload Forecast

| Field | Value |
| --- | --- |
| Estimated changed lines | 650-950 |
| Estimated changed files | 8-10 |
| 1000-line budget risk | Medium |
| Chained PRs recommended | Yes |
| Delivery strategy | auto-forecast |
| Chain strategy | feature-branch-chain |

Decision needed before apply: No
Chained PRs recommended: Yes
Chain strategy: feature-branch-chain
1000-line budget risk: Medium
400-line budget risk: High

### Suggested Slices

| Unit | Goal | Likely PR | Notes |
| --- | --- | --- | --- |
| 1 | Core lane model and traceability docs | PR 1 | `MINI_PROJECTS_PLAN`, traceability, context map. |
| 2 | Obsidian dashboard sync | PR 2 | Base on PR 1; dashboard navigation only. |
| 3 | Evidence/transcript governance references | PR 3 | Base on PR 2; keep packs pending. |

## Phase 1: RED Planning Checks

- [x] 1.1 Add a docs verification checklist for lane names, gates, authority boundaries, and evidence quarantine before changing docs.
- [x] 1.2 Define search checks that must fail if changed files promote `pending_human_review` packs or edit forbidden `.obsidian` workspace state.

### PR 1 Docs Verification Checklist

- [x] Lane names present: Foundations, SDD+Engram, Git+Review, Agent Harnesses, Research+Evidence Governance, Transfer+Infrastructure.
- [x] Completion gates documented for evidence review, transcript lineage, dashboard sync, and branch/module traceability.
- [x] Source authority preserved: repo docs for durable file state, Engram for remembered decisions, OpenSpec for active change artifacts, Obsidian for visual navigation.
- [x] Evidence quarantine preserved: pending Evidence Packs remain `pending_human_review` inputs and are not promoted to approved curriculum.
- [x] Search checks defined: changed files must not include `.obsidian/workspace.json` or `.obsidian/appearance.json`; changed content must not convert `pending_human_review` into approved truth.

## Phase 2: Core Course Structure

- [x] 2.1 Update `docs/MINI_PROJECTS_PLAN.md` with lanes: Foundations, SDD+Engram, Git+Review, Agent Harnesses, Research+Evidence Governance, Transfer+Infrastructure.
- [x] 2.2 Add module outcomes and completion gates to `docs/MINI_PROJECTS_PLAN.md` without importing pending Evidence Packs as truth.
- [x] 2.3 Update `docs/MATRIZ_TRAZABILIDAD_CURSO.md` to map lane/module/TP blocks to repo paths, branch or commit evidence, Engram keys, and Obsidian nodes.
- [x] 2.4 Update `docs/ENGRAM_CONTEXT_MAP.md` with stable keys for lanes, gates, transcript lineage, evidence routing, and this SDD change.

## Phase 3: Operating Model and Governance

- [x] 3.1 Update `docs/SDD_ENGRAM_OPERATING_MODEL.md` with source-of-truth boundaries for repo docs, Engram, OpenSpec, and Obsidian.
- [x] 3.2 Add intelligence-backed course-change gates and 1000-line review workload policy to `docs/SDD_ENGRAM_OPERATING_MODEL.md`.
- [x] 3.3 Update `docs/intelligence-pipeline/**` references only where needed to point to the review queue; do not approve, relocate, or reclassify packs.
- [x] 3.4 Update `docs/ObsidianVaults-GentleAI-Course/40-EVIDENCE/Indexes/EVIDENCE-REGISTER.md` with approved-evidence and transcript-lineage rules only.

## Phase 4: Obsidian Dashboard Sync

- [x] 4.1 Sync `docs/ObsidianVaults-GentleAI-Course/00-HQ/Dashboards/COURSE-DASHBOARD.md` with current lanes, active module, gates, and next learner action.
- [x] 4.2 Sync `docs/ObsidianVaults-GentleAI-Course/00-HQ/Dashboards/INTELLIGENCE-DASHBOARD.md` so intelligence queues remain separate from course truth.
- [x] 4.3 Sync `docs/ObsidianVaults-GentleAI-Course/00-HQ/Dashboards/MASTER-TRACEABILITY.md` with lane/module to repo, Engram, branch, and vault mappings.

## Phase 5: Verification and Cleanup

- [x] 5.1 Verify changed docs satisfy every scenario in `specs/course-restructure-intelligence/spec.md` by focused read/diff review.
- [x] 5.2 Verify no changed file edits `.obsidian/workspace.json` or `.obsidian/appearance.json`.
- [x] 5.3 Verify pending Evidence Packs still say `pending_human_review` and are not presented as approved curriculum.
- [x] 5.4 Report skipped commands: no `npm test`, installs, builds, commits, or pushes in this docs-only planning/apply path.
