import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import StatusBarCustomized from "../components/StatusBarCustomized/StatusBar";
import { useState } from "react";
import { View } from "react-native";
import Header from "../components/Header/Header";
import theme from "../../theme/theme";
import Main from "../screens/Home/Main";
import LoginScreen from "../screens/LoginScreen/LoginScreen";
import Signup from "../screens/SignupScreen/SignupScreen";

const Stack = createNativeStackNavigator();

const Navigation = () => {
  const [token, setToken] = useState(true);

  return (
    <NavigationContainer>
      <StatusBarCustomized />
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
            component={Signup}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </View>
    </NavigationContainer>
  );
};

export default Navigation;
