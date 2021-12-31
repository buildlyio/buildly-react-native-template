import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { settingsScreens } from './settingsRouteConstants';
import PreferencesScreen from './screens/PreferencesScreen';

const Stack = createStackNavigator();

const SettingsStack = () => {
  return (
    <Stack.Navigator
      initialRouteName={settingsScreens.PREFERENCES}
      screenOptions={{
        headerShown: false,
        gestureEnabled: false,
      }}>
      <Stack.Screen
        name={settingsScreens.PREFERENCES}
        component={PreferencesScreen}
      />
    </Stack.Navigator>
  );
};

export default SettingsStack;
