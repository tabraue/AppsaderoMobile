import { View } from "react-native";
import React, { useEffect, useState } from "react";
import Header from "../components/Header/Header";
import theme from "../../theme/theme";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AsyncStorage from "@react-native-async-storage/async-storage";
import StatusBarCustomized from "../components/StatusBarCustomized/StatusBar";
import Home from "../screens/Home/Home";


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
      </Stack.Navigator>
      {/* <StatusBarCustomized /> */}
    </View>
  );
};

export default AppStack;
