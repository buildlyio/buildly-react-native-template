import React from 'react';
import { appScreens } from './appRouteConstants';
import { createDrawerNavigator } from '@react-navigation/drawer';
import AdminStack from '../core/stacks/admin/AdminStack';
import { IconButton, useTheme } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { useAuthuser } from '../core/state/authuser/AuthuserProvider';
import DashboardScreen from './screens/DashboardScreen';
import SettingsStack from './stacks/settings/SettingsStack';

const Drawer = createDrawerNavigator();

const DrawerToggle = () => {
  const { toggleDrawer } = useNavigation();
  const theme = useTheme();
  return (
    <IconButton
      icon="menu"
      size={20}
      onPress={toggleDrawer}
      color={theme.colors.primary}
    />
  );
};

const AppStack = () => {
  const { logout } = useAuthuser();
  const theme = useTheme();
  return (
    <Drawer.Navigator
      initialRouteName={appScreens.DASHBOARD}
      screenOptions={{
        headerLeft: DrawerToggle,
        headerRight: () => (
          <IconButton
            icon="logout"
            size={20}
            onPress={logout}
            color={theme.colors.primary}
          />
        ),
      }}>
      <Drawer.Screen name={appScreens.DASHBOARD} component={DashboardScreen} />
      <Drawer.Screen name={appScreens.SETTINGS} component={SettingsStack} />
      <Drawer.Screen name={appScreens.ADMIN} component={AdminStack} />
      {/* Add your screens here */}
    </Drawer.Navigator>
  );
};

export default AppStack;
