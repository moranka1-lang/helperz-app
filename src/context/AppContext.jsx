import { createContext, useContext, useState, useCallback } from 'react';

export const AppContext = createContext(null);

export function AppProvider({ children }) {
  const [screen, setScreen] = useState('home');
  const [bookedHelper, setBookedHelper] = useState('דינה כהן');
  const [bookedTime, setBookedTime] = useState('היום 11:00');

  const navigate = useCallback((id) => setScreen(id), []);

  return (
    <AppContext.Provider value={{ screen, navigate, bookedHelper, setBookedHelper, bookedTime, setBookedTime }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() { return useContext(AppContext); }
