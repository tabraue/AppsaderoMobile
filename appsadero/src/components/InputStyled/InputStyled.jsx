import { TextInput, StyleSheet } from "react-native"; // Cambiado de 'react-native-web' a 'react-native'
import React from "react";
import theme from "../../../theme/theme";
import { useField } from "formik";

// INPUT TEXT USING HOOK USEFIELD by FORMIK
const InputStyled = ({ name, ...props }) => {
  const [field, meta, helpers] = useField(name);
  return (
    <TextInput
      value={field.value}
      onChangeText={(value) => helpers.setValue(value)}
      allowFontScaling
      style={styles.input}
      {...props}
    />
  );
};

/* const InputStyled = ({style={}, placeholder, secure, autoComplete, autoCapitalize}) => {



  //allowFontScaling adapta la fuente según dispositivo (ACCESIBILIDAD)
  // autoComplete => hay que indicarle el tipo (ver documentación)
  // autoCapitalize => 'none' , en otros casos se puede poner tipo sentencia 'sentences'


  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        secureTextEntry={secure}
        allowFontScaling
        autoComplete={autoComplete}
        autoCapitalize={autoCapitalize}
      />
    </View>
  );
};
 */
const styles = StyleSheet.create({
  input: {
    textAlign: theme.aligns.center,
    borderWidth: theme.border.width,
    borderColor: theme.colors.salmonBackground,
    borderRadius: theme.border.borderRadius,
    padding: theme.border.padding,
    width: 300,
    height: 50,
    fontSize: theme.fontSizes.body,
    marginTop: 20,
  },
});

export default InputStyled;
