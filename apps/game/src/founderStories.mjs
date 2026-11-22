/**
 * Original, fictional, nonreligious founder dilemmas.
 * No claim that a real company committed any depicted conduct.
 * No live finance, health, religious, or humanitarian instructions.
 */
export const STORIES = Object.freeze([
  {
    id: 'founder-finance-01',
    title: 'The Customer Who Gets Better',
    industry: 'Finance',
    premise: 'A fictional financing app earns most from people who return every month. The board celebrates retention; a community advisor asks whether customers are becoming more resilient.',
    characters: ['Mira — compliance lead', 'Nadia — shop owner', 'Jonah — consumer advocate'],
    choices: [
      { id: 'redesign', label: 'Pilot hardship support and clear cost disclosures', result: 'The board accepts a smaller revenue forecast in exchange for a transparent pilot.', effects: { trust: 2, access: 1, runway: -2 } },
      { id: 'research', label: 'Interview customers before changing the product', result: 'The team gains evidence but delays the intervention. Customers can opt out of interviews.', effects: { trust: 1, access: 0, runway: -1 } },
      { id: 'growth', label: 'Keep the growth plan, publish its risks and schedule a review', result: 'Revenue holds briefly, but a public audit finds unresolved dependency risks.', effects: { trust: -2, access: 1, runway: 2 } },
    ],
    repair: 'Offer transparent redress and revise the product with independent review. No financing model is certified as Sharia-compliant.',
    offline: 'Optional: compare the full terms of a real financial product with help from a qualified advisor. No information is collected.',
  },
  {
    id: 'founder-attention-01',
    title: 'The Retention Board',
    industry: 'Social platforms',
    premise: 'A fictional creator platform pays its artists well, but a ranking change makes it harder for viewers to stop scrolling.',
    characters: ['Lena — creator director', 'Sara — community organizer', 'Bilal — developer'],
    choices: [
      { id: 'chronological', label: 'Offer a chronological feed and portable follows', result: 'Viewers gain control, but creator discovery requires a new plan.', effects: { trust: 2, access: 1, runway: -2 } },
      { id: 'creator-council', label: 'Convene a creator and user design council', result: 'The council agrees to test quieter defaults before scaling.', effects: { trust: 1, access: 1, runway: -1 } },
      { id: 'disclose', label: 'Keep ranking while publishing clear controls and risks', result: 'Some users appreciate the controls; others still struggle to leave.', effects: { trust: -1, access: 2, runway: 1 } },
    ],
    repair: 'Reverse harmful defaults, notify affected users and invite an independent design review.',
    offline: 'Optional: review notification settings on a device and choose which ones genuinely help.',
  },
  {
    id: 'founder-humanitarian-01',
    title: 'The Empty Pledge',
    industry: 'Humanitarian infrastructure',
    premise: 'A fictional reconstruction dashboard labels promised funding as delivered. A local water clinic still needs a working pump.',
    characters: ['Lina — clinic manager', 'Salma — fund manager', 'Hawa — accessibility advocate'],
    choices: [
      { id: 'audit', label: 'Reconcile pledge, transfer, receipt and operating records', result: 'The local team finds a reporting mismatch and requests a public correction.', effects: { trust: 2, access: 0, runway: -1 } },
      { id: 'water', label: 'Prioritize a locally led service-continuity plan', result: 'Water access improves in the fictional model while independent accounting continues.', effects: { trust: 1, access: 2, runway: -2 } },
      { id: 'meeting', label: 'Invite officials and residents to a transparent hearing', result: 'A public process begins, but residents insist that repairs cannot wait.', effects: { trust: 1, access: 0, runway: 0 } },
    ],
    repair: 'Correct unsupported accusations and publish the funding stages separately. Missing records do not prove theft.',
    offline: 'Optional: read a verified humanitarian organization’s public annual report. No donations are requested.',
  },
]);

export const INITIAL_METRICS = Object.freeze({ trust: 0, access: 0, runway: 5 });

export function applyDecision(progress, storyId, choiceId) {
  const story = STORIES.find(item => item.id === storyId);
  const choice = story?.choices.find(item => item.id === choiceId);
  if (!choice) throw new RangeError('Unknown story or decision');
  const previous = normalizeProgress(progress);
  if (previous.decisions[storyId]) return previous;
  const metrics = Object.fromEntries(Object.keys(INITIAL_METRICS).map(key => [
    key, Math.max(0, Math.min(10, previous.metrics[key] + choice.effects[key])),
  ]));
  return {
    version: 1,
    decisions: { ...previous.decisions, [storyId]: choiceId },
    metrics,
  };
}

export function normalizeProgress(raw) {
  const decisions = {};
  if (raw && typeof raw === 'object' && raw.version === 1 && raw.decisions && typeof raw.decisions === 'object') {
    for (const story of STORIES) {
      const choiceId = raw.decisions[story.id];
      if (story.choices.some(choice => choice.id === choiceId)) decisions[story.id] = choiceId;
    }
  }
  const metrics = { ...INITIAL_METRICS };
  if (raw && typeof raw === 'object' && raw.version === 1 && raw.metrics && typeof raw.metrics === 'object') {
    for (const key of Object.keys(metrics)) {
      const value = raw.metrics[key];
      if (Number.isFinite(value)) metrics[key] = Math.max(0, Math.min(10, value));
    }
  }
  return { version: 1, decisions, metrics };
}

export function resetDecision(progress, storyId) {
  if (!STORIES.some(story => story.id === storyId)) throw new RangeError('Unknown story');
  const previous = normalizeProgress(progress);
  const decisions = { ...previous.decisions };
  const chosen = decisions[storyId];
  if (!chosen) return previous;
  const story = STORIES.find(item => item.id === storyId);
  const choice = story.choices.find(item => item.id === chosen);
  delete decisions[storyId];
  const metrics = Object.fromEntries(Object.keys(INITIAL_METRICS).map(key => [
    key, Math.max(0, Math.min(10, previous.metrics[key] - choice.effects[key])),
  ]));
  return { version: 1, decisions, metrics };
}
