import {
  Text,
  StyleSheet,
  SafeAreaView,
  View,
  TouchableHighlight,
} from "react-native";
import React, { useContext } from "react";
import theme from "../../../theme/theme";
import InputStyled from "../../components/InputStyled/InputStyled";
import ButtonStyled from "../../components/ButtonStyled/ButtonStyled";
import PasswordInput from "../../components/PasswordInput/PasswordInput";
import AppBar from "../../components/AppBar/AppBar";
import { Formik } from "formik";
import { loginValidationSchema } from "../../validationSchemas/login";
import { useQuery } from "react-query";
import { loginWeb, userLogin } from "../../services/auth.service";

import { useMutation } from "react-query";
import { AuthContext } from "../../context/AuthContext";

const initialValues = {
  email: "",
  password: "",
};

const LoginScreen = ({ navigation }) => {
  //const { mutate, isLoading, isError } = useMutation(loginWeb);
  //const { mutate, isLoading, isError } = useMutation(handleSubmit);

  /* const handleSubmit = (values) => {
    // Llamada a la función de mutación loginWeb
    mutate(values);
  }; */

  const mutation = useMutation( 
    async function (values){
      console.log('linea 38',values)
      const res = await loginWeb(values)
      if(res) console.log('yeah')
    }, {
    onMutate: function (){
      console.log('lanzamos petición')
    },
    onSuccess: function (json){
      console.log('onsuccess',json)
    },
    onError: function (error){
      console.log(error)
    },
    onSettled: function() {
      console.log('on settled')
    }
    });

  const handleSubmit = (values) => {
    mutation.mutate({email: values.email, password: values.password}, {
      onSuccess: function(json){
        console.log('json en handlesubmit', json)
        //navigation.navigate('/')
      }
    })
  };

  //if (isLoading) return <Text>Loading...</Text>;
  //if (isError) return <Text>Something went wrong: {isError.message}</Text>;

  /*
  const tryLogin = async (email, password) => {
    try {
      const res = await userLogin(values.email, values.password)
      if(res) console.log(res)
      else console.error(error)
    } catch (error) {
      console.log(error)
    } 
    
 


    try {
      const res = await loginWeb(email, password)
      if(res) console.log('ok')
    } catch (error) {
      console.log(error)
    }

  } */

  /* const { isLoading, isError, data, error } = useQuery("login", tryLogin) */

  // const {login} = useContext(AuthContext)

  return (
    <Formik
      validationSchema={loginValidationSchema}
      validateOnChange={false} //=> esto hace que sólo valide al clicar sobre botón, NO valida mientras onChange!*/
      initialValues={initialValues}
      onSubmit={handleSubmit} // => values format {"email": "diana@email.com", "password": "unaMayus1."}
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
