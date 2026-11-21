export type ReviewStatus = 'draft' | 'source_research' | 'scholarly_review' | 'approved' | 'released';
export type Mission = {
  mission_id: string;
  campaign_id: string;
  chapter: string;
  location: string;
  playable_character: ('Ahmed' | 'Fatimah')[];
  characters: string[];
  prerequisites: string[];
  dialogue: { speaker: string; text: string }[];
  objectives: { id: string; text: string }[];
  triggers: string[];
  choices: { id: string; text: string; consequence: string }[];
  consequences: string[];
  world_state_changes: string[];
  required_assets: string[];
  accessibility: string[];
  source_claim_ids: string[];
  review_status: ReviewStatus;
  tests: string[];
  localization_keys: string[];
};
export function validateMission(input: unknown): string[] {
  if (!input || typeof input !== 'object') return ['mission must be an object'];
  const m = input as Record<string, unknown>;
  const errors: string[] = [];
  const strings = ['mission_id','campaign_id','chapter','location','review_status'];
  for (const key of strings) if (typeof m[key] !== 'string' || !(m[key] as string).trim()) errors.push(key + ' must be a nonempty string');
  const arrays = ['playable_character','characters','prerequisites','dialogue','objectives','triggers','choices','consequences','world_state_changes','required_assets','accessibility','source_claim_ids','tests','localization_keys'];
  for (const key of arrays) if (!Array.isArray(m[key])) errors.push(key + ' must be an array');
  if (!['draft','source_research','scholarly_review','approved','released'].includes(String(m.review_status))) errors.push('invalid review status');
  if (Array.isArray(m.playable_character) && (!m.playable_character.length || m.playable_character.some(x => x !== 'Ahmed' && x !== 'Fatimah'))) errors.push('invalid playable characters');
  if (Array.isArray(m.objectives) && !m.objectives.length) errors.push('at least one objective required');
  if (Array.isArray(m.choices) && !m.choices.length) errors.push('at least one choice required');
  if (Array.isArray(m.source_claim_ids) && m.source_claim_ids.length && m.review_status === 'released') errors.push('release requires external signed source-review manifest; automatic publication forbidden');
  return errors;
}
export const PANTRY_MISSION: Mission = {
  mission_id:'starter-pantry-001',campaign_id:'community',chapter:'First Neighbors',location:'starter-block',
  playable_character:['Ahmed','Fatimah'],characters:['Sara','Amina'],prerequisites:[],
  dialogue:[{speaker:'Sara',text:'Would you help the neighborhood pantry?'},{speaker:'Amina',text:'Thank you for helping our neighbors.'}],
  objectives:[{id:'talk',text:'Speak with Sara'},{id:'deliver',text:'Visit Amina at the pantry'}],
  triggers:['sara_conversation','amina_interaction'],choices:[{id:'help',text:'I can help',consequence:'Pantry support'}],
  consequences:['Local community trust improves'],world_state_changes:['pantry_assisted'],
  required_assets:[],accessibility:['keyboard interaction','touch interaction','captions'],
  source_claim_ids:[],review_status:'draft',tests:['quest starts once','quest reward idempotent'],
  localization_keys:['quest.pantry.title','quest.pantry.objective'],
};
