# Proposal: Integrate CodeGraph and Hermes Into the Course

## Problem Statement

The course needs a staged path to teach structural code intelligence and agent-runtime experimentation without weakening the existing GentleAI, SDD, Engram, Git, and Qontera evidence model.

## Goals and Non-Goals

Goals:
- Teach CodeGraph as read-only structural code intelligence.
- Keep Engram as durable decision, evidence, and memory storage.
- Introduce Hermes later as an isolated full agent runtime lab.
- Prepare a Qontera transfer playbook that respects repo and infrastructure boundaries.

Non-goals:
- Replacing OpenCode, GentleAI, SDD, or Engram.
- Connecting Hermes to production repos, VPS, Nginx, secrets, or deploy flows.
- Committing `.codegraph/` cache unless explicitly revisited.

## Phased Approach

1. Phase 1: Add CodeGraph concept material and a read-only sandbox exercise.
2. Phase 2: Define CodeGraph MCP/OpenCode usage policy and guided exercises.
3. Phase 3: Add Hermes sandbox/profile lab using isolated `HERMES_HOME`.
4. Phase 4: Add Hermes + CodeGraph integration lab in a non-production sandbox.
5. Phase 5: Add Qontera transfer playbook for staged adoption.

## Scope In/Out

In scope:
- Course artifacts, exercises, policies, and transfer guidance.
- `.gitignore` treatment for `.codegraph/` as local cache.
- Explicit boundaries for `qontera-web`, `qontera-admin-wb`, `qontera-app`, and `qontera-platform-infrastructure`.

Out of scope:
- Production Qontera rollout, secret handling changes, deployment automation, or VPS/Nginx modification.

## Capabilities

New capabilities:
- `course-codegraph-hermes`: Course requirements for CodeGraph, Hermes, and Qontera transfer labs.

Modified capabilities:
- None; no existing OpenSpec specs are present.

## Risks and Mitigations

| Risk | Mitigation |
| --- | --- |
| Learners confuse CodeGraph with Engram | State that CodeGraph reads structure; Engram stores durable decisions/evidence. |
| Hermes disrupts current OpenCode/GentleAI workflow | Introduce Hermes later, isolated by `HERMES_HOME`, with no production secrets. |
| `.codegraph/` pollutes repo evidence | Treat `.codegraph/` as ignored local cache unless explicitly revisited. |
| Qontera transfer becomes too broad | Use staged rollout, repo boundaries, no secrets, and VPS/Nginx baseline constraints. |

## Acceptance Criteria

- [ ] Spec/design can derive requirements for all five phases.
- [ ] CodeGraph/Engram responsibilities are distinct and testable in course copy.
- [ ] Hermes isolation requirements are explicit.
- [ ] Qontera transfer guidance names repo boundaries and production exclusions.
- [ ] `.codegraph/` cache policy is represented.

## Artifact/Update Candidates

- `docs/MINI_PROJECTS_PLAN.md`: phased course placement.
- `docs/SDD_ENGRAM_OPERATING_MODEL.md`: CodeGraph/Engram policy.
- `docs/AGENT_HARNESSES_COURSE_INTEGRATION.md`: Hermes lab placement.
- `docs/ENGRAM_CONTEXT_MAP.md`: topic keys for future artifacts.
- `.gitignore`: `.codegraph/` local cache rule.

## Open Questions for Spec/Design

- Which phase first introduces CodeGraph MCP inside OpenCode?
- Should Hermes exercises be optional advanced labs or required course steps?
- What verification proves Qontera transfer readiness without touching production?

## Rollback Plan

Delete this change folder before archive, or revert only the future course artifacts created from this proposal.
