import { useState } from 'react';
import { useApp } from '../context/AppContext';

export function ProvidersScreen() {
  const { screen, navigate, setBookedHelper, setBookedTime } = useApp();
  const [open, setOpen] = useState('p1');

  function toggle(id) { setOpen(prev => prev === id ? null : id); }

  function book(e, name, time) {
    e.stopPropagation();
    setBookedHelper(name);
    setBookedTime(time);
    navigate('confirm');
  }

  return (
    <div className={`screen${screen === 'providers' ? ' active' : ''}`} id="providers">
      <div className="status"><span className="stime">9:41</span></div>
      <div className="prov-hdr">
        <div className="prov-title">HELPERS AVAILABLE</div>
        <div className="prov-sub">ליווי למוסך · היום 11:00 · 3 הלפרים מתאימים, כולם קרובים אליך</div>
      </div>
      <div className="scroll">
        <div className="prov-list">

          {/* PROVIDER 1 */}
          <div className={`prov${open==='p1'?' open':''}`} onClick={() => toggle('p1')}>
            <div className="prov-main">
              <div className="prov-av" style={{background:'linear-gradient(135deg,#0EA5E9,#0369A1)'}}>ד</div>
              <div style={{flex:1}}>
                <div className="prov-name">דינה כהן</div>
                <div className="prov-meta">מרכז · 34 · 63 שיבוצים</div>
                <div className="prov-stars">★★★★★ <span style={{color:'var(--text2)',fontSize:11}}>4.97</span></div>
                <div className="prov-badges">
                  <span className="pbadge v">✦ מאומת</span>
                  <span className="pbadge s">פנוי עכשיו</span>
                  <span className="pbadge u">מומלץ</span>
                </div>
              </div>
            </div>
            <div className="prov-exp">
              <div className="vthumbs">
                <div className="vt" onClick={e => e.stopPropagation()}>
                  <svg className="vt-bg" viewBox="0 0 160 90" preserveAspectRatio="xMidYMid slice">
                    <defs><linearGradient id="vg1" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#0A1E38"/><stop offset="100%" stopColor="#0D1828"/></linearGradient></defs>
                    <rect width="160" height="90" fill="url(#vg1)"/>
                    <circle cx="80" cy="42" r="20" fill="rgba(14,165,233,.1)" stroke="rgba(14,165,233,.2)" strokeWidth="1"/>
                    <path d="M40 65c0-11 9-20 20-20s20 9 20 20" fill="rgba(14,165,233,.07)"/>
                  </svg>
                  <div className="vt-play"><div className="vt-play-btn"><svg viewBox="0 0 16 16"><path d="M5 3l8 5-8 5V3z" fill="white"/></svg></div></div>
                  <div className="vt-cap">דינה מציגה · 0:42</div>
                </div>
              </div>
              <div className="vibe-wrap">
                <div className="vibe-lbl">Vibe Meter</div>
                {[{l:'אנרגיה בוקר',pct:90,c:'#0EA5E9'},{l:'עומק שיחה',pct:65,c:'#8B5CF6'},{l:'ספונטניות',pct:55,c:'#14B8A6'}].map(v=>(
                  <div key={v.l} className="vibe-row">
                    <div className="vibe-heads"><span className="vibe-a">{v.l}</span><span className="vibe-pct" style={{color:v.c}}>{v.pct}%</span></div>
                    <div className="vibe-track"><div className="vibe-fill" style={{width:v.pct+'%',background:v.c}} /></div>
                  </div>
                ))}
              </div>
              <div className="stags">
                <div className="stag">☕ קפה לפני דיבור</div>
                <div className="stag sun">🔧 מוסך pro</div>
                <div className="stag grn">✓ רוסית + אנגלית</div>
              </div>
              <div className="prov-rev-lbl">מה אמרו עליה:</div>
              <div className="prov-review">"דינה ממש הצילה אותי — ידעה לדבר עם הטכנאי, הסבירה לי כל שלב."</div>
              <div className="prov-rev-lbl" style={{marginTop:2}}>מדברת:</div>
              <div className="lang-pills"><div className="lp">עברית</div><div className="lp">רוסית</div><div className="lp">אנגלית</div></div>
              <button className="book-btn" onClick={e => book(e,'דינה כהן','היום 11:00')}>הזמיני את דינה</button>
            </div>
          </div>

          {/* PROVIDER 2 */}
          <div className={`prov${open==='p2'?' open':''}`} onClick={() => toggle('p2')}>
            <div className="prov-main">
              <div className="prov-av" style={{background:'linear-gradient(135deg,#F97316,#DC4E0A)'}}>מ</div>
              <div style={{flex:1}}>
                <div className="prov-name">מיכל ברון</div>
                <div className="prov-meta">צפון ת"א · 28 · 31 שיבוצים</div>
                <div className="prov-stars">★★★★☆ <span style={{color:'var(--text2)',fontSize:11}}>4.82</span></div>
                <div className="prov-badges">
                  <span className="pbadge v">✦ מאומת</span>
                  <span className="pbadge s">פנוי 13:00</span>
                </div>
              </div>
            </div>
            <div className="prov-exp">
              <div className="vibe-wrap">
                <div className="vibe-lbl">Vibe Meter</div>
                {[{l:'דייקנות',pct:88,c:'#F97316'},{l:'ספונטניות',pct:72,c:'#14B8A6'}].map(v=>(
                  <div key={v.l} className="vibe-row">
                    <div className="vibe-heads"><span className="vibe-a">{v.l}</span><span className="vibe-pct" style={{color:v.c}}>{v.pct}%</span></div>
                    <div className="vibe-track"><div className="vibe-fill" style={{width:v.pct+'%',background:v.c}} /></div>
                  </div>
                ))}
              </div>
              <div className="stags">
                <div className="stag sun">✈️ פספורט, בלי תוכנית</div>
                <div className="stag pur">🎵 מוזיקה תמיד</div>
              </div>
              <div className="prov-rev-lbl">מה אמרו עליה:</div>
              <div className="prov-review">"מיכל סבלנית ומדויקת. הגיעה בזמן, ידעה לנהל את כל התהליך."</div>
              <div className="prov-rev-lbl" style={{marginTop:2}}>מדברת:</div>
              <div className="lang-pills"><div className="lp">עברית</div><div className="lp">צרפתית</div></div>
              <button className="book-btn" onClick={e => book(e,'מיכל ברון','היום 13:00')}>הזמיני את מיכל</button>
            </div>
          </div>

          {/* PROVIDER 3 */}
          <div className={`prov${open==='p3'?' open':''}`} onClick={() => toggle('p3')}>
            <div className="prov-main">
              <div className="prov-av" style={{background:'linear-gradient(135deg,#10B981,#059669)'}}>ר</div>
              <div style={{flex:1}}>
                <div className="prov-name">רחל ישראלי</div>
                <div className="prov-meta">גוש דן · 41 · 87 שיבוצים</div>
                <div className="prov-stars">★★★★★ <span style={{color:'var(--text2)',fontSize:11}}>4.99</span></div>
                <div className="prov-badges">
                  <span className="pbadge v">✦ מאומת</span>
                  <span className="pbadge r">מובילה</span>
                  <span className="pbadge s">פנוי 15:00</span>
                </div>
              </div>
            </div>
            <div className="prov-exp">
              <div className="vibe-wrap">
                <div className="vibe-lbl">Vibe Meter</div>
                {[{l:'ניסיון',pct:95,c:'#10B981'},{l:'עומק שיחה',pct:80,c:'#8B5CF6'}].map(v=>(
                  <div key={v.l} className="vibe-row">
                    <div className="vibe-heads"><span className="vibe-a">{v.l}</span><span className="vibe-pct" style={{color:v.c}}>{v.pct}%</span></div>
                    <div className="vibe-track"><div className="vibe-fill" style={{width:v.pct+'%',background:v.c}} /></div>
                  </div>
                ))}
              </div>
              <div className="stags">
                <div className="stag grn">87 שיבוצים ✓</div>
                <div className="stag">🌊 ים &gt; הכל</div>
              </div>
              <div className="prov-rev-lbl">מה אמרו עליה:</div>
              <div className="prov-review">"87 שיבוצים ו-4.99 — רחל פשוט מהטובות ביותר בפלטפורמה."</div>
              <div className="prov-rev-lbl" style={{marginTop:2}}>מדברת:</div>
              <div className="lang-pills"><div className="lp">עברית</div><div className="lp">ערבית</div></div>
              <button className="book-btn" onClick={e => book(e,'רחל ישראלי','היום 15:00')}>הזמיני את רחל</button>
            </div>
          </div>
        </div>
        <div style={{height:16}} />
      </div>
    </div>
  );
}
