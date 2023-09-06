import React from 'react'
import { View, Text } from 'react-native'
import { StatusBar } from 'expo-status-bar';

const StatusBarCustomized = () => {
  return (
    <View>
      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor="#00BCD4"
        translucent={true}
      />
    </View>
  );
}

export default StatusBarCustomized;