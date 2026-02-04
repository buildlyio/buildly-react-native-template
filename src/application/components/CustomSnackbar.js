// src/components/CustomSnackbar.js
import { StyleSheet } from "react-native";
import { Snackbar, useTheme, Text } from "react-native-paper";
import { moderateScale } from "react-native-size-matters";
import { Ionicons } from "@expo/vector-icons";

import { useSnackbarStore } from "@core-zustand/alert/snackbarStore";

const CustomSnackbar = () => {
  const { snackbar, hideSnackbar } = useSnackbarStore();
  const theme = useTheme();
  const styles = makeStyles(theme);

  const onDismiss = () => {
    hideSnackbar();
    if (snackbar.onClose) {
      snackbar.onClose();
    }
  };

  return (
    <Snackbar
      visible={snackbar.visible}
      duration={snackbar.duration || 2000}
      onDismiss={onDismiss}
      action={{
        label: (
          <Ionicons
            name="close"
            size={moderateScale(24)}
            color={theme.colors.onPrimary}
          />
        ),
        onPress: onDismiss,
      }}
      style={[styles.snackbar, styles[snackbar.type]]}
    >
      <Text style={styles.text}>{snackbar.message}</Text>
    </Snackbar>
  );
};

const makeStyles = (theme) =>
  StyleSheet.create({
    snackbar: {
      marginHorizontal: moderateScale(16),
      borderRadius: moderateScale(4),
    },
    default: {
      backgroundColor: theme.colors.secondary,
    },
    error: {
      backgroundColor: theme.colors.error,
    },
    text: [
      theme.fontStyle.labelMedium,
      {
        color: theme.colors.onPrimary,
      },
    ],
  });

export default CustomSnackbar;
