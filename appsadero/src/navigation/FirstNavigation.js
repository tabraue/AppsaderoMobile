import { View } from "react-native";
import React, { useState } from "react";
import Header from "../components/Header/Header";
import Main from "../screens/Home/Main";
import theme from "../../theme/theme";
import LoginScreen from "../screens/LoginScreen/LoginScreen";
import SignupScreen from "../screens/SignupScreen/SignupScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// ESTA SERÍA LA NAVEGACIÓN PREVIA A TENER EL TOKEN,
// LO QUE ES LO MISMO ANTES DE QUE EL USUARIO ESTÉ LOGEADO

const Stack = createNativeStackNavigator();

const FirstNavigation = () => {
  const [token, setToken] = useState(true);

  return (
    <View style={{ flex: 1 }}>
      {token ? (
        <Header title="APPSADERO" token="true" />
      ) : (
        <Header title="APPSADERO" />
      )}

      <Stack.Navigator initialRouteName="/">
        <Stack.Screen
          name="/"
          component={Main}
          options={{ headerShown: false }}
          style={theme.margins.top}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Signup"
          component={SignupScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </View>
  );
};

export default FirstNavigation;
