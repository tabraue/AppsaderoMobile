import { View } from 'react-native'
import React from 'react'
import TextStyled from "../textStyled/textStyled";

const Card = () => {
  return (
    <View>
      <TextStyled color="backgroundColor">Hola</TextStyled>
      <TextStyled color="success"> probando esto</TextStyled>
      <TextStyled background="backgroundColor"> esto debe tener fondo</TextStyled>
    </View>
  );
}

export default Card