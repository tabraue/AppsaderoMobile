import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Main from "./src/screens/Home/Main";
import LoginScreen from "./src/screens/LoginScreen/LoginScreen";
import Signup from "./src/screens/SignupScreen/SignupScreen";
import StatusBarCustomized from "./src/components/StatusBarCustomized/StatusBar";
import Header from "./src/components/Header/Header";
import {View } from "react-native";
import theme from "./theme/theme";

const Stack = createNativeStackNavigator();

const App = () => {
  const [token, setToken] = useState(true)

  return (
    <NavigationContainer>
      <StatusBarCustomized />
      <View style={{ flex: 1 }}>
        {token ? <Header title="APPSADERO" token='true'/> : <Header title="APPSADERO" />}

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
            component={Signup}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </View>
    </NavigationContainer>
  );
};

export default App;
