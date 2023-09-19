import { NavigationContainer } from "@react-navigation/native";
import StatusBarCustomized from "../components/StatusBarCustomized/StatusBar";
import FirstNavigation from "./FirstNavigation";

const Navigation = () => {
  return (
    <NavigationContainer>
      <StatusBarCustomized/>
      <FirstNavigation />
    </NavigationContainer>
  );
};

export default Navigation;
