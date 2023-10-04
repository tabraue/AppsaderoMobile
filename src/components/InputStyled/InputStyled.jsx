import { TextInput, StyleSheet, Text, View } from "react-native"; // Cambiado de 'react-native-web' a 'react-native'
import React from "react";
import theme from "../../../theme/theme";
import { useField } from "formik";
import { Mail, OpenEyeIcon } from "../../icons/Icons";

// INPUT TEXT USING HOOK USEFIELD by FORMIK
const InputStyled = ({ name, ...props }) => {
  const [field, meta, helpers] = useField(name);

  return (
    <View style={styles.inputContainer}>

      <TextInput
        value={field.value}
        onChangeText={(value) => helpers.setValue(value)}
        allowFontScaling
        textAlign="center"
        style={meta.error ? styles.error : styles.input}
        {...props}
        />
      <View style={styles.iconContainer}>
        {props.icon && <Mail style={styles.icon} color={theme.colors.textPrimary}/>}
      </View>
      {meta.error && <Text style={styles.errorText}>{meta.error}</Text>}
    </View>
  );
};


const styles = StyleSheet.create({
  inputContainer: {
    position: "relative",
  },
  iconContainer: {
    position: "absolute",
    top: 7, // Ajusta esta posición según sea necesario
    right: 15, // Ajusta esta posición según sea necesario
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    textAlign: theme.aligns.center,
    borderBottomWidth: theme.border.width,
    borderBottomColor: theme.colors.salmonBackground,
    borderRadius: theme.border.borderRadius,
    padding: theme.border.padding,
    width: 300,
    height: 50,
    fontSize: theme.fontSizes.body,
    marginTop: 20,
  },
  error: {
    textAlign: theme.aligns.center,
    borderWidth: theme.border.width,
    borderColor: theme.colors.error,
    borderRadius: theme.border.borderRadius,
    padding: theme.border.padding,
    width: 300,
    height: 50,
    marginTop: 20,
  },
  errorText: {
    color: theme.colors.error,
    fontSize: 12,
    textAlign: theme.aligns.center,
  },
  
});

export default InputStyled;


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
