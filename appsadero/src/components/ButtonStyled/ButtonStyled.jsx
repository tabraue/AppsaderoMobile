import { StyleSheet, Pressable, Text } from "react-native";
import React from "react";
import theme from "../../../theme/theme";

const ButtonStyled = ({
  title,
  navigation,
  pageName,
  accessText,
  titleStyle,
  style,
  ...props
}) => {
  // se le pasa al onPress con arrow function y el parametro es el nombre de la pag o
  // screen al que queramos que lleve
  const goToPage = (pageName) => {
    navigation.navigate(pageName);
  };

  return (
    <Pressable
      onPress={() => goToPage(pageName)}
      accessibilityLabel={accessText}
      style={[styles.buttons, style]}
      {...props}
    >
      <Text style={[styles.txtbtn, titleStyle]}>{title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  buttons: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
  },
  txtbtn: {
    fontSize: theme.fontSizes.subheading,
    lineHeight: 21,
    fontWeight: theme.fontWeights.bold,
    letterSpacing: 0.25,
  },
});

export default ButtonStyled;

/*     <View>
      <Button
      style={styles.button}
      title={title}
      color={color}
      AQUI
    accessibilityLabel={accessText}
      {...props}
    /> 
    </View>
/* onPress={() => Alert.alert('Button already')} */
