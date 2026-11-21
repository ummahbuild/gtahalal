import test from 'node:test';
import assert from 'node:assert/strict';
import { sessionSettings, sessionReminder, pauseForRealLife, nextOfflineAction, canRequestMentorCall, validateLearningUnit, balanceInfrastructure } from '../src/index.mjs';

test('reminders are finite and dismissible', () => {
  assert.equal(sessionReminder(sessionSettings(20), 19), null);
  const prompt = sessionReminder(sessionSettings(20), 20);
  assert.equal(prompt.dismissible, true);
  assert.ok(prompt.options.includes('Save and leave'));
  assert.equal(sessionReminder(sessionSettings(null), 1000), null);
});
test('real-life pause never asserts worship completion', () => {
  const state = pauseForRealLife({ coins: 2 });
  assert.equal(state.paused, true);
  assert.equal(state.worshipCompleted, undefined);
});
test('offline actions require explicit consent and do not track completion', () => {
  assert.equal(nextOfflineAction({ id: 'starter-pantry-001' }), null);
  const action = nextOfflineAction({ id: 'starter-pantry-001' }, true);
  assert.match(action.description, /No verification/);
  assert.equal(action.completed, undefined);
});
test('real human calls are blocked without vetting, consent and adult eligibility', () => {
  const provider = { verified: true, safeguardingApproved: true, recordingEnabled: false, url: 'https://example.org/call', privacyPolicyUrl: 'https://example.org/privacy' };
  assert.equal(canRequestMentorCall({ provider, consent: false, isMinor: false }), false);
  assert.equal(canRequestMentorCall({ provider, consent: true, isMinor: true }), false);
  assert.equal(canRequestMentorCall({ provider: { ...provider, recordingEnabled: true }, consent: true, isMinor: false }), false);
  assert.equal(canRequestMentorCall({ provider, consent: true, isMinor: false }), true);
});
test('unreviewed religious instruction cannot publish', () => {
  assert.ok(validateLearningUnit({ id:'wudu',version:1,objectives:['learn'],normativeReligious:true,reviewStatus:'draft',publish:true }).length);
  assert.deepEqual(validateLearningUnit({ id:'water',version:1,objectives:['balance'],normativeReligious:false,reviewStatus:'draft',publish:false }),[]);
});
test('infrastructure resource balance conserves supply', () => {
  assert.deepEqual(balanceInfrastructure({supply:100,demand:95,losses:10,budget:20,cost:25}),{delivered:90,deficit:5,surplus:0,affordable:false,remainingBudget:20});
  assert.throws(()=>balanceInfrastructure({supply:1,demand:1,losses:2,budget:0,cost:0}));
});
