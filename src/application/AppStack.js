import { Pressable, StyleSheet, View } from "react-native";
import { Appbar, Text, useTheme } from "react-native-paper";
import { moderateScale } from "react-native-size-matters";
import { createStackNavigator } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";

import { appScreens } from "./appRouteConstants";
import SettingsStack from "./stacks/settings/SettingsStack";
import { usePreferences } from "./state/preferences/PreferencesProvider";
import DashboardScreen from "./screens/DashboardScreen";
import AdminStack from "@app-stacks/admin/AdminStack";
import useAuthStore from "@app-zustand/useAuthStore";

const Stack = createStackNavigator();

export const Header = (props) => {
  const theme = useTheme();
  const { darkMode } = usePreferences();

  const styles = makeStyles(theme);
  return (
    <Appbar.Header elevated style={styles.headerContainer} {...props}>
      {props.back ? (
        <>
          <Appbar.BackAction onPress={props.navigation.goBack} />
          <Appbar.Content
            title={props.options.title}
            titleStyle={styles.backLabel}
          />
        </>
      ) : (
        <Text
          style={{
            marginLeft: moderateScale(16),
            fontSize: moderateScale(24),
            fontWeight: "bold",
            color: darkMode
              ? theme.colors.onPrimaryContainer
              : theme.colors.secondary,
          }}
        >
          Buildly
        </Text>
      )}
      {props.options?.headerRight && (
        <View style={styles.headerRightIconSpace}>
          {typeof props.options.headerRight === "function"
            ? props.options.headerRight()
            : props.options.headerRight}
        </View>
      )}
    </Appbar.Header>
  );
};

const AppStack = () => {
  const theme = useTheme();
  const styles = makeStyles(theme);
  const navigation = useNavigation();
  const authStore = useAuthStore();

  return (
    <Stack.Navigator
      initialRouteName={appScreens.DASHBOARD}
      screenOptions={{
        header: Header,
      }}
    >
      <Stack.Screen
        name={appScreens.DASHBOARD}
        component={DashboardScreen}
        options={{
          headerRight: (
            <View style={styles.headerRight}>
              {/* Admin */}
              <Pressable
                onPress={() => {
                  navigation.navigate(appScreens.ADMIN);
                }}
              >
                <MaterialIcons
                  name="admin-panel-settings"
                  size={moderateScale(24)}
                  color={theme.colors.onPrimaryContainer}
                />
              </Pressable>

              {/* Preferences */}
              <Pressable
                onPress={() => {
                  navigation.navigate(appScreens.SETTINGS);
                }}
              >
                <Ionicons
                  name="settings-sharp"
                  size={moderateScale(24)}
                  color={theme.colors.onPrimaryContainer}
                />
              </Pressable>

              {/* Logout */}
              <Pressable onPress={() => authStore.logout()}>
                <MaterialIcons
                  name="logout"
                  size={moderateScale(24)}
                  color={theme.colors.onPrimaryContainer}
                />
              </Pressable>
            </View>
          ),
        }}
      />
      <Stack.Screen
        name={appScreens.SETTINGS}
        component={SettingsStack}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={appScreens.ADMIN}
        component={AdminStack}
        options={{
          headerShown: false,
        }}
      />
      {/* Add your screens here */}
    </Stack.Navigator>
  );
};

export default AppStack;

export const makeStyles = (theme) =>
  StyleSheet.create({
    headerRightIconSpace: {
      marginRight: moderateScale(16),
    },
    headerContainer: {
      paddingBottom: moderateScale(12),
      justifyContent: "space-between",
      backgroundColor: theme.colors.background,
    },
    backLabel: [
      theme.fontStyle.titleLarge,
      { colors: theme.colors.onPrimaryContainer },
    ],
    headerRight: {
      width: moderateScale(100),
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
    },
  });
