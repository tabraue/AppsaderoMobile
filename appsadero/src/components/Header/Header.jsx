import { Text, StyleSheet, SafeAreaView, View } from "react-native";
import React from "react";
import theme from "../../../theme/theme";

const Header = ({...props}) => {
  return (
    (props.token) ? (
    <SafeAreaView style={styles.headerRow}>
          <Text style={styles.txt}>{props.title}</Text>
          <Text style={styles.nickname}>Diana</Text>
    </SafeAreaView>

    ) : (
    <SafeAreaView style={styles.header}>
      <Text style={styles.txt}>{props.title}</Text>
    </SafeAreaView>
    )
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
    fontWeight: 'bold'
  },
  nickname: {
    fontSize: theme.fontSizes.subheading,
    alignSelf: "center",
    fontStyle: 'italic'
  },
});
export default Header;
