import { View, Text, StyleSheet} from 'react-native'
import React from 'react'
import theme from '../../../theme/theme'
import InputStyled from '../../components/InputStyled/InputStyled'
import ButtonStyled from '../../components/ButtonStyled/ButtonStyled'

const LoginScreen = () => {
  return (
    <View style={styles.container}>

      <Text style={styles.title}>Login</Text>
      <InputStyled placeholder={"Write your email"} />
      <InputStyled placeholder={"Write your password"} secure={true} />
      <Text style={styles.text}>
        Haven't you an account? <Text>{"  "}Click here</Text>
      </Text>
      <ButtonStyled title="Submit" color={theme.colors.backgroundColor} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 10
  },
  title: {
    fontSize: theme.fontSizes.heading,
    fontWeight: theme.fontWeights.bold,
    marginBottom: 10
  },
  text: {
    fontSize: theme.fontSizes.body,
    textAlign: 'left'


  }
});

export default LoginScreen