import React, { useState, useEffect } from "react";
import Toast from "react-native-root-toast";
import theme from "../../../theme/theme";

const ShowToast = ({ message, backgroundColor, state }) => {
  const [visible, setVisible] = useState(state);

  
   
      const toast = Toast.show(message, {
        position: Toast.positions.CENTER,
        animation: true,
        hideOnPress: true,
        delay: 0,
        duration: Toast.durations.SHORT,
        textColor: theme.colors.textPrimary,
        backgroundColor: backgroundColor,
      });





  return visible ? <></> : null; 
};

export default ShowToast;
