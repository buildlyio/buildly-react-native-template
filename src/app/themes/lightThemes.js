import { DefaultTheme } from 'react-native-paper';
import { DefaultTheme as NavigationLightTheme } from '@react-navigation/native';

const colors = {
  white1: '#ffffff',
  white2: '#eff2f5',
  white3: '#d6dee5',
  green: '#41BAA6',
  gray: '#A8ADB3',
  red: '#d70e28',
  black: '#161617',
};

export const paperLightTheme = {
  ...DefaultTheme,
  dark: false,
  mode: 'adaptive',
  roundness: 8,
  colors: {
    primary: colors.green,
    background: colors.white1,
    surface: colors.white2,
    accent: colors.white2,
    error: colors.red,
    text: colors.black,
    onSurface: colors.black,
    disabled: colors.gray,
    placeholder: colors.gray,
    backdrop: colors.white2,
    notification: colors.green,
  },
};

export const navigationLightTheme = {
  dark: false,
  ...NavigationLightTheme,
  colors: {
    primary: colors.green,
    background: colors.white1,
    card: colors.black,
    text: colors.green,
    border: colors.gray,
    notification: colors.green,
  },
};
