import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import theme from "../../../theme/theme";
import { useField } from "formik";
import { CloseEyeIcon, OpenEyeIcon } from "../../icons/Icons";

// INPUT TEXT USING HOOK USEFIELD by FORMIK
const PasswordInput = ({ name, ...props }) => {
  const [field, meta, helpers] = useField(name);
  const [visible, setVisible] = useState(false);

  return (
    <View>
      <TextInput
        value={field.value}
        onChangeText={(value) => helpers.setValue(value)}
        secureTextEntry={!visible}
        autoCapitalize="none"
        allowFontScaling
        endIconMode={name}
        textAlign="center"
        autoComplete="off"
        style={meta.error ? styles.error : styles.pass}
        {...props}
      />
      <TouchableOpacity
        onPress={() => setVisible(!visible)}
        style={styles.icon}
      >
        {visible ? <OpenEyeIcon /> : <CloseEyeIcon />}
      </TouchableOpacity>
      {meta.error && <Text style={styles.errorText}>{meta.error}</Text>}
    </View>
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
  icon: {
    position: "absolute",
    right: 15,
    top: 35,
    
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
