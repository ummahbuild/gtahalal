import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
const core=readFileSync(new URL('../../../packages/game-core/src/index.ts',import.meta.url),'utf8');
const world=readFileSync(new URL('../src/WorldPreview.tsx',import.meta.url),'utf8');
test('dialogue transition owns eligibility and outcome together',()=>{
 assert.match(core,/export function applyDialogueEffect/);
 assert.match(core,/DialogueTransition = \{ state: GameState; applied: boolean; reason: string \}/);
 assert.match(core,/effect === 'verify_clip' && !state.inventory.evidence_hear_omar/);
 assert.match(core,/effect === 'correct_rumor' && !state.inventory.evidence_share_rumor/);
});
test('UI uses transition outcome rather than duplicate prerequisite logic',()=>{
 assert.match(world,/applyDialogueEffect\(gameRef.current, dialogueNpc, choice.effect\)/);
 assert.match(world,/setConversationResult\(outcome.applied/);
 assert.doesNotMatch(world,/const requiresPantry =/);
 assert.doesNotMatch(world,/const requiresOmar =/);
});
