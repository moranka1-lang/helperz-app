import { useState } from 'react';
import { useApp } from '../context/AppContext';

function Dots({ active, count = 5 }) {
  return (
    <div className="ob-dots">
      {Array.from({ length: count }, (_, i) => (
        <span key={i} className={i === active ? 'on' : ''} />
      ))}
    </div>
  );
}

function Chip({ label, on, onClick }) {
  return <div className={`ob-chip${on ? ' on' : ''}`} onClick={onClick}>{label}</div>;
}

export function OnboardingScreen() {
  const { screen, navigate } = useApp();
  const [step, setStep] = useState('ob1');
  const [avatar, setAvatar] = useState('A');
  const [homeItems, setHomeItems] = useState(new Set(['כלב','ילדים קטנים']));
  const [limits, setLimits] = useState(new Set(['נשים בלבד']));
  const [traits, setTraits] = useState(new Set(['אמינות','יחס חם','ניסיון']));
  const [domains, setDomains] = useState(new Set(['מוסך ורכב','בריאות','ילדים']));

  function toggleSet(setter, val) {
    setter(prev => {
      const s = new Set(prev);
      s.has(val) ? s.delete(val) : s.add(val);
      return s;
    });
  }

  const avatars = [{id:'A',e:'🌊'},{id:'B',e:'⚡'},{id:'C',e:'🌿'},{id:'D',e:'🔥'},{id:'E',e:'🌸'},{id:'F',e:'🦋'}];

  const isActive = screen === 'onboarding';

  return (
    <div className={`screen${isActive ? ' active' : ''}`} id="onboarding">

      {/* OB1 – About */}
      {step === 'ob1' && (
        <div style={{display:'flex',flexDirection:'column',height:'100%'}}>
          <div className="ob-hero">
            <Dots active={0} />
            <div className="ob-h">ABOUT YOU</div>
            <div className="ob-p">קודם כל — ספרי לנו קצת עלייך</div>
          </div>
          <div className="ob-body">
            <div className="ob-field">
              <div className="ob-lbl">בחרי אווטר</div>
              <div className="av-grid">
                {avatars.map(a => (
                  <div key={a.id} className={`av-item${avatar===a.id?' on':''}`} onClick={() => setAvatar(a.id)}>{a.e}</div>
                ))}
              </div>
            </div>
            <div className="ob-field"><div className="ob-lbl">שם פרטי</div><input className="ob-inp" type="text" defaultValue="מיכל" /></div>
            <div className="ob-field"><div className="ob-lbl">גיל</div><input className="ob-inp" type="text" defaultValue="38" /></div>
          </div>
          <div className="ob-foot"><button className="join-next" onClick={() => setStep('ob1b')}>המשך</button></div>
        </div>
      )}

      {/* OB1B – Location */}
      {step === 'ob1b' && (
        <div style={{display:'flex',flexDirection:'column',height:'100%'}}>
          <div className="loc-screen">
            <div className="loc-orb">
              <div className="loc-ring1" />
              <div className="loc-ring2" />
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none" style={{position:'relative',zIndex:1}}>
                <circle cx="14" cy="12" r="4" stroke="#0EA5E9" strokeWidth="1.7"/>
                <path d="M14 2C8.5 2 4 6.5 4 12c0 7.5 10 18 10 18s10-10.5 10-18c0-5.5-4.5-10-10-10z" stroke="#0EA5E9" strokeWidth="1.7" fill="none"/>
              </svg>
            </div>
            <div style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:26,letterSpacing:'.04em',color:'var(--text)',marginBottom:8,position:'relative',zIndex:1}}>WHERE ARE YOU?</div>
            <div style={{fontSize:14,color:'var(--text2)',lineHeight:1.65,marginBottom:30,position:'relative',zIndex:1}}>כדי למצוא Helperz קרובות אלייך, נצטרך לדעת איפה את</div>
          </div>
          <div style={{padding:'0 28px 32px'}}>
            <button className="join-next" onClick={() => setStep('ob2')}>
              <span style={{display:'flex',alignItems:'center',justifyContent:'center',gap:8}}>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="7" r="3" stroke="white" strokeWidth="1.5"/><path d="M8 1C4.7 1 2 3.7 2 7c0 4.5 6 9 6 9s6-4.5 6-9c0-3.3-2.7-6-6-6z" stroke="white" strokeWidth="1.5" fill="none"/></svg>
                APPROVE LOCATION
              </span>
            </button>
            <button className="cta-btn" style={{marginTop:10,background:'var(--card)',color:'var(--text2)',boxShadow:'none'}} onClick={() => setStep('ob2')}>אולי אחר כך</button>
          </div>
        </div>
      )}

      {/* OB2 – Home */}
      {step === 'ob2' && (
        <div style={{display:'flex',flexDirection:'column',height:'100%'}}>
          <div className="ob-hero">
            <Dots active={2} />
            <div className="ob-h">YOUR HOME,<br />YOUR RULES</div>
            <div className="ob-p">יש דברים שחשוב לך שנדע? לא חובה — אבל ככל שנדע יותר, נתאים טוב יותר.</div>
          </div>
          <div className="ob-body">
            <div className="ob-field">
              <div className="ob-lbl">מה יש אצלך</div>
              <div className="ob-chips">
                {['כלב','חתול','תינוק','ילדים קטנים','הורה קשיש','גינה'].map(v => (
                  <Chip key={v} label={v} on={homeItems.has(v)} onClick={() => toggleSet(setHomeItems, v)} />
                ))}
              </div>
            </div>
            <div className="ob-field">
              <div className="ob-lbl">הגבלות</div>
              <div className="ob-chips">
                {['נשים בלבד','לא מעשן','ללא אלרגיות'].map(v => (
                  <Chip key={v} label={v} on={limits.has(v)} onClick={() => toggleSet(setLimits, v)} />
                ))}
              </div>
            </div>
          </div>
          <div className="ob-foot"><button className="join-next" onClick={() => setStep('ob3')}>המשך</button></div>
        </div>
      )}

      {/* OB3 – What matters */}
      {step === 'ob3' && (
        <div style={{display:'flex',flexDirection:'column',height:'100%'}}>
          <div className="ob-hero">
            <Dots active={3} />
            <div className="ob-h">WHAT MATTERS<br />TO YOU?</div>
            <div className="ob-p">בחרי עד 3 תכונות — נתאים לך הלפרים שמתאימים לך</div>
          </div>
          <div className="ob-body">
            <div className="ob-chips">
              {['אמינות','יחס חם','זמינות מהירה','ניסיון','תקשורת טובה','סבלנות','פרטיות','דייקנות','שיחה נעימה','ניידות'].map(v => (
                <Chip key={v} label={v} on={traits.has(v)} onClick={() => toggleSet(setTraits, v)} />
              ))}
            </div>
          </div>
          <div className="ob-foot"><button className="join-next" onClick={() => setStep('ob4')}>אלו הם, יאללה ✨</button></div>
        </div>
      )}

      {/* OB4 – Domains */}
      {step === 'ob4' && (
        <div style={{display:'flex',flexDirection:'column',height:'100%'}}>
          <div className="ob-hero">
            <Dots active={4} />
            <div className="ob-h">CHOOSE YOUR<br />DOMAINS</div>
          </div>
          <div className="ob-body">
            <div className="ob-chips">
              {['מוסך ורכב','בריאות','קשישים','ילדים','חיות מחמד','בישול','הסעות','שמירת בית','הנדי מן','חבר לרגע','מנטורינג'].map(v => (
                <Chip key={v} label={v} on={domains.has(v)} onClick={() => toggleSet(setDomains, v)} />
              ))}
            </div>
          </div>
          <div className="ob-foot"><button className="join-next" onClick={() => navigate('home')}>בואי נמצא לך Helper</button></div>
        </div>
      )}
    </div>
  );
}
