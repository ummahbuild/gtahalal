# Dunya — reusable city-map pack requirements
Status: specification for proposed cities, not an assertion of completed maps.

## Schema
cityId, fictionalOrReal, region, timeZone, coordinateReference, unitsPerMeter, districts, streets, sidewalks, buildings, transitNodes, accessibleRoutes, collision/navmesh, NPCSchedules, missionAnchors, landmarks, mosqueReview, prayerTimePolicy, trafficRules, languages, assetManifest, provenance, culturalReviewStatus, releaseStatus.

## Map layers
1. Ground/terrain, climate, water, vegetation.
2. Roads, sidewalks, crossings, cycle paths, transit.
3. Buildings and enterable interiors, utilities and public spaces.
4. Navigation mesh, collision and accessible-route graph.
5. NPC schedules, services, opening hours and population density.
6. Missions, trigger zones, dialogue and story dependencies.
7. Community services, optional mosque/learning points and culturally reviewed landmarks.
8. Weather/day-night visual presets and performance LOD zones.
9. Localization and safety/privacy metadata.

## Minimum city QA
- Spatial connectivity: every required mission node reachable.
- Walk/cycle/vehicle graphs kept distinct; no driving on pedestrian-only paths.
- Collision and interaction triggers agree; no through-wall activation.
- Accessible route alternatives and map-list navigation.
- Locale, calendar, time zone, travel and prayer policies are independently reviewed.
- Original/licensed art and local cultural review.
- Offline fallback, district streaming and low-end mobile budgets.
- No invented real-world religious customs, building interiors or unrestricted access to sacred sites.

## Candidate city differentiators
Fictional Bayhaven starter: pantry, civic accessibility, journalism and food-supply stories.
Nairobi: ethical commerce, gardens and urban mobility; local co-authorship required.
Lagos: transport and trade, flood preparedness and community service; local review required.
Addis Ababa: multilingual markets, heritage and mutual aid; local review required.
Istanbul: waqf heritage and neighborhood services; local review required.
Cairo: historical learning and pedestrian access; local review required.
Dakar: coastal stewardship and craft economies; local review required.
Karachi: water access and community healthcare; local review required.
Dhaka: flood resilience, recycling and accessibility; local review required.
Jakarta: transit, food distribution and flood resilience; local review required.
Sarajevo: cultural heritage and intercommunity service; local review required.
Mogadishu: education, entrepreneurship and community rebuilding; local review required.
Makkah/Madinah: separate restricted educational maps after specialist religious, geographic and rights review.

## Acceptance per city
One reviewed hero district, at least three meaningful missions, validated routes and navigation, original art, performance evidence, language/accessibility QA and clearly documented city-specific approvals before release.
