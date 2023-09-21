import React from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  View,
} from "react-native";
import AppBar from "../../components/AppBar/AppBar";
import theme from "../../../theme/theme";
import ButtonStyled from "../../components/ButtonStyled/ButtonStyled";
import { BbqIcon, FriendsIcon, KebabIcon } from "../../icons/Icons";

const Home = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ gap: 50 }}>
        <ButtonStyled
          title={
            <View style={styles.views}>
              <Text>
                <BbqIcon />
              </Text>
              <Text style={styles.txtbtn}> Próximos asaderos</Text>
            </View>
          }
          accessText={"Botón ir a próximos asaderos"}
          style={styles.btns}
          onPress={() => navigation.navigate("NextBbq")}
        />

        <ButtonStyled
          title={
            <View style={styles.views}>
              <Text>
                <FriendsIcon />
              </Text>
              <Text style={styles.txtbtn}>Amistades</Text>
            </View>
          }
          accessText={"Botón ir a amistades"}
          style={styles.btns}
          onPress={() => navigation.navigate("Friends")}
        />

        <ButtonStyled
          title={
            <View style={styles.views}>
              <Text>
                <KebabIcon />
              </Text>
              <Text style={styles.txtbtn}>Anteriores asaderos</Text>
            </View>
          }
          accessText={"Botón ir a anteriores asaderos"}
          style={styles.btns}
          onPress={() => navigation.navigate('LastBbq')}
        />
      </View>
      <AppBar navigation={navigation} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: theme.margins.top,
    gap: 20,
  },
  views: {
    flexDirection: "column",
    alignItems: "center",
    marginBottom: 30,
    textAlign: "center"
  },
  btns: {
    backgroundColor: theme.colors.pastelBlue,
    height: '20%',
    width: 'auto',
    //paddingHorizontal: 50,
    backgroundColor: theme.colors.pastelBlue,
    textAlign: "center",
    justifyContent: "center"

  },
  txtbtn: {
    fontSize: theme.fontSizes.subheading,
    lineHeight: 21,
    fontWeight: theme.fontWeights.bold,
    letterSpacing: 0.25,
    marginTop: 5,
    textAlign: "center",
    justifyContent: "center"
  },
});

export default Home;
