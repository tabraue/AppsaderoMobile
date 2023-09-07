import React from "react";
import { View, StyleSheet, Pressable, Button } from "react-native";
import theme from "../../../theme/theme";


/* const AppBarTab = ({ active, children, to}) => {

    const textStyles = [
        styles.text,
        active && styles.active
    ]
    return (
        <Link to={to} >
            <TextStyled style={textStyles}>{children}</TextStyled>
        </Link>

    )
}

const AppBar = () => {
  return (
    <View style={styles.appBar}>
      <AppBarTab to='/'> Home </AppBarTab>
      <AppBarTab to='/login'> Login </AppBarTab>
      <AppBarTab to='/signup'> Signup </AppBarTab>

    </View>
  );
};
 */


const AppBar = ({navigation}) => {
  return (
    <View style={styles.appBar}>
      <Button onPress={() => navigation.navigate("Login")} title="Login" />
      <Button onPress={() => navigation.navigate("Signup")} title="Signup" />
    </View>
  );
};

const styles = StyleSheet.create({
  appBar: {
    flexDirection: "row",
    backgroundColor: theme.colors.backgroundColor,
    fontWeight: theme.fontWeights.bold,
    paddingBottom: 10,
    paddingLeft: 10,
    position: "absolute",
    bottom: 0, // Coloca el AppBar en la parte inferior
    left: 0,
    right: 0,
    height: 60,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
});

export default AppBar;
