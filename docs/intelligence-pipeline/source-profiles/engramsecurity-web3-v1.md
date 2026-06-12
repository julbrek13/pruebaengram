# EngramSecurity Web3 Source Profile v1

This profile filters public cybersecurity and Web3 information into reviewable evidence. It does not approve integration by itself: every finding stays pending until a human chooses its destination.

## Quick path

1. Collect only public, safe, source-specific evidence.
2. Score the finding for quality, risk, and usefulness.
3. Route it to a pending destination: EngramSecurity, Qontera, course, backlog, or discard.
4. Wait for human review before integration.

## Scope

| Area | Included |
| --- | --- |
| Cybersecurity | Defensive practices, governance, secure labs, public guidance, safe tool documentation |
| Web3 | Ethereum, Solidity, smart contracts, Layer 2, account abstraction, wallets, bridges, sequencing, rollups |
| Research | Specs, EIPs, public postmortems, defensive writeups, reputable technical analysis |
| Education | Concepts that can become safe course notes, labs, maps, or review questions |

## Destination routing

| Destination | Use when |
| --- | --- |
| `engramsecurity` | The finding improves the cybersecurity/Web3 vault, governance, labs, or TypeScript sandbox. |
| `qontera` | The finding affects company architecture, admin auditability, operational risk, or platform security. |
| `pruebaengram` | The finding improves the course methodology, SDD/Engram workflow, or agent operating model. |
| `backlog` | The finding is promising but immature, incomplete, or not actionable yet. |
| `discard` | The finding is unsafe, low-quality, hype-driven, irrelevant, or legally risky. |

## Allowed sources

- Official documentation and specifications.
- Ethereum specs and EIPs.
- OWASP material.
- OpenZeppelin, Trail of Bits, Consensys, L2Beat, Paradigm, and similar reputable technical sources.
- Pinpoint READMEs from defensive tools.
- Pinned releases and changelogs.
- Papers or technical posts with auditable evidence.

## Blocked sources and content

- Real malware, cracks, activators, dumps, exploit packs, and payload packs.
- Ready-to-abuse exploit instructions or offensive automation.
- Full external clones unless explicitly approved under a clone-last policy.
- Downloaded binaries or legally unclear material.
- Raw corpora that cannot be safely summarized and governed.

## Quality scoring

Score each item from 0 to 5.

| Score | Question |
| --- | --- |
| Authority | Is the source reputable, primary, or technically accountable? |
| Evidence | Does it provide specs, code references, measurements, or verifiable examples? |
| Safety | Can it be discussed or labbed defensively without enabling abuse? |
| Currency | Is it current for Ethereum/Web3 conditions and recent protocol changes? |
| Applicability | Can it improve EngramSecurity, Qontera, or the course? |
| Novelty | Does it add a useful new angle rather than repeating known basics? |
| Risk | What is the chance of legal, operational, security, or educational misuse? |

## Required output

Every analysis using this profile should produce:

- short executive summary;
- source list with links or exact references;
- evidence table with quotes, sections, commits, specs, or release identifiers;
- quality scores with reasons;
- risk and abuse notes;
- suggested destination, marked as `pending_human_review`;
- questions for the human reviewer;
- explicit integration guardrail.

## Reusable request

```text
Analizá con perfil EngramSecurity-Web3-v1:

Tema:
Fuente o búsqueda:
Objetivo:
Nivel de profundidad: bajo / medio / alto
Destino probable: EngramSecurity / Qontera / curso / backlog
Restricciones extra:
```

## Integration guardrail

External information is not knowledge by default.

```text
External source + evidence + profile scoring + human review = candidate for integration.
```

No finding should be integrated into EngramSecurity, Qontera, course material, or metadata until a human decision records the destination and rationale.
