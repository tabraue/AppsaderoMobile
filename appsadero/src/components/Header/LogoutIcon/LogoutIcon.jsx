import { View, StyleSheet, Text } from "react-native";
import Svg, { G, Path } from "react-native-svg";
import theme from "../../../../theme/theme";

const LogoutIcon = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Logout</Text>
      <Svg
        xmlns="http://www.w3.org/2000/svg"
        className="svg-icon"
        width={15}
        height={12}
        viewBox="0 0 1024 1024"
      >
        <G className="icon-group">
          <Path
            d="M768 106v78c97.2 76 160 194.8 160 328 0 229.6-186.4 416-416 416S96 741.6 96 512c0-133.2 62.8-251.6 160-328v-78C121.6 190.8 32 341.2 32 512c0 265.2 214.8 480 480 480s480-214.8 480-480c0-170.8-89.6-321.2-224-406z"
            fill={theme.colors.error}
          />
          <Path
            d="M512 32c-17.6 0-32 14.4-32 32v448c0 17.6 14.4 32 32 32s32-14.4 32-32V64c0-17.6-14.4-32-32-32z"
            fill={theme.colors.error}
          />
        </G>
      </Svg>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: "start",
    alignItems: 'center',
    gap: 10,

  },
  text: {
    color: theme.colors.error,
    fontWeight: theme.fontWeights.bold
  },
  icon: {
    color: theme.colors.error,
    fontWeight: theme.fontWeights.bold

  }

})
export default LogoutIcon;
