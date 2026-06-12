# Exploration: Controlled Research Curation

## Current State

`pruebaengram` teaches decision-first engineering with SDD, Engram, Git, AGENTS.md, Agent Harnesses, Obsidian evidence, and future Qontera transfer. The course already has strong evidence discipline: repo artifacts prove current files, Engram preserves decisions and SDD state, OpenSpec stores phase artifacts, and Obsidian connects learning/navigation.

The prior Sisyphus analysis established a boundary: do not import `argahv/sisyphus-academica` directly. Use it only as inspiration for research directors, scouts, novelty engines, adversarial reviewers, source/citation verification, and quality gates. The target system must support any controlled research/documentation source, not only arXiv or academic papers.

## Affected Areas

| Area | Why It Matters |
| --- | --- |
| `docs/MINI_PROJECTS_PLAN.md` | Future course placement should likely become an Agent Harnesses or Professional Criteria module after foundations, not a replacement for current CodeGraph/Hermes work. |
| `docs/ENGRAM_CONTEXT_MAP.md` | Future proposal should add stable topic keys for research curation course progress, source registry decisions, evidence policy, and Qontera transfer. |
| `docs/SDD_ENGRAM_OPERATING_MODEL.md` | Future design should extend the evidence model without weakening repo-vs-Engram source-of-truth rules. |
| `docs/ObsidianVaults-GentleAI-Course/` | Future course/vault docs can expose visual tracking, source maps, claim registers, and review gates. |
| `openspec/changes/controlled-research-curation/` | Active SDD change artifacts for this system. |
| Future Qontera repos | Enterprise transfer must keep `qontera-web`, `qontera-admin-wb`, `qontera-app`, and `qontera-platform-infrastructure` boundaries separate. |

## Course Architecture Placement

Recommended placement: add a future full-SDD module under the Agent Harnesses track, after the learner understands SDD, Engram, AGENTS.md, Agent Harnesses, CodeGraph/Hermes boundaries, API Bridge, and VPS/Engram Cloud basics.

Suggested course label: `AH-RC: Controlled Research Curation With Agents`.

Rationale: this is not just documentation writing. It is an agent harness problem: scoped tools, permissioned sources, evidence stores, reviewers, gates, and publish controls. It should teach governance before automation.

Alternative placement: Professional Criteria track as a decision module for source quality and claim verification. This is useful for judgment training, but too narrow for the system architecture because it hides ingestion, permission, and pipeline concerns.

## System Scope

### MVP Scope

The first MVP should prove a controlled, source-agnostic curation loop without enterprise complexity.

MVP should include:

- Source registry with source type, URL/root, owner, allowed operations, rate-limit notes, and trust tier.
- Permission matrix for read/query/write/publish by actor and scope.
- Ingestion manifest per run with source IDs, timestamps, query terms, retrieved artifacts, hashes or stable locators, and skipped/failed entries.
- Evidence store that records source snapshots or references, extracted claims, citation/source links, and verifier status.
- Claim verifier that checks every output claim has a backing evidence ID or is explicitly marked as opinion/analysis.
- Adversarial reviewer that challenges unsupported claims, stale sources, overbroad conclusions, and source bias.
- Output gate that blocks publication into course docs unless evidence and permission checks pass.
- OpenSpec + Engram integration for SDD artifacts and durable decisions.

MVP should not include:

- Direct Sisyphus import.
- Global OpenCode installer/config mutation.
- Secrets, API keys, or production credentials in repo/docs/chat.
- Full paper/LaTeX-first workflow.
- Automated publishing to Qontera production surfaces.
- Multi-tenant SaaS controls beyond clear project/source scopes.

### Future Enterprise Scope

Future Qontera-grade scope can add:

- Per-repo/workspace source registries.
- Admin approval UI in `qontera-admin-wb`.
- Private/internal document connectors.
- Audit logs and retention policy.
- Scheduled scouts and change detection.
- Role-based access control and service accounts.
- Organization-level trust policies.
- Integration with CodeGraph/Hermes only through evidence IDs, manifests, OpenSpec links, and Engram observations.
- Optional deployment through `qontera-platform-infrastructure` when the security model is explicit.

## Source Model

