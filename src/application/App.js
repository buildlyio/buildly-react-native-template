import { useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { PaperProvider } from "react-native-paper";

import { paperDarkTheme, navigationDarkTheme } from "./themes/darkThemes";
import { paperLightTheme, navigationLightTheme } from "./themes/lightThemes";
import { NavigationContainer } from "@react-navigation/native";
import * as SplashScreen from "expo-splash-screen";

import AppStack from "./AppStack";
import AuthStack from "@app-stacks/auth/AuthStack";
import PreferencesProvider, {
  usePreferences,
} from "./state/preferences/PreferencesProvider";
import { useOnlineManager } from "@app-hooks/useOnlineManager";
import CustomSnackbar from "@app-components/CustomSnackbar";
import useAuthStore from "@app-zustand/useAuthStore";

const queryClient = new QueryClient({
  defaultOptions: { queries: { retry: 2 } },
});

const AppContent = () => {
  useOnlineManager();

  const { isAuthenticated, checkAuth, isLoading } = useAuthStore();
  const { darkMode } = usePreferences();

  useEffect(() => {
    const init = async () => {
      await checkAuth();
    };

    init().finally(async () => {
      await SplashScreen.hideAsync();
      console.log("SplashScreen has been hidden successfully");
    });
  }, [isLoading]);

  return (
    <PaperProvider theme={darkMode ? paperDarkTheme : paperLightTheme}>
      <StatusBar style={darkMode ? "light" : "dark"} />
      <NavigationContainer
        theme={darkMode ? navigationDarkTheme : navigationLightTheme}
      >
        {isAuthenticated ? <AppStack /> : <AuthStack />}
      </NavigationContainer>
      <CustomSnackbar />
    </PaperProvider>
  );
};

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <PreferencesProvider>
        <AppContent />
      </PreferencesProvider>
    </QueryClientProvider>
  );
};

export default App;
