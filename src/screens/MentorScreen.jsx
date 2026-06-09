import { useState } from 'react';
import { useApp } from '../context/AppContext';

function CalIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <rect x="1" y="2" width="12" height="11" rx="2.5" stroke="#10B981" strokeWidth="1.3"/>
      <path d="M4 1v2M10 1v2M1 6h12" stroke="#10B981" strokeWidth="1.3" strokeLinecap="round"/>
    </svg>
  );
}

export function MentorScreen() {
  const { screen, navigate, setBookedHelper, setBookedTime } = useApp();
  const [open, setOpen] = useState('mn1');
  const [selFilter, setSelFilter] = useState('הכל');
  const filters = ['הכל','עסקים','טכנולוגיה','קואצ׳ינג','NLP','טיפול'];

  function toggle(id) { setOpen(prev => prev === id ? null : id); }

  function book(e, name, time) {
    e.stopPropagation();
    setBookedHelper(name);
    setBookedTime(time);
    navigate('confirm');
  }

  return (
    <div className={`screen${screen === 'mentor' ? ' active' : ''}`} id="mentor">
      <div className="status"><span className="stime">9:41</span></div>
      <div className="scroll">
        <div className="mentor-hero">
          <div style={{fontSize:10,fontWeight:700,color:'var(--amber)',textTransform:'uppercase',letterSpacing:'.1em',marginBottom:6,position:'relative'}}>מנטור לרגע ✦</div>
          <div style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:28,letterSpacing:'.05em',color:'transparent',background:'linear-gradient(135deg,#EDF4FB 25%,#F59E0B 60%,#10B981 100%)',WebkitBackgroundClip:'text',backgroundClip:'text',lineHeight:1.1,marginBottom:5,position:'relative'}}>
            FIND YOUR<br />MENTOR
          </div>
          <div style={{fontSize:13,color:'var(--text2)',lineHeight:1.55,position:'relative'}}>ותיקים בתעשייה שמציעים את הזמן שלהם — חינם, כי הם זוכרים איך זה להתחיל</div>
          <div className="free-badge" style={{position:'relative'}}>
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M1 6l3 3 7-7" stroke="#10B981" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/></svg>
            <span>100% חינמי למבקשי השירות</span>
          </div>
        </div>

        <div style={{overflowX:'auto',display:'flex',gap:7,padding:'0 22px 14px'}}>
          {filters.map(f => (
            <button key={f} className={`ttab${selFilter===f?' on':''}`} onClick={() => setSelFilter(f)} style={{fontFamily:'inherit'}}>{f}</button>
          ))}
        </div>

        <div style={{padding:'0 22px 22px'}}>
          {/* MENTOR 1 */}
          <div className={`mcard${open==='mn1'?' open':''}`} onClick={() => toggle('mn1')}>
            <div className="mcard-main">
              <div className="prov-av" style={{background:'linear-gradient(135deg,#F59E0B,#B45309)',position:'relative'}}>ע
                <div style={{position:'absolute',bottom:-2,right:-2,width:10,height:10,borderRadius:'50%',background:'#10B981',border:'2px solid var(--card)'}} />
              </div>
              <div style={{flex:1}}>
                <div style={{display:'flex',alignItems:'center',gap:5,flexWrap:'wrap'}}>
                  <div className="prov-name">ערן לוי</div>
                  <span className="pbadge v">✦ מאומת</span>
                </div>
                <div className="prov-meta">48 · ת"א · יזם סדרתי, 3 אקזיטים</div>
                <div className="m-domain-tags">
                  <span className="mdtag" style={{background:'rgba(245,158,11,.12)',color:'#F59E0B'}}>עסקים</span>
                  <span className="mdtag" style={{background:'rgba(139,92,246,.12)',color:'#A78BFA'}}>סטארטאפ</span>
                  <span className="mdtag" style={{background:'rgba(16,185,129,.12)',color:'#10B981'}}>מימון</span>
                </div>
                <div className="prov-bio" style={{marginTop:5,fontStyle:'italic',fontSize:12,color:'var(--text2)'}}>״בניתי 3 חברות מאפס. יש לי שעה בשבוע לתת לך מה שהייתי רוצה.״</div>
              </div>
            </div>
            <div className="mcard-exp">
              <div className="m-offer"><div className="m-offer-lbl">מה אני מציע</div><div className="m-offer-txt">שיחת מנטורינג של 45 דקות — פעם בחודש. אפשר להביא דק, שאלות. לא שיפוטי, לא מוכר כלום.</div></div>
              <div style={{marginBottom:10}}>
                <div className="vibe-lbl">רקע</div>
                <div className="m-exp-item"><div className="m-exp-dot" style={{background:'#F59E0B'}} />CTO — Fintech שנמכרה ל-100M$</div>
                <div className="m-exp-item"><div className="m-exp-dot" style={{background:'#F59E0B'}} />דירקטור ב-3 חברות טכנולוגיה</div>
                <div className="m-exp-item"><div className="m-exp-dot" style={{background:'#F59E0B'}} />מנטור בתוכנית Startup Nation</div>
              </div>
              <div className="m-avail"><CalIcon /><span>ראשון · חמישי · 18:00–20:00</span></div>
              <div className="prov-review">"ערן שינה לי את האופן שבו אני חושבת על ה-GTM שלי. שיחה אחת שווה קורס שלם."</div>
              <button className="book-btn" style={{background:'linear-gradient(to left,#F59E0B,#D97706)'}} onClick={e => book(e,'ערן לוי — מנטורינג','בתיאום')}>קבעי שיחה עם ערן</button>
            </div>
          </div>

          {/* MENTOR 2 */}
          <div className={`mcard${open==='mn2'?' open':''}`} onClick={() => toggle('mn2')}>
            <div className="mcard-main">
              <div className="prov-av" style={{background:'linear-gradient(135deg,#8B5CF6,#6D28D9)'}}>מ</div>
              <div style={{flex:1}}>
                <div className="prov-name">ד״ר מיה שפירא</div>
                <div className="prov-meta">52 · רמת גן · פסיכולוגית + NLP Master</div>
                <div className="m-domain-tags">
                  <span className="mdtag" style={{background:'rgba(139,92,246,.12)',color:'#A78BFA'}}>NLP</span>
                  <span className="mdtag" style={{background:'rgba(20,184,166,.12)',color:'#2DD4BF'}}>קואצ׳ינג</span>
                  <span className="mdtag" style={{background:'rgba(236,72,153,.12)',color:'#F472B6'}}>קריירה</span>
                </div>
                <div className="prov-bio" style={{marginTop:5,fontStyle:'italic',fontSize:12,color:'var(--text2)'}}>״כי הצמיחה האמיתית קורית בשיחה אחת נכונה.״</div>
              </div>
            </div>
            <div className="mcard-exp">
              <div className="m-offer"><div className="m-offer-lbl">מה אני מציעה</div><div className="m-offer-txt">מפגש NLP מבוא של 60 דקות — לשחרור חסמים, בהירות מקצועית. לגמרי חינם.</div></div>
              <div className="m-avail"><CalIcon /><span>שישי בוקר · 08:00–11:00 (זום)</span></div>
              <div className="prov-review">"שיחה אחת עם מיה גרמה לי לקבל החלטה שדחיתי שנתיים."</div>
              <button className="book-btn" onClick={e => book(e,'מיה שפירא — NLP','בתיאום')}>קבעי שיחה עם מיה</button>
            </div>
          </div>

          {/* MENTOR 3 */}
          <div className={`mcard${open==='mn3'?' open':''}`} onClick={() => toggle('mn3')}>
            <div className="mcard-main">
              <div className="prov-av" style={{background:'linear-gradient(135deg,#14B8A6,#0F766E)'}}>ר</div>
              <div style={{flex:1}}>
                <div style={{display:'flex',alignItems:'center',gap:5,flexWrap:'wrap'}}>
                  <div className="prov-name">רועי בן-דוד</div>
                  <span className="pbadge s">מומלץ</span>
                </div>
                <div className="prov-meta">39 · חיפה · VP Engineering</div>
                <div className="m-domain-tags">
                  <span className="mdtag" style={{background:'rgba(20,184,166,.12)',color:'#2DD4BF'}}>טכנולוגיה</span>
                  <span className="mdtag" style={{background:'rgba(139,92,246,.12)',color:'#A78BFA'}}>ניהול צוות</span>
                  <span className="mdtag" style={{background:'rgba(245,158,11,.12)',color:'#F59E0B'}}>קריירה הייטק</span>
                </div>
                <div className="prov-bio" style={{marginTop:5,fontStyle:'italic',fontSize:12,color:'var(--text2)'}}>״עשרות מהנדסים שמנטורתי קידמו קריירה תוך שנה.״</div>
              </div>
            </div>
            <div className="mcard-exp">
              <div className="m-offer"><div className="m-offer-lbl">מה אני מציע</div><div className="m-offer-txt">Code review, system design, ואיך מקדמים קריירה בהייטק. שיחה דו-שבועית ל-3 חודשים.</div></div>
              <div className="m-avail"><CalIcon /><span>שלישי · רביעי · 20:00</span></div>
              <div className="prov-review">"3 חודשים עם רועי = קפיצת מדרגה. קיבלתי offer ב-Senior תוך חודשיים."</div>
              <button className="book-btn" style={{background:'linear-gradient(to left,#14B8A6,#0F766E)'}} onClick={e => book(e,'רועי בן-דוד — טכנולוגיה','בתיאום')}>קבעי שיחה עם רועי</button>
            </div>
          </div>

          <div style={{background:'linear-gradient(135deg,rgba(245,158,11,.08),rgba(14,165,233,.06))',border:'1px solid rgba(245,158,11,.18)',borderRadius:16,padding:'16px 18px',textAlign:'center',marginTop:4}}>
            <div style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:20,letterSpacing:'.04em',color:'var(--text)',marginBottom:4}}>גם את/ה ותיקה?</div>
            <div style={{fontSize:12,color:'var(--text2)',lineHeight:1.55,marginBottom:12}}>הצטרפי כמנטורית — תקבלי ביקורות, המלצות ונוכחות. ללא עלות.</div>
            <button style={{background:'linear-gradient(to left,#F59E0B,#D97706)',color:'white',border:'none',borderRadius:10,padding:'10px 20px',fontFamily:"'Bebas Neue',sans-serif",fontSize:16,letterSpacing:'.04em',cursor:'pointer'}}>הצטרפי כמנטורית</button>
          </div>
        </div>
      </div>
    </div>
  );
}