The system should treat every source as a governed `Source` record, not as a hard-coded API.

| Source Family | Examples | Initial Treatment |
| --- | --- | --- |
| Academic/research APIs | arXiv, Semantic Scholar, CrossRef, OpenAlex | Useful first connectors, but not privileged as the only model. |
| Code repositories | GitHub repos, tagged releases, README/docs trees | Read-only by default; pin commits/tags when citing. |
| Official product docs | Framework/library/vendor docs | Trust tier depends on publisher authority and version pinning. |
| Internal docs | Qontera docs, course docs, runbooks | Require workspace/project scope and explicit read permission. |
| Course memory/artifacts | Engram, OpenSpec, Obsidian vaults, repo docs | Use as first-class evidence, but preserve source-of-truth boundaries. |
| Future custom centers | Any documentation/research center selected later | Add through registry adapter contracts, not core rewrites. |

Each source should define:

- `source_id`
- `type`
- `owner`
- `scope`
- `locator`
- `allowed_operations`
- `trust_tier`
- `version_or_snapshot_policy`
- `retention_policy`
- `secrets_required` as metadata only, never secret values

## Permission And Admin Model

Permission should be explicit at three levels: actor, source, and output surface.

| Actor | Read | Query/Ingest | Write Evidence | Publish Output | Notes |
| --- | --- | --- | --- | --- | --- |
| Human owner | Yes | Approves scopes | Yes | Final approval | Governs intent and risk. |
| Orchestrator admin | Yes, scoped | Starts runs | Writes manifests/artifacts | Requests publish | Cannot bypass gates. |
| Scout agent | Source-scoped | Yes | Run metadata only | No | Finds candidates, does not conclude. |
| Ingestion worker | Source-scoped | Yes | Evidence records | No | Fetches and normalizes. |
| Verifier | Evidence-scoped | No broad fetch by default | Verification status | No | Checks claims against stored evidence. |
| Adversarial reviewer | Evidence/output-scoped | Optional read-only | Review findings | No | Challenges quality, bias, and unsupported claims. |
| Publisher/output gate | Reads final package | No | Gate decision | Yes, if authorized | Writes only to approved destination. |

Scopes should be configured per project/workspace:

- `course-public`: public docs and public research sources.
- `course-internal`: repo docs, OpenSpec, Engram, Obsidian vaults.
- `qontera-internal`: private Qontera docs, never mixed into public course outputs by default.
- `qontera-production`: future publish/deploy surfaces, blocked until explicit proposal/design.

## Evidence Model

Every claim that reaches an output should be traceable.

Minimum evidence fields:

- `evidence_id`
- `source_id`
- `source_locator`
- `retrieved_at`
- `retrieved_by`
- `snapshot_hash` or immutable version locator where possible
- `source_type`
- `trust_tier`
- `claim_text`
- `claim_kind`: fact, interpretation, recommendation, risk, decision
- `supporting_excerpt` or structured reference
- `verification_status`: unverified, supported, contradicted, stale, insufficient, opinion
- `review_status`
- `permission_scope`
- `output_links`: OpenSpec path, Engram observation ID/topic key, repo path, Obsidian note path

Interaction rules:

- Repo artifacts prove current file content.
- Engram preserves decisions, SDD phase outputs, and recovery context.
- OpenSpec stores change-phase artifacts and requirement/design traceability.
- Obsidian visualizes learning and evidence, but does not replace Git or Engram.
- Qontera private evidence must not leak into public course docs unless explicitly approved and sanitized.

## Pipeline Model

Recommended MVP pipeline:

1. Intake: human/orchestrator defines question, scope, allowed sources, and output target.
2. Source registry validation: confirm sources are configured and permitted.
3. Scouts: discover candidate sources and produce a candidate manifest.
4. Ingestion workers: fetch/normalize allowed materials and write evidence records.
5. Dedup/novelty pass: group overlaps, identify new material, and mark stale or duplicate sources.
6. Claim extraction: convert evidence into candidate claims with source links.
7. Source/claim verifier: check every claim against evidence and permissions.
8. Adversarial reviewers: challenge unsupported claims, bias, freshness, and overreach.
9. Output composer: draft course/research output using only approved evidence.
10. Output gate: block publish when evidence, permission, review, or destination checks fail.
11. Persistence: save OpenSpec artifact, Engram observation, repo artifact when approved, and optional Obsidian index entry.

