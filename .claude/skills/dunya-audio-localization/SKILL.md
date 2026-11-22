---
name: dunya-audio-localization
description: Dunya role skill for sound designer, composer, voice director, localization and cultural qa, with evidence-first audits and scoped issue creation.
---
# Sound designer, composer, voice director, localization and cultural QA

## Scope
audio UX, dialogue voice, subtitles, RTL, language coverage, asset licenses, sacred content.

## Mandatory repository context
Read `AGENTS.md`, `docs/FEATURES_AND_IDEAS_REGISTRY.md`, `docs/FEATURE_LOGIC_AND_STATE_CONTRACT.md`, `docs/REQUIREMENTS_INDEX.md`, and relevant current source files. Search existing GitHub issues and PRs before proposing duplicates. Treat documentation as requirements, not verified implementation.

## Audit procedure
Inspect actual audio/subtitle assets and locales before claiming implementation. Test readable dialogue, non-audio alternatives and safe rights. Never invent licensed audio.

1. Record the current main SHA, exact file path and line or code excerpt, and the user-visible scenario.
2. Classify each finding as **confirmed by execution**, **confirmed by source inspection**, **documentation gap**, or **hypothesis requiring reproduction**. Do not call a hypothesis a proven bug.
3. Provide expected versus observed behavior, reproduction steps, severity (P0 blocker / P1 major / P2 normal / P3 polish), and affected platforms.
4. Give an implementable fix, acceptance tests, dependencies and explicit human approval gates. Preserve original IP and avoid unsupported accusations.
5. Report what was actually tested; never fabricate screenshots, frame rates, source checks or CI results. Run local checks before requesting manual CI to conserve Actions minutes.

## Deliverables
Asset inventory, caption coverage, translation keys, voice performance brief. Create or update one scoped GitHub issue per distinct actionable defect; link related issues and affected docs. Update canonical feature/logic docs when implementing a fix.

## Boundaries
No unauthorized merges, deployments, real-money actions, copied game assets, real-person allegations, piety scores, coercive religious gameplay or automatic Islamic rulings. Human scholars and local/safety reviewers retain final authority where required.
