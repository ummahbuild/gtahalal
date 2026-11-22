# One URL → Dunya contributor agent

**Canonical repository:** https://github.com/ummahbuild/gtahalal

Paste the repository URL into a coding agent that has GitHub access and a local terminal, together with the [copyable agent task](#copyable-agent-task) below. A URL alone is not enough to install dependencies or reproduce the app: the agent needs a checked-out repository, Node.js 22, pnpm 9.15.4, registry access, and GitHub permissions if it will create PRs.

## Copyable agent task

> Work on https://github.com/ummahbuild/gtahalal as a Dunya contributor. Clone the current default branch and read AGENTS.md, README.md, CONTRIBUTING.md, docs/REQUIREMENTS_INDEX.md, docs/START_HERE.md, docs/AGENT_ONE_URL_START.md, docs/ISLAMIC_CONTENT_POLICY.md, and docs/CONTENT_REVIEW_AND_ACCEPTANCE.md, docs/FEATURES_AND_IDEAS_REGISTRY.md, and docs/FEATURE_LOGIC_AND_STATE_CONTRACT.md. Inspect existing code and issues/PRs before proposing changes. First reproduce the current state honestly: run `python3 scripts/agent_bootstrap.py`, install dependencies only after handling the missing lockfile, run `bash scripts/verify-local.sh quick` and then `bash scripts/verify-local.sh full` when possible. Do not pretend checks passed or that all proposed missions are playable. If blocked, fix the smallest reproducibility defect first. Choose one existing issue, implement a working scoped improvement with tests, accessibility and asset/source review, update requirements and create a focused PR. Do not invent religious rulings, publish unapproved religious content, copy commercial game assets, or claim live humanitarian facts. Preserve player privacy and real-world-first session safeguards. Do not trigger costly CI until review-ready. Report exact files changed, tests run, failures, issue and PR links, and next three tasks.

## Local environment and first commands

```bash
git clone https://github.com/ummahbuild/gtahalal.git
cd gtahalal
python3 scripts/agent_bootstrap.py
corepack enable
corepack prepare pnpm@9.15.4 --activate
# Current blocker: pnpm-lock.yaml is missing. In a network-enabled workspace:
pnpm install --lockfile-only
# Inspect and commit the generated lockfile in a focused PR before frozen verification.
pnpm install --frozen-lockfile
bash scripts/verify-local.sh quick
bash scripts/verify-local.sh full
```

Do not automatically run the install if the environment cannot access the registry. `pnpm install --lockfile-only` may resolve versions and require network access. Lockfile generation is **not completed** by this document.

## What is actually present

| Area | Current source of truth | Status |
|---|---|---|
| 3D neighborhood and NPCs | `apps/game/src/WorldPreview.tsx` | Early interactive prototype, not verified |
| Session break controls | `apps/game/src/SessionSafeguards.tsx` | Integrated source, browser behavior unverified |
| Game logic and saves | `packages/game-core/` | Draft implementation |
| Content schemas | `packages/content/` and `content/` | Some missions draft-only |
| Public website | `apps/web/` | Prelaunch landing |
| Authoring studio | `apps/studio/` | Scaffold |
| Real-world bridge | `packages/real-world-bridge/` | Small ESM helper library |
| Main campaigns | `docs/MAIN_CAMPAIGN_WORLD_BIBLE.md`, `docs/INDUSTRY_PARODY_CAMPAIGN_BIBLE.md` | Requirements, not complete gameplay |
| Humanitarian, finance, mosque, hadith | `docs/HUMANITARIAN_WORLD_CRISIS_CAMPAIGN.md`, `docs/DEBT_EMPIRE_RIBA_CAMPAIGN.md`, `docs/MOSQUE_BUILDING_CAMPAIGN.md`, `docs/HADITH_LIBRARY_GAMEPLAY.md` | Draft narratives and review gates |
| Contribution workflows | `CONTRIBUTING.md`, `.github/ISSUE_TEMPLATE/` | Public GitHub issue forms |

**Known blockers at time of writing:** missing `pnpm-lock.yaml`; no verified clean install, full TypeScript build, browser E2E or live deployment. The repo's historical documents may still contain outdated references to PR #62 as draft; trust current GitHub state and update stale docs when editing.

## Choose your first improvement
1. **Reproducibility:** generate lockfile, run all tests and fix actual build defects. Existing issues #1, #12, #26, #58.
2. **Gameplay:** improve NPC dialogue, quest triggers, save/load and session safeguards. Issues #2, #3, #61.
3. **Narrative:** turn one authored draft mission into a reviewed content record and playable scene, not a new stack of speculative docs.
4. **Islamic content:** contribute an exact Quran.com/Sunnah.com correction through the issue form, preserve source context and wait for qualified approval.
5. **City engineering:** add a deterministic water/power/transport simulation with resource-balance tests.
6. **Humanitarian content:** implement fictional aid-ledger accounting with regional/trauma/legal review; no real-time conflict guidance.

## Agent completion contract
- Give a concise evidence-based before/after summary.
- Include exact commands and pass/fail outputs; never fabricate screenshots or CI.
- Link the issue and PR; distinguish merged source from deployed website.
- Confirm no secrets, private user data, unlicensed art, or unapproved Islamic instruction.
- Preserve deterministic saves, accessibility, low-end mobile performance and anti-compulsion design.
- If unable to implement, report the blocker and open a focused actionable issue rather than claim success.
