import { AppProvider } from './context/AppContext';
import { SideNav } from './components/SideNav';
import { SplashScreen } from './screens/SplashScreen';
import { WelcomeScreen } from './screens/WelcomeScreen';
import { HomeScreen } from './screens/HomeScreen';
import { DomainsScreen } from './screens/DomainsScreen';
import { DetailScreen } from './screens/DetailScreen';
import { ProvidersScreen } from './screens/ProvidersScreen';
import { BuddyScreen } from './screens/BuddyScreen';
import { MentorScreen } from './screens/MentorScreen';
import { OnboardingScreen } from './screens/OnboardingScreen';
import { JoinScreen } from './screens/JoinScreen';
import { ConfirmScreen } from './screens/ConfirmScreen';
import { StatusScreen } from './screens/StatusScreen';

function Phone() {
  return (
    <div className="phone">
      <SplashScreen />
      <WelcomeScreen />
      <HomeScreen />
      <DomainsScreen />
      <DetailScreen />
      <ProvidersScreen />
      <BuddyScreen />
      <MentorScreen />
      <OnboardingScreen />
      <JoinScreen />
      <ConfirmScreen />
      <StatusScreen />
    </div>
  );
}

export default function App() {
  return (
    <AppProvider>
      <SideNav />
      <Phone />
    </AppProvider>
  );
}
