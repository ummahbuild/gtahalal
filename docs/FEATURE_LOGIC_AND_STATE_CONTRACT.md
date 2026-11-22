# Dunya — Feature Logic and State Contract
Status: engineering documentation, **not proof of verified runtime**. Applies to all future features and is linked from the feature registry.

## Existing gameplay runtime (inspect before editing)
- `WorldPreview.tsx` owns React state, movement input, NPC dialogue, local save, map/journal, pause, graphics and the founder panel.
- `packages/game-core/src/index.ts` owns version-1 `GameState`: persona, 2D position, fictional coins, inventory, pantry quest status, NPC conversations and fictional clock.
- Pantry state: `available` → talk to Sara → `active` → deliver to Amina → `complete`. `deliverPantry` should be idempotent when the quest is already complete.
- Save: `dunya-save-v1` in localStorage; `migrateSave` validates and clamps data. Autosave while unpaused. **Known potential defect to test:** React state and `gameRef` synchronization when the player saves immediately after a state change.
- Session settings: `dunya-session-limit-v1` localStorage, choices 10/20/30/45 minutes or off. Reminder pauses gameplay, never tracks prayer/faith; hidden-tab time should not accumulate.
- Founder stories: `dunya-founder-stories-v1` localStorage, `STORIES` currently has exactly three short dilemmas (finance, social platform, humanitarian). The panel is **not** an implemented 15-industry quest engine.

## Founder decision engine v1 — exact observed source behavior
`normalizeProgress(raw)` returns `{version:1,decisions,metrics}` with known decision IDs and finite/clamped metrics. Metrics: `trust`, `access`, `runway` each clamped 0–10. Initial values: trust 0, access 0, runway 5.
`applyDecision(progress,storyId,choiceId)` rejects unknown IDs, applies choice effects, and returns existing progress if a decision for that story is already recorded. The React panel persists decisions in `dunya-founder-stories-v1`. No religious, health or humanitarian victim scoring.

**Important limitations and identified logic risks:**
1. Each story is a **single decision card**, not a five-scene mission, NPC-driven quest or playable world encounter.
2. Current state uses a separate localStorage key from `dunya-save-v1`; changing Ahmed/Fatimah or resetting the game does **not** reset founder progress. Decide explicitly whether progress is account-, save-slot- or persona-scoped before changing persistence.
3. `normalizeProgress` trusts valid-looking persisted metrics independently of decisions; a malicious or corrupt save can show a score inconsistent with choices. Prefer recomputing derived metrics from validated decisions, with a versioned migration.
4. The `0–10` metric clamp can conceal costs and create order-dependent outcomes. Decide whether a score is a descriptive indicator or a conserved resource and test the chosen semantics.
5. Panel currently lacks documented focus trapping, Escape handling, restoration of prior focus, screen-reader and mobile browser evidence. Implement before claiming accessibility verified.
6. Founder panel pauses the 3D world; when closed, the world remains paused until the player presses Play. Documented behavior, not a claim of seamless resume.
7. No cross-chapter dependency, persistent NPC relationship, repair action or save-state migration for founder decisions exists yet. Text describing a repair path is **not** an implemented repair mechanic.
8. Current localStorage failure handling prevents claiming a successful save, but automated and browser failure tests are needed.
9. Tests are authored in `apps/game/tests/founder-stories.test.mjs`, not verified as executed in a clean install.

## NPC dialogue source implementation
- `dialogueFor(npcId)` returns the authored scene or null; `chooseDialogue(npcId,choiceId)` rejects unknown IDs.
- Sara can start pantry quest; Amina can confirm handoff when active and nearby; Bilal opens a route discussion only. Decline is no-op.
- Dialogue is not yet a full persistent branching narrative. The response panel is transient; existing `npcSpoken` and quest persist. See [Bayhaven NPC Dialogue Logic](BAYHAVEN_NPC_DIALOGUE_LOGIC.md).
- Tests authored at `apps/game/tests/npc-dialogues.test.mjs`; clean install and browser verification remain pending.

## Required next-generation story engine
**State model:** `StoryStateV2 = {version,saveSlotId,completedMissions,activeMission,sceneId,choiceHistory,evidenceLedger,institutionMetrics,relationshipFlags,reviewedContentVersions}`. Do not include faith, prayer, conversion, survivor identities, medical data or real financial records.

**Transitions:** `locked → available → active → choice_pending → resolved` plus `repair_available → repaired`; all transitions deterministic, idempotent and save-migratable. Choices can unlock new scenes, change fictional access/cost/trust and trigger reversible or reparable world changes.

**Content gating:** mission content must have a stable ID, version, prerequisites, source claim IDs, status, reviewed content version and release approvals. `draft` and `source_research` must not enter an approved religious learning bundle. Storyline drafts can be presented as clearly labelled fictional prototypes only where they contain no unapproved normative religious instruction.

**Evidence:** each claim has `claimId,sourceUrl,sourceType,asOf,rights,reviewer,reviewedVersion,reviewStatus`. Separate real-world facts, legal allegations, official denials, court findings, fictional dialogue and pending religious interpretations.

**Humanitarian aid ledger:** pledged, committed, disbursed, received and operational are separate stages, not additive totals. No duplicate intermediary counting, invented exchange rates, patient identities or claims of live delivery. Local civilian agencies own decisions.

