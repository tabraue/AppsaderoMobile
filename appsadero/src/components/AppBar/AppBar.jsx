import React from "react";
import { View, StyleSheet, TouchableOpacity, Touchable,  } from "react-native";
import theme from "../../../theme/theme";
import { useRoute } from "@react-navigation/native";
import { AppsaderoWithBorderIcon, AppsaderoWithoutBorder, BbqIcon, HomeIcon, MoneyIcon } from "../../icons/Icons";

const AppBar = ({ navigation }) => {
  const route = useRoute();

  const AppBarStyles = [styles.appBar];



  return (
    <View style={AppBarStyles}>
      <TouchableOpacity onPress={() => navigation.navigate("CreateBbq")}>
        <BbqIcon color={route.name === "CreateBbq" ? "#ffff" : null} />
      </TouchableOpacity>

      <TouchableOpacity activeOpacity={0.6} onPress={() => navigation.navigate("/")}>
        {/* <HomeIcon color={route.name === "/" ? "#ffff" : null} /> */}
        <AppsaderoWithBorderIcon
          style={styles.icon}
          size={route.name === "/" ? 1 : 2}
        />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("PayScreen")}>
        <MoneyIcon color={route.name === "PayScreen" ? "#ffff" : null} />
      </TouchableOpacity>
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
  icon: {
    position: "absolute",
    zIndex: 2,
  },
 
});

export default AppBar;
