# Contributing to Dunya

Dunya welcomes **gameplay programmers, narrative writers, Islamic-source researchers, qualified scholars, accessibility testers, translators, humanitarian/regional reviewers, artists, and infrastructure engineers**. Your contribution can be a single corrected citation or a full playable mission. Read [README](README.md), [requirements index](docs/REQUIREMENTS_INDEX.md), [code of conduct](CODE_OF_CONDUCT.md), [Islamic content policy](docs/ISLAMIC_CONTENT_POLICY.md) and [review gates](docs/CONTENT_REVIEW_AND_ACCEPTANCE.md).

## Pick a contribution lane

| Lane | How to start | Deliverable |
|---|---|---|
| Gameplay code or bug | [Gameplay issue form](.github/ISSUE_TEMPLATE/gameplay.yml) | Reproduction, implementation, tests and screenshot |
| Storyline, quest or NPC | [Story proposal form](.github/ISSUE_TEMPLATE/story.yml) | Original scene, branches, repair path, mission ID |
| Qur'an / Sunnah correction | [Islamic correction form](.github/ISSUE_TEMPLATE/islamic-source-correction.yml) | Exact claim, source, context and review request |
| Humanitarian/cultural accuracy | [Regional review form](.github/ISSUE_TEMPLATE/regional-review.yml) | Dated source evidence, local perspectives, safety concerns |
| Accessibility and localization | [Accessibility form](.github/ISSUE_TEMPLATE/accessibility.yml) | Reproduction, accessible alternative, test |
| 3D art and engineering | [Asset/infrastructure form](.github/ISSUE_TEMPLATE/assets-infrastructure.yml) | Original asset provenance or reproducible simulation |

You can submit **a correction without writing code**. Open the relevant form, provide the exact file/mission/claim and supporting evidence, and ask a maintainer to implement it. Don't post personal details or confidential testimonies.

## Contributor workflow
1. Search [open issues](https://github.com/ummahbuild/gtahalal/issues) and [PRs](https://github.com/ummahbuild/gtahalal/pulls) before proposing duplicates.
2. Choose the correct form. Label proposed stories and religious interpretations **draft/unapproved**.
3. For code, branch from `main`, change one coherent area, add tests and documentation. For narrative, use [scenario specification](docs/SCENARIO_SPECIFICATION_STANDARD.md) and record stable mission IDs.
4. Run local checks as available: `python3 scripts/audit_repo.py`, `bash scripts/verify-local.sh quick`, and `bash scripts/verify-local.sh full` before release-facing changes. If a command fails or can't run, state it; never claim green CI.
5. Open a PR using the [pull request template](.github/PULL_REQUEST_TEMPLATE.md), link the issue, explain the player experience and provide screenshots and source/asset provenance.
6. Maintainers review technical, accessibility, legal, local-cultural, licensing and Islamic-content gates. Approval of prose or an automated citation check **is not a fatwa** and does not authorize release.
7. Only maintainers merge. GitHub `main` is source of truth; a merge is not proof of deployed or reviewed gameplay.

## Islamic corrections: exact workflow
1. Identify the **specific** in-game claim or text, its file path, mission ID, version and exact problematic wording.
2. Classify the issue: wrong reference, quotation/translation mismatch, hadith grading/variant, missing context, disputed fiqh, culturally narrow portrayal, copyright/license, or gameplay that improperly scores worship.
3. Supply canonical [Quran.com](https://quran.com) or [Sunnah.com](https://sunnah.com) reference; record surah/ayah or hadith collection/book/number, translator/edition where applicable. Link primary sources rather than copying lengthy copyrighted translations.
4. Explain what the source **actually says**, what it does not establish, context/tafsir or hadith variants, and any recognized school differences. Don't present your personal interpretation as consensus.
5. Propose a narrow correction and safer player-facing wording. Mark religious claim `pending` and, if materially misleading, request unpublishing pending review.
6. Qualified reviewer confirms exact text, authenticity, context and application; separate licensing, safety, accessibility and legal reviews apply. Record reviewer qualification, date, decision, version and audit trail. Conflicting scholarly assessments remain visible; no automated rulings.
7. A changed approved claim resets dependent mission approvals. Re-test and only release approved content.

**Urgent content concern:** If an existing release falsely attributes a saying to the Prophet ﷺ, misrepresents a Qur'anic verse, or instructs unsafe worship, flag it as `release-blocking` and request a maintainer disable the specific content until reviewed. Never silently replace a contested ruling.

## Safety, privacy and intellectual property
No conversion scores, divine-reward counters, coercive dawah, copied commercial-game assets, illegal activities, or real-world violence tutorials. Humanitarian scenes must protect dignity and avoid unverified allegations about real people, corporations or governments. Never upload personal medical/financial data, identifying survivor stories, confidential information or secret credentials. Original art needs licensing/provenance; repository code licensing remains subject to maintainer decision, so verify before reusing third-party material.

## Maintainer review and CI costs
Review existing [content acceptance contract](docs/CONTENT_REVIEW_AND_ACCEPTANCE.md). Use local tests first and manual CI only when review-ready, avoiding wasted GitHub Actions minutes. Don't merge unreviewed religious instruction or claim a PR is production-ready without evidence.
