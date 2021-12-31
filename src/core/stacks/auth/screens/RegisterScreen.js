import React, { useRef, useState } from 'react';
import { Keyboard, ScrollView, View } from 'react-native';
import { Button, TextInput, useTheme } from 'react-native-paper';
import { useInput } from '../../../hooks/useInput';
import Svg from '../../../../assets/svg/logo.svg';
import SafeAreaView from 'react-native-safe-area-view';
import { useNavigation } from '@react-navigation/native';
import { authScreens } from '../authRouteConstants';
import { authStyles } from '../authStyles';
import { useAuthuser } from '../../../state/authuser/AuthuserProvider';

const RegisterScreen = () => {
  const first_name = useInput('', { required: true });
  const last_name = useInput('', { required: true });
  const username = useInput('', { required: true });
  const email = useInput('', { required: true });
  const organization_name = useInput('', { required: true });
  const password = useInput('', { required: true });
  const re_password = useInput('', { required: true });

  const [passwordVisible, setPasswordVisible] = useState(false);
  const passwordRef = useRef(null);
  const theme = useTheme();
  const { navigate } = useNavigation();
  const { register } = useAuthuser();

  /**
   * Sends the request to register the user
   */
  const handleSubmit = () => {
    Keyboard.dismiss();
    const data = {
      first_name: first_name.value,
      last_name: last_name.value,
      username: username.value,
      email: email.value,
      organization_name: organization_name.value,
      password: password.value,
    };
    register(data);
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
          name="first_name"
          label="First name"
          mode="outlined"
          autoCapitalize="none"
          autoCorrect={false}
          autoComplete="first_name"
          returnKeyType="next"
          {...first_name.bind}
        />
        <TextInput
          style={authStyles.input}
          name="last_name"
          label="Last name"
          mode="outlined"
          autoCapitalize="none"
          autoCorrect={false}
          autoComplete="last_name"
          returnKeyType="next"
          {...last_name.bind}
        />
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
          name="email"
          label="Email"
          mode="outlined"
          autoCapitalize="none"
          autoCorrect={false}
          autoComplete="email"
          returnKeyType="next"
          {...email.bind}
        />
        <TextInput
          style={authStyles.input}
          name="organization_name"
          label="Organization"
          mode="outlined"
          autoCapitalize="none"
          autoCorrect={false}
          returnKeyType="next"
          {...organization_name.bind}
        />
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
            Register
          </Button>
          <Button style={authStyles.button} mode="text" onPress={gotoLogin}>
            Back to Login
          </Button>
        </View>
      </ScrollView>
    </View>
  );
};

export default RegisterScreen;
