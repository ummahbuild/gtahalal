# Humanitarian World — The Empty Pledge: vertical-slice production specification
Status: original fictional mission, **not real-world allegation or verified live relief data**. Builds on [Humanitarian World Campaign](HUMANITARIAN_WORLD_CRISIS_CAMPAIGN.md). This is a nonviolent civilian-accountability simulation, not a guide to evading conflict controls.

## Setting and cast
Fictional coastal district **Marwa Harbor**, with its own local organizations. A reconstruction fund announced 12 million fictional dinars; a publicity dashboard labels the entire sum "aid delivered". A water clinic has only received 400,000 in usable services. **These are invented numbers, not facts about a real government or crisis.**
- **Dr. Lina Idris**, clinic manager, controls the clinic's needs and consent; does not need rescuing.
- **Yusuf Elmi**, local procurement officer, knows supplier constraints and offers records.
- **Hawa Osman**, disability advocate, identifies inaccessible distribution sites.
- **Salma Karim**, diaspora fund manager, explains restricted grants and cash timing.
- **Minister Adil Rahman**, fictional official, publicly defends the headline number but can accept corrections.
- **Maya Ellis**, independent journalist, checks documents before publication.

## Five-scene gameplay loop
### Scene 1 — The Announcement
Player watches a short, clearly fictional press briefing. Dashboard shows 12m as "delivered". Choice A share it, B request underlying definitions, C speak to the local clinic first. If A, a correction path remains available; no reward for outrage.
### Scene 2 — Follow the Ledger
Collect consented fictional records from the clinic, fund manager and procurement office. Sort entries into **pledged, legally committed, disbursed, received, usable/operational**. Each entry has source, timestamp, amount, currency, conditions and uncertainty. A transfer between intermediaries must not be counted twice. The player must not access confidential patient data.
### Scene 3 — Why the Pump Is Silent
Clinic pump is not working. Choose to inspect the conceptual service dependency graph: power supply, replacement part, staffing, maintenance and safe water quality review. Do not direct players to repair live pumps or treat water without trained staff.
### Scene 4 — The Public Correction
Three peaceful routes: private request for dashboard correction, publish verified findings with the journalist, or convene a public audit hearing. Require the player to distinguish **unverified discrepancy** from **fraud proven by adjudication**. Officials and local organizations can disagree without being caricatured.
### Scene 5 — Make the Service Work
Allocate fictional unrestricted funding to repair, accessible distribution, backup power and staff training; keep restricted funds within their terms. Compare scenarios, simulate one year, and invite independent audit. Ending measures actual fictional service uptime and equitable access, not how many officials the player embarrassed.

## Example dialogue
Lina: "The announcement was large. The clinic still has no working pump."
Salma: "A pledge is a promise. A commitment is an obligation. Neither is the same as a delivered service."
Hawa: "If the water point has stairs, it is not available to everyone."
Adil: "Our dashboard counted funds released to implementing partners. We should have labelled it more clearly."
Fatimah: "Then let's publish what we can verify, and fix what people still cannot use."

## Fictional financial ledger fixture
| ID | Type | Amount (fictional dinars) | Parent | Evidence |
|---|---|---:|---|---|
| P1 | pledge | 12,000,000 | none | public announcement |
| C1 | commitment | 7,000,000 | P1 | agreement |
| D1 | disbursement | 3,000,000 | C1 | fund transfer |
| R1 | recipient receipt | 1,200,000 | D1 | partner receipt |
| O1 | operational service value | 400,000 | R1 | clinic inspection |

Amounts are illustrative nested *stages*, **not additive**. Player must never sum 12m + 7m + 3m + 1.2m + 0.4m as delivered aid. Additional disbursements may be unaccounted for, restricted, pending or disputed; lack of evidence does not automatically prove theft.

## Technical contract
`missionId=humanitarian-empty-pledge-01`, `fictional=true`, `reviewStatus=draft`, `releaseEnabled=false`, `sources[]`, `ledgerEntries[]`, `evidenceState`, `npcConsent`, `playerChoices[]`, `correctionState`, `waterServiceState`, `accessibilityState`, `saveVersion`.
- Reconcile stage totals by provenance and parent linkage, not by summing stages.
- Detect duplicate receipts and incompatible currencies without converting using invented FX.
- Source statuses: primary document, credible independent report, allegation, disputed, unverified, adjudicated finding.
- Public allegation requires explicit evidence review; game never names a real perpetrator.
- Fail closed on missing source rights, regional review, legal/trauma review or currentness.
- Save after each scene; no infinite engagement loops; real-world action optional and private.

## Branch endings
**Transparent Reform:** public dashboard corrected; partnership delivers services.
**Independent Audit:** slow but credible oversight; near-term service delay must be mitigated.
**Local-Led Cooperative:** local organization controls maintenance and budget, with external funding constraints.
**Premature Accusation:** player corrects a false claim, apologizes and rebuilds trust.
**Fragile Success:** water returns briefly but reserve is insufficient; follow-up maintenance mission unlocked.

## Root-cause research worksheet for each real-world crisis card
1. Chronology with dates and named primary sources.
2. Civilian protection, displacement and service access evidence.
3. Roles of armed actors and governments **only when supported**, separating allegations from court findings and official denials.
4. International law and humanitarian principles with jurisdiction/authority.
5. Economic drivers: infrastructure, land, aid restrictions, procurement, funding gaps and local market conditions.
6. Local voices, consent and agency, including women, displaced communities, religious minorities and disabled people.
7. Competing explanations and uncertainties.
8. Which remedies are immediate humanitarian needs versus longer-term rights, peace, legal or governance measures.
9. Expiration date and independent regional reviewer sign-off.
10. Links to trusted sources, not an unsourced "who is to blame" ranking.

## Quality acceptance
- Every scene has at least three meaningful choices and one nonpunitive repair path.
- Ledger stage totals cannot be double-counted; amounts are clearly fictional.
- No real patient or beneficiary information enters the game.
- Accessible non-visual ledger, captions and keyboard navigation.
- Source cards must be separately approved and dated; no real-time aid/safety claims.
- No victim-score, coercive conversion, real-money donation or combat mechanic.
- Locally led governance affects final outcome; the player is not a savior.
- A fictional authority's religious claims are evaluated as *claims*, not automatic theological verdicts.
