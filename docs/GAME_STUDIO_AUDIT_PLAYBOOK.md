# Dunya Game Studio — Multi-role audit and contributor skill system

**Status:** role-specific agent playbooks committed; no claim of completed browser QA or professional approval. These are original internal workflows inspired by common AAA game-production disciplines, not Rockstar's proprietary processes or materials.

## Studio departments
- Creative director / executive producer → `.claude/skills/dunya-game-director/SKILL.md`
- Narrative director / quest designer / dialogue writer → `.claude/skills/dunya-narrative-director/SKILL.md`
- Gameplay and systems engineer → `.claude/skills/dunya-gameplay-engineer/SKILL.md`
- Graphics / environment / technical art → `.claude/skills/dunya-graphics-art-director/SKILL.md`
- UX, accessibility and UI → `.claude/skills/dunya-ux-accessibility/SKILL.md`
- QA / build / release → `.claude/skills/dunya-qa-release/SKILL.md`
- Islamic and cultural review → `.claude/skills/dunya-islamic-cultural-review/SKILL.md`
- World, NPC AI, economy, safety → `.claude/skills/dunya-world-simulation/SKILL.md`
- Audio, voice, localization → `.claude/skills/dunya-audio-localization/SKILL.md`
- Humanitarian, legal and safeguarding → `.claude/skills/dunya-humanitarian-ethics/SKILL.md`

## Copy-paste coding agent task
> Clone https://github.com/ummahbuild/gtahalal and read AGENTS.md, docs/FEATURES_AND_IDEAS_REGISTRY.md, docs/FEATURE_LOGIC_AND_STATE_CONTRACT.md and docs/GAME_STUDIO_AUDIT_PLAYBOOK.md. Use the ten role skills under .claude/skills/dunya-*/SKILL.md. Audit actual source against the story requirements, prioritizing reproducible build, gameplay state and saves, NPC narrative branches, UI accessibility, 3D graphics, Islamic-content review, and release safety. Search open issues first; for each distinct new finding give evidence, severity, expected/actual, repro, fix and acceptance test. Create issues for verified source defects and well-scoped implementation gaps, not speculative claims. Do not spend CI minutes on WIP, fabricate tests, or self-approve Islamic rulings. Make focused PRs and update the feature/logic docs.

## Audit workflow and handoffs
1. **Producer** scopes a small vertical slice and reads the current main SHA, source, docs, issues and PRs.
2. **Narrative + systems** trace player verbs → NPC dialogue → choice → state mutation → persistence → later consequence → repair.
3. **Art + UX** evaluate actual screenshot/video evidence when available. Without a renderer, log code-level visual/accessibility risks as **unverified**.
4. **QA + build** execute targeted tests and clean build locally, capturing exact commands; if blocked by missing lockfile, create a reproducibility issue.
5. **Scholarly, regional, legal and humanitarian reviewers** review applicable normative or real-world claims; never substitute agent judgement for sign-off.
6. **Release** requires approval gates and a deployment SHA. Merging to main does not demonstrate live deployment.

## Evidence and severity policy
- P0: exploit, major privacy leak, irreversible save loss or unsafe published instructions.
- P1: core progression blocker, repeated reward exploit, critical accessibility blocker, broken clean build.
- P2: incomplete narrative branch, misleading response, missing persistence, inconsistent game-state effects.
- P3: polish, minor copy, speculative visuals not reproduced.
- **Observed in source** means a reproducible code path is visible; **observed in browser** requires actual browser execution. No ungrounded visual quality claims.

## Current audit findings (2026-11-22)
Source inspected: `packages/game-core/src/index.ts`, `apps/game/src/WorldPreview.tsx`, `apps/game/src/FounderStories.tsx`, `apps/game/src/npcDialogues.mjs`, `scripts/verify-local.sh`, `docs/PLAYER_STORY_ACT_ONE.md`, and the existing agent PR audit skill.

1. **P1 — Save reference lag risk:** `gameRef.current` synchronizes in a React effect; immediate Save after a queued state update may serialize the preceding state. Needs a reproducible interaction test and a single authoritative state update path.
2. **P1 — Evidence narration can disagree with state:** `respond` calls `setGame` asynchronously and separately computes prerequisite messages from `gameRef.current`. Source-level divergence is possible when a choice is gated or repeated.
3. **P1 — Founder progress integrity:** `normalizeProgress` accepts stored metrics independently of decisions; fabricated or corrupted metrics can disagree with validated choice history. Recompute metrics deterministically.
4. **P2 — Dialog keyboard focus and overlay stacking:** `role=dialog` overlays lack verified focus trap, Escape close and focus restoration. Actual keyboard/screen-reader QA required.
5. **P2 — NPC narrative completion:** Sara, Amina, Bilal, Maya and Omar have conversations, but Episode 2 evidence is simple inventory flags and Episode 4 has only one legacy selection; there is no scene graph, consequence repair gameplay, or relationships carried into later industry chapters.
6. **P2 — Graphics/UX unverified:** 3D world uses repeated box buildings, capsule NPCs and a follow camera; no current mobile screenshots, occlusion tests, LOD benchmarks or character animation evidence. This is a **production gap**, not a claim of poor visual appearance from a browser inspection.
7. **P1 — Reproducibility:** `verify-local.sh` requires a committed lockfile, historically missing; a fresh clone cannot pass frozen verification without resolving that blocker. Verify current file state before closure.
8. **P2 — Story logic tests insufficient:** current NPC/route/legacy tests include source-string checks; add executable transition tests and browser E2E instead of treating regex matches as behavior verification.

## Minimum issue template
**Title:** subsystem + player-facing defect or gap.
**Evidence:** file path, symbol, main SHA, source/browser status.
**Reproduction:** exact steps and environment, or `not yet reproduced in browser`.
**Expected/actual:** player impact and discrepancy.
**Severity and dependencies:** P0–P3, related issues.
**Implementation:** bounded fix and affected docs.
**Acceptance:** deterministic tests, save/reload, keyboard/touch, accessibility, no regression.
**Verification:** commands actually run, failures, screenshots if real.

## Non-goals
Do not create a giant automatic issue flood, assume every authored mission is playable, claim real-world crisis accuracy from fictional scenarios, or approve religious instructions based on a working URL alone.
