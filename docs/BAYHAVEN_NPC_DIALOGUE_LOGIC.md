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
