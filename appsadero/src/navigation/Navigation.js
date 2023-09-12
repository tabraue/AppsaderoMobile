import { NavigationContainer } from "@react-navigation/native";
import StatusBarCustomized from "../components/StatusBarCustomized/StatusBar";
import { useContext } from "react";
import { ActivityIndicator,  View } from "react-native";
import { AuthContext } from "../context/AuthContext";
import TestScreen from "../screens/TestScreen";
import FirstNavigation from "./FirstNavigation";


const Navigation = () => {
  const { isLoading, userToken } = useContext(AuthContext);

  if (isLoading) {
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <ActivityIndicator size={"large"} />
    </View>;
  }

  return (
    <NavigationContainer>
      <StatusBarCustomized />
      { userToken !== null ? <TestScreen/> : <FirstNavigation/>}
    </NavigationContainer>
  );
};

export default Navigation;
