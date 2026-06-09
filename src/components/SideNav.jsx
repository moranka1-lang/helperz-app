import { useApp } from '../context/AppContext';

const NAV_ITEMS = [
  { id: 'splash', label: 'פתיחה', icon: <path d="M12 3l2.2 5.4L20 9l-4.4 3.8L17 19l-5-3-5 3 1.4-6.2L4 9l5.8-.6z"/> },
  { id: 'home',   label: 'בית',   icon: <><path d="M3 9.5L12 3l9 6.5V20a1 1 0 01-1 1H4a1 1 0 01-1-1V9.5z"/><path d="M9 21V12h6v9"/></> },
  { id: 'domains',label: 'תחומים',icon: <><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 010 20"/></> },
  { id: 'providers',label:'הלפרים',icon:<><circle cx="9" cy="7" r="4"/><path d="M3 21v-2a4 4 0 014-4h4a4 4 0 014 4v2"/><path d="M16 3.13a4 4 0 010 7.75M21 21v-2a4 4 0 00-3-3.87"/></> },
];

const NAV_ITEMS2 = [
  { id: 'buddy',  label: 'חבר',   icon: <><circle cx="9" cy="8" r="3"/><circle cx="16" cy="8" r="3"/><path d="M3 20c0-3.3 2.7-6 6-6M13 20c0-3.3 2.7-6 6-6M9 14c1-.4 2-.6 3.5-.6S15 13.6 16 14"/></> },
  { id: 'mentor', label: 'מנטור', icon: <><circle cx="12" cy="7" r="4"/><path d="M5 20c0-4 3.1-7 7-7"/><path d="M15 14l2 2 4-4"/></> },
];

const NAV_ITEMS3 = [
  { id: 'onboarding', label: 'הרשמה', icon: <><path d="M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><line x1="19" y1="8" x2="19" y2="14"/><line x1="22" y1="11" x2="16" y2="11"/></> },
  { id: 'confirm',    label: 'אישור',  icon: <><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><path d="M22 4L12 14.01l-3-3"/></> },
  { id: 'status',     label: 'מעקב',   icon: <><circle cx="12" cy="12" r="9"/><path d="M12 8v4l3 2"/></> },
];

function NavBtn({ id, label, icon, currentScreen, navigate }) {
  const isOn = currentScreen === id;
  return (
    <button className={`nb${isOn ? ' on' : ''}`} onClick={() => navigate(id)}>
      <svg viewBox="0 0 24 24">{icon}</svg>
      <span className="nlbl">{label}</span>
    </button>
  );
}

export function SideNav() {
  const { screen, navigate } = useApp();
  return (
    <div className="side-nav">
      {NAV_ITEMS.map(item => (
        <NavBtn key={item.id} {...item} currentScreen={screen} navigate={navigate} />
      ))}
      <div className="ndiv" />
      {NAV_ITEMS2.map(item => (
        <NavBtn key={item.id} {...item} currentScreen={screen} navigate={navigate} />
      ))}
      <div className="ndiv" />
      {NAV_ITEMS3.map(item => (
        <NavBtn key={item.id} {...item} currentScreen={screen} navigate={navigate} />
      ))}
    </div>
  );
}
