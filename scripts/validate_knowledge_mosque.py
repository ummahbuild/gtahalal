#!/usr/bin/env python3
"""Offline validator for draft knowledge and mosque starter content."""
import json
from pathlib import Path
data=json.loads((Path(__file__).resolve().parents[1]/'content/knowledge_mosque_starter.json').read_text())
assert data['version']==1
assert data['review_status']=='draft'
assert data['library']['public_release_enabled'] is False
assert data['library']['items']==[], 'No unlicensed hadith text may be shipped'
assert data['mosque_project']['professional_approval'] is False
ids=[m['mission_id'] for m in data['missions']]
assert len(ids)==len(set(ids))
for mission in data['missions']:
    assert mission['status']=='draft'
    assert mission['source_claim_ids']==[]
    assert mission['objectives'] and len(mission['choices'])>=3
print('PASS: draft knowledge/mosque content contracts and publication gates')
