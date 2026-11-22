# Agent reproduction acceptance checklist

This is a **verifiable goal**, not a claim that Dunya can already be rebuilt from scratch.

## Baseline
- [ ] Fresh clone of `main` with exact commit SHA recorded.
- [ ] Node 22 and pnpm 9.15.4 available; environment and OS recorded.
- [ ] Committed `pnpm-lock.yaml` and successful frozen install.
- [ ] `python3 scripts/agent_bootstrap.py` passes.
- [ ] `python3 scripts/audit_repo.py` passes or each failure is explicitly documented.
- [ ] `pnpm typecheck`, `pnpm test`, `pnpm build` pass with actual logs.
- [ ] Browser opens game and landing locally; NPC interaction, save/load, session reminders, pause and mobile input tested.
- [ ] Screenshot and short capture from actual game, not generated concept art.
- [ ] Content review blocks unapproved religious text and live crisis claims.
- [ ] One issue-to-PR contribution can be repeated by a new contributor.
- [ ] CI workflow remains manual until minutes budget is approved.

## Ownership and boundaries
The coding agent may repair dependencies, types, tests, gameplay and documentation. It may **not** self-certify scholarly religious interpretation, licensed content, humanitarian factual accuracy, legal compliance, production deployment or real-life call providers. Human reviewers must sign off separately.

## If the first build fails
Report the exact error, isolate the smallest failure, fix in a focused branch, rerun the failed command and add a regression test. Never replace a failing command with a no-op. Do not mark the game playable based only on a successful documentation check.

## Contributor journey
One GitHub URL → clone → local bootstrap → read agent instructions → resolve lockfile → reproduce build → pick existing issue → implement → test → PR → review → merge → separately verify deployment.
