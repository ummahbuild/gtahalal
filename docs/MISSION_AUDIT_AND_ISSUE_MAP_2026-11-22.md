# Dunya — Mission inventory and issue traceability audit
Audit date: 2026-11-22. **This document is on main.** Narrative requirements are not implemented gameplay or religious approval.

## Audit method and boundaries
Inspected README, requirements index, roadmap, main campaign bible, industry requirements, branch atlas, story-mode expansion, Generations bible, source policy and ledger on main; Act I in draft PR #62; Hadith Library and Mosque Building in draft PR #65. Inspected the repository issue search, which returned 61 issue titles (numbers #1–#61 from the existing backlog). This is an **arc-level audit**, not a claim that every mission definition or every PR file was exhaustively validated. Some proposed activities lack stable machine-readable mission IDs, full dialogue, trigger tests or reviewer sign-off.

## Status definitions
- **Main spec:** documented on main, not necessarily playable.
- **Draft PR:** documented only in an unmerged PR; link to its branch rather than claiming a main file exists.
- **Partial prototype:** code in draft PR #62, not a verified release.
- **Review blocked:** scholarly, legal, cultural, trauma or asset-rights approvals still required.

## Canonical campaign and mission coverage
| Mission family | Canonical spec / draft | Existing issues | Status and gap |
|---|---|---|---|
| Bayhaven Act I (five episodes: A Place to Begin, Pantry Route, Cropped Video, Curb and Contract, Build Something That Lasts) | [Act I draft PR #62](https://github.com/ummahbuild/gtahalal/blob/feat/m0-foundation-first-slice/docs/PLAYER_STORY_ACT_ONE.md) | [#2](https://github.com/ummahbuild/gtahalal/issues/2), [#3](https://github.com/ummahbuild/gtahalal/issues/3), [#51](https://github.com/ummahbuild/gtahalal/issues/51), [#61](https://github.com/ummahbuild/gtahalal/issues/61) | Draft PR; simplified pantry interaction only; other episodes not playable |
| 1 Attention Trap (social media) | [Main Campaign Bible](MAIN_CAMPAIGN_WORLD_BIBLE.md), [Industry Requirements](INDUSTRY_CAMPAIGN_REQUIREMENTS.md) | [#36](https://github.com/ummahbuild/gtahalal/issues/36), [#37](https://github.com/ummahbuild/gtahalal/issues/37) | Main spec; needs complete scenes, five missions, playable mechanics |
| 2 Narrative Machine (media) | Main Campaign Bible / Industry Requirements | #36, #37 | Main spec; source verification and newsroom runtime missing |
| 3 Broken Food Chain (food) | Main Campaign Bible / Industry Requirements | #36, [#38](https://github.com/ummahbuild/gtahalal/issues/38) | Main spec; food-supply economics and safety review missing |
| 4 Debt Empire (finance) | Main Campaign Bible / Industry Requirements | #36, #38, [#39](https://github.com/ummahbuild/gtahalal/issues/39) | Main spec; financial/legal/fiqh review pending |
| 5 Watching Eye (privacy) | Main Campaign Bible / Industry Requirements | #36, #38 | Main spec; privacy institution mechanics missing |
| 6 Supply Chain (trade) | Main Campaign Bible / Industry Requirements | #36, #38 | Main spec; procurement and logistics runtime missing |
| 7 Housing Trap (housing) | Main Campaign Bible / Industry Requirements | #36, #38 | Main spec; zoning, tenant and accessibility review missing |
| 8 Education Machine (education) | Main Campaign Bible / Industry Requirements | #36, #38 | Main spec; curriculum and safeguarding review missing |
| 9 Healthcare Monopoly (healthcare) | Main Campaign Bible / Industry Requirements | #36, #38 | Main spec; medical and privacy review pending |
| 10 Captured City (governance) | Main Campaign Bible / Industry Requirements | #36, [#21](https://github.com/ummahbuild/gtahalal/issues/21) | Main spec; lawful civic procedure mechanics missing |
| 11 Great Distraction (institutional resilience) | Main Campaign Bible / [Branch Atlas](STORY_CAMPAIGN_BRANCH_ATLAS.md) | #36, [#49](https://github.com/ummahbuild/gtahalal/issues/49), [#53](https://github.com/ummahbuild/gtahalal/issues/53) | Main spec; cross-institution dependency simulation missing |
| Truth, street dawah and Islamic Defender | [Story Mode Expansion](STORY_MODE_EXPANSION.md), Branch Atlas | [#13](https://github.com/ummahbuild/gtahalal/issues/13), [#22](https://github.com/ummahbuild/gtahalal/issues/22)–[#25](https://github.com/ummahbuild/gtahalal/issues/25) | Main spec; consent, legal and scholarly review |
| Wudu, salah, tahajjud, recitation, adhaan, Arabic and mosque minigames | [Content policy](ISLAMIC_CONTENT_POLICY.md), [Story Mode Expansion](STORY_MODE_EXPANSION.md) | [#4](https://github.com/ummahbuild/gtahalal/issues/4), [#6](https://github.com/ummahbuild/gtahalal/issues/6), [#15](https://github.com/ummahbuild/gtahalal/issues/15)–[#17](https://github.com/ummahbuild/gtahalal/issues/17), [#54](https://github.com/ummahbuild/gtahalal/issues/54)–[#57](https://github.com/ummahbuild/gtahalal/issues/57) | Specs; review blocked, no verified instructional release |
| Eid food and halal animal welfare | Story Mode Expansion / Branch Atlas | [#29](https://github.com/ummahbuild/gtahalal/issues/29), #38 | Main spec; specialist food, welfare, religious review |
| Lower Your Gaze / Jumu'ah parking | Story Mode Expansion and existing minigame docs | [#20](https://github.com/ummahbuild/gtahalal/issues/20), [#30](https://github.com/ummahbuild/gtahalal/issues/30) | Main spec; accessibility and jurisprudence review |
| Generations (nikah, parenting, elder care, janazah, estate, succession) | [Generations Bible](GENERATIONS_LIFECYCLE_WORLD_BIBLE.md) | [#40](https://github.com/ummahbuild/gtahalal/issues/40)–[#50](https://github.com/ummahbuild/gtahalal/issues/50) | Main spec; optional sensitive arcs, legal/fiqh/trauma review, no verified runtime |
| Detention, resettlement, interfaith protection, civic safety | Story Mode Expansion / Branch Atlas | [#27](https://github.com/ummahbuild/gtahalal/issues/27), [#28](https://github.com/ummahbuild/gtahalal/issues/28), [#32](https://github.com/ummahbuild/gtahalal/issues/32)–[#34](https://github.com/ummahbuild/gtahalal/issues/34) | Main spec; jurisdiction, civil rights and trauma review |
| Airport travel and city cultural missions | [World Cities](WORLD_CITIES.md) / Story Mode Expansion | [#5](https://github.com/ummahbuild/gtahalal/issues/5), [#10](https://github.com/ummahbuild/gtahalal/issues/10), [#18](https://github.com/ummahbuild/gtahalal/issues/18) | Main spec; local review and real navigation missing |
| Hadith Library — six missions, The Missing Citation | [Hadith Library draft PR #65](https://github.com/ummahbuild/gtahalal/blob/feat/hadith-library-mosque-stewardship/docs/HADITH_LIBRARY_GAMEPLAY.md) | [#3](https://github.com/ummahbuild/gtahalal/issues/3), [#9](https://github.com/ummahbuild/gtahalal/issues/9), [#11](https://github.com/ummahbuild/gtahalal/issues/11), [#35](https://github.com/ummahbuild/gtahalal/issues/35) | Draft PR; catalogue and reading mode not implemented; translation rights and scholarly review blocked |
| Mosque Building — six missions, The House We Build Together | [Mosque campaign draft PR #65](https://github.com/ummahbuild/gtahalal/blob/feat/hadith-library-mosque-stewardship/docs/MOSQUE_BUILDING_CAMPAIGN.md) | [#2](https://github.com/ummahbuild/gtahalal/issues/2), [#5](https://github.com/ummahbuild/gtahalal/issues/5), [#14](https://github.com/ummahbuild/gtahalal/issues/14), [#19](https://github.com/ummahbuild/gtahalal/issues/19), [#38](https://github.com/ummahbuild/gtahalal/issues/38) | Draft PR; conceptual planning only, no professional approval |

## Traceability gaps and next corrections
1. **Do not confuse chapter with mission:** eleven industries are chapters; their individual five-mission requirements are not yet all authored as unique, testable scenes.
2. **No canonical mission registry on main:** stable mission IDs, content version, review status, source claims, issue number, owning document, dependencies, and executable tests must be centralized. Existing docs remain narrative authorities; do not duplicate mission dialogue.
3. **Draft/main split:** Act I and two new campaigns are in PRs #62/#65, not in main. Keep links explicitly labeled until merged.
4. **Issue coverage is broad, not one-to-one:** existing issues cover systems and arcs but not each proposed mission's acceptance criteria. Update relevant issues before creating new ones.
5. **Source review remains blocked:** no authored hadith quote, fatwa, legal compliance or sacred-site simulation should be marked approved merely because a document exists.
6. **Implementation:** no green build, validated playable slice or tested mission engine established by this audit.
7. **Content QA:** add an automated registry validator to reject duplicate IDs, orphaned issue references, missing prerequisites and release entries without review evidence.
8. **Narrative:** for each chapter, author complete dialogue, alternative peaceful choices, recovery paths and durable institution effects before claiming five complete missions.

## Release acceptance
A mission is playable only when its content record is valid, triggers and saves work in a clean build, dialogue/asset provenance is reviewed, accessible alternatives pass tests and all required specialist approvals are recorded. Documentation alone never changes release status.
