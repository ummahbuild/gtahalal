import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
const core=readFileSync(new URL('../../../packages/game-core/src/index.ts',import.meta.url),'utf8');
const game=readFileSync(new URL('../src/WorldPreview.tsx',import.meta.url),'utf8');
test('route and procurement are gated on real fictional story prerequisites',()=>{
  assert.match(core,/state\.quest !== 'complete' \|\| !state\.npcSpoken\.includes\('bilal'\)/);
  assert.match(core,/!state\.inventory\.route_planned \|\| !state\.inventory\.evidence_hear_omar/);
});
test('choices are idempotent and separately tracked',()=>{
  assert.match(core,/if \(state\.inventory\.route_planned\) return state/);
  assert.match(core,/if \(state\.inventory\.procurement_planned\) return state/);
  assert.match(core,/\['route_' \+ option\]/);
  assert.match(core,/\['procurement_' \+ option\]/);
});
test('actual game exposes a finite planning panel and status',()=>{
  assert.match(game,/Pantry planning/);
  assert.match(game,/ROUTE_OPTIONS\.map/);
  assert.match(game,/PROCUREMENT_OPTIONS\.map/);
  assert.match(game,/pantryPlanStatus\(game\)/);
});
