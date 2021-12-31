import React, { useRef, useState } from 'react';
import { Keyboard, ScrollView, View } from 'react-native';
import { Button, TextInput, useTheme } from 'react-native-paper';
import { useInput } from '../../../hooks/useInput';
import Svg from '../../../../assets/svg/logo.svg';
import SafeAreaView from 'react-native-safe-area-view';
import { useNavigation } from '@react-navigation/native';
import { authScreens } from '../authRouteConstants';
import { authStyles } from '../authStyles';

const ResetPasswordScreen = () => {
  const password = useInput('', { required: true });
  const re_password = useInput('', { required: true });
  const [passwordVisible, setPasswordVisible] = useState(false);
  const passwordRef = useRef(null);
  const theme = useTheme();
  const { navigate } = useNavigation();

  /**
   * Sends a request to reset the password
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
          name="password"
          label="Password"
          mode="outlined"
          textContentType="oneTimeCode"
          autoCapitalize="none"
          autoCorrect={false}
          autoComplete="password"
          secureTextEntry={!passwordVisible}
          inputRef={passwordRef}
          returnKeyType="go"
          right={
            <TextInput.Icon
              icon={passwordVisible ? 'eye' : 'eye-off'}
              onPress={() => setPasswordVisible(!passwordVisible)}
            />
          }
          {...password.bind}
        />
        <TextInput
          style={authStyles.input}
          name="re_password"
          label="Repeat password"
          mode="outlined"
          textContentType="oneTimeCode"
          autoCapitalize="none"
          autoCorrect={false}
          autoComplete="password"
          secureTextEntry={!passwordVisible}
          inputRef={passwordRef}
          returnKeyType="go"
          right={
            <TextInput.Icon
              icon={passwordVisible ? 'eye' : 'eye-off'}
              onPress={() => setPasswordVisible(!passwordVisible)}
            />
          }
          {...re_password.bind}
        />
        <View style={authStyles.buttons}>
          <Button
            dark
            style={authStyles.button}
            mode="contained"
            disabled={false}
            onPress={handleSubmit}>
            Reset password
          </Button>
          <Button style={authStyles.button} mode="text" onPress={gotoLogin}>
            Go to Login
          </Button>
        </View>
      </ScrollView>
    </View>
  );
};

export default ResetPasswordScreen;
