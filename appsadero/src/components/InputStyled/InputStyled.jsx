import { View, TextInput, StyleSheet } from "react-native"; // Cambiado de 'react-native-web' a 'react-native'
import React from "react";
import theme from "../../../theme/theme";

const InputStyled = ({placeholder, secure}) => {

  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        textAlign="center"
        secureTextEntry={secure}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: theme.border.width,
    borderColor: theme.colors.backgroundColor,
    borderRadius: theme.border.borderRadius,
    padding: theme.border.padding,
    width: 300,
    height: 50,
    fontSize: theme.fontSizes.body,
    marginTop: 20
  },
});

export default InputStyled;
