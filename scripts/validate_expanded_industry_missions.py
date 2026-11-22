#!/usr/bin/env python3
"""Offline schema checks; does not approve or publish draft missions."""
import json
from pathlib import Path
root=Path(__file__).resolve().parents[1]
data=json.loads((root/'content/expanded_industry_missions.json').read_text())
assert data['schema_version']==1 and data['release_status']=='draft'
assert len(data['chapters'])==3
ids=set()
for chapter in data['chapters']:
    assert len(chapter['missions'])==5
    for m in chapter['missions']:
        assert m['mission_id'] not in ids
        ids.add(m['mission_id'])
        assert m['review_status']=='draft' and m['playable'] is False
        assert m['requires_legal_review'] and m['requires_safety_review']
        assert m['choices_required']>=3 and m['repair_path_required']
        assert m['issue_numbers'] and all(1<=n<=61 for n in m['issue_numbers'])
        assert all(prereq in ids for prereq in m['prerequisites'])
assert len(ids)==15
print('PASS: 15 draft-only industry missions have unique IDs, issue mappings and valid prerequisites')
