# Dunya — Feature, Ideation and Implementation Registry
Status: canonical **navigation and state ledger** as of 2026-11-22. This document distinguishes ideas, requirements, committed source, verified behavior and public deployment. It is not a claim that all concepts are implemented.

## State vocabulary
- **Idea:** suggested concept, no acceptance criteria or committed implementation.
- **Specified:** detailed story/UX/logic requirements committed, but not a working feature.
- **Source implemented / unverified:** code committed to `main`, with no verified clean install/build/browser QA.
- **Verified locally:** reproducible local tests and browser evidence linked to commit.
- **Release approved:** all applicable Islamic, legal, cultural, safety, licensing and accessibility gates complete.
- **Live deployed:** production URL and deployment SHA confirmed. A GitHub merge alone is not a deployment.

## Canonical feature matrix
| Area | Status | Logic / behavior contract | Requirements / story source | Source code / registry |
|---|---|---|---|---|
| Bayhaven 3D neighborhood | Source implemented / unverified | movement, collisions, NPC proximity, camera, quality | [Act I](PLAYER_STORY_ACT_ONE.md), [map](STARTER_NEIGHBORHOOD_MAP_REQUIREMENTS.md) | `apps/game/src/WorldPreview.tsx`, `packages/game-core/src/index.ts` |
| Pantry quest and save | Source implemented / unverified | quest available→active→complete, local save, migration, no repeated completion reward | [Act I](PLAYER_STORY_ACT_ONE.md) | `packages/game-core/src/index.ts` |
| Session wellbeing | Source implemented / unverified | 10/20/30/45/off, foreground reminder, pause, local save and no worship tracking | [Session safeguards](SESSION_SAFEGUARDS_RELEASE_REQUIREMENTS.md), [real world first](REAL_WORLD_FIRST_GAMEPLAY_POLICY.md) | `apps/game/src/SessionSafeguards.tsx` |
| Founder dilemmas panel | Source implemented / unverified | three independent fictional decisions, local persistence, fictional trust/access/runway, one choice per story | [Founder decision logic](FOUNDER_DECISION_LOGIC.md), [story audit](FOUNDER_PERSPECTIVE_INDUSTRY_STORY_AUDIT.md) | `apps/game/src/FounderStories.tsx`, `apps/game/src/founderStories.mjs` |
| Eleven corporate verticals | Specified | investigate, compare evidence, build alternatives, repair, audit, sustain | [Industry bible](INDUSTRY_PARODY_CAMPAIGN_BIBLE.md), [requirements](INDUSTRY_CAMPAIGN_REQUIREMENTS.md) | Narrative docs; not all playable |
| Finance / riba | Specified (25 levels) | contract comparison, hardship, liquidity, Sharia/legal review, governance | [Debt Empire](DEBT_EMPIRE_RIBA_CAMPAIGN.md) | `content/debt_empire_missions.json` (draft) |
| Environment, gambling harm, nightlife | Specified (15 levels) | water/waste, non-wagering alternatives, alcohol-free community economy | [Expanded industry](ENVIRONMENT_GAMBLING_ALCOHOL_CAMPAIGN.md) | `content/expanded_industry_missions.json` (draft) |
| Humanitarian crisis and rights | Specified (45 levels) | local-led relief, evidence provenance, safe fictional simulation, state accountability | [Humanitarian World](HUMANITARIAN_WORLD_CRISIS_CAMPAIGN.md), [Empty Pledge](HUMANITARIAN_EMPTY_PLEDGE_VERTICAL_SLICE.md) | `content/humanitarian_world_missions.json` (draft) |
| Founder ethics across industries | Specified (15 briefs); 3 separately playable as decision cards | three-asymmetry test, founder→institution, year-five maintenance, repairs | [Founder audit](FOUNDER_PERSPECTIVE_INDUSTRY_STORY_AUDIT.md) | `content/founder_perspective_story_briefs.json` (draft), 3 `STORIES` in `founderStories.mjs` |
| Hadith Library | Specified | citation provenance, context, scholarly/rights approval, no piety score | [Hadith gameplay](HADITH_LIBRARY_GAMEPLAY.md) | `content/knowledge_mosque_starter.json` (draft) |
| Mosque construction | Specified | accessible site, permits, budgets, maintenance, local approval | [Mosque campaign](MOSQUE_BUILDING_CAMPAIGN.md) | `content/knowledge_mosque_starter.json` (draft) |
| Wudu / real dawah / revert support | Specified, helper logic only | offline education, verified consent-first mentorship, no real call provider or worship verification | [Dawah/wudu](REAL_DAWAH_WUDU_AND_REVERT_SUPPORT.md), [Islamic policy](ISLAMIC_CONTENT_POLICY.md) | `packages/real-world-bridge/src/index.mjs` |
| LMS / engineering / city building | Specified, helper logic only | versioned lessons, scholar gate, water/energy/infrastructure simulations | [LMS/engineering](DUNYA_LMS_AND_INFRASTRUCTURE_GAMEPLAY.md) | `packages/real-world-bridge/src/index.mjs` |
| Consumer-protection parody | Specified | Notice→Verify→Compare→Act→Repair, lawful consumer recourse | [Consumer protection](CONSUMER_PROTECTION_CORPORATE_MECHANISMS.md) | Story docs |
| Generations / legacy | Specified | family agency, lifecycle continuity, guardianship/estate scholarly review | [Generations docs](GENERATIONS_SAGA.md), [branch atlas](STORY_CAMPAIGN_BRANCH_ATLAS.md) | Story docs |
| Agent onboarding | Source implemented / unverified | clone→bootstrap→lockfile→tests→issue→PR, no fabricated success | [One URL](AGENT_ONE_URL_START.md), [repro checklist](AGENT_REPRODUCIBILITY_ACCEPTANCE.md) | `scripts/agent_bootstrap.py`, `AGENTS.md` |
| Contributor workflow | Source implemented (GitHub templates) | code, story, Islamic correction, regional review, accessibility, assets | [Contributing](../CONTRIBUTING.md) | `.github/ISSUE_TEMPLATE/` |
| Public web and authoring studio | Scaffold / unverified | landing page and authoring app | [Architecture](ADR-001-THREE_APP_ARCHITECTURE.md) | `apps/web/`, `apps/studio/` |

