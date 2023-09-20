import { NavigationContainer } from "@react-navigation/native";
import StatusBarCustomized from "../components/StatusBarCustomized/StatusBar";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { ActivityIndicator, View } from "react-native";
import theme from "../../theme/theme";

import AppStack from './AppStack'
import AuthStack from './AuthStack'

const AppNav = () => {
    const {isLoading, token} = useContext(AuthContext)

     /* if (isLoading) {
       <View
         style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
       >
         <ActivityIndicator
           size={"large"}
           color={theme.colors.salmonBackground}
         />
       </View>;
     } */
  return (
    <NavigationContainer>
        {token !== null ? <AppStack/> : <AuthStack/>}
    </NavigationContainer>
  );
};

export default AppNav;
