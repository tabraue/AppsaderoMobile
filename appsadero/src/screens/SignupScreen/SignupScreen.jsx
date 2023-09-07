import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import theme from '../../../theme/theme';


function Signup(){
    return (
      <View style={styles.container}>
        <Text>SIGNUP</Text>

      </View>
    );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingTop: theme.margins.top + 10,
    color: theme.colors.textPrimary
  },
});

export default Signup

/* function HomeScreen (){
  return (
    <View style={styles.container}>
      <Card/>
    </View>
  );
} */


 
