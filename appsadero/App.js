import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Main from './Main';
import LoginScreen from './src/screens/LoginScreen/LoginScreen';
import Signup from './src/screens/SignupScreen/SignupScreen';

const Stack = createNativeStackNavigator()

const App = () => {
  
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='/'>
        <Stack.Screen name='/' component={Main} />
        <Stack.Screen name='Login' component={LoginScreen}/>
        <Stack.Screen name='Signup' component={Signup}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App


