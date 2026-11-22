export type Metrics = { trust: number; access: number; runway: number };
export type Choice = { id: string; label: string; result: string; effects: Metrics };
export type Story = { id: string; title: string; industry: string; premise: string; characters: string[]; choices: Choice[]; repair: string; offline: string };
export type Progress = { version: 1; decisions: Record<string, string>; metrics: Metrics };
export const STORIES: readonly Story[];
export const INITIAL_METRICS: Readonly<Metrics>;
export function applyDecision(progress: unknown, storyId: string, choiceId: string): Progress;
export function normalizeProgress(raw: unknown): Progress;
