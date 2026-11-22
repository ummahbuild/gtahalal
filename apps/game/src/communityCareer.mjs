/**
 * Fictional Miami-inspired city mission: community bulletin and first khutbah planning.
 * This is logistical coordination only, NOT a sermon script, fatwa, Quran translation,
 * prayer simulator or verification of worship. All religious content needs human review.
 */
export const CAREERS = Object.freeze([
  {id:'community-organizer',title:'Community organizer',verb:'Coordinate volunteers and consent-first invitations',next:'Plan a community service event'},
  {id:'journalist',title:'Local journalist',verb:'Check claims and publish corrections',next:'Investigate a misleading headline'},
  {id:'developer',title:'Software builder',verb:'Create accessible community tools',next:'Prototype a multilingual notice board'},
  {id:'architect',title:'Accessibility designer',verb:'Design safer routes and community spaces',next:'Audit a fictional entrance'},
  {id:'teacher',title:'Educator',verb:'Organize a source-reviewed learning workshop',next:'Design a lesson with expert review'},
  {id:'health-worker',title:'Healthcare coordinator',verb:'Help people reach qualified care',next:'Plan an accessible clinic referral'},
  {id:'grocer',title:'Food entrepreneur',verb:'Plan fair supply chains',next:'Compare transparent supplier contracts'},
  {id:'community-reporter',title:'Community reporter',verb:'Separate verified announcements from rumors',next:'Publish a consent-respecting bulletin'},
]);
export const BULLETIN_STEPS = Object.freeze([
  {id:'venue',question:'A community gathering needs a venue. What should you check first?',choices:[
    {id:'access',text:'Confirm accessibility, capacity and permission',correct:true,reply:'The venue team can plan access and safety before sending invitations.'},
    {id:'poster',text:'Print invitations before confirming a venue',correct:false,reply:'The invitation could mislead attendees. Check venue permission first.'},
  ]},
  {id:'speaker',question:'Someone offers an unreviewed khutbah script. What should the organizers do?',choices:[
    {id:'review',text:'Ask a qualified imam or scholar to review and deliver it',correct:true,reply:'The religious content remains with qualified human reviewers and speakers.'},
    {id:'publish',text:'Publish it as authoritative immediately',correct:false,reply:'An unreviewed sermon should not be published as religious instruction.'},
  ]},
  {id:'news',question:'A viral post makes an alarming claim about the neighborhood. How should the bulletin respond?',choices:[
    {id:'verify',text:'Verify primary evidence and explain uncertainty',correct:true,reply:'The bulletin can report confirmed logistics without spreading an unverified allegation.'},
    {id:'repeat',text:'Repeat the claim for maximum reach',correct:false,reply:'Reach does not make an allegation true. Verify before repeating.'},
  ]},
  {id:'delivery',question:'How should the community bulletin reach neighbors?',choices:[
    {id:'consent',text:'Offer accessible formats and opt-in delivery',correct:true,reply:'Residents can choose how they receive information without being tracked.'},
    {id:'track',text:'Require everyone to disclose religious attendance',correct:false,reply:'Participation and worship should not be tracked or scored.'},
  ]},
]);
export function normalizeCommunity(raw) {
  const answers={};
  if(raw && typeof raw==='object' && raw.version===1 && raw.answers && typeof raw.answers==='object') {
    for(const step of BULLETIN_STEPS) if(step.choices.some(c=>c.id===raw.answers[step.id])) answers[step.id]=raw.answers[step.id];
  }
  const career=CAREERS.some(c=>c.id===raw?.career)?raw.career:null;
  return {version:1,career,answers};
}
export function chooseCareer(raw,id) {
  if(!CAREERS.some(c=>c.id===id))throw new RangeError('Unknown career');
  const state=normalizeCommunity(raw);
  return {...state,career:id};
}
export function answerBulletin(raw,stepId,choiceId) {
  const state=normalizeCommunity(raw);
  const step=BULLETIN_STEPS.find(s=>s.id===stepId);
  if(!step || !step.choices.some(c=>c.id===choiceId))throw new RangeError('Unknown bulletin choice');
  const next=BULLETIN_STEPS.find(s=>!state.answers[s.id]);
  if(!next || next.id!==stepId)return state; // strictly ordered and idempotent
  return {...state,answers:{...state.answers,[stepId]:choiceId}};
}
export function bulletinResult(raw) {
  const state=normalizeCommunity(raw);
  const completed=BULLETIN_STEPS.filter(s=>state.answers[s.id]).length;
  const reviewed=BULLETIN_STEPS.filter(s=>s.choices.find(c=>c.id===state.answers[s.id])?.correct).length;
  return {completed,reviewed,finished:completed===BULLETIN_STEPS.length};
}
