import React from 'react'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import theme from '../../../theme/theme';
import AppBar from '../../components/AppBar/AppBar';


function Signup({navigation}){
    return (
      <SafeAreaView style={styles.container}>
      <AppBar navigation={navigation} />

        <Text>SIGNUP</Text>

      </SafeAreaView>
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


 
