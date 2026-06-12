# Course CodeGraph Hermes Specification

## Purpose

Define the course behavior for teaching CodeGraph, Hermes, their safe sandbox use, and later Qontera transfer without replacing GentleAI, SDD, OpenCode, or Engram.

## Requirements

### Requirement: Learning Order

The course SHALL teach CodeGraph before Hermes.

#### Scenario: Learner starts the module

- GIVEN the learner has not completed CodeGraph basics
- WHEN the course presents the next tool module
- THEN CodeGraph concepts and sandbox practice SHALL appear before Hermes labs

#### Scenario: Learner asks for Hermes first

- GIVEN Hermes content is requested before CodeGraph completion
- WHEN the course responds
- THEN it SHALL redirect to CodeGraph prerequisites first

### Requirement: CodeGraph Concept Boundary

The course SHALL distinguish CodeGraph as a structural code graph from Engram as durable memory for decisions, evidence, and context.

#### Scenario: Concept explanation

- GIVEN a learner compares CodeGraph with Engram
- WHEN the course explains both tools
- THEN it SHALL state that CodeGraph explores code structure and Engram stores persistent knowledge

### Requirement: CodeGraph Sandbox Policy

The course SHALL use CodeGraph only in read-only/local-index exercises and SHALL treat `.codegraph/` as local cache excluded from repo evidence unless explicitly revisited.

#### Scenario: Sandbox validation

- GIVEN a learner runs the CodeGraph sandbox
- WHEN status is checked
- THEN the exercise SHALL validate index availability without requiring committed `.codegraph/` files

#### Scenario: Cache appears in git status

- GIVEN `.codegraph/` appears as an untracked artifact
- WHEN the learner prepares evidence
- THEN the course SHALL identify it as local cache, not course evidence

### Requirement: MCP and OpenCode Usage Policy

The course SHALL use CodeGraph for structural exploration, while Read tools, focused tests, and repo artifacts SHALL remain the evidence and verification path.

#### Scenario: Structural question

- GIVEN the learner needs to map dependencies or symbols
- WHEN CodeGraph MCP is available in OpenCode
- THEN it SHALL be used for exploration only, not as implementation proof

### Requirement: Hermes Sandbox Isolation

The course SHALL introduce Hermes with isolated `HERMES_HOME`, no production secrets, and no replacement of OpenCode, GentleAI, SDD, or Engram.

#### Scenario: Hermes lab setup

- GIVEN the learner starts Hermes practice
- WHEN the lab is configured
- THEN it SHALL use sandbox-only state and SHALL NOT require production credentials

### Requirement: Hermes and CodeGraph Integration Lab

The course SHALL offer Hermes plus CodeGraph integration only after separate CodeGraph and Hermes concepts are understood.

#### Scenario: Integration readiness

- GIVEN the learner completed both standalone modules
- WHEN the integration lab starts
- THEN it SHALL combine the tools in a non-production sandbox

#### Scenario: Missing prerequisite

- GIVEN either standalone module is incomplete
- WHEN the integration lab is requested
- THEN the course SHALL block or defer the integration lab

### Requirement: Qontera Transfer Playbook

The course SHALL define staged enterprise adoption for Qontera that respects `qontera-web`, `qontera-admin-wb`, `qontera-app`, and `qontera-platform-infrastructure` boundaries, the VPS/Nginx baseline, and no-secrets handling.

#### Scenario: Transfer planning

- GIVEN the learner prepares Qontera adoption guidance
- WHEN repo scope is assigned
- THEN infrastructure concerns SHALL remain in `qontera-platform-infrastructure`

#### Scenario: Production risk appears

- GIVEN a step would touch VPS, Nginx, deploy flows, or secrets
- WHEN the playbook is reviewed
- THEN it SHALL mark that step out of sandbox scope

### Requirement: Dual Traceability

The course SHALL require repo artifacts plus Engram topic keys or observation IDs for meaningful course progress.

#### Scenario: Module completion

- GIVEN a learner completes an exercise or decision point
- WHEN evidence is reported
- THEN the report SHALL list repo paths and Engram topic keys or observation IDs separately
