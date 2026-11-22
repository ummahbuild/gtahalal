#!/usr/bin/env python3
"""Validate draft humanitarian missions without publishing factual or safety claims."""
import json
from pathlib import Path
data=json.loads((Path(__file__).resolve().parents[1]/'content/humanitarian_world_missions.json').read_text())
assert data['schema_version']==1 and not data['release_enabled']
assert not data['source_verified_for_live_play'] and not data['real_time_safety_claims']
assert len(data['regions'])==9
seen=set()
for region in data['regions']:
    assert region['fictional_simulation'] and region['source_status']=='research_lead'
    assert region['source_url'].startswith('https://')
    assert len(region['missions'])==5
    for mission in region['missions']:
        assert mission['mission_id'] not in seen
        assert all(p in seen for p in mission['prerequisites'])
        assert mission['review_status']=='draft' and not mission['playable']
        assert not mission['real_donations_enabled']
        assert mission['trauma_review_required'] and mission['local_review_required'] and mission['legal_review_required']
        assert mission['issue_numbers']
        seen.add(mission['mission_id'])
assert len(seen)==45
print('PASS: 45 unpublished humanitarian missions, unique IDs, valid dependencies and review gates')
