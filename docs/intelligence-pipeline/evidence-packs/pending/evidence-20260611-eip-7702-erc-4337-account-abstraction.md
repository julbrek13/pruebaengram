---
id: evidence-20260611-eip-7702-erc-4337-account-abstraction
type: evidence-pack
status: pending_human_review
source_type: web
source_name: "Official EIP-7702 and ERC-4337"
source_url: "https://eips.ethereum.org/EIPS/eip-7702 ; https://eips.ethereum.org/EIPS/eip-4337"
captured_at: "2026-06-11"
language: en
relevance: 5
novelty: 4
confidence: 4
risk: 2
metadata_ready: false
review_decision:
reviewed_by:
reviewed_at:
---

# EIP-7702 vs ERC-4337 Account Abstraction

Focused extraction from official Ethereum Improvement Proposal pages for human review before routing anything to EngramSecurity, Qontera, or `pruebaengram/course`.

## Summary

| Field | Value |
| --- | --- |
| Title | EIP-7702 and ERC-4337 account abstraction comparison |
| Why it matters | EIP-7702 changes how EOAs can delegate execution, while ERC-4337 defines a higher-layer account-abstraction flow around `UserOperation`, `EntryPoint`, bundlers, paymasters, and alternate mempools. |
| Recommended action | Review whether this becomes an EngramSecurity defensive note, a Qontera architecture/audit brief, or a course methodology example. |
| Metadata targets | `engramsecurity`, `qontera`, optional `pruebaengram/course` |

## Evidence

| Source | Official status / section | Exact quote or section reference | Review value |
| --- | --- | --- | --- |
| EIP-7702 | Header: `Final`, `Standards Track: Core` | "Add a new tx type that permanently sets the code for an EOA" | Establishes protocol-level maturity and scope. |
| EIP-7702 | Abstract | "Add a new EIP-2718 transaction type that allows Externally Owned Accounts (EOAs) to set the code in their account." | Core mechanism for EOA code delegation. |
| EIP-7702 | Motivation | "Three particular features this EIP is designed around are: Batching, Sponsorship, Privilege de-escalation" | Maps directly to UX and security review themes. |
| EIP-7702 | Rationale: Interaction with applications and wallets | "There is no safe way to provide this interface. The code specified by an authorization has unrestricted access to the account and must always be closely audited by the wallet." | High-priority defensive wallet-review warning. |
| EIP-7702 | Backwards Compatibility | "This EIP breaks a few invariants" including `tx.origin == msg.sender` topmost-frame assumptions. | Important audit trigger for legacy assumptions. |
| EIP-7702 | Security Considerations: Implementation of secure delegate contracts | "A poorly implemented delegate can allow a malicious actor to take near complete control over a signer’s EOA." | Defensive-only risk note; do not convert into exploit instructions. |
| ERC-4337 | Header: `Final`, `Standards Track: ERC` | "Account abstraction without consensus-layer protocol changes, instead relying on higher-layer infrastructure." | Establishes architecture boundary: application/infrastructure layer, not consensus change. |
| ERC-4337 | Abstract | "This proposal instead introduces a higher-layer pseudo-transaction object called a `UserOperation`." | Core object model for routing and education. |
| ERC-4337 | Definitions | "EntryPoint - a singleton contract to execute bundles of `UserOperations`. Bundlers should whitelist the supported `EntryPoint`." | Identifies central trust and audit boundary. |
| ERC-4337 | Support for EIP-7702 authorizations | "On networks with EIP-7702 enabled, the `eth_sendUserOperation` method accepts an extra `eip7702Auth` parameter." | Shows explicit intersection between the two standards. |
| ERC-4337 | Security Considerations | "The `EntryPoint` contract will need to be audited and formally verified, because it will serve as a central trust point for all ERC-4337." | Primary audit focus for Qontera/admin thinking and EngramSecurity defensive notes. |
| ERC-4337 | Security Considerations | Verification should cover "Safety against arbitrary hijacking" and "Safety against fee draining". | Safe, defensive audit categories. |

## Comparison

