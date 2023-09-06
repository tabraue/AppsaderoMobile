import { View } from 'react-native'
import React from 'react'
import TextStyled from "../textStyled/textStyled";
import Constants from 'expo-constants'

const Card = () => {
  return (
    <View style={{marginTop: Constants.statusBarHeight, flexGrow:1}}>
      <TextStyled color="backgroundColor">Hola</TextStyled>
      <TextStyled color="success"> probando esto</TextStyled>
      <TextStyled background="backgroundColor"> esto debe tener fondo</TextStyled>
    </View>
  );
}

export default Card