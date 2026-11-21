# Dunya agent audit and PR production playbook

## Objective
Agents produce focused, evidence-backed changes and review each other's work without wasting GitHub Actions minutes. GitHub remains the public source of truth. No Notion or private workspace links.

## Roles and handoff
- **Repository auditor:** read current branch and existing issues, inspect exact files, identify reproduction, risks and duplicates; no speculative bug claims.
- **Implementer:** choose one bounded issue, make code changes, add unit tests, run local verification and document known failures.
- **Narrative/content reviewer:** validate source claim IDs, distinguish fictional content from Islamic rulings and check all approval gates; never certify religious content autonomously.
- **QA reviewer:** independently examine diff, run targeted tests, keyboard/touch accessibility and save migration; log reproducible defects.
- **Release maintainer:** confirm clean full checks, lockfile, review approvals, and explicit merge readiness; do not auto-merge.

## Agent execution protocol
1. Fetch latest main, inspect open issues and PRs; link existing issue before changes.
2. Record baseline: files, tests available, known failures and exact issue number.
3. Create focused branch named `feat/issue-<n>-slug` or `fix/issue-<n>-slug`.
4. Make smallest coherent patch; avoid large unrelated docs rewrites.
5. Run `python3 scripts/audit_repo.py` and relevant local tests; for whole-workspace checks run `bash scripts/verify-local.sh quick`.
6. If blocked by missing lockfile/network, state so and do not claim green.
7. Open **draft PR** with changed files, actual commands/results, screenshots and review blockers.
8. Separate implementer from reviewer; reviewer gives severity, evidence, file/line and acceptance test.
9. Resolve all P0/P1 defects; require approval for religious/legal/medical content.
10. Dispatch manual GitHub workflow **only once review-ready**, then merge only after successful full verification and required reviews.

## PR quality rubric (0–2 each)
Problem reproduced; scope focused; code understandable; tests meaningful; accessibility; privacy/security; content review; rollback clarity; performance evidence; docs/issue traceability. Max 20. Below 16 -> remain draft. A score is triage only, not proof of quality.

## CI budget rules
- Workflow is manual-only, no push/PR triggers; concurrency cancels redundant runs.
- Default quick omits production builds. Full reserved for release-ready PRs.
- Require lockfile before any dependency installation. Missing lockfile should be caught locally.
- Prefer targeted local Node/Python tests; cache dependencies; do not rerun unchanged commits.
- Maintain a manual run log in PR description: commit SHA, scope, duration and outcome.
- No cron polling, automatic GPU screenshot jobs or repeated install matrices until budget approved.

## First PR review targets
- Draft PR #62: missing pnpm lockfile, unverified build, basic movement and mission UI, mobile controls, source status.
- Issues #1, #12, #26: reproducible foundation; #58 and #61: playable preview and controller.
- Do not merge #62 until lockfile, compilation, browser QA and regression tests are proven.

## Agent response format
Issue, base commit, files inspected, implementation diff, tests run with output, evidence, blockers, review rubric, PR URL, next three actions.
