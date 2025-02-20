// src/components/CustomSnackbar.js
import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { Snackbar, useTheme, Theme } from 'react-native-paper';
import { useSnackbarStore } from '../../core/zustand/alert/snackbarStore';

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
    <SafeAreaView>
      <Snackbar
        visible={snackbar.visible}
        duration={snackbar.duration || 2000}
        onDismiss={onDismiss}
        action={{
          label: '',
          icon: 'close',
          onPress: onDismiss,
        }}
        style={[styles.snackbar, styles[snackbar.type]]}>
        {snackbar.message}
      </Snackbar>
    </SafeAreaView>
  );
};

const makeStyles = (theme: Theme) =>
  StyleSheet.create({
    snackbar: {
      marginHorizontal: 16,
    },
    default: {
      backgroundColor: theme.colors.onSurface,
    },
    success: {
      backgroundColor: theme.colors.primary,
    },
    error: {
      backgroundColor: theme.colors.error,
    },
  });

export default CustomSnackbar;
