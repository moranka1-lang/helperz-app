import { useApp } from '../context/AppContext';

export function SplashScreen() {
  const { screen, navigate } = useApp();
  return (
    <div className={`screen splash${screen === 'splash' ? ' active' : ''}`} id="splash" onClick={() => navigate('welcome')}>
      <div className="splash-logo">HELPERZ</div>
      <div className="splash-slogan">הלפרז — כי לפעמים כולנו צריכים יד</div>
      <div className="splash-dot" />
    </div>
  );
}
