import { configureFonts, DefaultTheme } from "react-native-paper";
import { DefaultTheme as NavigationLightTheme } from "@react-navigation/native";
import {
  FontFamily,
  FontSize,
  FontStyle,
  NavigationFontConfig,
  PaperFontConfig,
} from "./fonts";

const colors = {
  // Brand Colors
  primary: "rgba(255, 191, 0, 1)",
  secondary: "rgba(0, 16, 36, 1)",
  tertiary: "rgba(255, 111, 97, 1)",
  alternate: "rgba(59, 206, 172, 1)",
  // Utility Colors
  primary_text: "rgba(0, 0, 0, 0.8)",
  secondary_text: "rgba(0, 0, 0, 0.6)",
  primary_background: "rgba(250, 250, 250, 1)",
  secondary_background: "rgba(255, 255, 255, 1)",
  // Accent Colours
  accent1: "rgba(229, 229, 229, 1)",
  accent2: "rgba(193, 135, 0, 1)",
  accent3: "rgba(38, 122, 114, 1)",
  accent4: "rgba(38, 122, 114, 1)",
  // Semantic Colours
  success: "rgba(59, 206, 172, 1)",
  error: "rgba(255, 76, 76, 1)",
  warning: "rgba(255, 191, 0, 1)",
  info: "rgba(38, 122, 114, 1)",
  // Custom Colours
  on_primary: "rgba(255, 255, 255, 1)",
  on_secondary: "rgba(255, 255, 255, 1)",
  on_tertiary: "rgba(255, 255, 255, 1)",
  disabled_text: "rgba(0, 0, 0, 0.4)",
  divider_or_outline: "rgba(0, 0, 0, 0.12)",
  neutral_background: "rgba(0, 0, 0, 0.04)",
};

const paperColors = {
  primary: colors.primary,
  onPrimary: colors.on_primary,
  primaryContainer: "rgba(255, 223, 160, 1)",
  onPrimaryContainer: colors.secondary_text,

  secondary: colors.secondary,
  onSecondary: colors.on_secondary,
  secondaryContainer: "rgba(211, 228, 255, 1)",
  onSecondaryContainer: colors.primary_text,

  tertiary: colors.tertiary,
  onTertiary: colors.on_tertiary,
  tertiaryContainer: "rgba(255, 218, 213, 1)",
  onTertiaryContainer: colors.secondary_text,

  error: colors.error,
  onError: colors.on_primary,
  errorContainer: "rgba(255, 218, 214, 1)",
  onErrorContainer: colors.secondary_text,

  background: colors.primary_background,
  onBackground: colors.primary_text,

  surface: colors.secondary_background,
  onSurface: colors.primary_text,
  surfaceVariant: colors.accent1,
  onSurfaceVariant: colors.secondary_text,

  outline: colors.divider_or_outline,
  outlineVariant: colors.accent2,

  shadow: "rgba(0, 0, 0, 0.2)",
  scrim: "rgba(0, 0, 0, 0.3)",

  inverseSurface: colors.secondary,
  inverseOnSurface: colors.on_secondary,
  inversePrimary: colors.tertiary,

  elevation: {
    level0: "transparent",
    level1: "rgba(250, 250, 250, 1)",
    level2: "rgba(245, 245, 245, 1)",
    level3: "rgba(240, 240, 240, 1)",
    level4: "rgba(235, 235, 235, 1)",
    level5: "rgba(230, 230, 230, 1)",
  },

  surfaceDisabled: "rgba(0, 0, 0, 0.12)",
  onSurfaceDisabled: colors.disabled_text,
  backdrop: "rgba(54, 48, 36, 0.4)",
};

export const paperLightTheme = {
  ...DefaultTheme,
  dark: false,
  mode: "adaptive",
  roundness: 8,
  fonts: configureFonts(PaperFontConfig),
  fontSize: FontSize,
  fontFamily: FontFamily,
  fontStyle: FontStyle,
  colors: paperColors,
};

export const navigationLightTheme = {
  dark: false,
  ...NavigationLightTheme,
  fonts: NavigationFontConfig,
  colors: {
    primary: colors.primary,
    background: colors.primary_background,
    card: colors.secondary_background,
    text: colors.primary_text,
    border: colors.divider_or_outline,
    notification: colors.primary,
  },
};
