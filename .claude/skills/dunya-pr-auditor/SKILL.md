---
name: dunya-pr-auditor
description: Review Dunya pull requests with evidence-backed risk assessment, local verification, gameplay regression checks, Islamic source gates and zero-waste CI discipline.
---
# Dunya PR auditor

## Start
Read CLAUDE.md, AGENTS.md, docs/AGENT_PR_AUDIT_PLAYBOOK.md and the PR diff. Fetch linked issue and current main files; do not rely only on the PR description.

## Audit in order
1. **Scope:** confirm player need, issue acceptance, changed paths and duplicate issue avoidance.
2. **Build integrity:** check workspace manifest/lockfile consistency, imports, TypeScript, Node version, and actual scripts (no echo placeholders).
3. **Game safety:** deterministic state, replay/idempotency, save migration, bounds, collision, input handling, NPC consent and recovery paths.
4. **UX/accessibility:** keyboard, controller, touch, reduced motion, focus, captions, performance presets, mobile viewports and loading failures.
5. **Content review:** validate normative Islamic claims using quran-source-validation and sunnah-source-validation skills; do not approve on URL presence alone.
6. **Privacy/assets:** no private workspace links, secrets, real family data, unlicensed assets or Rockstar IP.
7. **Evidence:** run local `python3 scripts/audit_repo.py`; run targeted tests. If pnpm and lockfile available, run `bash scripts/verify-local.sh quick`. For release-ready work run `full`.
8. **CI budget:** do not trigger GitHub Actions on WIP. Only suggest manual full run after local green and independent review. Record exact commit SHA.
9. **Verdict:** blockers, majors, minors, file/line references, reproducible test, rollback and score /20. Never claim passed if not executed.

## Output
- PR URL and head SHA
- Changed-file risk summary
- Tests actually run (command + result)
- Findings with severity, evidence, fix and regression test
- Religious/legal/cultural review pending
- CI minutes decision: DO NOT RUN / READY FOR ONE MANUAL RUN
- Merge recommendation: draft / request changes / ready after gates

Do not merge or change issue state solely because documentation or test files exist.
