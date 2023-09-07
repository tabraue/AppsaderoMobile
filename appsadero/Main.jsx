import React from "react";
import { View, StyleSheet, Text} from "react-native";
import { Redirect } from "react-router-native";

import AppBar from "./src/components/AppBar/AppBar";

import HomeScreen from "./src/screens/HomeScreen/HomeScreen";
import LoginScreen from "./src/screens/LoginScreen/LoginScreen";


const Main = () => {
  return (
    <View style={styles.container}>
      <AppBar />
      <LoginScreen/>
      
        {/* <Route path="/" exact>
          <HomeScreen />
        </Route>
        <Route path="/login" exact>
          <LoginScreen />
        </Route>
        <Redirect to='/signup'/>
         */}
     
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
