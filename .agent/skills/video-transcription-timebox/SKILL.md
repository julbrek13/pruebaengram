---
name: video-transcription-timebox
description: "Trigger: videos, transcripcion, AJ rebaseline, slice 003, bundle faltante. Enforce checkpointed regeneration timeboxes."
license: Apache-2.0
metadata:
  author: gentleman-programming
  version: "1.0"
---

## Activation Contract

Use this skill for the Gentleman video transcription / AJ rebaseline workflow, especially when continuing videos, recovering missing bundles, selecting slices, or deciding whether to regenerate inventory.

## Hard Rules

- Work in checkpointed microtasks; prefer `/tmp/opencode/pruebaengram/` for scratch artifacts.
- Do not commit, push, run builds, or edit repo files unless explicitly required.
- Do not select a new AJ slice from memory alone.
- Preserve evidence-first lineage: every regenerated inventory must be marked as a new lineage with timestamp, reason, inputs, and known missing prior artifacts.
- Never fabricate recovered files. If `channel_flat_600.jsonl`, AJ-RB04 exclusions, or `aj_rebaseline_slice_002_candidate_review.md` are missing, say so.

## Decision Gates

| Elapsed time | Action |
| --- | --- |
| 0-3 min | Check only known paths and prior checkpoints. |
| 3-7 min | If still blocked, prepare regeneration plan instead of searching broadly. |
| 7-10 min | Start fresh inventory regeneration as a new evidence lineage when safe. |
| >10 min | Stop recovery attempts, checkpoint blocker, and continue through regeneration; do not wait longer for missing bundle recovery. |

## Execution Steps

1. Load latest Engram state for `background/gentleman-aj-rebaseline-scratch-state`.
2. Inspect only known scratch paths first.
3. If required artifacts are present, continue the next safe video-processing step.
4. If required artifacts remain missing after the 7-minute soft limit, regenerate inventory as a new lineage rather than stalling.
5. If regeneration also blocks, write a checkpoint and return the exact missing input.
6. Save significant state to Engram with the same topic key.

## Output Contract

Return:

- elapsed-time decision used;
- checkpoint path;
- recovered artifacts or explicit missing artifacts;
- whether regeneration started;
- next safe action.

## References

- `docs/ENGRAM_CONTEXT_MAP.md` for stable memory/topic-key conventions.
