import { View, Text, SafeAreaView, StyleSheet } from 'react-native'
import React from 'react'
import theme from '../../theme/theme';

const TestScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Test Screen</Text>
      <Text>Home after loging</Text>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      paddingTop: theme.margins.top + 10,
      color: theme.colors.textPrimary,
    },
  });

export default TestScreen