## Bayhaven NPC dialogue update
- **Source implemented / unverified:** Three-choice conversations for Sara, Amina and Bilal in `apps/game/src/npcDialogues.mjs` and `WorldPreview.tsx`; [NPC logic and limitations](BAYHAVEN_NPC_DIALOGUE_LOGIC.md). Storyline routes, evidence journal, Maya/Omar scenes and persisted choice history remain specified, not playable.

## Current release blockers
- `pnpm-lock.yaml` absent in the last inspection; no confirmed frozen install, clean TypeScript compilation, complete test suite or browser QA.
- No verified public gameplay deployment.
- Narrative JSON registries and religious learning content are **draft-only** and must not be silently auto-published.
- Humanitarian real-world source cards need dated evidence, local review and expiry; fictional scenarios cannot imply verified current facts.
- Some historic docs still refer to PR #62 as draft. Prefer this ledger and current GitHub state; correct outdated docs as they are touched.

## Change control: every new feature must update docs AND logic docs
1. Add or update the relevant story/UX specification, including NPC agency, player verbs, branches, repair path, accessibility and realistic operations.
2. Update this registry row or create one, with explicit **status**, issue, canonical doc, code path and release blocker.
3. Update [Feature Logic Contract](FEATURE_LOGIC_AND_STATE_CONTRACT.md) when any trigger, state, save, metric, choice, unlock, privacy, source review or gameplay behavior changes.
4. Update [Requirements Index](REQUIREMENTS_INDEX.md) and any applicable story campaign.
5. Update or add machine-readable content and tests if implemented; maintain unique stable IDs and source-review gates.
6. PR description must distinguish ideation, docs, source implementation, verified behavior and actual deployment. No false "production" claims.
7. Changes to Islamic rulings, humanitarian claims, professional safety advice or real-world providers require independent qualified review; a merged PR is not release approval.

