export type CommunityState={version:1;career:string|null;answers:Record<string,string>};
export type BulletinChoice={id:string;text:string;correct:boolean;reply:string};
export type BulletinStep={id:string;question:string;choices:BulletinChoice[]};
export const CAREERS:readonly {id:string;title:string;verb:string;next:string}[];
export const BULLETIN_STEPS:readonly BulletinStep[];
export function normalizeCommunity(raw:unknown):CommunityState;
export function chooseCareer(raw:unknown,id:string):CommunityState;
export function answerBulletin(raw:unknown,stepId:string,choiceId:string):CommunityState;
export function bulletinResult(raw:unknown):{completed:number;reviewed:number;finished:boolean};
