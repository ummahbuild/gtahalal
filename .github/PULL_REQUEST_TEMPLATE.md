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
