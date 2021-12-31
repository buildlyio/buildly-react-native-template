import React, { useEffect, useState } from 'react';
import { StatusBar } from 'react-native';

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

const AppContent = () => {
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
    <PreferencesProvider>
      <AuthuserProvider>
        <AppContent />
      </AuthuserProvider>
    </PreferencesProvider>
  );
};

export default App;
