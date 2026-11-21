# Dunya — Claude entrypoint
This public repository is an original, constructive, browser-first 3D Muslim life simulator. This repository has early 3D scaffolding and an explicitly authorized game implementation initiative. Implement gameplay only on focused reviewed branches with real tests; do not merge unverified code or ship unapproved religious instruction. See draft PR #62 and the requirements index.

## Read in order
-0. docs/REQUIREMENTS_INDEX.md to identify canonical specs and avoid duplicating the transferred issue backlog.
0. docs/START_HERE.md for navigation and docs/ADR-001-THREE_APP_ARCHITECTURE.md for app boundaries.
1. AGENTS.md, README.md and docs/ROADMAP.md.
2. docs/CLAUDE_EXECUTION_PLAN.md for bounded work and verification.
3. docs/STORY_MODE_EXPANSION.md for sensitive story proposals.
4. docs/ISLAMIC_CONTENT_POLICY.md and docs/CONTENT_REVIEW_AND_ACCEPTANCE.md for release gates.
5. docs/NEXTJS_THREEJS_ARCHITECTURE.md for existing stack decisions.
6. .claude/skills/quran-source-validation/SKILL.md, sunnah-source-validation/SKILL.md and islamic-story-audit/SKILL.md for religious or story claims.

7. docs/GITHUB_SOURCE_OF_TRUTH_POLICY.md, docs/STORY_CAMPAIGN_BRANCH_ATLAS.md and docs/ISLAMIC_RULES_AND_CLAIMS_MATRIX.md for public content, continuity and claim gates.
8. .claude/skills/branch-continuity-audit/SKILL.md for cross-story audits.

9. docs/SCENARIO_SPECIFICATION_STANDARD.md, docs/CONNECTED_STORY_EXAMPLES.md and docs/REVIEW_TRACEABILITY_MATRIX.md for testable story specs.
10. docs/CLAUDE_NEXT_WORK_BATCH.md for the current bounded documentation queue.

11. docs/AGENT_PR_AUDIT_PLAYBOOK.md and .claude/skills/dunya-pr-auditor/SKILL.md for PR reviews and CI-minute discipline.
12. docs/LANDING_PAGE_COPY_V1.md for truthful prelaunch public copy.

## Working agreement
- Public repo: no personal information, private records, secrets, private contact details or unpublished personal stories.
- Never treat proposed content as verified Islamic rulings, legal advice or facts about named real organizations.
- Do not copy Rockstar/GTA graphics, code, UI, logos or game assets.
- Keep the three-app architecture: apps/game (Vite + Three.js/R3F), apps/web (Next.js), apps/studio (Next.js); do not migrate frameworks without ADR.
- Inspect files and issues before edits; never overwrite working content blindly.
- Each change should be small, scoped, reversible, documented and independently testable.
- No fabricated CI/build/test results. Report exact commands run and blockers.
- Religious content requires scholar review, legal content requires jurisdictional review, real mosque/city portrayals require local review.
- Avoid blanket accusations or profiling of religious, ethnic, political or professional groups.
- End every work session with: files changed, issues touched, tests actually run, risks, next three tasks.

- Never link to Notion or private workspaces in GitHub content; copy approved, non-sensitive requirements into repository Markdown with proper source provenance.

- Do not trigger GitHub Actions automatically or on draft PRs; use local audits first and dispatch the manual quick/full workflow only after review-ready evidence.
