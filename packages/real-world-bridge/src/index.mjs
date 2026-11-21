/**
 * Dependency-free, privacy-first helpers for Dunya's offline-to-real-world bridge.
 * No religious rulings, location collection, analytics or remote calls.
 */
export const SESSION_CHOICES = Object.freeze([10, 20, 30, 45, null]);
export function sessionSettings(minutes = 20) {
  if (!SESSION_CHOICES.includes(minutes)) throw new RangeError('Unsupported session duration');
  return { minutes, startedAt: null, reminderShown: false };
}
export function sessionReminder(settings, elapsedMinutes) {
  if (!settings || settings.minutes === null || settings.reminderShown) return null;
  if (!Number.isFinite(elapsedMinutes) || elapsedMinutes < settings.minutes) return null;
  return { title: 'Time for a break?', options: ['Save and leave', 'Take a break', 'Continue for now'], dismissible: true };
}
export function pauseForRealLife(state) {
  if (!state || typeof state !== 'object') throw new TypeError('Invalid game state');
  return { ...state, paused: true, pauseReason: 'player_choice' };
}
export function nextOfflineAction(mission, consent = false) {
  if (!consent || !mission || typeof mission !== 'object') return null;
  const options = {
    'starter-pantry-001': { title: 'Help a neighbor in real life', description: 'If you wish, ask a trusted local organization how to volunteer. No verification is required.' },
    'bh-library-01': { title: 'Ask a qualified teacher', description: 'Bring a question about citations to a trusted, qualified educator. You can also just read privately.' },
    'bh-mosque-01': { title: 'Learn about accessible community spaces', description: 'With permission, observe a public accessibility feature or attend a community planning meeting.' },
  };
  return options[mission.id] ?? null;
}
export function validateMentorProvider(provider) {
  if (!provider || typeof provider !== 'object') return false;
  if (provider.verified !== true || provider.safeguardingApproved !== true) return false;
  if (provider.recordingEnabled === true) return false;
  if (!['https:'].includes(safeProtocol(provider.url))) return false;
  return typeof provider.privacyPolicyUrl === 'string' && safeProtocol(provider.privacyPolicyUrl) === 'https:';
}
function safeProtocol(url) {
  try { return new URL(url).protocol; } catch { return null; }
}
export function canRequestMentorCall({ provider, consent, isMinor }) {
  return consent === true && isMinor !== true && validateMentorProvider(provider);
}
export function validateLearningUnit(unit) {
  const errors = [];
  if (!unit || typeof unit !== 'object') return ['invalid learning unit'];
  if (typeof unit.id !== 'string' || !unit.id.trim()) errors.push('missing id');
  if (typeof unit.version !== 'number' || !Number.isInteger(unit.version) || unit.version < 1) errors.push('invalid version');
  if (!Array.isArray(unit.objectives) || !unit.objectives.length) errors.push('missing objectives');
  if (unit.normativeReligious === true && (unit.reviewStatus !== 'approved' || !Array.isArray(unit.sourceClaimIds) || !unit.sourceClaimIds.length || unit.licensedContent !== true || !unit.reviewedVersion || unit.reviewedVersion !== unit.version)) errors.push('religious unit not approved for release');
  if (unit.reviewStatus === 'draft' && unit.publish === true) errors.push('draft cannot publish');
  return errors;
}
export function balanceInfrastructure({ supply, demand, losses = 0, budget, cost }) {
  if (![supply, demand, losses, budget, cost].every(x => Number.isFinite(x) && x >= 0)) throw new RangeError('nonnegative finite inputs required');
  if (losses > supply) throw new RangeError('losses exceed supply');
  const delivered = supply - losses;
  return { delivered, deficit: Math.max(0, demand - delivered), surplus: Math.max(0, delivered - demand), affordable: budget >= cost, remainingBudget: budget >= cost ? budget - cost : budget };
}
