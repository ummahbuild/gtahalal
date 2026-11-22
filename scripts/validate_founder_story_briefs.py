#!/usr/bin/env python3
"""Offline validation of draft-only founder ethics story briefs."""
from pathlib import Path
import json
data=json.loads((Path(__file__).resolve().parents[1]/'content/founder_perspective_story_briefs.json').read_text())
assert data['schema_version']==1 and data['release_enabled'] is False and data['source_approval'] is False
assert len(data['missions'])==15
ids=set()
for m in data['missions']:
    assert m['id'] not in ids
    ids.add(m['id'])
    assert m['status']=='draft' and m['playable'] is False
    assert m['choices_required']>=3 and m['repair_path_required']
    assert m['real_world_action_optional'] and m['faith_score'] is False
    assert m['review']['editorial']=='pending' and m['issue_numbers']
print('PASS: 15 original draft-only industry briefs with unique IDs and review gates')
