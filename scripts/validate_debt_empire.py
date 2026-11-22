#!/usr/bin/env python3
"""Validate Debt Empire mission continuity and unpublished religious content."""
import json
from pathlib import Path
data=json.loads((Path(__file__).resolve().parents[1]/'content/debt_empire_missions.json').read_text())
assert data['schema_version']==1 and data['release_enabled'] is False
assert data['sharia_approval'] is False and data['legal_approval'] is False
assert len(data['acts'])==5
seen=set()
for act in data['acts']:
    assert len(act['missions'])==5
    for mission in act['missions']:
        assert mission['mission_id'] not in seen
        assert all(p in seen for p in mission['prerequisites'])
        assert mission['review_status']=='draft' and not mission['playable']
        assert mission['choices_required']>=3 and mission['repair_path_required']
        assert not mission['real_money_transactions']
        assert mission['issue_numbers']
        seen.add(mission['mission_id'])
assert len(seen)==25
print('PASS: 25 draft-only Debt Empire missions, unique IDs and ordered dependencies')
