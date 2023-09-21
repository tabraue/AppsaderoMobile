import { Text, StyleSheet, SafeAreaView } from "react-native";
import React from "react";
import theme from "../../../theme/theme";
import LogoutIcon from "./LogoutIcon/LogoutIcon";
import PopUpMenu from "./PopUpMenu/PopUpMenu";

const Header = ({ ...props }) => {
  return (

    <SafeAreaView style={styles.header}>
      <Text style={styles.txt}>{props.title}</Text>
      <PopUpMenu/>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: theme.colors.salmonBackground,
    paddingTop: theme.margins.top,
    left: 0,
    right: 0,
    height: 60,
  },
  headerRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: theme.colors.salmonBackground,
    paddingTop: theme.margins.top,
    left: 0,
    right: 0,
    height: 60,
  },
  txt: {
    fontSize: theme.fontSizes.subheading,
    alignSelf: "center",
    fontWeight: "bold",
  },
  nickname: {
    fontSize: theme.fontSizes.subheading,
    alignSelf: "center",
    fontStyle: "italic",
  },
});
export default Header;
