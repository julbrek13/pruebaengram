# Proposal: Restructure Course From Intelligence

## Intent

Restructure the course into lanes/modules/gates using accumulated intelligence analysis without treating pending Evidence Packs as approved truth. The change should make the course easier to execute, review, and audit across repo docs, Engram, OpenSpec, Git branches, and Obsidian.

## Scope

### In Scope
- Reorganize roadmap language around lanes: Foundations, SDD+Engram, Git+Review, Agent Harnesses, Research+Evidence Governance, Transfer+Infrastructure.
- Add gates for evidence review, transcript lineage, dashboard sync, and branch/module traceability.
- Update Obsidian dashboards/trackers in the implementation phase in parallel with repo docs.
- Preserve Evidence Packs as `pending_human_review` inputs until explicitly approved.

### Out of Scope
- Non-docs implementation: code, tests, live connectors, or behavior changes. The docs-only apply for this change (roadmap, traceability, dashboards, evidence indexes) is an authorized slice of this OpenSpec change and is reflected in the currently modified course docs.
- Approving, integrating, or relocating pending Evidence Packs.
- Treating arXiv abstract packs as full-paper reviews.
- Builds, installs, commits, pushes, live connectors, VPS/Qontera changes, or `.obsidian/workspace.json` / `.obsidian/appearance.json` edits.

## Capabilities

### New Capabilities
- `course-restructure-intelligence`: Course lane architecture, evidence gates, dashboard synchronization, and traceability rules.

### Modified Capabilities
- None; no active base spec exists for course restructuring.

## Approach

Use a lane/gate architecture with evidence quarantine. Repo docs define the canonical course structure; Engram stores decisions and SDD artifacts; OpenSpec stores this change; Obsidian visualizes current focus and review queues. Pending Evidence Packs and transcript manifests inform module candidates only through explicit review gates.

## Affected Areas

| Area | Impact | Description |
| --- | --- | --- |
| `docs/MINI_PROJECTS_PLAN.md` | Modified | Convert flat pillar/TP roadmap into lane/module/gate structure. |
| `docs/SDD_ENGRAM_OPERATING_MODEL.md` | Modified | Add intelligence-backed course-change gates and review workload policy. |
| `docs/ENGRAM_CONTEXT_MAP.md` | Modified | Add topic keys for lanes, gates, transcripts, and restructuring artifacts. |
| `docs/MATRIZ_TRAZABILIDAD_CURSO.md` | Modified | Clarify branch/module traceability and review slicing. |
| `docs/ObsidianVaults-GentleAI-Course/00-HQ/Dashboards/` | Modified | Sync course, intelligence, and master traceability dashboards. |
| `docs/intelligence-pipeline/` | Modified | Add review-flow references only; no pack integration. |

## Risks

| Risk | Likelihood | Mitigation |
| --- | --- | --- |
| Pending evidence leaks into curriculum | Medium | Keep packs `pending_human_review`; require approval before integration. |
| Review exceeds 1000 lines | Medium | Forecast in tasks; chain into docs, dashboards, evidence indexes if needed. |
| Dashboard and repo drift | Medium | Update dashboard paths in same implementation slice as matching docs. |
| Transcript bloat | Low | Reference manifests, not full transcript dumps. |

## Rollback Plan

Before implementation, delete this change folder and remove Engram SDD artifacts. After implementation, revert only the restructuring docs/dashboard commit(s); pending Evidence Packs remain untouched.

## Dependencies

- Baseline commit: `f8400c4 docs(course): checkpoint current course baseline`.
- Existing pending Evidence Packs and transcript scratch lineage as inputs, not approved outputs.

## Success Criteria

- [ ] Specs/design/tasks can derive lane/module/gate requirements.
- [ ] Evidence review flow blocks unapproved curriculum integration.
- [ ] Obsidian dashboard sync is explicit in apply tasks.
- [ ] Review Workload Forecast stays under 1000 lines or recommends chained slices.

## Review Workload Forecast

Expected implementation range: 470-1080 changed lines.
Decision needed before apply: No
Chained PRs recommended: Yes if task forecast exceeds 850 lines
1000-line budget risk: Medium
