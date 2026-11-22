export type DialogueChoice = { id: string; text: string; reply: string; effect: 'start_pantry' | 'deliver_pantry' | 'accessibility' | 'none' };
export type DialogueScene = { opening: string; choices: DialogueChoice[] };
export const DIALOGUES: Readonly<Record<string, DialogueScene>>;
export function dialogueFor(npcId: string): DialogueScene | null;
export function chooseDialogue(npcId: string, choiceId: string): DialogueChoice;
