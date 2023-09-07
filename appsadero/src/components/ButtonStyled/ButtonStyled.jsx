import { View, Button, Alert } from 'react-native'
import React from 'react'

const ButtonStyled = ({title,color}) => {
  return (
    <View>
      <Button
      title={title}
      color={color}
      onPress={() => Alert.alert('Button already')}
    /> 
    </View>
  )

}

export default ButtonStyled