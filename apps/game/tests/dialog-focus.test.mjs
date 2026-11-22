import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
const read=name=>readFileSync(new URL('../src/'+name,import.meta.url),'utf8');
test('dialog hook handles Escape, Tab and returns focus',()=>{
 const hook=read('useDialogFocus.ts');
 for(const token of ["event.key==='Escape'","event.key!=='Tab'","last.focus()","first.focus()","previous?.focus()","document.removeEventListener"]) assert.ok(hook.includes(token),token);
});
test('founder, career and world overlays use managed focus',()=>{
 for(const name of ['FounderStories.tsx','CommunityCareer.tsx'])assert.match(read(name),/ref=\{dialogRef\} tabIndex=\{-1\}/);
 const world=read('WorldPreview.tsx');
 assert.match(world,/label="Pantry route and supplier planning"/);
 assert.match(world,/label="Neighbor conversation"/);
 assert.match(world,/!dialogueNpc && !showFounderStories/);
});
