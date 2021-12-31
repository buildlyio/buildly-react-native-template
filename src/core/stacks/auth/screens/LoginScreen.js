import React, { useRef, useState } from 'react';
import { Keyboard, ScrollView, View } from 'react-native';
import { Button, TextInput, useTheme } from 'react-native-paper';
import { useInput } from '../../../hooks/useInput';
import Svg from '../../../../assets/svg/logo.svg';
import { useNavigation } from '@react-navigation/native';
import { authScreens } from '../authRouteConstants';
import { SafeAreaView } from 'react-native-safe-area-context';
import { authStyles } from '../authStyles';
import { useAuthuser } from '../../../state/authuser/AuthuserProvider';

const LoginScreen = () => {
  const username = useInput('', { required: true });
  const password = useInput('', { required: true });
  const [passwordVisible, setPasswordVisible] = useState(false);
  const passwordRef = useRef(null);
  const theme = useTheme();
  const { navigate } = useNavigation();
  const { login } = useAuthuser();

  /**
   * Sends the request to authenticate the user
   */
  const handleSubmit = () => {
    Keyboard.dismiss();
    const credentials = {
      username: username.value,
      password: password.value,
    };
    login(credentials);
  };

  /**
   * Navigates to the registration screen
   */
  const gotoRegistration = () => {
    Keyboard.dismiss();
    navigate(authScreens.REGISTER);
  };

  /**
   * Navigates to the forgot password screen
   */
  const gotoForgotPassword = () => {
    Keyboard.dismiss();
    navigate(authScreens.FORGOT_PASSWORD);
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
          name="username"
          label="Username"
          mode="outlined"
          autoCapitalize="none"
          autoCorrect={false}
          autoComplete="username"
          onSubmitEditing={() => passwordRef?.current?.focus()}
          returnKeyType="next"
          {...username.bind}
        />
        <TextInput
          style={authStyles.input}
          name="password"
          label="Password"
          mode="outlined"
          textContentType="password"
          autoCapitalize="none"
          autoCorrect={false}
          autoComplete="password"
          secureTextEntry={!passwordVisible}
          inputRef={passwordRef}
          onSubmitEditing={handleSubmit}
          returnKeyType="go"
          right={
            <TextInput.Icon
              icon={passwordVisible ? 'eye' : 'eye-off'}
              onPress={() => setPasswordVisible(!passwordVisible)}
            />
          }
          {...password.bind}
        />
        <View style={authStyles.buttons}>
          <Button
            dark
            style={authStyles.button}
            mode="contained"
            disabled={false}
            onPress={handleSubmit}>
            Login
          </Button>
          <View style={authStyles.secondaryButtons}>
            <Button
              style={authStyles.button}
              mode="text"
              onPress={gotoRegistration}>
              Register now
            </Button>
            <Button
              style={authStyles.button}
              mode="text"
              onPress={gotoForgotPassword}>
              Forgot password?
            </Button>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default LoginScreen;
