import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
const world=readFileSync(new URL('../src/WorldPreview.tsx',import.meta.url),'utf8');
test('state commit updates ref before scheduling React render',()=>{
 const commit=world.slice(world.indexOf('const commitGame ='),world.indexOf('}, []);',world.indexOf('const commitGame =')));
 assert.ok(commit.indexOf('gameRef.current = next') < commit.indexOf('setGame(next)'));
});
test('all gameplay mutation entry points use synchronous commit',()=>{
 for(const fragment of ['commitGame(s => tick(','commitGame(outcome.state)','commitGame(s=>chooseLegacy','commitGame(s=>planPantryRoute','commitGame(s=>planPantryProcurement','commitGame(loadGame())']) assert.ok(world.includes(fragment),fragment);
 assert.match(world,/serializeSave\(gameRef.current\)/);
});
