import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
const core=readFileSync(new URL('../../../packages/game-core/src/index.ts',import.meta.url),'utf8');
const game=readFileSync(new URL('../src/WorldPreview.tsx',import.meta.url),'utf8');
test('legacy decision is gated by completed route and procurement',()=>{
  assert.match(core,/state\.quest !== 'complete' \|\| !state\.inventory\.route_planned \|\| !state\.inventory\.procurement_planned/);
  assert.match(core,/if \(state\.inventory\.legacy_chosen\) return state/);
});
test('three distinct continuity options are visible and tracked',()=>{
  for(const id of ['volunteer_rota','supplier_partnership','community_board']) assert.ok(core.includes("id: '"+id+"'"));
  assert.match(game,/LEGACY_OPTIONS\.map/);
  assert.match(game,/chooseLegacy\(s,option\.id\)/);
  assert.match(game,/legacyStatus\(game\)/);
});
