import { createStackNavigator } from "@react-navigation/stack";

import { authScreens } from "./authRouteConstants";
import LoginScreen from "./screens/LoginScreen";

const Stack = createStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator
      initialRouteName={authScreens.LOGIN}
      screenOptions={{
        headerShown: false,
        gestureEnabled: false,
      }}
    >
      <Stack.Screen name={authScreens.LOGIN} component={LoginScreen} />
    </Stack.Navigator>
  );
};

export default AuthStack;
