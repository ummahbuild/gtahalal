# Bayhaven — playable starter neighborhood map contract
Status: original fictional map design. No real city claim. The existing procedural blockout does not yet implement this map.

## Map design principles
One dense walkable neighborhood, not an empty large world. All critical destinations reachable on foot and by accessible paths. Players must orient using landmarks and a legible map without memorizing a maze. Main path should avoid road-crossing hazards; traffic simulation is a later milestone.

## Districts and landmarks (fictional)
| Map ID | Location | Player purpose | Interaction | Story dependencies |
|---|---|---|---|---|
| BH-01 | Harbor Plaza | spawn, wayfinding, meet Sara | NPC dialogue, noticeboard | Episode 0 |
| BH-02 | Community Pantry | inventory, Amina, deliveries | door, ledger, handoff | Episode 1 |
| BH-03 | Crescent Community Center | gathering, classes, accessibility | door, schedule board | Episodes 2–4 |
| BH-04 | Bilal's Bicycle Workshop | transport, repair and curb access | NPC, bike rack | Episode 3 |
| BH-05 | Omar's Corner Grocery | ethical sourcing, contracts | shop counter, price board | Episodes 2–4 |
| BH-06 | Bayhaven Mosque | respectful exterior and future approved learning | wayfinding only until review | Later M3 |
| BH-07 | Bus Stop | future transport and map orientation | timetable | Future city systems |
| BH-08 | Home Apartment | save/rest, personal storage | door and interior | M1 |
| BH-09 | Accessible Loading Bay | delivery route and street safety | curb ramp, markings | Episode 3 |
| BH-10 | Local News Kiosk | Maya and evidence journal | dialogue, news board | Episode 2 |
| BH-11 | Community Garden | optional stewardship | watering, planting | Optional mission |
| BH-12 | Public Service Office | permit, consultation, repair request | dialogue, form | Episode 3 |

## Layout and topology
- A continuous pedestrian loop connects BH-01, BH-02, BH-03, BH-05, BH-06 and BH-08.
- A side route connects BH-04, BH-09 and BH-07 without forcing a dangerous crossing.
- BH-10 sits on the plaza edge; BH-12 is adjacent to the accessible loading bay.
- BH-11 offers a quieter optional destination.
- Every mission route needs at least one accessible alternative, clear signposting and an unobstructed emergency route.
- All coordinates in the starter block are **local fictional world units**; do not map them to real GPS or assume a scale before playtesting.

## Navigation and interaction data
Each landmark requires id, displayName, district, worldPosition, mapIcon, approachPoint, entryPoint, interactionRadius, collisionShape, accessibleRoutes, openingSchedule, NPCs, missionIds, reviewStatus, assetProvenance and localizationKey.
Doors require interaction state, open/closed geometry, approach clearance, scene-transition target and persistence. Interactions must not trigger through solid walls.
Map UI: north indicator, player marker, destination pins, quest path, accessible-route toggle, zoom, high contrast, keyboard/controller/touch support, screen-reader list and optional compass.
Never display real user's location in the fictional map by default.

## Rendering / streaming requirements
Begin with one scene and one small interior. Add collision/navmesh and occlusion before additional districts. Use original modular assets, PBR materials, LOD, instance repeated props, avoid costly real-time shadows on mobile. Measure load time, GPU frame time and memory on defined devices.

## Acceptance tests
1. Spawn at BH-01 and reach pantry without crossing a blocked path.
2. Find BH-02 using map and accessible directions.
3. Interact with a door only when within range and line of sight.
4. Enter BH-08 and return to same exterior position.
5. Quest destination changes after speaking with Sara.
6. Map remains usable on 360px touch screen and keyboard-only.
7. Save/load restores player location, quest, and interior/exterior state.
8. No religious instructions appear at BH-06 before source approval.
9. No real GPS, personal data or unlicensed landmark asset enters the map.
