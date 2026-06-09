import { useApp } from '../context/AppContext';

export function DomainsScreen() {
  const { screen, navigate } = useApp();
  return (
    <div className={`screen${screen === 'domains' ? ' active' : ''}`} id="domains">
      <div className="status"><span className="stime">9:41</span></div>
      <div className="hdr">
        <div className="logo">ALL DOMAINS</div>
        <div className="hdr-sub">בחרי תחום לחיפוש הלפרית</div>
      </div>
      <div className="scroll">
        <div className="dom-grid">
          <div className="dom-card" style={{background:'linear-gradient(135deg,#0A1E38,#0D3060)'}} onClick={() => navigate('detail')}>
            <div className="dom-n" style={{color:'#0EA5E9'}}>8</div>
            <div className="dom-ico"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="5"/><path d="M12 3v2M12 19v2M3 12h2M19 12h2"/></svg></div>
            <div className="dom-name">ליווי למוסך</div><div className="dom-cnt">8 הלפרים</div><div className="dom-pill">פנוי היום</div>
          </div>
          <div className="dom-card" style={{background:'linear-gradient(135deg,#2A1008,#5A1E08)'}} onClick={() => navigate('detail')}>
            <div className="dom-n" style={{color:'#F97316'}}>12</div>
            <div className="dom-ico"><svg viewBox="0 0 24 24"><circle cx="12" cy="8" r="4.5"/><path d="M5 22c0-3.9 3.1-7 7-7s7 3.1 7 7"/></svg></div>
            <div className="dom-name">חברה לקשיש</div><div className="dom-cnt">12 הלפרים</div><div className="dom-pill">פנוי היום</div>
          </div>
          <div className="dom-card" style={{background:'linear-gradient(135deg,#042818,#065A28)'}} onClick={() => navigate('detail')}>
            <div className="dom-n" style={{color:'#10B981'}}>6</div>
            <div className="dom-ico"><svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="5"/><path d="M12 8v8M8 12h8"/></svg></div>
            <div className="dom-name">ליווי לרופא</div><div className="dom-cnt">6 הלפרים</div>
          </div>
          <div className="dom-card" style={{background:'linear-gradient(135deg,#1A1204,#3A2808)'}} onClick={() => navigate('detail')}>
            <div className="dom-n" style={{color:'#F59E0B'}}>4</div>
            <div className="dom-ico"><svg viewBox="0 0 24 24"><path d="M3 11L12 3l9 8v11a1 1 0 01-1 1H4a1 1 0 01-1-1V11z"/></svg></div>
            <div className="dom-name">שמירת בית</div><div className="dom-cnt">4 הלפרים</div>
          </div>
          <div className="dom-card" style={{background:'linear-gradient(135deg,#140820,#2A1050)'}} onClick={() => navigate('detail')}>
            <div className="dom-n" style={{color:'#8B5CF6'}}>7</div>
            <div className="dom-ico"><svg viewBox="0 0 24 24"><path d="M14.5 3.5C13 2 10.5 2 9 3.5L3.5 9C2 10.5 2 13 3.5 14.5L9.5 20.5C11 22 13.5 22 15 20.5L20.5 15C22 13.5 22 11 20.5 9.5L14.5 3.5z"/></svg></div>
            <div className="dom-name">הנדי מן/וומן</div><div className="dom-cnt">7 הלפרים</div><div className="dom-pill">פנוי היום</div>
          </div>
          <div className="dom-card" style={{background:'linear-gradient(135deg,#041818,#085A50)'}} onClick={() => navigate('detail')}>
            <div className="dom-n" style={{color:'#14B8A6'}}>5</div>
            <div className="dom-ico"><svg viewBox="0 0 24 24"><ellipse cx="12" cy="11" rx="8" ry="5"/><path d="M4 11v5c0 2.8 3.6 5 8 5s8-2.2 8-5v-5"/></svg></div>
            <div className="dom-name">בישול ונקיון</div><div className="dom-cnt">5 הלפרים</div>
          </div>
          <div className="dom-card" style={{background:'linear-gradient(135deg,#1A0814,#401030)'}} onClick={() => navigate('detail')}>
            <div className="dom-n" style={{color:'#EC4899'}}>9</div>
            <div className="dom-ico"><svg viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/></svg></div>
            <div className="dom-name">עזרה עם ילדים</div><div className="dom-cnt">9 הלפרים</div>
          </div>
          <div className="dom-card" style={{background:'linear-gradient(135deg,#1A1A08,#304010)'}} onClick={() => navigate('buddy')}>
            <div className="dom-n" style={{color:'#F97316'}}>∞</div>
            <div className="dom-ico"><svg viewBox="0 0 24 24"><circle cx="9" cy="8" r="3"/><circle cx="16" cy="8" r="3"/><path d="M3 20c0-3.3 2.7-6 6-6M13 20c0-3.3 2.7-6 6-6"/></svg></div>
            <div className="dom-name">חבר לרגע</div><div className="dom-cnt">ים · אימון · נסיעות</div><div className="dom-pill">חדש</div>
          </div>
        </div>
        <div style={{height:16}} />
      </div>
      <div className="tabs">
        <div className="tab" onClick={() => navigate('home')}>
          <svg viewBox="0 0 24 24"><path d="M3 9.5L12 3l9 6.5V20a1 1 0 01-1 1H4a1 1 0 01-1-1V9.5z"/></svg>
          <span>בית</span>
        </div>
        <div className="tab on">
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
