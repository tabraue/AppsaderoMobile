import React from "react";
import { View, StyleSheet, Pressable, Button, Text } from "react-native";
import theme from "../../../theme/theme";
import { useRoute } from "@react-navigation/native";

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
 */

const AppBar = ({ navigation }) => {
  const route = useRoute();

  const AppBarStyles = [styles.appBar];

  // active && styles.active

  return (
    <View style={AppBarStyles}>
      <Text
        onPress={() => navigation.navigate("Login")}
        style={route.name === "Login" ? styles.activeText : null}
      >
        Login
      </Text>
      <Text
        onPress={() => navigation.navigate("/")}
        style={route.name === "/" ? styles.activeText : null}
      >
        Home
      </Text>
      <Text
        onPress={() => navigation.navigate("Signup")}
        style={route.name === "Signup" ? styles.activeText : null}
      >
        Signup
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  appBar: {
    flexDirection: "row",
    backgroundColor: theme.colors.salmonBackground,
    fontWeight: theme.fontWeights.bold,
    fontSize: theme.fontSizes.subheading,
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
  activeText: {
    color: "#ffff",
  },
});

export default AppBar;
