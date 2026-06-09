import { useState } from 'react';
import { useApp } from '../context/AppContext';

const DOMAINS = [
  { id:'d1', n:8,  color:'#0EA5E9', bg:'linear-gradient(135deg,#0A1E38,#0D3060)', label:'ליווי למוסך', cnt:'8 הלפרות',
    icon:<><circle cx="12" cy="12" r="5"/><path d="M12 3v2M12 19v2M3 12h2M19 12h2"/></> },
  { id:'d2', n:12, color:'#F97316', bg:'linear-gradient(135deg,#2A1008,#5A1E08)', label:'חברה לקשיש', cnt:'12 הלפרות',
    icon:<><circle cx="12" cy="8" r="4.5"/><path d="M5 22c0-3.9 3.1-7 7-7s7 3.1 7 7"/></> },
  { id:'d3', n:6,  color:'#10B981', bg:'linear-gradient(135deg,#042818,#065A28)', label:'ליווי לרופא', cnt:'6 הלפרות',
    icon:<><rect x="3" y="3" width="18" height="18" rx="5"/><path d="M12 8v8M8 12h8"/></> },
  { id:'d4', n:4,  color:'#F59E0B', bg:'linear-gradient(135deg,#1A1204,#3A2808)', label:'שמירת בית', cnt:'4 הלפרות',
    icon:<path d="M3 11L12 3l9 8v11a1 1 0 01-1 1H4a1 1 0 01-1-1V11z"/> },
  { id:'d5', n:7,  color:'#8B5CF6', bg:'linear-gradient(135deg,#140820,#2A1050)', label:'הנדי מן', cnt:'7 הלפרות',
    icon:<path d="M14.5 3.5C13 2 10.5 2 9 3.5L3.5 9C2 10.5 2 13 3.5 14.5L9.5 20.5C11 22 13.5 22 15 20.5L20.5 15C22 13.5 22 11 20.5 9.5L14.5 3.5z"/> },
  { id:'d6', n:9,  color:'#EC4899', bg:'linear-gradient(135deg,#1A0410,#3A0828)', label:'עם ילדים', cnt:'9 הלפרות',
    icon:<><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/></> },
];

const DEMAND = [
  { label:'ליווי למוסך',  pct:82 },
  { label:'ליווי לרופא',  pct:91 },
  { label:'חברה לקשיש',  pct:54, dim:true },
  { label:'שמירת בית',   pct:38, dim:true },
  { label:'הנדי מן',     pct:66, dim:true },
  { label:'עם ילדים',    pct:74, dim:true },
];

export function JoinScreen() {
  const { screen, navigate } = useApp();
  const [sel, setSel] = useState(new Set(['d1','d3']));

  function toggle(id) {
    setSel(prev => { const s=new Set(prev); s.has(id)?s.delete(id):s.add(id); return s; });
  }

  return (
    <div className={`screen${screen === 'join' ? ' active' : ''}`} id="join">
      <div className="status"><span className="stime">9:41</span></div>
      <div className="join-hdr">
        <div className="join-step">שלב 2 מתוך 4</div>
        <div className="join-title">IN WHICH<br />FIELDS?</div>
        <div className="join-sub">בחרי תחומי פעילות</div>
      </div>
      <div className="join-prog"><div className="join-fill" /></div>
      <div className="join-body">
        <div className="jlbl">בחרי תחומים</div>
        <div className="jnote">כל תחום מציג כמה Helperz פעילות וכמה הביקוש</div>
        <div className="ds-grid">
          {DOMAINS.map(d => (
            <div key={d.id} className={`ds-card${sel.has(d.id)?' sel':''}`} style={{background:d.bg}} onClick={() => toggle(d.id)}>
              <div className="ds-chk"><svg viewBox="0 0 11 9"><path d="M1 4.5l3 3 6-6"/></svg></div>
              <div className="ds-n" style={{color:d.color}}>{d.n}</div>
              <div className="ds-ico"><svg viewBox="0 0 24 24">{d.icon}</svg></div>
              <div className="ds-name">{d.label}</div>
              <div className="ds-cnt">{d.cnt}</div>
            </div>
          ))}
        </div>
        <div style={{height:16}} />
        <div className="jlbl">ביקוש מול היצע</div>
        <div className="jnote">בר גבוה = ביקוש גבוה יחסית להיצע</div>
        <div className="comp-wrap">
          {DEMAND.map(d => (
            <div key={d.label} className={`comp-row${d.dim?' dim':''}`}>
              <div className="comp-name">{d.label}</div>
              <div className="comp-track"><div className="comp-fill" style={{width:d.pct+'%'}} /></div>
              <div className="comp-pct">{d.pct}%</div>
            </div>
          ))}
        </div>
        <div style={{height:8}} />
      </div>
      <div className="join-next-wrap">
        <button className="join-next" onClick={() => navigate('confirm')}>המשך לשלב הבא</button>
      </div>
    </div>
  );
}