**Finance:** all financial amounts are fictional; explicit fees, liquidity, default and maintenance reserves. No automatic halal/haram certification or real-money transactions.

**Engineering:** resource balance and infrastructure stress must expose demand, supply, losses, cost, maintenance and access; no real safety certification.

**Offline bridge:** optional finite action card after a mission, never a verified worship or charity event. User can save, exit and decline without punishment.

## Acceptance test matrix
| Test | Required outcome |
|---|---|
| Duplicate interaction | No repeated mission reward or duplicated ledger transaction |
| Invalid choice ID | Rejected without mutation |
| Corrupt/old save | Safe migration, known IDs only, no NaN or negative conserved resources |
| Save immediately after decision | Persist latest state, not stale `gameRef` |
| Close/open panel | Choice remains, focus returns appropriately |
| Persona/save-slot change | Explicitly documented isolation or sharing |
| Three choices | Distinct meaningful consequences and one actionable repair route |
| Missing religious approval | No normative content published |
| Stale humanitarian source | No claim of current real-world conditions |
| Hidden tab/break | No timer abuse, no faith analytics, safe pause |
| Keyboard/screen reader/mobile | Accessible controls, focus, captions and reduced motion |
| No lockfile/build | Report as blocker; never claim verified production |

## Review and delivery
Every PR changing story logic updates this file, [Feature Registry](FEATURES_AND_IDEAS_REGISTRY.md), the relevant story document, machine-readable content, unit tests and user-visible copy. Run local tests and browser QA, then separately verify deployment SHA. Scholar, humanitarian, legal, cultural and licensing approval cannot be replaced by code review.

## Cropped-video quest state (new)
- Five positioned NPCs: Sara, Amina, Bilal, Maya and Omar. Maya/Omar have distinct dialogue choices and conditional evidence effects.
- Evidence is stored as idempotent numeric inventory flags in `dunya-save-v1`, not a separate real-world claim database. `recordEvidence` gates actions on completed pantry quest; `verify_clip` requires `hear_omar`; `correct_rumor` requires `share_rumor`.
- `evidenceStatus` renders journal progress. **Unverified:** full save/load, browser focus, and accessibility tests. The conversation result panel may require further eligibility reconciliation.


## Route and procurement logic v1
- `planPantryRoute` checks option ID, completed pantry quest, prior Bilal conversation, and `route_planned` idempotence. Stores `route_planned` and `route_<id>` in v1 inventory.
- `planPantryProcurement` checks option ID, completed quest, route flag, `evidence_hear_omar`, and `procurement_planned` idempotence. Stores `procurement_planned` and `procurement_<id>`.
- `pantryPlanStatus` exposes the next prerequisite in the journal and planning overlay. Route/supplier costs are **illustrative ratings**, not consumed game currency or measured outcomes. The world pauses while planning is open; closing returns to paused gameplay.
- Still missing: live map routing, inventory-count reconciliation, vendor quotes, budget conservation, repair/reversal and browser accessibility evidence. Source-contract tests authored but not executed.


## Episode 4 institutional continuity logic
- `LEGACY_OPTIONS` contains `volunteer_rota`, `supplier_partnership`, `community_board` with illustrative upkeep/resilience/inclusion ratings and narrative outcomes.
- `chooseLegacy` requires complete pantry quest plus `route_planned` and `procurement_planned`, accepts only known option IDs and prevents duplicate selection. Stores `legacy_chosen` and `legacy_<id>` in the v1 inventory.
- `legacyStatus` supplies next-step or outcome text to the journal and overlay. No real monetary accounting, elections, long-term maintenance simulation or cross-chapter state exists yet.
- Source-contract tests added at `apps/game/tests/pantry-legacy.test.mjs`; not executed in a clean build.

## Founder metrics integrity fix (#82)
`normalizeProgress` now discards persisted metrics and deterministically recomputes trust/access/runway from recognized decisions in canonical story order. All effects are summed before final 0–10 clamping; input order does not change results. Old v1 saves remain readable, but tampered or stale metric snapshots are ignored. `applyDecision` normalizes before and after a new choice, and repeated decisions remain idempotent. New Node regression tests cover tampering, order independence and invalid/inherited decisions. Full browser/build verification remains pending.

## Community career and bulletin v1
`communityCareer.mjs` stores `version:1,career,answers` separately at `dunya-miami-community-v1`. Career IDs are whitelisted. Four bulletin steps are ordered and idempotent; saved answers are sanitized, no attendance/faith data. Completion means logistics exercise completed, **not** a delivered khutbah. Separate local save from Bayhaven; full QA pending. See [Miami mode](MIAMI_COMMUNITY_CAREER_GAMEPLAY.md).

## Dialogue transition consistency (#81)
`applyDialogueEffect` now checks NPC proximity, valid NPC/effect combinations, quest prerequisites, evidence dependencies and repeated actions in one game-core function returning `{state,applied,reason}`. `WorldPreview.respond` uses that same result for the state update and the displayed message, synchronizing `gameRef` for the accepted dialogue transition. No duplicate UI-only evidence prerequisites. Automated source-contract tests authored; full game/browser verification remains pending.
