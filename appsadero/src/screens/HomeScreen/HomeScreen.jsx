import React from 'react'
import { StyleSheet, Text, View } from 'react-native'


function HomeScreen(){
    return (
      <View style={styles.container}>
        <Text>Hola</Text>

      </View>
    );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
});

export default HomeScreen

/* function HomeScreen (){
  return (
    <View style={styles.container}>
      <Card/>
    </View>
  );
} */


 
