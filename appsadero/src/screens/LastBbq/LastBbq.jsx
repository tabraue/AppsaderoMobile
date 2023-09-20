import { View, Text, StyleSheet } from "react-native";
import React from "react";
import AppBar from "../../components/AppBar/AppBar";
import theme from "../../../theme/theme";

const LastBbq = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>Anteriores asaderos</Text>
      <AppBar navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingTop: theme.margins.top + 10,
    gap: 20,
  },
});

export default LastBbq;
