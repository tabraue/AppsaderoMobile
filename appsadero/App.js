import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Main from './Main';
import LoginScreen from './src/screens/LoginScreen/LoginScreen';
import Signup from './src/screens/SignupScreen/SignupScreen';
import { ScreenStackHeaderBackButtonImage } from 'react-native-screens';

const Stack = createNativeStackNavigator()

const App = () => {
  
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='/'>
        <Stack.Screen name='/' component={Main} options={{headerShown:false}}/>
        <Stack.Screen name='Login' component={LoginScreen} options={{headerShown:false}}/>
        <Stack.Screen name='Signup' component={Signup} options={{headerShown:false}}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App


