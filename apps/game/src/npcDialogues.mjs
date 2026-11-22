/** Original fictional Bayhaven dialogue; no religious rulings or real-world allegations. */
export const DIALOGUES = Object.freeze({
  sara: {
    opening: "I'm Sara. The pantry needs help, but I don't want to promise more than we can deliver. What would you like to know?",
    choices: [
      { id: 'volunteer', text: "I can help. Where should I start?", reply: "Please speak with Amina at the pantry. She has the inventory, and we need a safe handoff.", effect: 'start_pantry' },
      { id: 'ask', text: "What do neighbors actually need?", reply: "Reliable supplies and an entrance everyone can use. Ask Amina about stock and Bilal about the curb.", effect: 'start_pantry' },
      { id: 'later', text: "I need to explore first.", reply: "Of course. Come back whenever you are ready.", effect: 'none' },
    ],
  },
  amina: {
    opening: "I'm Amina. The supplies are here, but an accurate count matters more than a quick photo. How should we proceed?",
    choices: [
      { id: 'count', text: "Let's confirm the handoff and inventory.", reply: "Thank you. I'll record the handoff and we can correct any count before distribution.", effect: 'deliver_pantry' },
      { id: 'access', text: "Is the entrance accessible to everyone?", reply: "Not consistently. Bilal has noticed deliveries blocking the curb. We need a better route.", effect: 'accessibility' },
      { id: 'later', text: "I will return when we're ready.", reply: "No rush. We should not record supplies as delivered before they arrive.", effect: 'none' },
    ],
  },
  bilal: {
    opening: "I'm Bilal. A van keeps blocking the curb ramp near the pantry. The driver needs somewhere to unload too.",
    choices: [
      { id: 'route', text: "Can we find a safer loading route?", reply: "Yes. Let's ask the city about a designated space and include people who use the ramp.", effect: 'accessibility' },
      { id: 'listen', text: "What does the driver need?", reply: "A predictable loading window. If we ignore that, the problem will return next week.", effect: 'accessibility' },
      { id: 'later', text: "I'll think about it.", reply: "Thanks for listening. We can revisit the route later.", effect: 'none' },
    ],
  },
});

export function dialogueFor(npcId) {
  return Object.prototype.hasOwnProperty.call(DIALOGUES,npcId) ? DIALOGUES[npcId] : null;
}
export function chooseDialogue(npcId, choiceId) {
  const scene = dialogueFor(npcId);
  if (!scene) throw new RangeError('Unknown NPC');
  const choice = scene.choices.find(c=>c.id===choiceId);
  if (!choice) throw new RangeError('Unknown dialogue choice');
  return choice;
}
