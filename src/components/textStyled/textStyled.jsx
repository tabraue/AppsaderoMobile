import { Text, StyleSheet } from "react-native";
import React from "react";
import theme from "../../../theme/theme";

/* const TextStyled = ({ children, color, background, fontSize, style, ...restOfProps }) => {
  const textStyles = [
    styles.text,
    style,
    color === "backgroundColor" && styles.backgroundColor,
    color === "success" && styles.text.colorSuccess,
    color === "owner" && styles.text.color,
    fontSize === "body" && styles.text.fontSize,
    background === "backgroundColor" && styles.background,
    background === "borderRadius" && styles.background.borderRadius,
  ];
  return (
    <Text style={textStyles} {...restOfProps}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    color: theme.colors.ownerColor,
    fontSize: theme.fontSizes.body,
  },
  active:{
        color: '#fffff',
  },
  colorBackground: {
    color: theme.colors.backgroundColor,
  },
  colorSuccess: {
    color: theme.colors.success,
  },
  background: {
    backgroundColor: theme.colors.backgroundColor,
    borderRadius: 20,
  }
});

export default TextStyled; */

const styles = StyleSheet.create({
  text: {
    color: theme.colors.textPrimary,
    fontSize: theme.fontSizes.body,
    fontFamily: theme.fonts.main,
    fontWeight: theme.fontWeights.normal
  },
  bolder:{
    fontWeight: theme.fontWeights.bold
  },
  backgroundSalmon: {
    backgroundColor: theme.colors.salmonBackground,
  },
  backgroundGrey: {
    backgroundColor: theme.colors.greyBackground,
  },
  backgroundBlue: {
    backgroundColor: theme.colors.pastelBlue,
  },
  borderSalmon:{
    borderColor: theme.colors.salmonBackground,
    borderWidth: theme.border.width,
    borderRadius: theme.border.borderRadius,
    padding: theme.border.padding,
    textAlign: theme.border.textAlign
  },
  borderOwner:{
    borderColor: theme.colors.owner,
    borderWidth: theme.border.width,
    borderRadius: theme.border.borderRadius,
    padding: theme.border.padding,
    textAlign: theme.border.textAlign
  },
  borderGuest:{
    borderColor: theme.colors.guest,
    borderWidth: theme.border.width,
    borderRadius: theme.border.borderRadius,
    padding: theme.border.padding,
    textAlign: theme.border.textAlign
  },
});

const TextStyled = ({ children, style, backgroundColor, borderColor, ...restOfProps }) => {
  const textStyles = [
    styles.text, // DEFAULT
    style, // this prop works if any extra style need to be added w StyleSheet
    backgroundColor === 'salmon' && styles.backgroundSalmon,
    backgroundColor === 'grey' && styles.backgroundGrey,
    backgroundColor === 'blue' && styles.backgroundBlue,
    borderColor === 'salmon' && styles.borderSalmon,
    borderColor === 'owner' && styles.borderOwner,
    borderColor === 'guest' && styles.borderGuest,
  ];
  return (
    <Text style={textStyles} {...restOfProps}>
      {children}
    </Text>
  );
};

export default TextStyled;
