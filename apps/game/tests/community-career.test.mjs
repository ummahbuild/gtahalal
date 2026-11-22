import test from 'node:test';
import assert from 'node:assert/strict';
import {CAREERS,BULLETIN_STEPS,normalizeCommunity,chooseCareer,answerBulletin,bulletinResult} from '../src/communityCareer.mjs';
test('career choices are valid and invalid IDs rejected',()=>{
 assert.equal(CAREERS.length,8);
 assert.equal(chooseCareer(null,'journalist').career,'journalist');
 assert.throws(()=>chooseCareer(null,'unknown'),RangeError);
});
test('bulletin steps require order and cannot double-award progress',()=>{
 let state=normalizeCommunity(null);
 state=answerBulletin(state,'speaker','review');
 assert.equal(bulletinResult(state).completed,0);
 for(const step of BULLETIN_STEPS)state=answerBulletin(state,step.id,step.choices[0].id);
 assert.equal(bulletinResult(state).completed,4);
 assert.deepEqual(answerBulletin(state,'venue','poster'),state);
});
test('corrupt storage is sanitized and religious attendance never stored',()=>{
 const state=normalizeCommunity({version:1,career:'invalid',answers:{venue:'access',speaker:'fake',attendance:'yes'}});
 assert.equal(state.career,null);
 assert.deepEqual(state.answers,{venue:'access'});
 assert.equal('attendance' in state,false);
});
