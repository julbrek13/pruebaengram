# Exploration: Restructure Course From Intelligence

## Current State

`pruebaengram` teaches decision-first engineering through repo evidence, Engram memory, OpenSpec/SDD, Git discipline, AGENTS.md, Agent Harnesses, Gentleman.Dots, Obsidian dashboards, and future Qontera/VPS transfer. The current course is mostly pillar/TP based in `docs/MINI_PROJECTS_PLAN.md`, with visual tracking in `docs/ObsidianVaults-GentleAI-Course/` and traceability rules in `docs/MATRIZ_TRAZABILIDAD_CURSO.md` plus `MASTER-TRACEABILITY.md`.

The intelligence pipeline now contains many `pending_human_review` Evidence Packs: arXiv/Ethereum source discovery, EIP-7702/ERC-4337, CRAG/Safetywashing, GraphRAG, Self-RAG, ReAct, Toolformer, Tree of Thoughts, AgentBench, Reflexion, SWE-bench, and a local YouTube transcript trial. The transcript scratch lineage indexed 7 manual es-419 transcripts and 8 recent RSS videos without manual captions under `/tmp/opencode/pruebaengram/gentleman-youtube-transcription-first/`.

These inputs are useful for restructuring the learning architecture, but they are not approved curricular truth. The course must teach how to govern evidence before it teaches conclusions from that evidence.

## Affected Areas

| Area | Why It Matters |
| --- | --- |
| `docs/MINI_PROJECTS_PLAN.md` | Main roadmap needs lanes/modules/gates that reflect accumulated intelligence without becoming a dumping ground. |
| `docs/SDD_ENGRAM_OPERATING_MODEL.md` | Needs explicit gates for intelligence-backed course changes, review workload, and evidence authority. |
| `docs/ENGRAM_CONTEXT_MAP.md` | Needs topic keys for lanes, review gates, transcript lineage, branch traceability, and intelligence integration decisions. |
| `docs/MATRIZ_TRAZABILIDAD_CURSO.md` | Needs branch/module traceability rules for the restructured course. |
| `docs/intelligence-pipeline/` | Remains the review-only intake layer; course integration requires approval gates. |
| `docs/ObsidianVaults-GentleAI-Course/00-HQ/Dashboards/COURSE-DASHBOARD.md` | Should become the learner-facing operational dashboard for current lane/module/gate. |
| `docs/ObsidianVaults-GentleAI-Course/00-HQ/Dashboards/INTELLIGENCE-DASHBOARD.md` | Should remain independent and show review queue state, not silently promote evidence. |
| `docs/ObsidianVaults-GentleAI-Course/00-HQ/Dashboards/MASTER-TRACEABILITY.md` | Should map each module to repo paths, Engram topics, branch/commit evidence, and vault nodes. |
| `docs/ObsidianVaults-GentleAI-Course/40-EVIDENCE/Indexes/EVIDENCE-REGISTER.md` | Should record approved course evidence and transcript lineage references. |
| `openspec/changes/restructure-course-from-intelligence/` | Holds SDD artifacts for this restructuring. |

## Approaches

1. **Patch current pillars in place** - Keep the existing pillar list and add missing items.
   - Pros: Low disruption; small diff.
   - Cons: Preserves a flat roadmap that hides gates, evidence status, and sequence dependencies.
   - Effort: Low.

2. **Replace pillars with intelligence topics** - Rebuild the course around the new Evidence Packs and transcripts.
   - Pros: Looks current and research-driven.
   - Cons: Wrong authority model; pending evidence would leak into curriculum as if approved.
   - Effort: Medium.

3. **Lane/gate architecture with evidence quarantine** - Keep proven foundations, reorganize into lanes and modules, add explicit gates for evidence review, transcripts, branch traceability, and Obsidian dashboards.
   - Pros: Preserves current course evidence, allows broad autonomy, and teaches governance before integration.
   - Cons: Requires coordinated docs/dashboard updates and careful review slicing.
   - Effort: Medium/High.

## Recommendation

Use Approach 3.

Restructure the course into stable lanes rather than a flat pillar list:

