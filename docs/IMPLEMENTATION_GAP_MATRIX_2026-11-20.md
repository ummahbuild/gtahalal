# Dunya — implementation gap matrix and M0/M1 handoff (2026-11-20)

Evidence: inspected default-branch README, AGENTS.md, CLAUDE.md, roadmap, audit, story bibles, Islamic source ledger, app/package manifests, CI, game/studio/web entrypoints and GitHub issues #1–#61. Branch work is proposed in draft PR; not merged or build-verified. Issue search returned 61 issues; the PR-oriented issue search also returned issue records, so PR completeness could not be established from that query.

## Capability matrix
| Capability | Default branch | Draft branch change | Issue |
|---|---|---|---|
| Workspace apps | Game/web manifest; studio missing | Studio manifest added | #1 #26 |
| Shared packages | Missing manifests | game-core/content typed packages added | #1 #12 |
| Reproducible dependency install | pnpm lockfile absent | Still blocked; cannot generate without registry | #1 #26 |
| Lint/tests | Placeholder game/web commands | TypeScript check and Node test commands | #12 #26 |
| CI | no-frozen-lockfile | Unchanged; green not verified | #1 #26 |
| Neighborhood | Static procedural preview | Keyboard/touch/gamepad walking, camera, three NPCs | #2 #58 #61 |
| Dialogue/quest | Not implemented | One draft pantry conversation and idempotent delivery | #3 #6 |
| Persistence | Not implemented | Versioned local save and migration | #3 |
| Economy | Documented | Fictional coin balance and one quest reward only | #14 |
| Worship learning | Extensive specs, no approved lessons | Unchanged | #15–17 #54–57 |
| Industry campaign | Eleven chapter bible | Unchanged | #36–39 |
| Generations | Story docs only | Unchanged | #40–50 |
| City packs | Candidate docs | One blockout only | #5 #10 |
| Characters | Procedural placeholders | Persona switch retained | #8 #59 |
| Studio editorial review | Placeholder page | Package scaffold only | #3 #11 |

## Top 20 incomplete requirements (priority order)
1. Commit a valid pnpm lockfile from registry-connected clean environment (#1/#26).
2. Verify frozen dependency installation and CI (#1/#12/#26).
3. Verify TypeScript build for game/web/studio and shared packages (#12).
4. Browser E2E with Playwright and screenshot evidence (#12/#58).
5. Fix game loop/rendering performance after profiling (#58).
6. Proper collision/navmesh and inaccessible-building barriers (#61).
7. Camera occlusion, reset and smooth follow (#61).
8. Input remapping and real controller/touch QA (#61).
9. Real GLB rigged Ahmed/Fatimah, animation and LOD (#59).
10. Original mosque exterior and accessible entry (#2/#19).
11. Enterable home/shop and doors (#2).
12. NPC schedules, bounded dialogue and save consistency (#3/#6).
13. Structured quest content review integration (#3/#11).
14. Inventory and item use with transaction safety (#14).
15. Save migration version 2, corruption and backup UX (#3).
16. World clock, day/night visual changes and time persistence (#2).
17. Prayer companion with approved local time rules (#54–57).
18. Educational minigame shell and accessibility (#4/#6).
19. Ethical economy and institution operating model (#14/#38).
20. Full story/fiqh source review and city cultural review (#35/#39/#44).

## Implementation sequence
M0: studio manifest, shared packages, tests, lockfile, CI, reproducible build.
M1: one blockout neighborhood, third-person controller, three NPCs, one nonreligious community quest, local save; then collision, interiors, accessible input and browser tests.
M2: schedules, deterministic NPC routines, inventory/economy, weather and world simulation.
M3: scholarly-reviewed worship learning and optional minigames.
M4: connect eleven industry chapters to institution operations.
M5: family/estate continuity with legal and fiqh review.
M6: licensed culturally reviewed city packs and transport.
M7: moderated multiplayer and privacy/security audit.

## Explicit limitations
The draft vertical slice is a source-code implementation, not a verified playable release. No dependency install, typecheck, unit tests on actual repository checkout, browser render, performance benchmark or deployment succeeded in this environment because the npm registry and GitHub clone hosts could not be resolved from the local runner. Node 22 supports the built-in TypeScript strip-types test runner; that fact alone is not a passing project test.

## Next three tasks
1. On a network-enabled runner generate pnpm-lock.yaml and run frozen install, typecheck, test and build.
2. Run browser QA on draft PR, fix any TypeScript/runtime defects and add Playwright walking/quest/save tests.
3. Add actual collision and accessible interactable doorway in the starter block, then begin an approved mission editor workflow.
