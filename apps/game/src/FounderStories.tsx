import React, { useEffect, useState } from 'react';
import { STORIES, INITIAL_METRICS, applyDecision, normalizeProgress } from './founderStories.mjs';

const KEY = 'dunya-founder-stories-v1';
const btn: React.CSSProperties = { color:'#fff', background:'#28505a', border:'1px solid #9eb7b8', padding:'9px 12px', borderRadius:7, cursor:'pointer', textAlign:'left' };
type Progress = { version: 1; decisions: Record<string,string>; metrics: Record<string,number> };
function load(): Progress {
  try { return normalizeProgress(JSON.parse(localStorage.getItem(KEY) || 'null')) as Progress; }
  catch { return normalizeProgress(null) as Progress; }
}
export function FounderStories({ onClose }: { onClose: () => void }) {
  const [progress, setProgress] = useState<Progress>(() => normalizeProgress(null) as Progress);
  const [active, setActive] = useState(STORIES[0].id);
  const [notice, setNotice] = useState('');
  useEffect(() => setProgress(load()), []);
  const story = STORIES.find(s => s.id === active)!;
  const selected = story.choices.find(c => c.id === progress.decisions[story.id]);
  function choose(choiceId: string) {
    try {
      const next = applyDecision(progress, story.id, choiceId) as Progress;
      localStorage.setItem(KEY, JSON.stringify(next));
      setProgress(next);
      setNotice('Your fictional decision was saved locally.');
    } catch { setNotice('Storage unavailable. No decision was saved.'); }
  }
  return <section aria-label="Founder story missions" role="dialog" aria-modal="true"
    style={{position:'absolute',inset:0,zIndex:15,background:'rgba(10,25,32,.98)',padding:18,overflowY:'auto',color:'#fff'}}>
    <div style={{maxWidth:760,margin:'0 auto',display:'grid',gap:14}}>
      <header style={{display:'flex',justifyContent:'space-between',gap:10,alignItems:'center'}}>
        <div><strong style={{fontSize:22}}>Founder dilemmas</strong><p style={{fontSize:12}}>Fictional learning missions · no religious verdicts or real transactions</p></div>
        <button style={btn} onClick={onClose}>Return to Bayhaven</button>
      </header>
      <nav aria-label="Choose a story" style={{display:'flex',flexWrap:'wrap',gap:8}}>
        {STORIES.map(s => <button key={s.id} style={{...btn,background:active===s.id?'#527b7a':'#28505a'}}
          onClick={()=>{setActive(s.id);setNotice('');}} aria-pressed={active===s.id}>{s.industry}</button>)}
      </nav>
      <article style={{border:'1px solid #66878a',borderRadius:10,padding:18,display:'grid',gap:10}}>
        <h2 style={{margin:0}}>{story.title}</h2>
        <p>{story.premise}</p>
        <p style={{fontSize:13}}>People involved: {story.characters.join(' · ')}</p>
        <strong>What will you do?</strong>
        {story.choices.map(choice => <button key={choice.id} style={btn} disabled={!!selected}
          onClick={()=>choose(choice.id)}>{choice.label}</button>)}
        {selected && <section aria-live="polite" style={{background:'#25404a',padding:12,borderRadius:8}}>
          <strong>Your decision: {selected.label}</strong>
          <p>{selected.result}</p>
          <p><strong>Repair path:</strong> {story.repair}</p>
          <p><strong>Optional real-world action:</strong> {story.offline}</p>
        </section>}
      </article>
      <section aria-label="Fictional institution outcomes" style={{display:'flex',flexWrap:'wrap',gap:12}}>
        {Object.entries(progress.metrics).map(([key,value])=><span key={key}>{key}: <strong>{value}/10</strong></span>)}
      </section>
      <p style={{fontSize:12,opacity:.8}}>Metrics represent fictional institutional outcomes only. No faith, health, victim or real-world action scores. {Object.keys(progress.decisions).length} of {STORIES.length} stories explored.</p>
      {notice && <p role="status">{notice}</p>}
    </div>
  </section>;
}
