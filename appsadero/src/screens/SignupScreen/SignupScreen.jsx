import React, { useState } from "react";
import {
  Alert,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  ActivityIndicator,
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
    message: '',
    background: ''
  });
  const [visibleToast, setVisibleToast] = useState(false)
 
  

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
          setVisibleToast(true)
            console.log(showToast);



          /*  setTimeout(() => {
            navigation.navigate("Login");
          }, 1500); */
        } else {
          setShowToast({
            status: true,
            message: json.message,
            background: theme.colors.error,
          });
          setVisibleToast(true)
            console.log(showToast);

        }
      },
      onError: () => {
        setShowToast({
          status: true,
          message: json.data.message,
          background: theme.colors.error,
        });
        console.log("Error");
        setVisibleToast(true)
          console.log(showToast);


      },
       onSettled: () => {
        setShowActivityIndicator(false);
        setShowToast({
          status: false,
          message: "",
          background: "",
        });
        setVisibleToast(false)
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
