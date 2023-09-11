import React from 'react'
import { View } from 'react-native'
import { StatusBar } from 'expo-status-bar';
import theme from '../../../theme/theme';

const StatusBarCustomized = () => {
  return (
    <View>
      <StatusBar
        backgroundColor={theme.colors.salmonBackground}
        barStyle="dark-content"
        translucent={true}
      />
    </View>
  );
}

export default StatusBarCustomized;