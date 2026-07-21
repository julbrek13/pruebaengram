# Course Restructure Intelligence Specification

## Purpose

Define the required course behavior for restructuring `pruebaengram` from accumulated intelligence while preserving evidence governance, traceability, and source-of-truth boundaries.

## Requirements

### Requirement: Course Lane Architecture

The course SHALL be organized into lanes, modules, and gates instead of a flat topic dump.

#### Scenario: Roadmap restructure

- GIVEN the course roadmap is updated
- WHEN lanes are documented
- THEN it SHALL include Foundations, SDD+Engram, Git+Review, Agent Harnesses, Research+Evidence Governance, and Transfer+Infrastructure
- AND each lane SHALL expose module outcomes and completion gates

### Requirement: Evidence Quarantine Review Gate

Pending Evidence Packs MUST remain `pending_human_review` and MUST NOT become curricular truth without explicit approval.

#### Scenario: Pending pack referenced

- GIVEN a pending Evidence Pack informs a module candidate
- WHEN course docs reference it
- THEN the reference SHALL label it as pending input only
- AND the lesson SHALL NOT present its claims as approved content

### Requirement: Obsidian Dashboard Synchronization

The implementation SHALL update Obsidian dashboards in parallel with matching repo docs, excluding local workspace state.

#### Scenario: Course structure changes

- GIVEN a lane, module, gate, or traceability path changes
- WHEN the apply phase edits repo docs
- THEN `COURSE-DASHBOARD.md`, intelligence dashboard entries, and master traceability SHALL be synchronized as applicable
- AND `.obsidian/workspace.json` and `.obsidian/appearance.json` SHALL NOT be modified

### Requirement: Branch and TP Traceability

The course SHALL preserve block-oriented branch traceability for TPs or learning blocks.

#### Scenario: Learning block recorded

- GIVEN a module or TP is planned
- WHEN traceability is documented
- THEN it SHALL map the block to repo paths, branch or commit evidence, Engram topic keys or observation IDs, and Obsidian nodes

### Requirement: Transcript Integration Policy

Transcript scratch artifacts MAY inform module candidates only through reviewed lineage references.

#### Scenario: Transcript candidate appears

- GIVEN transcript artifacts or manifests exist outside the repo
- WHEN they are used during restructuring
- THEN the course SHALL reference lineage or selected reviewed excerpts only
- AND it SHALL NOT copy bulk scratch transcripts into course material

### Requirement: Learning Order

The course SHALL teach governance foundations before advanced intelligence integration.

#### Scenario: Learner enters research-backed content

- GIVEN a learner has not completed evidence review and traceability gates
- WHEN research-backed modules are requested
- THEN the course SHALL redirect to governance prerequisites before presenting integration work

### Requirement: Source-of-Truth Boundaries

The course SHALL state separate authority boundaries for repo docs, Engram, OpenSpec, and Obsidian.

#### Scenario: Conflicting course state

- GIVEN repo docs, Engram memory, OpenSpec artifacts, or Obsidian dashboards disagree
- WHEN the conflict is reviewed
- THEN repo docs SHALL define durable file state, Engram SHALL define remembered decisions, OpenSpec SHALL define change artifacts, and Obsidian SHALL define visual navigation

### Requirement: Docs-Only Verification Behavior

This restructuring phase SHALL be verified through document review and artifact presence, not builds or test execution.

#### Scenario: Spec phase verification

- GIVEN strict TDD is enabled but this phase writes specs only
- WHEN verification is reported
- THEN the report SHALL list created spec artifacts and skipped tests/builds
- AND it SHALL NOT run `npm test`, installs, commits, pushes, or build commands
