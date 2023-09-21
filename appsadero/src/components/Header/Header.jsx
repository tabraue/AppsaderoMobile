import { Text, StyleSheet, SafeAreaView } from "react-native";
import React, { useContext } from "react";
import theme from "../../../theme/theme";
import PopUpMenu from "./PopUpMenu/PopUpMenu";
import { AuthContext } from "../../context/AuthContext";


const Header = ({ ...props }) => {
  const { token, nickname } = useContext(AuthContext)


  return (

    <SafeAreaView style={styles.header}>
      <Text style={styles.txt}>{props.title}  {token &&  <Text>{nickname}</Text>}</Text>
      <PopUpMenu />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
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
    marginHorizontal:10,
  },
  nickname: {
    fontSize: theme.fontSizes.subheading,
    alignSelf: "center",
    fontStyle: "italic",
  },
});
export default Header;
