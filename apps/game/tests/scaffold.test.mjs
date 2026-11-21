import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
test('game preview wires keyboard, touch and gamepad inputs', () => {
  const source = readFileSync(new URL('../src/WorldPreview.tsx', import.meta.url), 'utf8');
  for (const marker of ['keydown', 'onPointerDown', 'getGamepads', 'onClick={interact}', 'SAVE_KEY', 'NeighborhoodScene']) {
    assert.ok(source.includes(marker), 'missing ' + marker);
  }
});
test('main mounts WorldPreview', () => {
  const source = readFileSync(new URL('../src/main.tsx', import.meta.url), 'utf8');
  assert.match(source, /<WorldPreview\s*\/>/);
});
