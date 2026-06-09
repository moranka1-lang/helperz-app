import { useApp } from '../context/AppContext';

export function WelcomeScreen() {
  const { screen, navigate } = useApp();
  return (
    <div className={`screen wel${screen === 'welcome' ? ' active' : ''}`} id="welcome">
      <div className="wel-hero"><div className="wel-emoji">🤝</div></div>
      <div className="wel-body">
        <div className="wel-title">שמחים שהגעת 👋</div>
        <div className="wel-sub">הלפרז מחברת אותך לאנשים אמיתיים שישמחו לעזור — היום, מחר, או מתי שתצטרכ/י.</div>
        <button className="join-next" onClick={() => navigate('onboarding')}>בואו נתחיל</button>
        <button className="join-next" style={{marginTop: 10, background: 'var(--card)', color: 'var(--text2)'}} onClick={() => navigate('home')}>יש לי כבר חשבון</button>
      </div>
    </div>
  );
}
