import React, { useEffect, useState } from 'react';
import { StatusBar } from 'react-native';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { Provider as PaperProvider } from 'react-native-paper';
import { paperDarkTheme, navigationDarkTheme } from './themes/darkThemes';
import { paperLightTheme, navigationLightTheme } from './themes/lightThemes';
import { NavigationContainer } from '@react-navigation/native';
import AppStack from './AppStack';
import AuthStack from '../core/stacks/auth/AuthStack';
import AuthuserProvider, {
  useAuthuser,
} from '../core/state/authuser/AuthuserProvider';
import oauthService from '../core/services/oauthService';
import PreferencesProvider, {
  usePreferences,
} from './state/preferences/PreferencesProvider';
import { useOnlineManager } from '../core/hooks/useOnlineManager';

const queryClient = new QueryClient({
  defaultOptions: { queries: { retry: 2 } },
});

const AppContent = () => {
  useOnlineManager();

  const { authState } = useAuthuser();
  const { darkMode } = usePreferences();
  const [validToken, setValidToken] = useState();

  useEffect(() => {
    oauthService.hasValidAccessToken().then(value => setValidToken(value));
  }, [authState]);

  return (
    <PaperProvider theme={darkMode ? paperDarkTheme : paperLightTheme}>
      <StatusBar barStyle={darkMode ? 'light-content' : 'dark-content'} />
      <NavigationContainer
        theme={darkMode ? navigationDarkTheme : navigationLightTheme}>
        {validToken ? <AppStack /> : <AppStack />}
      </NavigationContainer>
    </PaperProvider>
  );
};

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <PreferencesProvider>
        <AuthuserProvider>
          <AppContent />
        </AuthuserProvider>
      </PreferencesProvider>
    </QueryClientProvider>
  );
};

export default App;
