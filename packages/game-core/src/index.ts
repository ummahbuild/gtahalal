export type Persona = 'Ahmed' | 'Fatimah';
export type Vec2 = { x: number; z: number };
export type QuestStatus = 'available' | 'active' | 'complete';
export type GameState = {
  version: 1;
  persona: Persona;
  position: Vec2;
  coins: number;
  inventory: Record<string, number>;
  quest: QuestStatus;
  npcSpoken: string[];
  timeMinutes: number;
};
export const INITIAL_STATE: GameState = {
  version: 1, persona: 'Ahmed', position: { x: 0, z: 0 },
  coins: 12, inventory: {}, quest: 'available', npcSpoken: [], timeMinutes: 9 * 60,
};
export const BOUNDS = { minX: -21, maxX: 21, minZ: -7, maxZ: 7 };
// Fictional starter block planters; collision is a basic 2D scaffold, not physics/navmesh.
export const OBSTACLES = [
  { id: 'planter-west', x: -3, z: 2.5, halfWidth: 1.1, halfDepth: 0.75 },
  { id: 'planter-east', x: 3, z: -2.5, halfWidth: 1.1, halfDepth: 0.75 },
] as const;
export function isWalkable(x: number, z: number): boolean {
  if (!Number.isFinite(x) || !Number.isFinite(z)) return false;
  if (x < BOUNDS.minX || x > BOUNDS.maxX || z < BOUNDS.minZ || z > BOUNDS.maxZ) return false;
  return !OBSTACLES.some(o => Math.abs(x - o.x) < o.halfWidth + 0.25 && Math.abs(z - o.z) < o.halfDepth + 0.25);
}
export const LANDMARKS = [
  { id: 'harbor-plaza', name: 'Harbor Plaza', x: -7, z: 1, kind: 'public' },
  { id: 'community-pantry', name: 'Community Pantry', x: 0, z: -4, kind: 'service' },
  { id: 'bicycle-workshop', name: 'Bicycle Workshop', x: 6, z: 1, kind: 'shop' },
] as const;
export const NPCS = [
  { id: 'sara', name: 'Sara', x: -7, z: 1, text: 'Welcome to Bayhaven. I'm Sara. The neighborhood pantry could use help. Would you like to hear what needs doing?' },
  { id: 'bilal', name: 'Bilal', x: 6, z: 1, text: 'I'm Bilal. The curb near the pantry gets blocked by deliveries. We should find a safer route.' },
  { id: 'amina', name: 'Amina', x: 0, z: -4, text: 'I'm Amina. Thanks for coming. We need a clear count and a safe handoff before distribution.' },
  { id: 'maya', name: 'Maya', x: -13, z: -1, text: 'A short clip about the pantry is circulating. I want to verify the context.' },
  { id: 'omar', name: 'Omar', x: 13, z: -1, text: 'My shop has been mentioned in a rumor. Please hear what happened before sharing it.' },
] as const;
export function freshState(persona: Persona = 'Ahmed'): GameState {
  return { ...INITIAL_STATE, persona, position: { x: 0, z: 0 }, inventory: {}, npcSpoken: [] };
}
export function move(state: GameState, dx: number, dz: number, deltaSeconds: number): GameState {
  if (![dx, dz, deltaSeconds].every(Number.isFinite) || deltaSeconds <= 0) return state;
  const length = Math.hypot(dx, dz);
  if (!length) return state;
  const step = Math.min(deltaSeconds, 0.1) * 3.5 / Math.max(length, 1);
  const nextX = Math.max(BOUNDS.minX, Math.min(BOUNDS.maxX, state.position.x + dx * step));
  const nextZ = Math.max(BOUNDS.minZ, Math.min(BOUNDS.maxZ, state.position.z + dz * step));
  // Axis-separated resolution lets the player slide around solid obstacles.
  const x = isWalkable(nextX, state.position.z) ? nextX : state.position.x;
  const z = isWalkable(x, nextZ) ? nextZ : state.position.z;
  return { ...state, position: { x, z } };
}
export function nearbyNpc(state: GameState, radius = 2.2) {
  return NPCS.find(n => Math.hypot(n.x - state.position.x, n.z - state.position.z) <= radius);
}
export function talk(state: GameState, npcId: string): GameState {
  const npc = NPCS.find(n => n.id === npcId);
  if (!npc || Math.hypot(npc.x - state.position.x, npc.z - state.position.z) > 2.2 || state.npcSpoken.includes(npcId)) return state;
  return { ...state, npcSpoken: [...state.npcSpoken, npcId],
    quest: npcId === 'sara' && state.quest === 'available' ? 'active' : state.quest };
}
export function deliverPantry(state: GameState): GameState {
  const pantry = NPCS.find(n => n.id === 'amina')!;
  if (state.quest !== 'active' || Math.hypot(state.position.x - pantry.x, state.position.z - pantry.z) > 2.2) return state;
  return { ...state, quest: 'complete', coins: state.coins + 5, inventory: { ...state.inventory, communityThanks: 1 } };
}
/** Fictional evidence is local quest data, never real beneficiary information. */
export type EvidenceAction = 'hear_omar' | 'verify_clip' | 'share_rumor' | 'correct_rumor';
export function recordEvidence(state: GameState, action: EvidenceAction): GameState {
  if (state.quest !== 'complete') return state;
  const key = 'evidence_' + action;
  if (state.inventory[key]) return state;
  if (action === 'verify_clip' && !state.inventory.evidence_hear_omar) return state;
  if (action === 'correct_rumor' && !state.inventory.evidence_share_rumor) return state;
  return { ...state, inventory: { ...state.inventory, [key]: 1 } };
}
export function evidenceStatus(state: GameState): string {
  if (state.quest !== 'complete') return 'Help Amina with the pantry handoff first.';
  if (state.inventory.evidence_correct_rumor) return 'You corrected the earlier unverified post. Keep listening to neighbors.';
  if (state.inventory.evidence_verify_clip) return 'The clip lacks context. Your evidence journal records the source as disputed.';
  if (state.inventory.evidence_share_rumor) return 'An unverified clip was shared. Ask Omar and Maya about a correction.';
  if (state.inventory.evidence_hear_omar) return 'You heard Omar. Speak with Maya to verify the clip before publishing.';
  return 'Speak with Omar and Maya about the cropped video. Avoid publishing private details.';
}
/** Original fictional accessibility and fair procurement choices. */
export type RouteOption = 'loading_window' | 'bike_delivery' | 'shared_delivery';
export type ProcurementOption = 'local_supplier' | 'competitive_bids' | 'volunteer_stock';
export const ROUTE_OPTIONS = [
  { id: 'loading_window', title: 'Request a designated loading window', access: 2, reliability: 2, cost: 2 },
  { id: 'bike_delivery', title: 'Use small bicycle deliveries', access: 2, reliability: 1, cost: 1 },
  { id: 'shared_delivery', title: 'Coordinate a shared accessible delivery slot', access: 3, reliability: 2, cost: 2 },
] as const;
export const PROCUREMENT_OPTIONS = [
  { id: 'local_supplier', title: 'Agree transparent terms with Omar', access: 2, reliability: 2, cost: 2 },
  { id: 'competitive_bids', title: 'Compare two fictional supplier offers', access: 1, reliability: 2, cost: 1 },
  { id: 'volunteer_stock', title: 'Organize donated stock with safe handling', access: 1, reliability: 1, cost: 0 },
] as const;
export function planPantryRoute(state: GameState, option: RouteOption): GameState {
  if (!ROUTE_OPTIONS.some(o => o.id === option)) return state;
  if (state.quest !== 'complete' || !state.npcSpoken.includes('bilal')) return state;
  if (state.inventory.route_planned) return state;
  return { ...state, inventory: { ...state.inventory, route_planned: 1, ['route_' + option]: 1 } };
}
export function planPantryProcurement(state: GameState, option: ProcurementOption): GameState {
  if (!PROCUREMENT_OPTIONS.some(o => o.id === option)) return state;
  if (state.quest !== 'complete' || !state.inventory.route_planned || !state.inventory.evidence_hear_omar) return state;
  if (state.inventory.procurement_planned) return state;
  return { ...state, inventory: { ...state.inventory, procurement_planned: 1, ['procurement_' + option]: 1 } };
}
export function pantryPlanStatus(state: GameState): string {
  if (state.quest !== 'complete') return 'Complete the pantry handoff with Amina first.';
  if (!state.npcSpoken.includes('bilal')) return 'Speak with Bilal about the blocked curb ramp.';
  if (!state.inventory.route_planned) return 'Choose a safe fictional loading route.';
  if (!state.inventory.evidence_hear_omar) return 'Speak with Omar about supplier needs and the cropped video.';
  if (!state.inventory.procurement_planned) return 'Choose a transparent fictional supply arrangement.';
  return 'Route and procurement choices recorded. Review their trade-offs with the neighborhood.';
}
/** Episode 4: original fictional community-institution continuity choices. */
export type LegacyOption = 'volunteer_rota' | 'supplier_partnership' | 'community_board';
export const LEGACY_OPTIONS = [
  { id: 'volunteer_rota', title: 'Train a volunteer rota and maintain handoff notes', upkeep: 2, resilience: 3, inclusion: 2, outcome: 'A rota helps distribute responsibilities, but training and replacement volunteers remain essential.' },
  { id: 'supplier_partnership', title: 'Create a transparent local supply partnership', upkeep: 3, resilience: 3, inclusion: 2, outcome: 'The pantry gains predictable deliveries while needing independent pricing review and contingency suppliers.' },
  { id: 'community_board', title: 'Create a privacy-preserving community update board', upkeep: 1, resilience: 2, inclusion: 3, outcome: 'Neighbors can see service changes without exposing who receives help; moderation and upkeep still matter.' },
] as const;
export function chooseLegacy(state: GameState, option: LegacyOption): GameState {
  if (!LEGACY_OPTIONS.some(item => item.id === option)) return state;
  if (state.quest !== 'complete' || !state.inventory.route_planned || !state.inventory.procurement_planned) return state;
  if (state.inventory.legacy_chosen) return state;
  return { ...state, inventory: { ...state.inventory, legacy_chosen: 1, ['legacy_' + option]: 1 } };
}
export function legacyStatus(state: GameState): string {
  if (state.quest !== 'complete') return 'Complete the pantry handoff first.';
  if (!state.inventory.route_planned || !state.inventory.procurement_planned) return 'Complete the route and supplier planning first.';
  if (!state.inventory.legacy_chosen) return 'Choose how the pantry will remain useful after the first volunteers leave.';
  const selected = LEGACY_OPTIONS.find(item => state.inventory['legacy_' + item.id]);
  return selected ? selected.outcome : 'A continuity plan is recorded.';
}
export function tick(state: GameState, elapsedSeconds: number): GameState {
  if (!Number.isFinite(elapsedSeconds) || elapsedSeconds <= 0) return state;
  return { ...state, timeMinutes: (state.timeMinutes + Math.min(elapsedSeconds, 1) * 0.25) % 1440 };
}
export function migrateSave(raw: unknown): GameState {
  if (!raw || typeof raw !== 'object') return freshState();
  const v = raw as Partial<GameState>;
  const persona = v.persona === 'Fatimah' ? 'Fatimah' : 'Ahmed';
  const initial = freshState(persona);
  if (v.version !== 1) return initial;
  const p = v.position;
  const x = typeof p?.x === 'number' && Number.isFinite(p.x) ? p.x : 0;
  const z = typeof p?.z === 'number' && Number.isFinite(p.z) ? p.z : 0;
  const quest = ['available','active','complete'].includes(String(v.quest)) ? v.quest as QuestStatus : 'available';
  const coins = typeof v.coins === 'number' && Number.isFinite(v.coins) ? Math.max(0, v.coins) : 12;
  return { ...initial, position: { x: Math.max(BOUNDS.minX, Math.min(BOUNDS.maxX, x)), z: Math.max(BOUNDS.minZ, Math.min(BOUNDS.maxZ, z)) },
    quest, coins, npcSpoken: Array.isArray(v.npcSpoken) ? v.npcSpoken.filter((id): id is string => typeof id === 'string' && NPCS.some(n => n.id === id)) : [],
    inventory: v.inventory && typeof v.inventory === 'object' && !Array.isArray(v.inventory) ? Object.fromEntries(Object.entries(v.inventory).filter(([k,val]) => k.length < 80 && typeof val === 'number' && Number.isFinite(val) && val >= 0)) : {},
    timeMinutes: typeof v.timeMinutes === 'number' && Number.isFinite(v.timeMinutes) ? ((v.timeMinutes % 1440) + 1440) % 1440 : 540 };
}
export function serializeSave(state: GameState): string { return JSON.stringify(state); }
