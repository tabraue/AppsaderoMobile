import { Text, StyleSheet } from "react-native";
import React from "react";
import theme from "../../theme";

const TextStyled = ({ children, color, background, fontSize, style, ...restOfProps }) => {
  const textStyles = [
    styles.text,
    color === "backgroundColor" && styles.backgroundColor,
    color === "success" && styles.colorSuccess,
    color === "owner" && styles.text.color,
    fontSize === "body" && styles.text.fontSize,
    background === "backgroundColor" && styles.background.backgroundColor,
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

export default TextStyled;
