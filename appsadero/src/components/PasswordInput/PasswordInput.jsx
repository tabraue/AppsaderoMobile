import { StyleSheet, Text, TextInput } from "react-native";
import React from "react";
import theme from "../../../theme/theme";
import { useField } from "formik";

// INPUT TEXT USING HOOK USEFIELD by FORMIK
const PasswordInput = ({ name, ...props }) => {
  const [field, meta, helpers] = useField(name);

  return (
    <>
      <TextInput
        value={field.value}
        onChangeText={(value) => helpers.setValue(value)}
        secureTextEntry
        autoCapitalize="none"
        allowFontScaling
        style={meta.error ? styles.error : styles.pass}
        {...props}
      />
      {meta.error && <Text style={styles.errorText}>{meta.error}</Text>}
    </>
  );
};

const styles = StyleSheet.create({
  pass: {
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

export default PasswordInput;

/* const PasswordInput = ({placeholder, secure}) => {
  return (
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        secureTextEntry={secure}
        allowFontScaling
        autoCapitalize="none"
      />
  );
}; */
