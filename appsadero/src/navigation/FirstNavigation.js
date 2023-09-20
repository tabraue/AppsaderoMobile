import { View } from "react-native";
import React from "react";
import Header from "../components/Header/Header";
import LoginScreen from "../screens/LoginScreen/LoginScreen";
import SignupScreen from "../screens/SignupScreen/SignupScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home/Home";

// ESTA SERÍA LA NAVEGACIÓN PREVIA A TENER EL TOKEN,
// LO QUE ES LO MISMO ANTES DE QUE EL USUARIO ESTÉ LOGEADO

const Stack = createNativeStackNavigator();

const FirstNavigation = () => {
  return (
    <View style={{ flex: 1 }}>
      <Header title="APPSADERO" />
      <Stack.Navigator initialRouteName="/">
         <Stack.Screen
          name="/"
          component={Home}
          options={{ headerShown: false }}
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
