import {useDialogFocus} from './useDialogFocus';
import React, {useEffect,useState} from 'react';
import {CAREERS,BULLETIN_STEPS,normalizeCommunity,chooseCareer,answerBulletin,bulletinResult} from './communityCareer.mjs';
const KEY='dunya-miami-community-v1';
const button:React.CSSProperties={padding:'10px 12px',background:'#244854',color:'white',border:'1px solid #9eb7b8',borderRadius:8,cursor:'pointer',textAlign:'left'};
type State={version:1;career:string|null;answers:Record<string,string>};
export function CommunityCareer({onClose}:{onClose:()=>void}) {
  const dialogRef=useDialogFocus(onClose);
  const [state,setState]=useState<State>(()=>normalizeCommunity(null));
  const [notice,setNotice]=useState('');
  useEffect(()=>{try{setState(normalizeCommunity(JSON.parse(localStorage.getItem(KEY)||'null')))}catch{setState(normalizeCommunity(null))}},[]);
  const result=bulletinResult(state);
  const next=BULLETIN_STEPS.find(s=>!state.answers[s.id]);
  const career=CAREERS.find(c=>c.id===state.career);
  function commit(nextState:State) {
    try {localStorage.setItem(KEY,JSON.stringify(nextState));setState(nextState);setNotice('Saved locally on this device.')}
    catch {setNotice('Local storage unavailable; no choice was saved.')}
  }
  return <section ref={dialogRef} tabIndex={-1} role="dialog" aria-modal="true" aria-label="Miami community and careers" style={{position:'absolute',inset:0,zIndex:16,overflowY:'auto',background:'rgba(9,27,34,.98)',color:'white',padding:20}}>
    <div style={{maxWidth:720,margin:'0 auto',display:'grid',gap:12}}>
      <header><h2>Miami-inspired community stories</h2><p>Fictional city prototype · choose a career and help prepare an accessible community bulletin. No religious instruction is delivered or worship tracked.</p></header>
      <h3>Choose a career path</h3>
      <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(220px,1fr))',gap:8}}>
        {CAREERS.map(c=><button key={c.id} style={{...button,background:state.career===c.id?'#426d69':'#244854'}} aria-pressed={state.career===c.id} onClick={()=>commit(chooseCareer(state,c.id))}><strong>{c.title}</strong><p>{c.verb}</p></button>)}
      </div>
      {career&&<p><strong>Next career quest:</strong> {career.next}. This is a proposed follow-up, not an implemented career simulation.</p>}
      <h3>Minigame: Prepare the first community khutbah announcement</h3>
      <p>Coordinate the venue, qualified speaker review, trustworthy neighborhood news and accessible opt-in bulletin delivery. The game does not write or score a khutbah.</p>
      {next?<article style={{border:'1px solid #78979a',borderRadius:9,padding:14,display:'grid',gap:10}}>
        <strong>Step {result.completed+1} of {BULLETIN_STEPS.length}: {next.question}</strong>
        {next.choices.map(c=><button key={c.id} style={button} onClick={()=>commit(answerBulletin(state,next.id,c.id))}>{c.text}</button>)}
      </article>:<p role="status">Bulletin planning complete. You can revisit the choices in your journal or continue exploring Bayhaven.</p>}
      {result.completed>0&&<p aria-live="polite">{BULLETIN_STEPS.filter(s=>state.answers[s.id]).map(s=><span key={s.id} style={{display:'block',marginBottom:6}}>{s.choices.find(c=>c.id===state.answers[s.id])?.reply}</span>)}</p>}
      <p>Steps completed: {result.completed}/{BULLETIN_STEPS.length}. Reviewed planning choices: {result.reviewed}. These are logistics-learning checks, not faith or religious-performance scores.</p>
      {notice&&<p role="status">{notice}</p>}
      <button style={button} onClick={onClose}>Return to Bayhaven</button>
    </div>
  </section>;
}