Inspired by Sisyphus, but stricter: gates must be enforceable system checks, not only prompt instructions.

## Qontera Transfer Path

Transfer should be staged and repo-boundary safe.

| Stage | Scope | Boundary |
| --- | --- | --- |
| Course MVP | `pruebaengram` only | Public/safe sources, no production secrets. |
| Qontera planning | OpenSpec/Engram architecture only | No repo changes until proposal/spec/design are approved. |
| Admin prototype | `qontera-admin-wb` | UI/admin controls only; no infra mixed in. |
| Connector/runtime prototype | dedicated service or approved workspace | Internal docs and source adapters; no public exposure by default. |
| Infrastructure | `qontera-platform-infrastructure` | VPS/Nginx/secrets/deploy docs live here only. |
| Product exposure | `qontera-web` or `qontera-app` | Only sanitized, approved outputs. |

Enterprise boundaries:

- No secrets in chat, docs, or repo artifacts.
- Infrastructure decisions stay in `qontera-platform-infrastructure`.
- Admin/dashboard concerns stay in `qontera-admin-wb`.
- Public web output stays in `qontera-web`.
- Client/product UX stays in `qontera-app`.
- VPS/Nginx exposure remains out of MVP until a dedicated SDD change approves it.

## Approaches

### 1. Course-First Controlled MVP

Build the first version as a course module and local artifact workflow in `pruebaengram`.

Pros: lowest risk, strongest learning value, no Qontera production exposure, aligns with SDD/Engram pedagogy.

Cons: does not immediately provide enterprise UI/runtime.

Effort: Medium.

### 2. Enterprise-First Qontera Admin System

Start with AdminWeb and infrastructure planning.

Pros: closer to eventual business use.

Cons: too much surface area too early; risks mixing repos, secrets, infra, and unresolved policy.

Effort: High.

### 3. Sisyphus Fork/Adapter

Fork Sisyphus and adapt it.

Pros: faster apparent start.

Cons: inherits hard-coded academic/API assumptions, installer/global config risks, naming mismatches, and prompt-only gates.

Effort: High due to cleanup and governance debt.

## Recommendation

Proceed with Approach 1: Course-First Controlled MVP.

The next SDD proposal should define a course module and controlled artifact workflow first, with Qontera as an explicit transfer path rather than the initial runtime. That keeps the foundation clean: concepts before code, governance before automation, and evidence before publication.

## Risks

- Source sprawl: supporting any source can become vague unless the registry contract is strict.
- Permission theater: if gates are only prompts, the system repeats Sisyphus' weakest pattern.
- Evidence bloat: storing too much raw material can make the course heavy and hard to review.
- Private/public leakage: Qontera/internal docs must not cross into public course output without approval.
- Staleness: research and docs change; every evidence record needs freshness/version policy.
- Review fatigue: future implementation can exceed the 400-line budget and should likely be chained.
- Ambiguous authority: Engram, OpenSpec, repo, and Obsidian must keep distinct responsibilities.

## Unknowns

- Which source connector should be first for the MVP: GitHub docs, official docs, or academic APIs.
- Whether evidence storage should be file-based, Engram-first, or a small local database in later implementation.
- How much raw source content can be retained legally and practically for each source type.
- What the first learner-facing exercise should produce: source registry, claim register, or curated course note.
- Whether Qontera wants this as an internal admin feature, a service workspace, or a background research pipeline.

## Decisions Needed Before Proposal

- Confirm the MVP is course-first and not Qontera-runtime-first.
- Select the first 2-3 source families for MVP validation.
- Decide whether the first output target is course docs, Obsidian evidence register, or OpenSpec-only artifact.
- Define initial permission scopes and who can approve publish gates.
- Choose whether `explore.md` remains the project artifact name for this change or whether future phases should also create conventional `exploration.md` aliases.

## Ready for Proposal

Yes. The proposal should target a full-SDD course/system architecture change with strict non-goals: no direct Sisyphus import, no global config mutation, no secrets, no Qontera production changes, and no implementation before source/permission/evidence contracts are approved.
