# Miami-inspired community mode and career paths
Status: **source implemented / unverified** for a finite bulletin-planning minigame and eight career selections; broader Miami world and career quests remain ideas.

## Implemented prototype
`apps/game/src/communityCareer.mjs` provides 8 career choices (organizer, journalist, software builder, accessibility designer, educator, health coordinator, grocer, community reporter), a four-step ordered bulletin minigame and sanitized local saves at `dunya-miami-community-v1`. `CommunityCareer.tsx` renders the accessible-text-first prototype, opened via the **Miami community & careers** button in Bayhaven. This is **not** a navigable 3D Miami city.

**First khutbah announcement:** Players coordinate venue access, qualified imam/scholar review, evidence-based neighborhood news and voluntary accessible delivery of the community bulletin. There is no sermon text, Qur'an translation, worship performance scoring or automatic religious approval. A real khutbah's religious content and presentation must be developed and approved by qualified humans.

## Career design expansion
Each career needs a five-stage progression: orientation → apprenticeship → first project → ethical dilemma → institutional leadership, with a meaningful repair route and year-five succession. Players may change careers without penalty; no faith ranking. Example intersections:
- Organizer + journalist: verify community announcements, protect sources.
- Builder + accessibility designer: multilingual maps, screen reader friendly venues.
- Teacher + health coordinator: source-reviewed learning and clinician-led health referrals.
- Grocer + organizer: fair supply contracts, food access and maintenance budgets.
- Community reporter + journalist: rumors, correction workflows and media literacy.

## City narrative arcs to implement
1. **First Khutbah Announcement:** accessible venue, qualified speaker, no public attendance tracking.
2. **The Missing Translation:** community bulletin needs accurate multilingual context and permissions.
3. **The Friday Traffic Problem:** coordinate safe fictional transport without making real routing claims.
4. **The Neighborhood Headline:** separate verified evidence, allegations and corrections.
5. **The Community Fund:** compare pledged, available and spent fictional amounts.
6. **The Youth Workshop:** teacher-led mentorship, privacy and safeguarding.
7. **The New Founder:** build a responsible community tool and survive year-five governance.
8. **The Shared City:** interfaith neighbors, housing, labor and civil rights, avoiding stereotypes.

## Release and review
Human Islamic review for sermon claims, cultural review for Miami depiction, legal and privacy review for any real organizations, source review for current events. No live event information, geolocation, real phone numbers, real funds, or real Qur'an distribution in this prototype. Add voice, 3D environment and actual career progression only with tests and asset rights.

## Acceptance
Stable IDs, ordered and idempotent choices, corrupt-save sanitation, keyboard and touch access, finite session, no faith scoring, no religious content publication without approval. Tests are authored but browser/build verification is pending.
