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
