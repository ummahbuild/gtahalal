import test from 'node:test';
import assert from 'node:assert/strict';
import { freshState, move, talk, deliverPantry, migrateSave, serializeSave, nearbyNpc, tick, isWalkable, LANDMARKS, NPCS } from '../src/index.ts';
test('movement is bounded and ignores invalid deltas', () => {
  let s=freshState();
  assert.equal(move(s,NaN,0,1),s);
  for(let i=0;i<300;i++) s=move(s,1,0,.1);
  assert.ok(s.position.x<=21);
});
test('quest starts and rewards exactly once', () => {
  let s=freshState();
  s=move(s,-1,0,1);
  s={...s,position:{x:-7,z:1}};
  assert.equal(nearbyNpc(s)?.id,'sara');
  s=talk(s,'sara');
  assert.equal(s.quest,'active');
  s={...s,position:{x:0,z:-4}};
  s=deliverPantry(s);
  assert.equal(s.quest,'complete');
  assert.equal(deliverPantry(s).coins,s.coins);
});
test('save migration clamps and rejects unknown version', () => {
  assert.deepEqual(migrateSave({version:999}),freshState());
  const s=migrateSave({version:1,persona:'Fatimah',position:{x:999,z:-999},coins:-10,quest:'active',npcSpoken:['bogus']});
  assert.equal(s.position.x,21);
  assert.equal(s.position.z,-7);
  assert.equal(s.coins,0);
  assert.deepEqual(s.npcSpoken,[]);
  assert.equal(migrateSave(JSON.parse(serializeSave(freshState()))).version,1);
});
test('clock is deterministic',()=>assert.equal(tick(freshState(),1).timeMinutes,540.25));

test('obstacles block movement but permit axis sliding', () => {
  assert.equal(isWalkable(-3,2.5),false);
  assert.equal(isWalkable(0,0),true);
  const state={...freshState(),position:{x:-3,z:1.25}};
  const next=move(state,0,1,.1);
  assert.equal(next.position.z,state.position.z);
});

test('NPC conversations require proximity and cannot be remotely triggered', () => {
  const start=freshState();
  assert.equal(talk(start,'sara').quest,'available');
  const atSara={...start,position:{x:-7,z:1}};
  assert.equal(talk(atSara,'sara').quest,'active');
  assert.deepEqual(talk(atSara,'unknown'),atSara);
});
test('all starter NPCs have map landmark anchors', () => {
  for(const npc of NPCS) assert.ok(LANDMARKS.some(p => Math.hypot(p.x-npc.x,p.z-npc.z)<0.01),npc.id);
});
