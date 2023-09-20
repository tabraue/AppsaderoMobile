import { View } from "react-native";
import React, { useEffect, useState } from "react";
import Header from "../components/Header/Header";
import theme from "../../theme/theme";
import LoginScreen from "../screens/LoginScreen/LoginScreen";
import SignupScreen from "../screens/SignupScreen/SignupScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AsyncStorage from "@react-native-async-storage/async-storage";


// ESTA SERÍA LA NAVEGACIÓN PREVIA A TENER EL TOKEN,
// LO QUE ES LO MISMO ANTES DE QUE EL USUARIO ESTÉ LOGEADO

const Stack = createNativeStackNavigator();

const AuthStack = ({ navigation }) => {



  return (
    <View style={{ flex: 1 }}>
      <Stack.Navigator initialRouteName="Login">
       
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

export default AuthStack;
