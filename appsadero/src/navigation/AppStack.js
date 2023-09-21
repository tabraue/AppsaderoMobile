import { View } from "react-native";
import React, { useEffect, useState } from "react";
import Header from "../components/Header/Header";
import theme from "../../theme/theme";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import StatusBarCustomized from "../components/StatusBarCustomized/StatusBar";
import Home from "../screens/Home/Home";
import CreateBbq from "../screens/CreateBbq/CreateBbq";
import Friends from "../screens/Friends/Friends";
import NextBbq from "../screens/NextBbq/NextBbq";
import PayScreen from "../screens/PayScreen/PayScreen";
import LastBbq from "../screens/LastBbq/LastBbq";

import { MenuProvider } from "react-native-popup-menu";

// ESTA SERÍA LA NAVEGACIÓN PREVIA A TENER EL TOKEN,
// LO QUE ES LO MISMO ANTES DE QUE EL USUARIO ESTÉ LOGEADO

const Stack = createNativeStackNavigator();

const AppStack = ({ navigation }) => {
  return (
      <View style={{ flex: 1 }}>
        <Header title="APPSADERO" />
        <Stack.Navigator initialRouteName="/">
          <Stack.Screen
            name="/"
            component={Home}
            options={{ headerShown: false }}
            style={theme.margins.top}
          />
          <Stack.Screen
            name="CreateBbq"
            component={CreateBbq}
            options={{ headerShown: false }}
            style={theme.margins.top}
          />
          <Stack.Screen
            name="Friends"
            component={Friends}
            options={{ headerShown: false }}
            style={theme.margins.top}
          />
          <Stack.Screen
            name="NextBbq"
            component={NextBbq}
            options={{ headerShown: false }}
            style={theme.margins.top}
          />
          <Stack.Screen
            name="PayScreen"
            component={PayScreen}
            options={{ headerShown: false }}
            style={theme.margins.top}
          />
          <Stack.Screen
            name="LastBbq"
            component={LastBbq}
            options={{ headerShown: false }}
            style={theme.margins.top}
          />
        </Stack.Navigator>
        <StatusBarCustomized />
      </View>
  );
};

export default AppStack;
