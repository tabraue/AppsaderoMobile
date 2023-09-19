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
    background: 'red'
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

          setTimeout(() => {
            navigation.navigate("Login");
          }, 1500);

        } else {
          setShowToast({
            status: true,
            message: json.message,
            background: theme.colors.error,
          });
          setVisibleToast(true)
        }
      },

      onError: (error) => {
        setShowToast({
          status: true,
          message: error.message,
          background: theme.colors.error,
        });
        setVisibleToast(true)
        console.log(showToast);
      },

       onSettled: () => {
        setShowActivityIndicator(false);
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
            {visibleToast && (
              <ShowToast
                state={showToast.status}
                message={showToast.message}
                backgroundColor={showToast.background}
              />
            )}
            <View style={[styles.card, styles.shadowProps]}>
              <Text style={styles.title}>Create an account</Text>

              <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
              >
                <InputStyled
                  name="email"
                  icon='Mail'
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
              <View style={styles.btnContainer}>
                <TouchableHighlight
                  onPress={() => navigation.navigate("Login")} //  PENDING !!
                  underlayColor={theme.colors.salmonBackground}
                  style={styles.link}
                >
                  <Text style={styles.textLink}>Ya tengo cuenta</Text>
                </TouchableHighlight>
                <ButtonStyled
                  title="Signup"
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
  card: {
    backgroundColor: '#ffff',
    padding: 30,
  },
  shadowProps: {
    shadowRadius: 40,
    shadowOffset: {width: -2, height: 4},
    shadowColor: '#000',
    shadowOpacity: 0.2,
    elevation: 10,
    borderRadius: 8
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
    textAlign: 'center'
  },
  text: {
    fontSize: theme.fontSizes.body,
    textAlign: "left",
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
  },
  btnContainer: {
    alignSelf: "flex-end",
  },
  
  btnSignup: {
    backgroundColor: theme.colors.darkBlue,
  },
});

export default SignupScreen;
