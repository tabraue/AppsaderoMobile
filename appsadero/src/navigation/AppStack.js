import { View } from "react-native";
import React, { useEffect, useState } from "react";
import Header from "../components/Header/Header";
import Main from "../screens/Home/Main";
import theme from "../../theme/theme";
import LoginScreen from "../screens/LoginScreen/LoginScreen";
import SignupScreen from "../screens/SignupScreen/SignupScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AsyncStorage from "@react-native-async-storage/async-storage";
import StatusBarCustomized from "../components/StatusBarCustomized/StatusBar";


// ESTA SERÍA LA NAVEGACIÓN PREVIA A TENER EL TOKEN,
// LO QUE ES LO MISMO ANTES DE QUE EL USUARIO ESTÉ LOGEADO

const Stack = createNativeStackNavigator();

const FirstNavigation = ({ navigation }) => {



  return (
    <View style={{ flex: 1 }}>
      <Header title="APPSADERO" />
      <Stack.Navigator initialRouteName="/">
        <Stack.Screen
          name="/"
          component={Main}
          options={{ headerShown: false }}
          style={theme.margins.top}
        />
      </Stack.Navigator>
      {/* <StatusBarCustomized /> */}
    </View>
  );
};

export default FirstNavigation;
