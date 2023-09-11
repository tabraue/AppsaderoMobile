import { Text, StyleSheet, SafeAreaView } from "react-native";
import React from "react";
import theme from "../../../theme/theme";

const Header = () => {
  return (
    <SafeAreaView style={styles.header}>
      <Text style={styles.txt}>APPSADERO</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "center",

    backgroundColor: theme.colors.salmonBackground,
    paddingTop: theme.margins.top, 
    left: 0,
    right: 0,
    height: 60,
  },
  txt: {
    fontSize: theme.fontSizes.subheading,
    alignSelf: "center"
  }
});
export default Header;
