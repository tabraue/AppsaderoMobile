import React from "react";
import {
  Alert,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from "react-native";
import { Formik } from "formik";
import { useMutation } from "react-query";
import { signupValidationSchema } from "../../validationSchemas/login";

import theme from "../../../theme/theme";
import AppBar from "../../components/AppBar/AppBar";
import InputStyled from "../../components/InputStyled/InputStyled";
import PasswordInput from "../../components/PasswordInput/PasswordInput";
import ButtonStyled from "../../components/ButtonStyled/ButtonStyled";
import { userSignup } from "../../services/auth.service";

const initialValues = {
  email: "",
  password: "",
  nickname: "",
  first_name: "",
};

const SignupScreen = ({ navigation }) => {

  const mutation = useMutation(
    async function (values) {
      console.log('En mutation', values);
      const response = await userSignup(values);
      if (response) console.log("YEP!");
    },
    {
      onMutate: function () {
        console.log("Lanzamos petición de registro");
      },
      onSuccess: function (json) {
        console.log("Bro or Sis, user registered", json);
      },
      onError: function (error) {
        console.log(error);
      },
      onSettled: function () {
        console.log("on settled");
      },
    }
  );

  const handleSubmit = (values) => {
    console.log("Aquí **52**", values);
    mutation.mutate(values, {
      onSuccess: function (json) {
        console.log("json en handlesubmit", json);
      },
    });
  };
  

  return (
    <Formik
      validationSchema={signupValidationSchema}
      validateOnChange={false}
      initialValues={initialValues}
      onSubmit={handleSubmit}
    >
      {({ handleSubmit }) => {
        return (
          <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Signup</Text>

            <InputStyled
              name="email"
              placeholder="Escribe tu email"
              autoComplete="email"
              autoCapitalize="none"
            />
            <InputStyled name="first_name" placeholder="Introduce tu nombre" />
            <InputStyled name="nickname" placeholder="Introduce tu nickname" />
            <PasswordInput
              name="password"
              placeholder="Escribe tu contraseña"
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

            <ButtonStyled
              title="Submit"
              color={theme.colors.darkBlue}
              accessText="Botón para registrarse en Appsadero"
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
    paddingTop: theme.margins.top + 10,
  },
  form: {
    marginTop: 10,
    justifyContent: "center",
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

export default SignupScreen;
