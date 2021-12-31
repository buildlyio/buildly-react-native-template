import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { adminScreens } from './adminRouteConstants';
import UserManagementScreen from './screens/UserManagementScreen';

const Stack = createStackNavigator();

const AdminStack = () => {
  return (
    <Stack.Navigator
      initialRouteName={adminScreens.USER_MANAGEMENT}
      screenOptions={{
        headerShown: false,
        gestureEnabled: false,
      }}>
      <Stack.Screen
        name={adminScreens.USER_MANAGEMENT}
        component={UserManagementScreen}
      />
    </Stack.Navigator>
  );
};

export default AdminStack;
