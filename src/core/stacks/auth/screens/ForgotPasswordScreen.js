import React, { useRef, useState } from 'react';
import { Keyboard, ScrollView, View } from 'react-native';
import { Button, TextInput, useTheme } from 'react-native-paper';
import { useInput } from '../../../hooks/useInput';
import Svg from '../../../../assets/svg/logo.svg';
import { useNavigation } from '@react-navigation/native';
import { authScreens } from '../authRouteConstants';
import { SafeAreaView } from 'react-native-safe-area-context';
import { authStyles } from '../authStyles';

const ForgotPasswordScreen = () => {
  const email = useInput('', { required: true });
  const theme = useTheme();
  const { navigate } = useNavigation();

  /**
   * Sends a request for a password reset link
   */
  const handleSubmit = () => {
    Keyboard.dismiss();
  };

  /**
   * Navigates to the login screen
   */
  const gotoLogin = () => {
    Keyboard.dismiss();
    navigate(authScreens.LOGIN);
  };

  return (
    <View style={authStyles.container}>
      <ScrollView
        contentContainerStyle={authStyles.scrollContainer}
        alwaysBounceVertical={false}>
        <SafeAreaView style={authStyles.logoContainer}>
          <Svg
            style={authStyles.logo}
            width={136}
            height={100}
            fill={theme.colors.text}
          />
        </SafeAreaView>
        <TextInput
          style={authStyles.input}
          name="email"
          label="Email"
          mode="outlined"
          autoCapitalize="none"
          autoCorrect={false}
          autoComplete="email"
          returnKeyType="next"
          {...email.bind}
        />
        <View style={authStyles.buttons}>
          <Button
            dark
            style={authStyles.button}
            mode="contained"
            disabled={false}
            onPress={handleSubmit}>
            Forgot password
          </Button>
          <Button style={authStyles.button} mode="text" onPress={gotoLogin}>
            Back to Login
          </Button>
        </View>
      </ScrollView>
    </View>
  );
};

export default ForgotPasswordScreen;
