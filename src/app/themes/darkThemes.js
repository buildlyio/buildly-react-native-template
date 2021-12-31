import { DarkTheme } from 'react-native-paper';

const colors = {
  black1: '#141519',
  black2: '#1F2225',
  black3: '#383b3f',
  green: '#41BAA6',
  gray: '#47494c',
  red: '#fd566c',
  white: '#eff7ff',
};

export const paperDarkTheme = {
  ...DarkTheme,
  dark: true,
  mode: 'adaptive',
  roundness: 8,
  colors: {
    primary: colors.green,
    background: colors.black1,
    surface: colors.black2,
    accent: colors.black2,
    error: colors.red,
    text: colors.white,
    onSurface: colors.white,
    disabled: colors.gray,
    placeholder: colors.gray,
    backdrop: colors.black2,
    notification: colors.green,
  },
};

export const navigationDarkTheme = {
  dark: true,
  colors: {
    primary: colors.green,
    background: colors.black1,
    card: colors.black2,
    text: colors.white,
    border: colors.gray,
    notification: colors.green,
  },
};
