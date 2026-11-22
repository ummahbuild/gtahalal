## Contribution lane
- [ ] Gameplay code / bug
- [ ] Story / mission / dialogue
- [ ] Qur'an or Sunnah correction (scholar review required)
- [ ] Humanitarian / regional review
- [ ] Accessibility / localization
- [ ] Art / infrastructure engineering

## Religious and humanitarian source review (if applicable)
- Claim ID, mission ID, exact current and proposed text:
- Quran.com / Sunnah.com canonical references, context and translation/asset rights:
- Hadith grading, variants, jurisprudence differences and qualified reviewer status:
- Regional sources, dated evidence, competing accounts and local review:
- [ ] Content stays draft/unpublished until all approvals; no automated fatwa
- [ ] Changed approved claim resets dependent approvals

## Summary and player value
<!-- Explain the actual change, not just a plan. -->

## Existing issues
<!-- Link existing issues; avoid duplicate issues. -->

## Scope and files changed
<!-- Apps, packages, content, assets, migrations. -->

## Evidence and test results
- [ ] `python3 scripts/audit_repo.py` (record result; currently expected to flag missing lockfile)
- [ ] `bash scripts/verify-local.sh quick`
- [ ] `bash scripts/verify-local.sh full` for release-facing code
- [ ] Screenshots / video for visual changes, with device and viewport
- [ ] Negative cases and save migration tested
- [ ] Actual CI status linked, if manually dispatched

## Review gates
- [ ] No Notion/private workspace links, secrets or personal data
- [ ] No unapproved religious or legal claim presented as authoritative
- [ ] Original licensed assets with provenance
- [ ] Accessibility and low-end/mobile performance considered
- [ ] No copied Rockstar IP
- [ ] No regressions in unrelated story or gameplay systems

## Risk, rollback and unresolved blockers
<!-- State unverified behavior explicitly. -->

## CI minutes policy
Do not dispatch GitHub Actions for WIP PRs. Run local checks first. Maintainer may manually dispatch quick/full workflow once review-ready; re-run only when code materially changes.
