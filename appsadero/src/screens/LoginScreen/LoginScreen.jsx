import {
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableHighlight,
} from "react-native";
import React from "react";
import theme from "../../../theme/theme";
import InputStyled from "../../components/InputStyled/InputStyled";
import ButtonStyled from "../../components/ButtonStyled/ButtonStyled";
import PasswordInput from "../../components/PasswordInput/PasswordInput";
import AppBar from "../../components/AppBar/AppBar";
import { Formik } from "formik";
import { loginValidationSchema } from "../../validationSchemas/login";

const initialValues = {
  email: "",
  password: "",
};

const LoginScreen = ({ navigation }) => {





  
  return (
    <Formik
      validationSchema={loginValidationSchema}
       validateOnChange={false}  //=> esto hace que sólo valide al clicar sobre botón, NO valida mientras onChange!*/
      initialValues={initialValues}
      onSubmit={(values) => console.log(values)}
    >
      {({ handleSubmit }) => {
        return (
          <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Login</Text>
            <InputStyled
              name="email"
              placeholder="Escribe tu email"
              autoComplete="email"
              autoCapitalize="none"
            />

            <PasswordInput
              name="password"
              placeholder="Escribe tu contraseña"
            />

            <Text>
              Aún no tengo una cuenta.
              <TouchableHighlight onPress={() => navigation.navigate("Signup")}>
                <Text style={styles.button}>Click aquí!</Text>
              </TouchableHighlight>
            </Text>

            <ButtonStyled
              title="Login"
              color={theme.colors.darkBlue}
              accessText="Botón para logearse en Appsadero"
              onPress={handleSubmit}
            />

            <AppBar navigation={navigation} />
          </SafeAreaView>
        );
      }}
    </Formik>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
  },
  title: {
    fontSize: theme.fontSizes.heading,
    fontWeight: theme.fontWeights.bold,
    marginBottom: 10,
  },
  text: {
    fontSize: theme.fontSizes.body,
    textAlign: "left",
  },
  button: {
    alignItems: "center",
    padding: 10,
  },
});

export default LoginScreen;
