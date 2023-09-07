import React from "react";
import { View, StyleSheet, Text, Button} from "react-native";
import AppBar from "./src/components/AppBar/AppBar";


const Main = ({navigation}) => {
  return (
    <View style={styles.container}>

      <AppBar navigation={navigation}/>

     
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  }
})

export default Main;