| Dimension | EIP-7702: Set Code for EOAs | ERC-4337: Account Abstraction Using Alt Mempool |
| --- | --- | --- |
| Mechanism | New EIP-2718 transaction type with authorization tuples that write a delegation indicator to the authorizing EOA. | Higher-layer `UserOperation` flow sent to a dedicated mempool, bundled into `EntryPoint.handleOps()` transactions. |
| Account model | Existing EOAs can delegate execution to code while retaining EOA identity and transaction origination constraints modified by the EIP. | Smart Contract Accounts provide their own validation logic through `validateUserOp`; EOAs are not the intended primary account model. |
| UX implications | Enables batching, sponsorship, and privilege de-escalation for EOAs without requiring immediate full migration to smart contract wallets. | Enables account-level validation, alternative signatures, paymasters, token/sponsored gas flows, recovery patterns, and bundled execution. |
| Security implications | Wallets must audit delegated code carefully; unsafe authorization UX is explicitly warned against by the EIP. Delegation can affect assumptions around `tx.origin`, storage, nonce behavior, and transaction propagation. | Security concentrates around `EntryPoint`, account validation, paymasters, factories, bundler simulation, reputation, staking, and mempool DoS resistance. |
| Likely audit focus | Delegate contract permissions, replay protection, initialization front-running, storage migration/collision risk, sponsor/relayer reimbursement assumptions, legacy `tx.origin` checks. | `EntryPoint` formal verification, `validateUserOp`, paymaster validation/post-op behavior, factory access control, bundler simulation rules, fee-draining and hijacking safety claims. |
| Maturity/status | Official page marks it `Final`, `Standards Track: Core`. | Official page marks it `Final`, `Standards Track: ERC`; it also now requires EIP-7702 on the official page. |

## Routing Suggestions

| Destination | Suggested use | Human-review decision needed |
| --- | --- | --- |
| `engramsecurity` | Create a defensive Web3/account-abstraction note comparing EOA delegation risk, `EntryPoint` trust boundaries, paymaster/factory review points, and wallet UX warnings. | Approve only if content stays conceptual and defensive, with no payloads or abuse recipes. |
| `qontera` | Use as architecture/security background for admin/audit platform thinking: trust boundaries, central verification points, event/audit metadata, and operational monitoring around account-abstraction flows. | Decide whether Qontera needs a platform-risk brief or only a future-reference note. |
| `pruebaengram/course` | Optional methodology example for evidence extraction: official-source-only comparison, routing lanes, and pending-human-review workflow. | Include only if it teaches source-review process; do not turn it into Ethereum course content by default. |

## Human-Review Questions

- Should this pack be promoted into an EngramSecurity defensive note on account abstraction and wallet review?
- Should Qontera receive a separate architecture brief focused on audit trails, account-operation monitoring, and central trust boundaries?
- Does `pruebaengram/course` benefit from this as a methodology example, or is it too domain-specific?
- Are the current quotes sufficient, or should a later checkpoint add line-anchored local captures from the upstream EIP markdown files?
- Should EIP-7702/EIP-4337 become a recurring watch topic for future account-abstraction updates?

## Defensive Risk Notes

- Keep this artifact defensive-only: no exploit payloads, no transaction construction recipes, no malicious bundler/paymaster scenarios as step-by-step instructions.
- Treat EIP-7702 delegation as security-critical because the official EIP warns delegated code has unrestricted account access and must be closely audited by the wallet.
- Treat ERC-4337 `EntryPoint`, paymasters, factories, and bundler validation as audit boundaries, not as implementation guidance for abuse.
- Use official EIP text only for this pack; do not merge in blog, social media, or unofficial implementation claims without a separate approved source checkpoint.

## Review State

| Field | Value |
| --- | --- |
| Lifecycle | pending_human_review |
| Human decision | pending |
| Integration allowed | no |

## Integration Guardrail

Do not integrate this pack into EngramSecurity, Qontera, course notes, metadata, dashboards beyond the review queue, or downstream repos until `review_decision` changes by explicit human approval and the integration output references this Evidence Pack ID.
