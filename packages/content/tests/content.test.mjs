import test from 'node:test';
import assert from 'node:assert/strict';
import { PANTRY_MISSION, validateMission } from '../src/index.ts';
test('starter mission validates and stays draft', () => {
  assert.deepEqual(validateMission(PANTRY_MISSION),[]);
  assert.equal(PANTRY_MISSION.review_status,'draft');
});
test('invalid mission cannot pass',()=>assert.ok(validateMission({mission_id:'x',review_status:'released'}).length>0));
