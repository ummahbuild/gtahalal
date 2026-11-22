# Dunya — public requirements index
Status: index of existing source documents and draft PR work; documentation is not implementation or religious approval.

## Canonical mission audit
- [Mission audit and issue map](MISSION_AUDIT_AND_ISSUE_MAP_2026-11-22.md) — chapter/arc coverage, issue traceability, unmerged PR boundaries and release blockers. All mission authors should consult this before creating duplicate requirements or issues.

## Transfer and authoring
- [Transfer audit](TRANSFER_GITHUB_AUDIT_2026-11-21.md) — which files and changes actually live on main versus draft PR #62.
- [Narrative scene standard](NARRATIVE_SCENE_STANDARD.md) — machine-readable scene requirements and original dialogue authoring.

## New contributor handoffs
- [M0–M7 milestone and issue map](PROJECT_MILESTONES_AND_ISSUE_MAP.md) — implementation order and verification gates.
- [Act I player experience acceptance criteria](ACT_I_PLAYER_EXPERIENCE_REQUIREMENTS.md) — first playable neighborhood, NPC dialogue and map requirements.

## Read order
1. [README](../README.md) — player-facing concept, actual status, architecture.
2. [Start Here](START_HERE.md) — role-specific onboarding.
3. [Roadmap](ROADMAP.md) and [requirements audit](REQUIREMENTS_AUDIT_2026-11-20.md) — development sequence and blockers.
4. [Source review policy](ISLAMIC_CONTENT_POLICY.md), [source ledger](ISLAMIC_SOURCE_LEDGER.md), [acceptance contract](CONTENT_REVIEW_AND_ACCEPTANCE.md) — religious evidence and release gates.
5. [Architecture](ADR-001-THREE_APP_ARCHITECTURE.md) and [Next.js/Three.js architecture](NEXTJS_THREEJS_ARCHITECTURE.md) — system boundaries.

