import test from 'node:test';
import assert from 'node:assert/strict';
import { DIALOGUES, dialogueFor, chooseDialogue } from '../src/npcDialogues.mjs';
test('all three starter NPCs have three distinct original choices',()=>{
  assert.deepEqual(Object.keys(DIALOGUES).sort(),['amina','bilal','sara']);
  for(const [id,scene] of Object.entries(DIALOGUES)){
    assert.ok(scene.opening.length>20);
    assert.equal(scene.choices.length,3);
    assert.equal(new Set(scene.choices.map(c=>c.id)).size,3);
    assert.ok(scene.choices.some(c=>c.effect==='none'));
    assert.equal(dialogueFor(id),scene);
  }
});
test('declining is safe and never grants a quest outcome',()=>{
  for(const id of Object.keys(DIALOGUES)) assert.equal(chooseDialogue(id,'later').effect,'none');
});
test('pantry completion requires Amina confirmation',()=>{
  assert.equal(chooseDialogue('sara','volunteer').effect,'start_pantry');
  assert.equal(chooseDialogue('amina','count').effect,'deliver_pantry');
  assert.equal(chooseDialogue('amina','access').effect,'accessibility');
});
test('invalid NPC and choice IDs fail closed',()=>{
  assert.equal(dialogueFor('__proto__'),null);
  assert.throws(()=>chooseDialogue('fake','count'),RangeError);
  assert.throws(()=>chooseDialogue('amina','fake'),RangeError);
});
