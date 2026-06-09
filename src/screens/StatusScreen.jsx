import { useEffect, useRef, useState } from 'react';
import { useApp } from '../context/AppContext';

function firstName(n) { return (n || '').split(/[\s—]/)[0].trim(); }

const STATUS_STEPS = [
  { ic: '🕐', f: n => 'מחכים ש' + n + ' תאשר' },
  { ic: '✅', f: n => n + ' אישר! מחר ב-10:30' },
  { ic: '🚶', f: n => n + ' בדרך אליך — כ-8 דקות' },
  { ic: '📍', f: n => n + ' הגיע!' },
  { ic: '🎉', f: () => 'הכל עבר. מקווים שהיה טוב!' },
];

export function StatusScreen() {
  const { screen, navigate, bookedHelper } = useApp();
  const [idx, setIdx] = useState(0);
  const timerRef = useRef(null);
  const fn = firstName(bookedHelper);

  useEffect(() => {
    if (screen === 'status') {
      setIdx(0);
      if (timerRef.current) clearInterval(timerRef.current);
      timerRef.current = setInterval(() => {
        setIdx(prev => {
          const next = prev + 1;
          if (next >= STATUS_STEPS.length) {
            clearInterval(timerRef.current);
            return STATUS_STEPS.length - 1;
          }
          return next;
        });
      }, 2600);
    }
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [screen]);

  return (
    <div className={`screen${screen === 'status' ? ' active' : ''}`} id="status">
      <div className="status"><span className="stime">9:41</span></div>
      <div className="trk-hdr">
        <div className="trk-title">ON THE WAY</div>
        <div className="trk-sub">ליווי למוסך · עם {bookedHelper}</div>
      </div>
      <div className="scroll">
        <div className="trk-card">
          {STATUS_STEPS.map((s, i) => {
            const cls = i < idx ? 'done' : i === idx ? 'current' : '';
            return (
              <div key={i} className={`trk-step ${cls}`}>
                <div className="trk-bullet">{i <= idx ? s.ic : ''}</div>
                <div className="trk-txt">
                  <div className="trk-label">{s.f(fn)}</div>
                </div>
              </div>
            );
          })}
        </div>
        <div style={{padding:'0 22px'}}>
          <button className="cta-btn" style={{background:'linear-gradient(to left,#0EA5E9,#38BDF8)'}}>שלח/י לה הודעה</button>
          <button className="cta-btn" style={{marginTop:10,background:'var(--card)',color:'var(--text2)',boxShadow:'none'}} onClick={() => navigate('home')}>חזרה לבית</button>
        </div>
        <div style={{height:20}} />
      </div>
    </div>
  );
}
