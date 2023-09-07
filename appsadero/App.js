import React from 'react';
import { NativeRouter } from 'react-router-native';
import Main from './Main';
<<<<<<< HEAD
import {  View } from 'react-native';
=======
>>>>>>> adasatLogin
import Card from './src/components/Card/Card';
import LoginScreen from './src/Views/LoginScreen/LoginScreen';
import StatusBarCustomized from './src/components/StatusBarCustomized/StatusBar.jsx'

export default function App() {
  return (
    <NativeRouter>
      <Main />
    </NativeRouter>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    
  },
})


