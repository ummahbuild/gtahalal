import React, { useEffect, useRef, useState } from 'react';

export type SessionLimit = 10 | 20 | 30 | 45 | null;
const LIMITS: SessionLimit[] = [10, 20, 30, 45, null];
const SETTINGS_KEY = 'dunya-session-limit-v1';
const button: React.CSSProperties = { background: '#203d47', color: '#fff', border: '1px solid #a6c0bf', borderRadius: 8, padding: '10px 12px', cursor: 'pointer' };

function readLimit(): SessionLimit {
  try {
    const raw = localStorage.getItem(SETTINGS_KEY);
    if (raw === null) return 20;
    const value: unknown = JSON.parse(raw);
    return LIMITS.some(limit => limit === value) ? value as SessionLimit : 20;
  } catch { return 20; }
}

export function SessionSafeguards({ onPause, onSave, onResume, onLeave }: {
  onPause: () => void; onSave: () => boolean; onResume: () => void; onLeave: () => void;
}) {
  const [limit, setLimit] = useState<SessionLimit>(20);
  const [elapsedSeconds, setElapsedSeconds] = useState(0);
  const [reminder, setReminder] = useState(false);
  const [realLifeBreak, setRealLifeBreak] = useState(false);
  const [message, setMessage] = useState('');
  const nextReminderAt = useRef(20 * 60);
  const lastTick = useRef<number | null>(null);

  useEffect(() => {
    const saved = readLimit();
    setLimit(saved);
    nextReminderAt.current = saved === null ? Infinity : saved * 60;
  }, []);
  useEffect(() => {
    // Count foreground time only; no network calls or analytics.
    const timer = window.setInterval(() => {
      const now = Date.now();
      if (document.visibilityState !== 'visible') { lastTick.current = null; return; }
      const previous = lastTick.current;
      lastTick.current = now;
      if (previous === null || reminder || realLifeBreak) return;
      setElapsedSeconds(seconds => seconds + Math.min(2, Math.max(0, (now - previous) / 1000)));
    }, 1000);
    return () => window.clearInterval(timer);
  }, [reminder, realLifeBreak]);
  useEffect(() => {
    if (limit !== null && elapsedSeconds >= nextReminderAt.current && !reminder && !realLifeBreak) {
      setReminder(true);
      onPause();
    }
  }, [elapsedSeconds, limit, reminder, realLifeBreak, onPause]);

  function changeLimit(next: SessionLimit) {
    setLimit(next);
    nextReminderAt.current = next === null ? Infinity : elapsedSeconds + next * 60;
    setReminder(false);
    try { localStorage.setItem(SETTINGS_KEY, JSON.stringify(next)); }
    catch { setMessage('Session preference could not be saved on this device.'); }
  }
  function saveAndLeave() {
    if (onSave()) onLeave();
    else setMessage('Your progress could not be saved. You can retry or continue without saving.');
  }
  function continueNow() {
    setReminder(false);
    nextReminderAt.current = limit === null ? Infinity : elapsedSeconds + limit * 60;
    onResume();
  }
  function takeBreak() {
    setReminder(false);
    setRealLifeBreak(true);
    onPause();
    if (!onSave()) setMessage('Your progress could not be saved. You can retry.');
  }
  return <>
    <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', alignItems: 'center' }}>
      <label htmlFor="session-duration" style={{ fontSize: 13 }}>Break reminder</label>
      <select id="session-duration" value={limit === null ? 'off' : String(limit)}
        onChange={e => changeLimit(e.target.value === 'off' ? null : Number(e.target.value) as SessionLimit)}
        style={{ ...button, maxWidth: 115 }}>
        <option value="10">10 min</option><option value="20">20 min</option>
        <option value="30">30 min</option><option value="45">45 min</option>
        <option value="off">Off</option>
      </select>
      <button style={button} onClick={takeBreak}>I'm going to pray / take a real-life break</button>
    </div>
    {message && <p role="status" style={{ fontSize: 12 }}>{message}</p>}
    {(reminder || realLifeBreak) && <section role="dialog" aria-modal="true"
      aria-label={realLifeBreak ? 'Real-life break' : 'Time for a break'}
      style={{ position: 'fixed', inset: 0, zIndex: 20, background: 'rgba(0,0,0,.84)', display: 'grid', placeItems: 'center', padding: 18 }}>
      <div style={{ maxWidth: 430, width: '100%', background: '#142a32', padding: 24, borderRadius: 14, border: '1px solid #a6c0bf' }}>
        <h2 style={{ marginTop: 0 }}>{realLifeBreak ? 'Your journey can wait.' : 'Time for a break?'}</h2>
        <p>{realLifeBreak ? 'Take the time you need. Dunya does not track whether you prayed or what you did away from the game.' : 'You have reached your planned play time. There is no streak to protect and no penalty for leaving.'}</p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
          <button style={button} onClick={saveAndLeave}>Save and leave</button>
          {!realLifeBreak && <button style={button} onClick={takeBreak}>Take a break</button>}
          <button style={button} onClick={() => { setRealLifeBreak(false); continueNow(); }}>Continue for now</button>
        </div>
        {message && <p role="status">{message}</p>}
      </div>
    </section>}
  </>;
}
