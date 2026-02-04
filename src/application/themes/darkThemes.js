import { DarkTheme, configureFonts } from "react-native-paper";
import { DarkTheme as NavigationDarkTheme } from "@react-navigation/native";
import {
  FontSize,
  FontFamily,
  FontStyle,
  NavigationFontConfig,
  PaperFontConfig,
} from "./fonts";

const colors = {
  // Brand Colors
  primary: "rgba(255, 191, 0, 1)",
  secondary: "rgba(0, 16, 36, 1)",
  tertiary: "rgba(255, 111, 97, 1)",
  alternate: "rgba(38, 45, 52, 1)",

  // Utility Colors
  primary_text: "rgba(255, 255, 255, 1)",
  secondary_text: "rgba(255, 255, 255, 0.8)",
  primary_background: "rgba(18, 18, 18, 1)",
  secondary_background: "rgba(0, 0, 0, 1)",

  // Accent Colours
  accent1: "rgba(63, 31, 77, 1)",
  accent2: "rgba(31, 70, 67, 1)",
  accent3: "rgba(75, 52, 44, 1)",
  accent4: "rgba(30, 34, 39, 1)",

  // Semantic Colours
  success: "rgba(0, 200, 83, 1)",
  error: "rgba(176, 0, 32, 1)",
  warning: "rgba(248, 198, 93, 1)",
  info: "rgba(255, 255, 255, 1)",

  // Custom Colors
  on_primary: "rgba(255, 255, 255, 1)",
  on_secondary: "rgba(255, 255, 255, 1)",
  on_tertiary: "rgba(255, 255, 255, 1)",
  disabled_text: "rgba(255, 255, 255, 0.2)",
  divider_or_outline: "rgba(255, 255, 255, 0.2)",
  neutral_background: "rgba(0, 0, 0, 0.04)",
};

const paperColors = {
  primary: colors.primary,
  onPrimary: colors.on_primary,
  primaryContainer: "rgba(146, 103, 0, 1)",
  onPrimaryContainer: colors.primary_text,

  secondary: colors.secondary,
  onSecondary: colors.on_secondary,
  secondaryContainer: "rgba(29, 42, 53, 1)",
  onSecondaryContainer: colors.primary_text,

  tertiary: colors.tertiary,
  onTertiary: colors.on_tertiary,
  tertiaryContainer: "rgba(99, 44, 35, 1)",
  onTertiaryContainer: colors.primary_text,

  error: colors.error,
  onError: colors.on_primary,
  errorContainer: "rgba(95, 0, 16, 1)",
  onErrorContainer: colors.primary_text,

  background: colors.primary_background,
  onBackground: colors.primary_text,

  surface: colors.secondary_background,
  onSurface: colors.primary_text,
  surfaceVariant: colors.accent4,
  onSurfaceVariant: colors.secondary_text,

  outline: colors.divider_or_outline,
  outlineVariant: colors.accent3,

  shadow: "rgba(0, 0, 0, 1)",
  scrim: "rgba(0, 0, 0, 0.5)",

  inverseSurface: colors.primary_text,
  inverseOnSurface: colors.secondary_background,
  inversePrimary: colors.tertiary,

  elevation: {
    level0: "transparent",
    level1: "rgba(25, 25, 25, 1)",
    level2: "rgba(30, 30, 30, 1)",
    level3: "rgba(35, 35, 35, 1)",
    level4: "rgba(40, 40, 40, 1)",
    level5: "rgba(45, 45, 45, 1)",
  },

  surfaceDisabled: "rgba(255, 255, 255, 0.12)",
  onSurfaceDisabled: colors.disabled_text,
  backdrop: "rgba(0, 0, 0, 0.4)",
};

export const paperDarkTheme = {
  ...DarkTheme,
  dark: true,
  mode: "adaptive",
  roundness: 8,
  fonts: configureFonts(PaperFontConfig),
  fontSize: FontSize,
  fontFamily: FontFamily,
  fontStyle: FontStyle,
  colors: paperColors,
};
export const navigationDarkTheme = {
  dark: true,
  ...NavigationDarkTheme,
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
