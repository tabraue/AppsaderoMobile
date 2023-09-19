import React, { useState } from "react";
import {
  Alert,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  ActivityIndicator,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import { Formik } from "formik";
import { useMutation } from "react-query";
import { signupValidationSchema } from "../../validationSchemas/login";

import theme from "../../../theme/theme";
import InputStyled from "../../components/InputStyled/InputStyled";
import PasswordInput from "../../components/PasswordInput/PasswordInput";
import ButtonStyled from "../../components/ButtonStyled/ButtonStyled";
import { userSignup } from "../../services/auth.service";
import ShowToast from "../../components/Toast/Toast";

const initialValues = {
  email: "",
  password: "",
  nickname: "",
  first_name: "",
};

const SignupScreen = ({ navigation }) => {
  const [showActivityIndicator, setShowActivityIndicator] = useState(false);
  const [showToast, setShowToast] = useState({
    status: false,
    message: "",
    background: "red",
  });
  const [visibleToast, setVisibleToast] = useState(false);

  const mutation = useMutation(async function (values) {
    setShowActivityIndicator(true);
    const res = await userSignup(values);
    if (res) return res;
  });

  const handleSubmit = (values) => {
    mutation.mutate(values, {
      onSuccess: (json) => {
        if (typeof json === "object") {
          setShowToast({
            status: true,
            message: `Yes! You're registered ${json.nickname}`,
            background: theme.colors.success,
          });
          setVisibleToast(true);

          setTimeout(() => {
            navigation.navigate("Login");
          }, 1500);
        } else {
          setShowToast({
            status: true,
            message: json.message,
            background: theme.colors.error,
          });
          setVisibleToast(true);
        }
      },

      onError: (error) => {
        setShowToast({
          status: true,
          message: error.message,
          background: theme.colors.error,
        });
        setVisibleToast(true);
        console.log(showToast);
      },

      onSettled: () => {
        setShowActivityIndicator(false);
        setVisibleToast(false);
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
          <ScrollView
          contentContainerStyle={styles.scrollContainer}
          keyboardShouldPersistTaps="handled"
          >
            <SafeAreaView style={styles.container}>
              {visibleToast && (
                <ShowToast
                  state={showToast.status}
                  message={showToast.message}
                  backgroundColor={showToast.background}
                />
              )}
              <View style={[styles.card, styles.shadowProps]}>
                <Text style={styles.title}>Crear una cuenta</Text>

                <KeyboardAvoidingView
                  behavior={Platform.OS === "android" ? "padding" : "height"}
                >
                  <InputStyled
                    name="email"
                    icon="Mail"
                    placeholder="Escribe tu email"
                    autoComplete="email"
                    autoCapitalize="none"
                  />
                  <InputStyled
                    name="first_name"
                    placeholder="Introduce tu nombre"
                  />
                  <InputStyled
                    name="nickname"
                    placeholder="Introduce tu nickname"
                  />
                  <PasswordInput
                    name="password"
                    placeholder="Escribe tu contraseña"
                  />
                </KeyboardAvoidingView>

                <View>
                  <TouchableHighlight
                    onPress={() => navigation.navigate("Login")} //  PENDING !!
                    underlayColor={theme.colors.salmonBackground}
                    style={styles.link}
                    >
                    <Text>¿Ya tienes cuenta?{'   '}<Text style={styles.textLink}>Login</Text></Text>
                  </TouchableHighlight>
                  <ButtonStyled
                    title="Regístrate"
                    accessText="Botón de Signup"
                    onPress={handleSubmit}
                    style={styles.btnSignup}
                  />
                </View>
              </View>
              {showActivityIndicator && (
                <ActivityIndicator
                  size={"large"}
                  color={theme.colors.salmonBackground}
                />
              )}
              {/*   <AppBar navigation={navigation} /> */}
            </SafeAreaView>
          </ScrollView>
        );
      }}
    </Formik>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
  },
  card: {
    backgroundColor: "#ffff",
    padding: 30,
  },
  shadowProps: {
    shadowRadius: 40,
    shadowOffset: { width: -2, height: 4 },
    shadowColor: "#000",
    shadowOpacity: 0.2,
    elevation: 10,
    borderRadius: 8,
  },
  redirect: {
    justifyContent: "center",
    gap: 4,
  },
  title: {
    fontSize: theme.fontSizes.heading,
    fontWeight: theme.fontWeights.bold,
    marginBottom: 20,
    textAlign: "center",
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
  btnSignup: {
    backgroundColor: theme.colors.darkBlue,
    alignSelf: "flex-end",
  },
});

export default SignupScreen;
