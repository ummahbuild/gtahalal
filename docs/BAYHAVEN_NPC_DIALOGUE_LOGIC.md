# Bayhaven NPC dialogue logic — first playable conversation pass
Status: committed implementation, clean build and browser QA unverified.

## Implemented in source
`apps/game/src/npcDialogues.mjs` supplies three distinct fictional NPC scenes, each with an opening and three choices:
- **Sara**: volunteer, ask what neighbors need, or return later. Accepting starts the pantry quest through existing `talk`.
- **Amina**: confirm inventory handoff, ask about accessible entrance, or return later. Only handoff confirmation calls `deliverPantry`; this requires an active quest and player proximity and is idempotent.
- **Bilal**: explore designated loading routes, listen to delivery-driver constraints, or return later. No premature mission completion.
`WorldPreview.tsx` displays the choices in a dialog and a separate response panel; existing E-key and Talk controls open nearby dialogue. All responses are original fictional writing, not religious rulings.

## Exact boundaries
- The current world still contains **only three positioned NPCs**, not the full Act I cast. Maya and Omar are authored in [Act I](PLAYER_STORY_ACT_ONE.md) but not spawned.
- Choice IDs are local scene IDs, not a versioned dialogue-history ledger. NPC dialogue responses are transient; only existing `npcSpoken`, quest and pantry rewards persist in `dunya-save-v1`.
- The accessibility and route choices **do not yet create route-planning quests**. They are conversational hooks.
- Returning later does not change quest state; no penalty or coercion.
- Save immediately after a state update and keyboard focus management still need browser verification.

## Next implementation stages
1. Spawn Maya and Omar with original consent-first dialogue and a factual-evidence journal for The Cropped Video.
2. Add persistent dialogue choice history, reversible corrections and stable save migration.
3. Build accessible loading route planning, inventory verification and community procurement scenes.
4. Add deterministic quest tests and browser accessibility tests; ensure no unreviewed normative religious content is published.

## Acceptance
Three choices per NPC; no duplicate reward; decline without penalty; handoff requires quest activation and proximity; unknown IDs rejected; mobile and keyboard controls verified before release. See [Feature Logic Contract](FEATURE_LOGIC_AND_STATE_CONTRACT.md).

## Maya and Omar: The Cropped Video (new source implementation)
- Maya (x=-13,z=-1) and Omar (x=13,z=-1) now spawn in the starter neighborhood and appear on the map.
- Omar can provide context about a blocked accessible entrance and discuss transparent procurement; Maya can verify a fictional cropped clip, share an unverified post, or correct that post.
- Evidence flags are persisted in the existing version-1 save inventory using keys `evidence_hear_omar`, `evidence_verify_clip`, `evidence_share_rumor`, and `evidence_correct_rumor`. Flags are idempotent.
- Evidence actions require completed pantry handoff. Verification requires Omar's account; correction requires an earlier unverified post. The journal shows progress. No real people, video, or beneficiary data are recorded.
- This is a **simple conversation/evidence prototype**, not a media upload, full multi-source verification system, city permit simulation, or a final published news story. It does not determine real-world wrongdoing.
- Known follow-up: move eligibility checks into one shared pure function so response text and state transitions cannot diverge; test focus, saving, and browser behavior.


## Dialogue transition consistency (#81)
`applyDialogueEffect` now checks NPC proximity, valid NPC/effect combinations, quest prerequisites, evidence dependencies and repeated actions in one game-core function returning `{state,applied,reason}`. `WorldPreview.respond` uses that same result for the state update and the displayed message, synchronizing `gameRef` for the accepted dialogue transition. No duplicate UI-only evidence prerequisites. Automated source-contract tests authored; full game/browser verification remains pending.
