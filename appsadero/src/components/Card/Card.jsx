import { View } from 'react-native'
import React from 'react'
import TextStyled from "../textStyled/textStyled";
import theme from '../../../theme/theme';

const Card = () => {
  return (
    <View style={{marginTop: theme.margins.top, flexGrow:1}}>
      <TextStyled>Hola</TextStyled>
      <TextStyled borderColor='owner'> probando esto con un borde</TextStyled>
      <TextStyled backgroundColor='salmon'> esto debe tener fondo</TextStyled>
    </View>
  );
}

export default Card