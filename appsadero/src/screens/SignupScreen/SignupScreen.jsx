import React from "react";
import { Formik } from "formik";
import { Alert, SafeAreaView, StyleSheet, Text, TouchableHighlight, View } from "react-native";
import theme from "../../../theme/theme";
import AppBar from "../../components/AppBar/AppBar";
import InputStyled from "../../components/InputStyled/InputStyled";
import PasswordInput from "../../components/PasswordInput/PasswordInput";
import ButtonStyled from "../../components/ButtonStyled/ButtonStyled";
import { signupValidationSchema } from "../../validationSchemas/login";

function Signup({ navigation }) {
  const initialValues = {
    email: "",
    password: "",
  };
  return (
    <Formik
      validationSchema={signupValidationSchema}
      initialValues={initialValues}
      onSubmit={(values) => console.log(values)}
    >
      {({handleSubmit}) => {
        return (
          <SafeAreaView style={styles.container}>
            <AppBar navigation={navigation} />

            <Text style={styles.title}>SIGNUP</Text>
            <View style={styles.form}>
              <InputStyled
                name="email"
                placeholder="Escribe tu email"
                autoComplete="email"
                autoCapitalize="none"
              />
              <InputStyled name="name" placeholder="Introduce tu nombre" />
              <InputStyled
                name="nickname"
                placeholder="Introduce tu nickname"
              />
              <PasswordInput
                name="password"
                placeholder="Escribe tu contraseña"
              />
            </View>
            <ButtonStyled
              title="Submit"
              color={theme.colors.darkBlue}
              accessText="Botón para registrarse en Appsadero"
              onPress={handleSubmit}
            />
            <View style={styles.redirect}>
              <Text>
                ¿Tienes cuenta?{"  "}
                <TouchableHighlight
                  onPress={() => navigation.navigate("Login")}
                >
                  <Text style={styles.textButton}>Click aquí!</Text>
                </TouchableHighlight>
              </Text>
            </View>
          </SafeAreaView>
        );

      }}
    </Formik>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: 'center',
    gap: 10,
    paddingTop: theme.margins.top +10

  },
  form: {
    marginTop: 10,
    justifyContent: 'center'
  },
  redirect: {
    justifyContent: "center",
    gap: 4,
  },
  title: {
    fontSize: theme.fontSizes.heading,
    fontWeight: theme.fontWeights.bold,
    marginBottom: 20,
  },
  text: {
    fontSize: theme.fontSizes.body,
    textAlign: "left",
  },
  textButton: {
    alignItems: "center",
    color: theme.colors.darkBlue,
    textDecorationLine: "underline",
  },
 
});

export default Signup;


