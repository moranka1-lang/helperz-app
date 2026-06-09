import { useApp } from '../context/AppContext';

function firstName(n) { return (n || '').split(/[\s—]/)[0].trim(); }

export function ConfirmScreen() {
  const { screen, navigate, bookedHelper, bookedTime } = useApp();
  const fn = firstName(bookedHelper);

  return (
    <div className={`screen${screen === 'confirm' ? ' active' : ''}`} id="confirm">
      <div className="conf-hero">
        <div className="conf-ring2" />
        <div className="conf-ring" />
        <div className="conf-orb">
          <svg viewBox="0 0 24 24">
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"/>
            <path d="M22 4L12 14.01l-3-3"/>
          </svg>
        </div>
      </div>
      <div className="conf-body">
        <div className="conf-title">REQUEST SENT!</div>
        <div className="conf-sub">מעולה — שלחנו ל{fn}. בד"כ עונה תוך כמה דקות 🙌</div>
        <div className="stat-chip">
          <div className="stat-dot" />
          ממתינה לאישור — בד"כ תוך 5 דקות
        </div>
        <div className="conf-card">
          <div className="conf-row"><span className="conf-lbl">שירות</span><span className="conf-val">ליווי למוסך</span></div>
          <div className="conf-row"><span className="conf-lbl">Helper</span><span className="conf-val">{bookedHelper}</span></div>
          <div className="conf-row"><span className="conf-lbl">מועד</span><span className="conf-val">{bookedTime}</span></div>
          <div className="conf-row"><span className="conf-lbl">סטטוס</span><span className="conf-val" style={{color:'var(--sky-t)'}}>ממתין לאישור</span></div>
        </div>
        <div style={{fontSize:12,color:'var(--text3)',textAlign:'center',margin:'0 0 14px',lineHeight:1.5}}>אפשר לבטל עד שעתיים לפני, ללא עלות.</div>
        <button className="cta-btn" onClick={() => navigate('status')}>עקבי אחר ההזמנה</button>
        <button className="cta-btn" style={{marginTop:10,background:'var(--card)',color:'var(--text2)',boxShadow:'none'}} onClick={() => navigate('home')}>חזרה לבית</button>
      </div>
    </div>
  );
}
