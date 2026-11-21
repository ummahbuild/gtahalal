# Dunya — Real-World Dawah, Wudu and New Muslim Learning
Status: design requirements pending qualified scholarly, safeguarding, privacy and platform review. **No live calls are implemented.**

## Principle
Dunya may provide a respectful route from a fictional dialogue to **voluntary real human conversation**. No player is a conversion target; no conversion counts, pressure, leaderboards or theological authority claims. A shahada or real-life religious act cannot be completed by a game button.

## Optional human call flow
1. Player chooses "Talk with a real person" from a learning menu, not an unsolicited popup.
2. Show who the provider is, verified role/affiliation, languages, time zone, availability, conduct rules, privacy notice, recording policy and whether the service is independent of Dunya.
3. Consent screen: "You can ask questions, disagree or leave. No one will pressure you to make a decision."
4. Route to a vetted third-party or supervised community host through a secure, expiring session link. Do not expose phone numbers, location or direct identifiers by default.
5. Lobby with waiting/leave controls, accessible captions and audio-only mode; never automatically activate microphone/camera.
6. Both parties can terminate. Block/report, moderation escalation, abuse prevention, no private contact solicitation, safeguarding and incident response.
7. Recording **off by default**; if ever permitted, require explicit informed consent of all parties and applicable law review. No calls with unvetted adult mentors and minors; minors require separately approved safeguarded program.
8. No conversion event, personal beliefs or call content sent to gameplay analytics. Provider agreements and data deletion policies required.
9. If no vetted human service is available, show neutral educational resources and a clear "not available" state; do not invent an available volunteer or call link.

## Wudu in real life
- Separate **observe**, **practice along**, **review differences**, **ask a teacher** and **pause to do it offline**.
- Each instructional step requires exact sourced evidence, school differences where applicable, review and licensed media. No universal ruling from one interpretation.
- Optional real-world checklist is local-only and not a religious validity verdict; no camera/mic monitoring, water usage surveillance or correctness score for actual worship.
- Accessible alternative flows and water-scarcity/tayammum research must pass qualified review before release.
- For people exploring Islam: private FAQ, respectful introductions, reading resources, optional mentor session, local community connection **only with explicit consent**. Never imply a digital click converts someone or obligates a person to identify as Muslim.
- Qualified reviewers approve wording about shahada, purification, prayer, validity and differing schools. Any changed instructional text resets approval.

## Proposed interfaces
`mentor_directory`: id, vettedRole, supportedLanguages, safeguardingStatus, serviceAvailability, providerUrl, privacyPolicyUrl, lastVerifiedAt, jurisdiction, ageEligibility.
`call_request`: ephemeralRequestId, providerId, explicitConsent, userControlledExit; avoid retaining sensitive content.
`lesson_review`: claimIds, exactReferences, translationsLicenses, reviewerIdentity, qualification, reviewedVersion, approvedAt, status.
No public directory or call activation before provider verification.

## Acceptance
Call request without consent is rejected; expired links cannot be reused; no recording by default; blocked provider cannot be selected; user can leave at any time; missing vetted providers never produces a fake call; unapproved wudu steps cannot appear as normative instruction; no sensitive analytics; RTL/captions/screen reader tested.
