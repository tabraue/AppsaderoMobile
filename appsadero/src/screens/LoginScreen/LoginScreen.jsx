import {
  Text,
  StyleSheet,
  SafeAreaView,
  View,
  TouchableHighlight,
  ActivityIndicator,
} from "react-native";
import React, { useState } from "react";
import { useMutation } from "react-query";
import { Formik } from "formik";
import Toast from "react-native-root-toast";

import { loginValidationSchema } from "../../validationSchemas/login";
import { loginWeb } from "../../services/auth.service";
import theme from "../../../theme/theme";

import InputStyled from "../../components/InputStyled/InputStyled";
import ButtonStyled from "../../components/ButtonStyled/ButtonStyled";
import PasswordInput from "../../components/PasswordInput/PasswordInput";
import AppBar from "../../components/AppBar/AppBar";

const initialValues = {
  email: "",
  password: "",
};

const LoginScreen = ({ navigation }) => {
  const [showActivityIndicator, setShowActivityIndicator] = useState(false);

  const mutation = useMutation(async function (values) {
    setShowActivityIndicator(true);
    const res = await loginWeb(values);
    if (res) return res;
  });

  const handleSubmit = (values) => {
    mutation.mutate(values, {
      onSuccess: (json) => {
        if (typeof json === "object") {
          showToast(
            `Bienvenidx ${json.userDetails.nickname}`,
            theme.colors.success
          );
          setTimeout(() => {
            navigation.navigate("/"); // PENDING!!!!
          }, 1500);
        } else {
          showToast(`Email o contraseña erróneos`, theme.colors.error);
        }
      },
      onError: (error) => {
        showToast(`Email o contraseña erróneos`, theme.colors.error);
      },
      onSettled: () => {
        setShowActivityIndicator(false);
      },
    });
  };

  const showToast = (message, backgroundColor) => {
    toast = Toast.show(message, {
      position: Toast.positions.CENTER,
      animation: true,
      hideOnPress: true,
      delay: 0,
      duration: Toast.durations.SHORT,
      textColor: theme.colors.textPrimary,
      backgroundColor: backgroundColor,
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

            {showActivityIndicator && (
              <ActivityIndicator
                size={"large"}
                color={theme.colors.salmonBackground}
              />
            )}

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

            <View style={styles.redirect}>
              <Text>
                Aún no tengo una cuenta{" "}
                <TouchableHighlight
                  onPress={() => navigation.navigate("Signup")}
                >
                  <Text style={styles.textButton}>Click aquí!</Text>
                </TouchableHighlight>
              </Text>
            </View>

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
  redirect: {
    justifyContent: "center",
    gap: 4,
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
  textButton: {
    alignItems: "center",
    color: theme.colors.darkBlue,
    textDecorationLine: "underline",
  },
});

export default LoginScreen;
