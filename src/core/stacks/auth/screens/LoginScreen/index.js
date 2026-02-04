import { useState } from "react";
import {
  Keyboard,
  View,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { Appbar, Button, Text, TextInput, useTheme } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { moderateScale } from "react-native-size-matters";
import { StatusBar } from "expo-status-bar";
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Ionicons } from "@expo/vector-icons";

import { authScreens } from "@core-stacks/auth/authRouteConstants";
import { useLoginMutation } from "@core-react-query/mutations/authUser/loginMutation";
import { makeStyles } from "./styles";
import { t } from "@core-localization";

// Validation schema using Yup
const schema = yup.object().shape({
  username: yup.string().required(t("errors.emailRequired")),
  password: yup
    .string()
    .min(6, t("errors.passwordLength"))
    .required(t("errors.passwordRequired")),
});

const LoginScreen = () => {
  const theme = useTheme();
  const { navigate, goBack } = useNavigation();
  const { mutate: login, isPending: isLoading } = useLoginMutation();

  const styles = makeStyles(theme);
  const [passwordVisible, setPasswordVisible] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onBlur",
  });

  /**
   * Sends the request to authenticate the user
   */
  const onSubmit = (credentials) => {
    Keyboard.dismiss();
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
    <View style={styles.screenContainer}>
      <StatusBar style="dark" />
      <Appbar.Header style={styles.appbar} theme={{}} />
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        <ScrollView
          contentContainerStyle={styles.container}
          showsVerticalScrollIndicator={false}
        >
          <Text style={styles.heading}>{t("loginScreen.heading")}</Text>
          <Text style={styles.subHeading}>{t("loginScreen.subHeading")}</Text>
          <View style={styles.inputContainer}>
            <Controller
              control={control}
              name="username"
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  style={styles.input}
                  label={t("loginScreen.username")}
                  contentStyle={{}}
                  textColor={
                    !!errors.username
                      ? theme.colors.error
                      : theme.colors.onSecondaryContainer
                  }
                  placeholder={t("loginScreen.usernamePlaceholder")} // TODO: NEED TO ADD IN STRINGS
                  mode="flat"
                  autoCapitalize="none"
                  autoCorrect={false}
                  autoComplete="username"
                  returnKeyType="next"
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  error={!!errors.username}
                />
              )}
            />
            {errors.username && (
              <Text style={styles.errorText}>{errors.username.message}</Text>
            )}
            <Controller
              control={control}
              name="password"
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  style={styles.input}
                  label={t("loginScreen.password")}
                  placeholder={t("loginScreen.passwordPlaceholder")}
                  mode="flat"
                  textContentType="password"
                  autoCapitalize="none"
                  autoCorrect={false}
                  autoComplete="password"
                  secureTextEntry={!passwordVisible}
                  textColor={
                    !!errors.password
                      ? theme.colors.error
                      : theme.colors.onSecondaryContainer
                  }
                  returnKeyType="go"
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  error={!!errors.password}
                  right={
                    <TextInput.Icon
                      icon={() => (
                        <Ionicons
                          name={passwordVisible ? "eye" : "eye-off"}
                          size={moderateScale(24)}
                          color={theme.colors.onSecondaryContainer}
                        />
                      )}
                      onPress={() => setPasswordVisible(!passwordVisible)}
                    />
                  }
                />
              )}
            />
            {errors.password && (
              <Text style={styles.errorText}>{errors.password.message}</Text>
            )}
            <Text style={styles.forgotPassText} onPress={gotoForgotPassword}>
              {t("loginScreen.forgotPassword")}
            </Text>
          </View>
          <Button
            dark
            style={styles.btnStyle}
            mode="text"
            labelStyle={styles.btnLoader}
            loading={isLoading}
            disabled={isLoading}
            theme={{ roundness: moderateScale(50) }}
            onPress={handleSubmit(onSubmit)}
          >
            <Text style={styles.btnLabelStyle}>{t("loginScreen.heading")}</Text>
          </Button>
          <View style={styles.dontHaveAccountRow}>
            <Text style={styles.dontHaveAccountText}>
              {t("loginScreen.dontHaveAcc")}
            </Text>
            <Text style={styles.signUpHereText} onPress={gotoRegistration}>
              {t("loginScreen.sigupHere")}
            </Text>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
};

export default LoginScreen;
