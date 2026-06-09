import { useState, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import { GOALS, GOAL_CONFIG, DEFAULT_CONFIG } from '../data/goals';

function firstName(n) { return (n || '').split(/[\s—]/)[0].trim(); }

export function BuddyScreen() {
  const { screen, navigate, setBookedHelper, setBookedTime } = useApp();
  const [step, setStep] = useState(1);
  const [selGoal, setSelGoal] = useState(null);
  const [consent, setConsent] = useState(true);
  const [selDate, setSelDate] = useState(null);
  const [selHours, setSelHours] = useState(new Set(['10:00']));
  const [activeFilter, setActiveFilter] = useState('הכל');
  const [profiles, setProfiles] = useState({});
  const [passed, setPassed] = useState(new Set());

  useEffect(() => {
    if (screen === 'buddy') { setStep(1); setSelGoal(null); }
  }, [screen]);

  function getConfig(goal) {
    if (!goal) return DEFAULT_CONFIG;
    return GOAL_CONFIG[goal.id] || DEFAULT_CONFIG;
  }

  function getProfiles(goal) {
    const cfg = getConfig(goal);
    const key = goal ? goal.id : 'default';
    if (!profiles[key]) return cfg.profiles;
    return profiles[key];
  }

  function setProfilesFor(goal, list) {
    const key = goal ? goal.id : 'default';
    setProfiles(prev => ({ ...prev, [key]: list }));
  }

  function selectGoal(goal) {
    setSelGoal(goal);
    setSelDate(null);
    setSelHours(new Set(['10:00']));
    setActiveFilter('הכל');
    setStep(2);
  }

  function toggleLike(code) {
    const list = getProfiles(selGoal);
    const updated = list.map(p => p.code === code && !p.matched ? { ...p, liked: !p.liked } : p);
    setProfilesFor(selGoal, updated);
  }

  function passCard(code) {
    setPassed(prev => new Set([...prev, code]));
  }

  function goToStep3() {
    setActiveFilter('הכל');
    setStep(3);
  }

  const isActive = screen === 'buddy';

  const cfg = getConfig(selGoal);
  const allProfs = getProfiles(selGoal).filter(p => !passed.has(p.code));
  const filteredProfs = activeFilter === 'הכל' ? allProfs : allProfs.filter(p => {
    const attrs = cfg.attrs(p);
    return attrs.some(a => a.l.includes(activeFilter))
      || (p.sport && p.sport.includes(activeFilter))
      || (p.time && p.time.includes(activeFilter))
      || (p.dest && p.dest.includes(activeFilter))
      || (p.style && p.style.includes(activeFilter));
  });
  const matchedProfs = filteredProfs.filter(p => p.matched);

  const dateTabs = selGoal?.travel
    ? selGoal.months
    : ['היום','מחר','יום ה׳','סוף שבוע','תאריך אחר…'];

  const hours = ['07:00','10:00','12:00','16:00','19:00'];

  function matchLabel() {
    return (selGoal ? selGoal.l : '') + ' · ' + (selDate || '');
  }

  return (
    <div className={`screen${isActive ? ' active' : ''}`} id="buddy">
      <div className="status"><span className="stime">9:41</span></div>

      {/* STEP 1 */}
      {step === 1 && (
        <div style={{display:'flex',flexDirection:'column',height:'calc(100% - 44px)'}}>
          <div className="buddy-hdr">
            <div className="buddy-mode-label">חבר לרגע ✦</div>
            <div className="buddy-title">FIND YOUR<br />MATCH</div>
            <div className="buddy-sub">לא מחפשים הלפר — מחפשים מישהי שגם היא רוצה</div>
          </div>
          <div className="scroll" style={{padding:'8px 22px 16px'}}>
            <div style={{fontSize:10,fontWeight:700,color:'var(--text3)',textTransform:'uppercase',letterSpacing:'.09em',marginBottom:10}}>בחרי מטרה</div>
            <div style={{display:'flex',flexDirection:'column',gap:8}}>
              {GOALS.map(g => (
                <div key={g.id} className="goal-card" onClick={() => selectGoal(g)}>
                  <div className="goal-main">
                    <div className="goal-ico" style={{background: g.promo ? 'rgba(16,185,129,.12)' : 'rgba(14,165,233,.1)'}}>{g.e}</div>
                    <div style={{flex:1}}>
                      <div className="goal-name">{g.l}</div>
                      <div className="goal-sub">{g.s}</div>
                    </div>
                    <svg width="7" height="12" viewBox="0 0 7 12" fill="none"><path d="M6 1L1 6l5 5" stroke="#3A6880" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </div>
                  {g.promo && (
                    <div className="goal-promo">
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M1 6l3 3 7-7" stroke="#10B981" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/></svg>
                      <span>הטבה: כניסה זוגית חינם לסטודיו פילאטיס ✦</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* STEP 2 */}
      {step === 2 && (
        <div style={{display:'flex',flexDirection:'column',height:'calc(100% - 44px)'}}>
          <div className="step-hdr">
            <button className="step-back" onClick={() => setStep(1)}>
              <svg viewBox="0 0 24 24"><path d="M15 18l-6-6 6-6"/></svg>
              חזרה
            </button>
            <div className="step-mode">{selGoal?.l}</div>
            <div className="step-title">WHEN?</div>
            <div className="step-hint">{selGoal?.travel ? 'בחרי חודש' : 'בחרי תאריך ושעה'}</div>
          </div>
          <div className="scroll" style={{padding:'12px 22px 16px'}}>
            <div style={{fontSize:10,fontWeight:700,color:'var(--text3)',textTransform:'uppercase',letterSpacing:'.09em',marginBottom:8}}>
              {selGoal?.travel ? 'חודש נסיעה' : 'תאריך'}
            </div>
            <div style={{overflowX:'auto',display:'flex',gap:7,paddingBottom:10,marginBottom:14}}>
              {dateTabs.map((t,i) => (
                <button key={t} className={`ttab${(selDate||dateTabs[0])===t?' on':''}`}
                  onClick={() => setSelDate(t)} style={{fontFamily:'inherit'}}>
                  {t}
                </button>
              ))}
            </div>
            {!selGoal?.travel && (
              <div>
                <div style={{fontSize:10,fontWeight:700,color:'var(--text3)',textTransform:'uppercase',letterSpacing:'.09em',marginBottom:8}}>שעה</div>
                <div className="hours">
                  {hours.map(h => (
                    <button key={h} className={`hr${selHours.has(h)?' on':''}`}
                      onClick={() => setSelHours(prev => { const s=new Set(prev); s.has(h)?s.delete(h):s.add(h); return s; })}>
                      {h}
                    </button>
                  ))}
                </div>
              </div>
            )}
            <div className="consent-card">
              <div className="consent-row">
                <div>
                  <div className="consent-text">גם אני גלויה לחיפוש</div>
                  <div className="consent-sub">אחרות יוכלו למצוא אותך כמאצ׳ אפשרי</div>
                </div>
                <div className="toggle" onClick={() => setConsent(c => !c)}
                  style={{background: consent ? 'var(--sky)' : 'var(--text3)'}}>
                  <div className="toggle-knob" style={{transform: consent ? 'none' : 'translateX(-17px)'}} />
                </div>
              </div>
            </div>
          </div>
          <div style={{padding:'12px 22px 26px',flexShrink:0}}>
            <button className="cta-btn" onClick={goToStep3}>בואי נמצא מאצ׳ ✦</button>
          </div>
        </div>
      )}

      {/* STEP 3 */}
      {step === 3 && (
        <div style={{display:'flex',flexDirection:'column',height:'calc(100% - 44px)'}}>
          <div className="match-hdr">
            <button className="step-back" onClick={() => setStep(2)} style={{marginBottom:6}}>
              <svg viewBox="0 0 24 24"><path d="M15 18l-6-6 6-6"/></svg>
              חזרה
            </button>
            <div className="match-mode">{matchLabel()}</div>
            <div style={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
              <div className="match-count">{filteredProfs.length} אנשים באזורך</div>
              <div style={{fontSize:11,color:'var(--text3)',fontWeight:600}}>אנונימי עד מאצ׳</div>
            </div>
          </div>
          <div style={{padding:'8px 22px 0',flexShrink:0}}>
            <div style={{overflowX:'auto',display:'flex',gap:7,paddingBottom:10}}>
              {cfg.filters.map(f => (
                <button key={f} className={`ttab${activeFilter===f?' on':''}`}
                  onClick={() => setActiveFilter(f)} style={{fontFamily:'inherit'}}>{f}</button>
              ))}
            </div>
          </div>
          <div className="scroll" style={{padding:'8px 22px 16px'}}>
            {filteredProfs.map(p => {
              const attrs = cfg.attrs(p);
              const btnClass = p.matched ? 'like-btn matched' : p.liked ? 'like-btn liked' : 'like-btn';
              const btnLabel = p.matched ? '✓ מאצ׳! הפרטים נחשפו' : p.liked ? '✓ סימנת — ממתינה' : '♥  סמני כמעניינת';
              return (
                <div key={p.code} className={`anon-card${p.matched?' matched':p.liked?' liked':''}`}>
                  <div className="anon-row">
                    <div className="anon-av" style={{background:'linear-gradient(135deg,rgba(14,165,233,.15),rgba(249,115,22,.1))'}}>
                      <span className="anon-av-blur" style={{fontSize:22}}>{p.emoji}</span>
                      {!p.matched && <span className="anon-lock">🔒</span>}
                    </div>
                    <div className="anon-info">
                      <div className="anon-codename">
                        {p.matched ? <span style={{color:'var(--green)'}}>✦ {p.realName}</span> : p.code.replace(/_/g,' ')}
                      </div>
                      <div className="anon-meta">
                        {p.matched ? p.realMeta : 'פרטים נחשפים רק אחרי match משני הצדדים'}
                      </div>
                      <div className="anon-attrs">
                        {attrs.map((a,i) => <div key={i} className={`anon-attr${a.hi?' hi':''}`}>{a.l}</div>)}
                      </div>
                    </div>
                  </div>
                  {p.matched && (
                    <div style={{marginTop:10,padding:'8px 10px',background:'rgba(16,185,129,.08)',borderRadius:8,fontSize:12,fontWeight:600,color:'var(--green)'}}>
                      📱 {p.realContact}
                    </div>
                  )}
                  <div className="anon-actions">
                    <button className={btnClass} onClick={() => toggleLike(p.code)}>
                      <svg width="14" height="14" viewBox="0 0 14 14" fill={p.liked||p.matched?'currentColor':'none'} stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
                        <path d="M7 12.5S1 8.5 1 4.5a3.5 3.5 0 016-2.4A3.5 3.5 0 0113 4.5c0 4-6 8-6 8z"/>
                      </svg>
                      {btnLabel}
                    </button>
                    {!p.matched && !p.liked && (
                      <button className="pass-btn" onClick={() => passCard(p.code)}>✕</button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
          {matchedProfs.length > 0 && (
            <div style={{flexShrink:0,borderTop:'1px solid var(--border2)',padding:'12px 22px 16px',background:'var(--bg2)'}}>
              <div style={{fontSize:10,fontWeight:700,color:'var(--green)',textTransform:'uppercase',letterSpacing:'.09em',marginBottom:8}}>✦ מאצ׳ חדש! היא סימנה אותך בחזרה</div>
              {matchedProfs.map(p => (
                <div key={p.code} className="reveal-row" style={{marginBottom:8}}>
                  <div className="reveal-av">{p.emoji}</div>
                  <div style={{flex:1}}>
                    <div className="reveal-name">{p.realName}</div>
                    <div className="reveal-meta">{p.realMeta}</div>
                    <div style={{fontSize:11,color:'var(--green)',marginTop:3,fontWeight:700}}>{p.realContact}</div>
                  </div>
                  <button onClick={(e) => { e.stopPropagation(); setBookedHelper(p.realName); setBookedTime('מאצ׳ ✦'); navigate('confirm'); }}
                    className="connect-btn" style={{width:'auto',padding:'8px 14px',fontSize:14,borderRadius:10}}>חבר!</button>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
