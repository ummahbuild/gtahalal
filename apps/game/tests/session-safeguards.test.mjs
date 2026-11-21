import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const safeguards = readFileSync(new URL('../src/SessionSafeguards.tsx', import.meta.url), 'utf8');
const preview = readFileSync(new URL('../src/WorldPreview.tsx', import.meta.url), 'utf8');

test('session safeguards offer voluntary duration and off setting', () => {
  for (const value of ['10', '20', '30', '45', 'off']) {
    assert.ok(safeguards.includes('value="' + value + '"'));
  }
  assert.match(safeguards, /Save and leave/);
  assert.match(safeguards, /Continue for now/);
});
test('prayer break has no tracking or rewards', () => {
  assert.match(safeguards, /I'm going to pray/);
  assert.match(safeguards, /does not track whether you prayed/);
  assert.doesNotMatch(safeguards, /worshipCompleted|prayerScore|streakCount/);
});
test('save failures do not silently exit', () => {
  assert.match(safeguards, /if \(onSave\(\)\) onLeave\(\)/);
  assert.match(safeguards, /Your progress could not be saved/);
});
test('game connects pause, save and resume callbacks', () => {
  assert.match(preview, /<SessionSafeguards/);
  assert.match(preview, /onSave=\{save\}/);
  assert.match(preview, /onPause=\{pauseForRealLife\}/);
});
