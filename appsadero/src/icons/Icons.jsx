import Icon from "react-native-vector-icons/FontAwesome";
import theme from "../../theme/theme";

export const OpenEyeIcon = () => {
  return <Icon name={"eye"} size={20} color={theme.colors.textPrimary} />;
};

export const CloseEyeIcon = () => {
  return <Icon name={"eye-slash"} size={20} color={theme.colors.textPrimary} />;
};