| Lane | Purpose | Gate |
| --- | --- | --- |
| Foundations | terminal, repo, Git basics, tests, Gentleman.Dots | learner can explain and operate the repo without copy-paste dependency |
| SDD + Engram | decision-first workflow, memory, recovery, artifacts | every non-trivial change has repo + Engram traceability |
| Git + Review | branches, commits, PRs, review workload | one branch/work-unit maps to one auditable learning block |
| Agent Harnesses | agents as governed systems: visibility, telemetry, runtime, tool permissions | learner separates model, agent, harness, and evidence |
| Research + Evidence Governance | Evidence Packs, source adapters, transcripts, claim gates | only approved evidence becomes course metadata |
| Transfer + Infrastructure | Qontera boundaries, VPS, Engram Cloud, API Bridge | no production/secrets work without dedicated SDD approval |

Implementation should update repo docs and Obsidian dashboards in parallel, but not in this phase. Evidence Packs should be referenced as pending inputs and routed through review gates. The 7 transcript artifacts should be treated as transcript lineage candidates, not course lessons, until reviewed and tied to specific modules.

## Architecture Decisions

- Course structure should be lane/module/gate based, not just pillar/TP based.
- Evidence Packs remain quarantined as `pending_human_review` until human approval changes lifecycle state.
- Obsidian is the visual control plane, but repo docs and Engram remain the durable sources for file state and decisions.
- Branch traceability should stay block-oriented: one learning block or TP per branch, not necessarily one branch per isolated theory concept.
- Transcript scratch artifacts can inform module candidates only through a manifest/linkage note; do not copy large scratch transcripts into course docs during restructuring.
- Review workload should be forecast before apply; implementation is likely chainable if docs/dashboard changes exceed the 1000-line custom budget.

## Non-Goals

- No implementation in this phase.
- No approval, rejection, relocation, or integration of pending Evidence Packs.
- No claim that abstract-page packs equal full-paper reviews.
- No live source connectors, installs, builds, commits, pushes, or VPS activity.
- No edits to `.obsidian/workspace.json` or `.obsidian/appearance.json`.
- No Qontera repo changes or production/deploy changes.

## Risk Controls

| Risk | Control |
| --- | --- |
| Pending evidence becomes fake curriculum authority | Label packs as inputs only; require approved/integrated lifecycle before lesson integration. |
| Dashboard drift | Apply phase must update `COURSE-DASHBOARD`, intelligence dashboard/queue, and traceability together. |
| Review overload | Slice implementation by lane and dashboard sync; keep each PR/checkpoint below 1000 changed lines. |
| Branch traceability confusion | Preserve block/TP branch mapping and record branch/commit evidence in traceability docs. |
| Transcript over-ingestion | Reference manifest summaries and selected reviewed excerpts only; do not dump transcripts into course material. |
| Source-of-truth ambiguity | Keep repo=files, Engram=decisions/SDD, OpenSpec=change artifacts, Obsidian=visual navigation. |

## Review Workload Forecast

Custom review budget: 1000 changed lines.

Forecast if implemented as one change:

- `docs/MINI_PROJECTS_PLAN.md`: 150-300 changed lines.
- `docs/SDD_ENGRAM_OPERATING_MODEL.md`: 40-90 changed lines.
- `docs/ENGRAM_CONTEXT_MAP.md`: 40-90 changed lines.
- `docs/MATRIZ_TRAZABILIDAD_CURSO.md`: 40-100 changed lines.
- Obsidian dashboards/trackers: 150-350 changed lines.
- Evidence/transcript index notes: 50-150 changed lines.

Expected range: 470-1080 changed lines.

Decision needed before apply: No
Chained PRs recommended: Yes if final task plan forecasts more than 850 lines
1000-line budget risk: Medium

Recommended slicing if needed:

1. Core course lanes and traceability docs.
2. Obsidian dashboard and tracker synchronization.
3. Evidence/transcript review-flow indexes.

## Ready for Proposal

Yes. The proposal should authorize a docs/dashboard restructuring change with strict evidence quarantine and review workload guardrails. Specs/design/tasks should come before implementation because this affects course architecture, traceability, and learner navigation.
