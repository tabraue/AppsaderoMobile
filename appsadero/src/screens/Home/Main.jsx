import React from "react";
import { View, StyleSheet, Text, Button, SafeAreaView} from "react-native";
import AppBar from "../../components/AppBar/AppBar";
import theme from "../../../theme/theme";
import { AddFriendIcon, ArrowLeftIcon, ArrowRightIcon, BbqIcon, FilterIcon, FriendsIcon, MoneyIcon, NotificationIcon } from "../../icons/Icons";


const Main = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>HOME</Text>


      <AppBar navigation={navigation}/>

     
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    paddingTop: theme.margins.top + 10,
    color: theme.colors.textPrimary,
  },
});

export default Main;