## Main campaign and story
| Topic | Canonical local document | Current status | Issues |
|---|---|---|---|
| Eleven-chapter campaign | [Main Campaign World Bible](MAIN_CAMPAIGN_WORLD_BIBLE.md) | Draft fictional narrative | [#36](https://github.com/ummahbuild/gtahalal/issues/36) |
| Industry missions and resources | [Industry Campaign Requirements](INDUSTRY_CAMPAIGN_REQUIREMENTS.md) | Requirements | [#37](https://github.com/ummahbuild/gtahalal/issues/37), [#38](https://github.com/ummahbuild/gtahalal/issues/38) |
| Cross-industry story links | [Branch Atlas](STORY_CAMPAIGN_BRANCH_ATLAS.md) | Draft dependencies | [#49](https://github.com/ummahbuild/gtahalal/issues/49) |
| Scripted scenario structure | [Scenario Specification Standard](SCENARIO_SPECIFICATION_STANDARD.md) | Proposed contract | [#51](https://github.com/ummahbuild/gtahalal/issues/51) |
| Ahmed, Fatimah and educational paths | [Characters and Stories](CHARACTERS_AND_STORIES.md) | Design, unapproved instructional portions | [#8](https://github.com/ummahbuild/gtahalal/issues/8) |
| Ethical conversation and defense | [Islamic Defender](ISLAMIC_DEFENDER.md) | Sensitive proposals | [#22](https://github.com/ummahbuild/gtahalal/issues/22)–[#25](https://github.com/ummahbuild/gtahalal/issues/25) |
| Detention and lawful displacement | [Detention Story](DETENTION_AND_DISPLACEMENT_STORY.md) | Mature opt-in design | [#32](https://github.com/ummahbuild/gtahalal/issues/32)–[#34](https://github.com/ummahbuild/gtahalal/issues/34) |

## Everyday life and learning
| Topic | Canonical local document | Status | Issues |
|---|---|---|---|
| Daily services, dawah, minigames, economy | [Gameplay Systems Expansion](GAMEPLAY_SYSTEMS_EXPANSION.md) | Requirements | [#13](https://github.com/ummahbuild/gtahalal/issues/13), [#14](https://github.com/ummahbuild/gtahalal/issues/14) |
| Purification and salah | [Wudu and Prayer Rule Engine](WUDU_PRAYER_RULE_ENGINE.md) | Unapproved jurisprudential design | [#15](https://github.com/ummahbuild/gtahalal/issues/15), [#16](https://github.com/ummahbuild/gtahalal/issues/16) |
| Prayer time, qibla, quick break | [Prayer Companion](PRAYER_COMPANION_REAL_TIME_SPEC.md) | Requirements, not implemented | [#54](https://github.com/ummahbuild/gtahalal/issues/54)–[#57](https://github.com/ummahbuild/gtahalal/issues/57) |
| Generations and families | [Generations World Bible](GENERATIONS_LIFECYCLE_WORLD_BIBLE.md) | Draft proposals | [#40](https://github.com/ummahbuild/gtahalal/issues/40)–[#50](https://github.com/ummahbuild/gtahalal/issues/50) |
| Janazah and grief | [Janazah Spec](JANAZAH_BURIAL_GRIEF_SPEC.md) | Non-graphic optional design; review required | [#41](https://github.com/ummahbuild/gtahalal/issues/41) |
| Estates and lineage | [Estate and Inheritance](ESTATE_INHERITANCE_LINEAGE_SPEC.md) | Draft educational scenarios | [#42](https://github.com/ummahbuild/gtahalal/issues/42) |

## World, art and implementation
| Topic | Canonical local document | Status | Issues |
|---|---|---|---|
| Map/city candidates | [World Cities](WORLD_CITIES.md) | City-pack design | [#5](https://github.com/ummahbuild/gtahalal/issues/5), [#10](https://github.com/ummahbuild/gtahalal/issues/10) |
| Original graphics pipeline | [Visual Production Pipeline](AAA_VISUAL_PRODUCTION_PIPELINE.md) | Art requirements | [#59](https://github.com/ummahbuild/gtahalal/issues/59), [#60](https://github.com/ummahbuild/gtahalal/issues/60) |
| Characters/art prompting | [Character and City Prompts](CHARACTER_AND_CITY_ART_PROMPTS.md) | Concept prompts, no generated assets | [#59](https://github.com/ummahbuild/gtahalal/issues/59) |
| Interactive preview | [WorldPreview source](../apps/game/src/WorldPreview.tsx) | Blockout on main | [#58](https://github.com/ummahbuild/gtahalal/issues/58), [#61](https://github.com/ummahbuild/gtahalal/issues/61) |
| Engineering foundation | [Roadmap](ROADMAP.md) | Missing lockfile, CI verification | [#1](https://github.com/ummahbuild/gtahalal/issues/1), [#12](https://github.com/ummahbuild/gtahalal/issues/12), [#26](https://github.com/ummahbuild/gtahalal/issues/26) |

## Draft PR #62 — not yet on main
The following are already authored on the transferred [draft implementation branch](https://github.com/ummahbuild/gtahalal/pull/62); **do not duplicate or assume merged**:
- [First player storyline](https://github.com/ummahbuild/gtahalal/blob/feat/m0-foundation-first-slice/docs/PLAYER_STORY_ACT_ONE.md)
- [Starter neighborhood map](https://github.com/ummahbuild/gtahalal/blob/feat/m0-foundation-first-slice/docs/STARTER_NEIGHBORHOOD_MAP_REQUIREMENTS.md)
- [Reusable city-map requirements](https://github.com/ummahbuild/gtahalal/blob/feat/m0-foundation-first-slice/docs/CITY_MAP_PACK_REQUIREMENTS.md)
- [Player UI copy](https://github.com/ummahbuild/gtahalal/blob/feat/m0-foundation-first-slice/docs/PLAYER_UI_COPY_CATALOG.md)
- [Agent audit playbook](https://github.com/ummahbuild/gtahalal/blob/feat/m0-foundation-first-slice/docs/AGENT_PR_AUDIT_PLAYBOOK.md)
- Typed `game-core` and `content` packages, studio manifest and unverified playable-slice source.

**Merge gates for #62:** valid pnpm lockfile, frozen clean install, typecheck, unit and browser tests, visual/mobile QA, independent review and explicit merge decision. No CI run should be wasted while these prerequisites are unmet.

## Anti-duplication / editing rules
- Keep one canonical specification per mechanic and link to it; do not copy whole requirements across the README and issues.
- Existing issues #1–#61 survived the org transfer. Review them before opening new ones.
- New/revised missions must link to source claim IDs and mark religious approvals as pending.
- Keep all public docs self-contained; **no private workspace or Notion links**.
- Only call a feature implemented when source, test results and visible behavior support the claim.

## Activity concept art

[Five activity mockups and visual acceptance criteria](art/activities/README.md)
