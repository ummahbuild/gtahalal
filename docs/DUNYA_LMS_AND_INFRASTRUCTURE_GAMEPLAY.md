# Dunya — Integrated LMS, Engineering and City Infrastructure Gameplay
Status: scoped architecture and curriculum design; not implemented as a playable LMS, CAD or engineering tool.

## Integrated learning management system
The game connects to a modular learning hub in apps/studio (authoring and approval) and apps/game (consumption). Canonical content lives in packages/content with typed versions; deterministic learner progress belongs in game-core and optional browser-local storage. No real religious observance tracked.

### Course types
- Arabic literacy, Qur'an study and Hadith bibliography: **scholar-approved content only** for normative instruction; source and translation licensing.
- Wudu and salah: observe, review, guided practice and offline pause; differing jurisprudence handled by reviewed variants.
- Real-life skills: digital literacy, consumer rights, project budgeting, surveying concepts, accessible design, materials, structural load paths, water systems, renewable energy, procurement, construction safety and maintenance.
- Civic education: petitions, public hearings, lawful records requests, transparent procurement and cooperative governance.
- Teaching tools: short lessons, source links, transcripts, captions, quizzes for secular concepts, reflection, review requests, certificates of **in-game course completion only**, never religious authority.

### LMS contract
`courseId`, `moduleId`, `lessonId`, `version`, `language`, `ageBand`, `learningObjectives`, `prerequisites`, `contentBlocks`, `sourceClaimIds`, `reviewStatus`, `assetLicenses`, `accessibility`, `quizItems`, `progressPolicy`, `offlinePolicy`.
Draft/blocked religious content cannot be published. Avoid compulsory streaks, endless assignments or rank pressure. Learners may export progress and delete local history.

## Engineering game: Build Bayhaven
Player sees a real-looking but explicitly **fictional** city system with a simulation model: district zoning, walking/cycling/public transport networks, utility loads, water treatment, drainage, flood zones, power reliability, energy budgets, building materials, supply chain, construction schedules, labor, maintenance and public consultation.

### Six mission arcs
1. **Survey Before You Build:** inspect fictional terrain and community needs; identify accessible routes and environmental constraints.
2. **The Water Must Flow:** design a simple water supply and wastewater network; compare leaks, pressure, treatment and energy cost. No real engineering certification.
3. **Power Through the Night:** select fictional generation/storage and resilient feeders; calculate energy balance and reserve margins.
4. **A Street for Everyone:** design curb ramps, crossings, bus stops, pedestrian/cycle priority and traffic safety.
5. **Build the Community Mosque:** link to draft mosque.build-inspired campaign: needs brief, conceptual floor plan, budget, procurement, permit gates and maintenance; never issue real construction permits or religious compliance certification.
6. **The City After You:** stress-test storm response, backup power, service reliability, cash runway, repair crews and independent governance.

### Systems and gameplay
- Start with a **tile/graph** planning layer in TypeScript, not an enormous open-world rendering dependency. Every road/utility edge has capacity, cost, upkeep and accessibility.
- Budget ledger: capital, wages, material purchases, permit allowances, contingency, operating reserves, recurring maintenance.
- Water: fictional source, pump, tank, distribution and demand; balance supply/demand, flag service deficit, leaks and outage.
- Electricity: generation, peak demand, storage and redundancy; simulate blackout recovery.
- Mobility: connected graph, walking distances, step-free routes, travel time, crossing safety and emergency access.
- Construction: editable footprints, rooms, doors, accessibility, quantity takeoffs, bid comparison, schedules, staged construction.
- Institutions: staff, governance, financial runway, procurement fairness and independent audit.
- Scenarios: rain/flood, power outage, contractor delay, misinformation and supply shock. Player can repair a failure, redesign or choose a smaller scope.

### mosques and cities
Use the public mosque.build lifecycle as **inspiration**, not a direct copy or a guarantee of integration. Map mosque sites to accessible transit, drainage and utility nodes. Include room layout, prayer hall, wudu facilities, multipurpose rooms, classrooms, safe exits, maintenance and endowment proposals subject to review. No real land rights, construction sign-off or legal/fiqh verdicts.

### Engineering acceptance
Deterministic sim from seed; reproducible load/cost results; no negative budgets without explicit debt; network connectivity tests; accessibility route tests; resource conservation; stress test and recovery; save migration; mobile-friendly planning controls and undo/redo. Real engineering standards need professional review and jurisdiction-specific sourcing before instructional use.

## Real-world bridge
After a fictional mission, show an **optional** practical project brief: survey an accessible route with permission, join a local community cleanup, volunteer for a vetted initiative, attend a public planning meeting, or learn CAD with a licensed tutorial. Do not claim to have verified a user's real activity or instruct unsafe work on live infrastructure.