## Suggested next engineering issues
- #1, #12, #26: lockfile and clean reproducible build.
- #58, #61: browser QA, session safeguards and actual game controls.
- #3, #36, #38, #49, #53: persistent story state, playable branches and continuity.
- #35, #39: Islamic source, cultural, rights and legal review.

## Source discipline
The founder-ethics and editorial design is an original adaptation of high-level ideas from *Perspectives of Muslim Founders* and ummah.build's content calendar. No private workspace links or unpublished manuscript passages are reproduced. Real-world corporation references are categories, not factual allegations.

## Cropped-video investigation — implemented source, unverified
- Maya and Omar are now in Bayhaven with branching NPC dialogue and fictional evidence flags. Journal reports rumor/verification/correction stages. See [NPC Dialogue Logic](BAYHAVEN_NPC_DIALOGUE_LOGIC.md).
- Still specified only: independent source corroboration, privacy-reviewed evidence UI, accessibility route construction, actual procurement and five-episode Act I completion.


## Act I route and procurement planning — source implemented, unverified
- Bayhaven now offers a **Pantry planning** overlay with three route options and three supplier arrangements. Route planning requires completed handoff and Bilal conversation; supplier planning requires route selection and Omar's evidence context. Choices are saved as idempotent flags in the v1 inventory. See [Act I](PLAYER_STORY_ACT_ONE.md).
- These are simplified fictional choices with illustrative trade-off scores, not real route simulation, actual purchasing, accessible map construction or professional safety approval.


## Episode 4 continuity — source implemented, unverified
- **Build Something That Lasts** overlay lets players record one of three fictional institutional governance choices after pantry, route and supplier planning. See [Act I](PLAYER_STORY_ACT_ONE.md) and [Logic Contract](FEATURE_LOGIC_AND_STATE_CONTRACT.md).
- Still specified only: multi-year cashflow, volunteer availability simulation, audit trails, democratic governance, maintenance reserves and cross-industry unlocks.

## Game studio audit system — source implemented, execution unverified
Ten role-specific `.claude/skills/dunya-*/SKILL.md` files and [Game Studio Audit Playbook](GAME_STUDIO_AUDIT_PLAYBOOK.md) provide audit workflows. Source-level findings filed as issues #80 (save sync), #81 (NPC effect consistency), #82 (founder metric integrity), #83 (dialog accessibility). Existing #1/#26 and #58/#60/#61 cover lockfile and visual/mobile work. No automated browser, performance or scholarly review executed as part of this audit.

## Founder progress integrity improvement (#82)
Source fix: institutional scores now derive exclusively from validated story decisions, not arbitrary stored metric snapshots. This preserves v1 decision saves and prevents inconsistent score displays after reload. Regression tests authored; clean build and browser QA pending.

## Miami community/career mode
Source implemented, unverified: eight career selections and four-step fictional community khutbah announcement/bulletin logistics minigame; [full requirements](MIAMI_COMMUNITY_CAREER_GAMEPLAY.md). No 3D Miami map, sermon delivery or implemented career progression.

## Dialogue transition consistency (#81)
`applyDialogueEffect` now checks NPC proximity, valid NPC/effect combinations, quest prerequisites, evidence dependencies and repeated actions in one game-core function returning `{state,applied,reason}`. `WorldPreview.respond` uses that same result for the state update and the displayed message, synchronizing `gameRef` for the accepted dialogue transition. No duplicate UI-only evidence prerequisites. Automated source-contract tests authored; full game/browser verification remains pending.
