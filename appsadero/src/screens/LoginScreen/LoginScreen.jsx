import {
  Text,
  StyleSheet,
  SafeAreaView,
  View,
  TouchableHighlight,
  ActivityIndicator,
  KeyboardAvoidingView,
} from "react-native";
import React, { useState } from "react";
import { useMutation } from "react-query";
import { Formik } from "formik";

import { loginValidationSchema } from "../../validationSchemas/login";
import { loginWeb } from "../../services/auth.service";
import theme from "../../../theme/theme";

import InputStyled from "../../components/InputStyled/InputStyled";
import ButtonStyled from "../../components/ButtonStyled/ButtonStyled";
import PasswordInput from "../../components/PasswordInput/PasswordInput";
import AppBar from "../../components/AppBar/AppBar";
import ShowToast from "../../components/Toast/Toast";


const initialValues = {
  email: "",
  password: "",
};

const LoginScreen = ({ navigation }) => {
  const [showActivityIndicator, setShowActivityIndicator] = useState(false);
  const [showToast, setShowToast] = useState({
    status: false,
    message: '',
    background: ''
  });
  const [visibleToast, setVisibleToast] = useState(false)

  const mutation = useMutation(async function (values) {
    setShowActivityIndicator(true);
    const res = await loginWeb(values);
    if (res) return res;
  });

  const handleSubmit = (values) => {
    mutation.mutate(values, {
      onSuccess: (json) => {
        if (typeof json === "object") {
          setShowToast({
            status: true,
            message: `Bienvenidx ${json.userDetails.nickname}`,
            background: theme.colors.success,
          });
          setVisibleToast(true)
          setTimeout(() => {
            navigation.navigate("/"); // PENDING!!!!
          }, 1500);
        } else {
          setShowToast({
            status: true,
            message: `Email o contraseña erróneos`,
            background: theme.colors.error,
          });
          setVisibleToast(true)
        }
      },
      onError: (error) => {
        setShowToast({
          status: true,
          message:`Email o contraseña erróneos`,
          background: theme.colors.error,
        });
        setVisibleToast(true)
      },
      onSettled: () => {
        setShowActivityIndicator(false);
        setVisibleToast(false)
      },
    });
  };



  return (
    <Formik
      validationSchema={loginValidationSchema}
      validateOnChange={false}
      initialValues={initialValues}
      onSubmit={handleSubmit} // => values JSON format
    >
      {({ handleSubmit }) => {
        return (
          <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Login</Text>

            <KeyboardAvoidingView
              behavior={Platform.OS === "android" ? "padding" : "height"}
            >
              {showActivityIndicator && (
                <ActivityIndicator
                  size={"large"}
                  color={theme.colors.salmonBackground}
                />
              )}

              {visibleToast && (
                <ShowToast
                  state={showToast.status}
                  message={showToast.message}
                  backgroundColor={showToast.background}
                />
              )}

              <InputStyled
                name="email"
                placeholder="Escribe tu email"
                autoComplete="email"
                autoCapitalize="none"
                icon="Mail"
              />

              <PasswordInput
                name="password"
                placeholder="Escribe tu contraseña"
              />

              <View>
                <TouchableHighlight
                  onPress={() => navigation.navigate("Signup")} //  PENDING !!
                  underlayColor={theme.colors.salmonBackground}
                  style={styles.link}
                >
                  <Text style={styles.textLink}>Aún no tengo una cuenta.</Text>
                </TouchableHighlight>
                <ButtonStyled
                  title="Login"
                  accessText="Botón de login a Appsadero"
                  onPress={handleSubmit}
                  style={styles.btnlogin}
                />
              </View>
            </KeyboardAvoidingView>

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
  textLink: {
    color: theme.colors.darkBlue,
    textDecorationLine: "underline",
    alignSelf: "flex-start",
  },
  link: {
    padding: theme.border.padding,
    borderRadius: theme.border.borderRadius,
    marginTop: 20,
    marginBottom: 30,
    alignSelf: "flex-start",
  },
  btnlogin: {
    backgroundColor: theme.colors.darkBlue,
    alignSelf: "flex-end",
  },
});

export default LoginScreen;
