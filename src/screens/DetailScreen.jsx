import { useState } from 'react';
import { useApp } from '../context/AppContext';

export function DetailScreen() {
  const { screen, navigate } = useApp();
  const [selDay, setSelDay] = useState('היום');
  const [selHours, setSelHours] = useState(new Set(['11:00']));

  const days = ['היום','מחר','יום ה׳','עוד מועד'];
  const hours = ['09:00','11:00','13:00','15:00','17:00'];

  function toggleHour(h) {
    setSelHours(prev => {
      const s = new Set(prev);
      s.has(h) ? s.delete(h) : s.add(h);
      return s;
    });
  }

  return (
    <div className={`screen${screen === 'detail' ? ' active' : ''}`} id="detail">
      <div className="det-hero">
        <div style={{position:'absolute',inset:0,background:'linear-gradient(135deg,#0A1628,#0D2040,#050C16)'}} />
        <div style={{position:'absolute',width:200,height:200,borderRadius:'50%',background:'radial-gradient(circle,rgba(14,165,233,.1),transparent 70%)',top:-40,left:-40,pointerEvents:'none'}} />
        <div className="det-ico-big">
          <svg viewBox="0 0 24 24" style={{stroke:'rgba(14,165,233,.15)'}}><circle cx="12" cy="12" r="5"/><path d="M12 3v2M12 19v2M3 12h2M19 12h2"/></svg>
        </div>
        <div className="back-btn" onClick={() => navigate('home')}>
          <svg viewBox="0 0 24 24"><path d="M15 18l-6-6 6-6"/></svg>
        </div>
        <div style={{position:'absolute',bottom:14,right:22,zIndex:2}}>
          <div style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:22,letterSpacing:'.05em',color:'var(--sky-t)'}}>MOSSACK</div>
        </div>
      </div>
      <div className="scroll">
        <div className="det-body">
          <div className="det-title">ליווי למוסך</div>
          <div className="det-desc">מישהי שתגיע איתך, תעזור לתקשר עם הטכנאי, ותחזיר אותך הביתה בשלום.</div>
          {[
            {y:true, t:'ליווי מהבית ועד המוסך'},
            {y:true, t:'תיווך מול הטכנאי'},
            {y:true, t:'חזרה הביתה לאחר מסירה'},
            {y:false,t:'לא כולל עלות התיקון'},
            {y:false,t:'לא כולל הסעה ברכב הפרטי'},
          ].map((item,i) => (
            <div key={i} className="inc-row">
              <div className={`inc-dot ${item.y?'y':'n'}`}>
                <svg viewBox="0 0 12 12">{item.y ? <path d="M2 6l3 3 5-5"/> : <path d="M2 2l8 8M10 2l-8 8"/>}</svg>
              </div>
              <div className="inc-txt">{item.t}</div>
            </div>
          ))}
          <div style={{fontSize:13,fontWeight:700,color:'var(--text)',margin:'18px 0 2px'}}>מתי נשלח לך הלפר?</div>
          <div className="time-tabs">
            {days.map(d => (
              <button key={d} className={`ttab${selDay===d?' on':''}`} onClick={() => setSelDay(d)}>{d}</button>
            ))}
          </div>
          <div className="hours">
            {hours.map(h => (
              <button key={h} className={`hr${selHours.has(h)?' on':''}`} onClick={() => toggleHour(h)}>{h}</button>
            ))}
          </div>
          <button className="cta-btn" onClick={() => navigate('providers')}>ראי הלפרים פנויים</button>
          <div style={{height:24}} />
        </div>
      </div>
    </div>
  );
}
