# Dunya — The House We Build Together
Status: original fictional mosque-building campaign, not professional architectural, legal or religious advice. Draft for M2/M4; implementation and specialist review pending.

## Source inspiration and boundary
The open-source [mosque.build](https://github.com/ummahbuild/mosque.build) README describes a mosque lifecycle workspace: community brief, site selection, conceptual design, approvals, budget, funding, sourcing, construction, opening, operations, endowment and care. It also describes browser-local planning, site/qibla/climate/access studies, editable layouts, cost and procurement planning, work orders, maintenance and review boundaries. **Dunya adapts these as original fictional game mechanics**, not an embedded copy, not an endorsement, not a transfer of real construction drawings or a guarantee of code/assets licensing. mosque.build explicitly says qualified professionals and authorities remain necessary.

## Story setup
Bayhaven's Crescent Community Center needs a larger accessible prayer and gathering space. The committee has limited funds and competing priorities. The player does not "buy a mosque" or receive spiritual points; they help neighbors govern, plan, fund and sustain a community facility.

## Cast
- **Hana Malik**, community board chair: wants transparent consultation and a realistic operating plan.
- **Idris Okafor**, accessibility consultant: advocates step-free access, inclusive circulation and safety.
- **Samira Noor**, local architect: explains design tradeoffs and professional sign-off.
- **Tariq Bello**, treasurer: tracks donations, costs, contingency and ongoing maintenance.
- **Ruth Chen**, neighboring shop owner: worries about parking, noise and pedestrian safety; can become a partner.
- **Imam Yusuf**, fictional local religious educator: provides community needs input; game does not present him as a real-world authority.

## Six connected missions
**MB-01 — Who Is This For?** Hold a community meeting. Choices: expand existing center, retrofit another space, or explore a new site. Listen to women, elders, disabled residents, neighbors and volunteers. Outcome: documented needs and unresolved concerns.
**MB-02 — Find the Ground** Compare three fictional sites for access, climate, flood risk, lawful land use, cost, transit, services and neighborhood impacts. A cheaper site may have expensive accessibility and utility costs. Require due diligence.
**MB-03 — Draw the Welcome** Place entrance, prayer hall, washrooms, wudu spaces, multipurpose rooms, storage, safe exits and accessible routes in a grid editor. Qibla orientation is a reviewed constraint; no automatic assertion of religious compliance. Playtest queueing, circulation, daylight and occupancy as fictional simulation.
**MB-04 — Count Every Cost** Build a budget with land, design, permits, materials, labor, utilities, contingency and operating reserve. Choose transparent community contributions, grants or other reviewed financing proposals; no unapproved Islamic finance ruling.
**MB-05 — Build With Care** Evaluate fictional contractor bids, labor safety, material sourcing, change orders, permit gates and neighborhood disruption. Handle a schedule delay through transparent communication and lawful renegotiation.
**MB-06 — Keep the Doors Open** Hire staff, plan cleaning/repairs, energy/water use, accessibility upkeep, emergency readiness, programming and long-term governance. Success is sustained service capacity after the player steps away.

## Player-ready opening dialogue
Hana: "We can raise money for walls. But first, we need to agree on whom this place must serve."
Idris: "A beautiful entrance isn't welcoming if someone can't get through it."
Samira: "A sketch helps us ask better questions. It doesn't replace a licensed design."
Tariq: "The opening day is one expense. Keeping the doors open is a commitment."
Ruth: "I support a community space. I also need customers to reach my shop. Can we plan together?"
Fatimah: "Let's hear from the people who haven't been in the room."
Ahmed: "Show me the operating budget, not just the construction total."

## Reusable game mechanics
- Community brief: rank needs, accessibility, capacity, cultural preferences and local concerns without excluding stakeholders.
- Site comparison: fictional map parcels, transit distance, flood/noise risk, title/permit status, utilities and cost.
- Planning sandbox: drag room blocks, calculate fictional area, circulation and accessibility warnings; never issue real code compliance certification.
- Procurement: request quotes, compare lifecycle cost, lead time, quality, provenance and conflicts of interest.
- Finance: fictional currency, restricted/unrestricted donation categories only after legal review, grants, cost overruns, reserve targets, monthly expenses and transparent reports.
- Operations: maintenance backlog, service availability, staffing, utility costs, scheduling, accessibility incidents and governance.
- Outcome model: community access, financial runway, safety defects, trust, operating reliability and maintenance condition; **never piety, sin or divine reward**.
- Failure/repair: permit rejected -> revise site; budget shortfall -> reduce scope; inaccessible design -> redesign; contractor delay -> adjust schedule; governance conflict -> mediation.

## Technical data
`project_id`, `city_pack_id`, `site_id`, `stakeholders[]`, `needs_brief`, `design_revision`, `rooms[]`, `accessible_routes[]`, `site_studies[]`, `permit_gates[]`, `budget_lines[]`, `quotes[]`, `contracts[]`, `schedule[]`, `maintenance_tasks[]`, `staffing[]`, `governance_decisions[]`, `operating_reserve`, `review_status`, `asset_provenance[]`.
Keep renderer-neutral game state in game-core; Three.js displays the design, not the source of truth. No real donations or real-world permit advice.

## Map and interaction requirements
The site must connect to accessible sidewalks, transit, emergency routes and neighbors. Show project stages as distinct construction/operation states; don't place an instantly completed building. Interior wayfinding requires step-free entrances, safe exits, and respectful noncompetitive worship-space UI. All geometry is original and conceptual.

## Acceptance tests
1. Player can finish with retrofit, expansion or new-build strategy.
2. Costs reconcile; negative balance blocks contracts and offers a recovery route.
3. Site comparison never claims actual land ownership or legal permit approval.
4. Accessible entrance and egress remain hard review gates, not optional cosmetics.
5. Construction delay and maintenance failure have nonpunitive repair paths.
6. Budget/operations persist across sessions and character succession.
7. No unapproved religious or legal instruction appears in release builds.
8. No copied mosque.build code/assets or unlicensed real mosque model.
Related: #2, #5, #9, #14, #19, #36, #38.
