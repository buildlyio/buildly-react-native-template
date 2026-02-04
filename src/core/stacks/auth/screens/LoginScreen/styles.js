import { StyleSheet } from "react-native";
import { moderateScale } from "react-native-size-matters";

export const makeStyles = (theme) =>
  StyleSheet.create({
    appbar: {
      backgroundColor: theme.colors.surface,
      elevation: 0,
    },
    screenContainer: {
      backgroundColor: theme.colors.surface,
      flex: 1,
    },
    container: {
      flexGrow: 1,
      paddingHorizontal: moderateScale(16),
    },

    heading: [
      theme.fontStyle.headlineLarge,
      {
        color: theme.colors.onBackground,
      },
    ],
    subHeading: [
      theme.fontStyle.bodyLarge,
      {
        color: theme.colors.onBackground,
        marginTop: moderateScale(8),
      },
    ],
    inputContainer: {
      marginVertical: moderateScale(16),
      gap: moderateScale(8),
    },
    input: [
      theme.fontStyle.bodyLarge,
      {
        backgroundColor: theme.colors.background,
        borderTopLeftRadius: moderateScale(4),
        borderTopRightRadius: moderateScale(4),
        paddingHorizontal: moderateScale(16),
      },
    ],
    errorText: [
      theme.fontStyle.labelMedium,
      {
        color: theme.colors.error,
        marginLeft: moderateScale(16),
      },
    ],
    forgotPassText: [
      theme.fontStyle.labelMedium,
      {
        color: theme.colors.onBackground,
        alignSelf: "flex-end",
      },
    ],
    btnLabelStyle: [
      theme.fontStyle.labelLarge,
      {
        color: theme.colors.secondary,
        textTransform: "capitalize",
        letterSpacing: 0,
        paddingVertical: 10,
        marginVertical: 0,
      },
    ],
    btnStyle: {
      backgroundColor: theme.colors.primary,
      paddingVertical: moderateScale(8),
      marginBottom: moderateScale(27),
    },
    btnLoader: {
      color: theme.colors.onPrimaryContainer,
    },
    dontHaveAccountRow: {
      flexDirection: "row",
      justifyContent: "center",
      gap: moderateScale(5),
    },
    dontHaveAccountText: [
      theme.fontStyle.labelMedium,
      {
        color: theme.colors.secondary,
      },
    ],
    signUpHereText: [
      theme.fontStyle.labelMediumItalic,
      {
        color: theme.colors.secondary,
        textDecorationLine: "underline",
        fontStyle: "italic",
      },
    ],
  });
