import { View, Button, Alert, StyleSheet } from 'react-native'
import React from 'react'
import theme from '../../../theme/theme'

const ButtonStyled = ({title, color, navigation, accessText}) => {


  // se le pasa al onPress con arrow function y el parametro es el nombre de la pag o 
  // screen al que queramos que lleve
  const goToPage = (pageName) => {
    navigation.navigate(pageName)
  }


  return (
    <View>
      <Button
      style={styles.button}
      title={title}
      color={color}
      /* onPress={() => Alert.alert('Button already')} *//*  goToPage={pageName} */
      accessibilityLabel={accessText}
    /> 
    </View>
  )

}

const styles = StyleSheet.create({
  button: {
    borderRadius: theme.border.borderRadius,
    padding: theme.border.padding,
    color: theme.colors.textPrimary
  }
})

export default ButtonStyled