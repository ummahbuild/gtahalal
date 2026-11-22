import test from 'node:test';
import assert from 'node:assert/strict';
import { STORIES, applyDecision, normalizeProgress } from '../src/founderStories.mjs';

test('three distinct fictional founder missions have three choices each', () => {
  assert.equal(STORIES.length, 3);
  assert.equal(new Set(STORIES.map(s=>s.id)).size, 3);
  for (const story of STORIES) {
    assert.equal(story.choices.length, 3);
    assert.ok(story.repair);
    assert.ok(story.offline.startsWith('Optional:'));
  }
});
test('a decision is deterministic and cannot be awarded twice', () => {
  const initial = normalizeProgress(null);
  const once = applyDecision(initial, STORIES[0].id, 'redesign');
  const twice = applyDecision(once, STORIES[0].id, 'redesign');
  assert.deepEqual(once, twice);
  assert.equal(once.decisions[STORIES[0].id], 'redesign');
  assert.deepEqual(initial.decisions, {});
});
test('unknown decisions are rejected', () => {
  assert.throws(()=>applyDecision(null,'fake','fake'), RangeError);
});
test('corrupt saves are sanitized and outcomes clamped', () => {
  const p = normalizeProgress({version:1,decisions:{[STORIES[0].id]:'not-a-choice'},metrics:{trust:Infinity,access:-400,runway:200}});
  assert.deepEqual(p.decisions,{});
  assert.equal(p.metrics.trust,0);
  assert.equal(p.metrics.access,0);
  assert.equal(p.metrics.runway,5);
});
test('player faith is not a gameplay metric', () => {
  const result = applyDecision(null,STORIES[1].id,'creator-council');
  assert.deepEqual(Object.keys(result.metrics).sort(),['access','runway','trust']);
});

test('persisted metric tampering cannot change derived results', () => {
  const first = applyDecision(null, STORIES[0].id, 'redesign');
  const restored = normalizeProgress({...first, metrics:{trust:10, access:10, runway:10, faith:999}});
  assert.deepEqual(restored, first);
});
test('decision order cannot change derived metrics', () => {
  const a = applyDecision(applyDecision(null, STORIES[0].id, 'growth'), STORIES[1].id, 'chronological');
  const b = applyDecision(applyDecision(null, STORIES[1].id, 'chronological'), STORIES[0].id, 'growth');
  assert.deepEqual(a,b);
});
test('malformed and inherited decision IDs are discarded', () => {
  const decisions = Object.create({[STORIES[0].id]:'growth'});
  assert.deepEqual(normalizeProgress({version:1,decisions}).decisions,{});
  assert.deepEqual(normalizeProgress({version:99,decisions:{[STORIES[0].id]:'growth'}}).decisions,{});
});
