import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useMemo, useState, useContext, useEffect } from "react";
import { useColorScheme } from "react-native";

/**
 * Context for the preferences state
 */
const PreferencesContext = React.createContext({
  darkMode: false,
});

function PreferencesProvider({ children }) {
  const [darkMode, setDarkMode] = useState(useColorScheme() === "dark");

  useEffect(() => {
    AsyncStorage.getItem("theme").then((value) => {
      setDarkMode(value === "dark");
    });
  }, []);

  const value = useMemo(() => {
    return {
      darkMode,
      setDarkMode,
    };
  }, [darkMode]);

  return (
    <PreferencesContext.Provider value={value}>
      {children}
    </PreferencesContext.Provider>
  );
}

/**
 * Returns the current PreferencesContext value
 */
const usePreferences = () => useContext(PreferencesContext);
export { PreferencesContext, usePreferences };
export default PreferencesProvider;
