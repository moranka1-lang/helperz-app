import { useEffect, useState } from 'react';
import { useApp } from '../context/AppContext';

function greeting() {
  const h = new Date().getHours();
  const name = 'מיכל';
  if (h >= 6 && h < 12) return 'בוקר טוב, ' + name + ' ☀️ — במה נעזור היום?';
  if (h >= 12 && h < 17) return 'היי ' + name + ' 👋 — יש משהו שנוכל לעזור בו?';
  if (h >= 17 && h < 22) return 'ערב טוב ' + name + ' — צריכה עזרה במשהו?';
  return 'גם בלילה אנחנו כאן, ' + name + ' 🌙';
}

export function HomeScreen() {
  const { screen, navigate } = useApp();
  const [greet, setGreet] = useState(greeting);

  useEffect(() => {
    setGreet(greeting());
  }, [screen]);

  return (
    <div className={`screen${screen === 'home' ? ' active' : ''}`} id="home">
      <div className="status">
        <span className="stime">9:41</span>
        <div className="sicons">
          <svg width="17" height="11" viewBox="0 0 17 11" fill="none">
            <rect x="0" y="5" width="3" height="6" rx="1" fill="#7AADCA" opacity=".4"/>
            <rect x="4" y="3" width="3" height="8" rx="1" fill="#7AADCA" opacity=".6"/>
            <rect x="8" y="1" width="3" height="10" rx="1" fill="#7AADCA" opacity=".8"/>
            <rect x="12" y="0" width="3" height="11" rx="1" fill="#EDF4FB"/>
          </svg>
          <svg width="25" height="12" viewBox="0 0 25 12" fill="none">
            <rect x=".5" y=".5" width="21" height="11" rx="3.5" stroke="#7AADCA" strokeOpacity=".3"/>
            <rect x="2" y="2" width="16" height="8" rx="2" fill="#EDF4FB"/>
            <path d="M23 4v4" stroke="#7AADCA" strokeWidth="2" strokeLinecap="round" strokeOpacity=".35"/>
          </svg>
        </div>
      </div>
      <div className="hdr">
        <div className="hdr-row">
          <div>
            <div className="logo">HELPERZ</div>
            <div className="hdr-sub">{greet}</div>
          </div>
          <div className="icon-btn">
            <svg viewBox="0 0 24 24"><path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 01-3.46 0"/></svg>
          </div>
        </div>
      </div>
      <div className="scroll">
        <div className="search">
          <svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>
          <input placeholder="חפשי שירות, הלפר, מנטור..." />
        </div>
        <div className="chips-row">
          <div className="chip on">הכל</div>
          <div className="chip">קשישים</div>
          <div className="chip">ילדים</div>
          <div className="chip">בית</div>
          <div className="chip">רפואה</div>
          <div className="chip">חבר לרגע</div>
        </div>
        <div className="stitle">
          <h3>שירותים</h3>
          <a onClick={() => navigate('domains')}>כל התחומים</a>
        </div>
        <div className="svc-list">
          <div className="sli csky" onClick={() => navigate('detail')}>
            <div className="li-ico" style={{background:'rgba(14,165,233,.12)'}}><svg style={{stroke:'#38BDF8'}} viewBox="0 0 24 24"><circle cx="12" cy="12" r="5"/><path d="M12 3v2M12 19v2M3 12h2M19 12h2"/></svg></div>
            <div className="li-name">ליווי למוסך</div><div className="li-avail">8 פנויים</div><div className="li-pill">פנוי היום</div>
          </div>
          <div className="sli csun" onClick={() => navigate('detail')}>
            <div className="li-ico" style={{background:'rgba(249,115,22,.12)'}}><svg style={{stroke:'#FB923C'}} viewBox="0 0 24 24"><circle cx="12" cy="8" r="4.5"/><path d="M5 22c0-3.9 3.1-7 7-7s7 3.1 7 7"/><path d="M7 19l-2 3M9 21H6"/></svg></div>
            <div className="li-name">חברה לקשיש</div><div className="li-avail">12 פנויים</div><div className="li-pill">פנוי היום</div>
          </div>
          <div className="sli cgrn" onClick={() => navigate('detail')}>
            <div className="li-ico" style={{background:'rgba(16,185,129,.12)'}}><svg style={{stroke:'#34D399'}} viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="5"/><path d="M12 8v8M8 12h8"/></svg></div>
            <div className="li-name">ליווי לרופא</div><div className="li-avail">6 פנויים</div>
          </div>
          <div className="sli camb" onClick={() => navigate('detail')}>
            <div className="li-ico" style={{background:'rgba(245,158,11,.12)'}}><svg style={{stroke:'#FCD34D'}} viewBox="0 0 24 24"><path d="M3 11L12 3l9 8v11a1 1 0 01-1 1H4a1 1 0 01-1-1V11z"/><path d="M9 22v-7h6v7"/></svg></div>
            <div className="li-name">שמירת בית</div><div className="li-avail">4 פנויים</div>
          </div>
          <div className="sli cpur" onClick={() => navigate('detail')}>
            <div className="li-ico" style={{background:'rgba(139,92,246,.12)'}}><svg style={{stroke:'#A78BFA'}} viewBox="0 0 24 24"><path d="M14.5 3.5C13 2 10.5 2 9 3.5L3.5 9C2 10.5 2 13 3.5 14.5L9.5 20.5C11 22 13.5 22 15 20.5L20.5 15C22 13.5 22 11 20.5 9.5L14.5 3.5z"/></svg></div>
            <div className="li-name">הנדי מן/וומן</div><div className="li-avail">7 פנויים</div><div className="li-pill">פנוי היום</div>
          </div>
          <div className="sli cteal" onClick={() => navigate('detail')}>
            <div className="li-ico" style={{background:'rgba(20,184,166,.12)'}}><svg style={{stroke:'#2DD4BF'}} viewBox="0 0 24 24"><ellipse cx="12" cy="11" rx="8" ry="5"/><path d="M4 11v5c0 2.8 3.6 5 8 5s8-2.2 8-5v-5"/></svg></div>
            <div className="li-name">בישול ונקיון</div><div className="li-avail">5 פנויים</div>
          </div>
          <div className="sli cpnk" onClick={() => navigate('buddy')} style={{background:'linear-gradient(135deg,rgba(249,115,22,.07),rgba(14,165,233,.07))',borderColor:'rgba(249,115,22,.18)'}}>
            <div className="li-ico" style={{background:'rgba(249,115,22,.14)'}}><svg style={{stroke:'#FB923C'}} viewBox="0 0 24 24"><circle cx="9" cy="8" r="3.5"/><circle cx="16" cy="8" r="3.5"/><path d="M3 20c0-3.3 2.7-6 6-6M13 20c0-3.3 2.7-6 6-6"/><path d="M9 14c1-.4 2-.6 3.5-.6S15 13.6 16 14"/></svg></div>
            <div className="li-name">חבר לרגע</div>
            <div className="li-avail">ים·אימון·נסיעות</div>
            <div className="li-new">חדש ✦</div>
          </div>
          <div className="sli camb" onClick={() => navigate('mentor')} style={{background:'linear-gradient(135deg,rgba(245,158,11,.07),rgba(16,185,129,.05))',borderColor:'rgba(245,158,11,.2)'}}>
            <div className="li-ico" style={{background:'rgba(245,158,11,.14)'}}><svg style={{stroke:'#FCD34D'}} viewBox="0 0 24 24"><circle cx="12" cy="7" r="4"/><path d="M5 20c0-4 3.1-7 7-7"/><path d="M15 14l2 2 4-4"/></svg></div>
            <div className="li-name">מנטור לרגע</div>
            <div className="li-avail">חינם לגמרי</div>
            <div className="li-pill" style={{background:'var(--green-dim)',color:'var(--green)'}}>חינם ✦</div>
          </div>
        </div>
        <div className="stitle"><h3>הלפרית מומלצת</h3></div>
        <div className="feat-wrap">
          <div className="feat-card" onClick={() => navigate('providers')}>
            <div className="feat-av">ד</div>
            <div style={{flex:1}}>
              <div className="feat-name">דינה כהן</div>
              <div className="feat-sub">מרכז · ניסיון 3 שנים</div>
              <div className="feat-stars">★★★★★ <span style={{color:'var(--text2)',fontSize:11}}>4.97 (63)</span></div>
              <div className="feat-ver">
                <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><path d="M22 4L12 14.01l-3-3"/></svg>
                הלפרית מאומתת ✦
              </div>
            </div>
            <div className="feat-arr">
              <svg viewBox="0 0 24 24"><path d="M15 18l-6-6 6-6"/></svg>
            </div>
          </div>
        </div>
        <div style={{height:16}} />
      </div>
      <div className="tabs">
        <div className="tab on">
          <svg viewBox="0 0 24 24"><path d="M3 9.5L12 3l9 6.5V20a1 1 0 01-1 1H4a1 1 0 01-1-1V9.5z"/><path d="M9 21V12h6v9"/></svg>
          <span>בית</span>
        </div>
        <div className="tab" onClick={() => navigate('domains')}>
          <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 010 20"/></svg>
          <span>תחומים</span>
        </div>
        <div className="tab" onClick={() => navigate('providers')}>
          <svg viewBox="0 0 24 24"><circle cx="9" cy="7" r="4"/><path d="M3 21v-2a4 4 0 014-4h4a4 4 0 014 4v2"/></svg>
          <span>הלפרים</span>
        </div>
        <div className="tab" onClick={() => navigate('buddy')}>
          <svg viewBox="0 0 24 24"><circle cx="9" cy="8" r="3"/><circle cx="16" cy="8" r="3"/><path d="M3 20c0-3.3 2.7-6 6-6M13 20c0-3.3 2.7-6 6-6"/></svg>
          <span>חבר</span>
        </div>
      </div>
    </div>
  );
}
