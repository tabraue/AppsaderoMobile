import Constants from "expo-constants";

const theme = {
  colors: {
    textPrimary: "#1E1E1E", // text
    salmonBackground: "#FDD1BF", // main background color
    greyBackground: "#D9D9D9", // notifications background color ?? --pending
    pastelBlue: "#D4E1ED", // buttons background color
    darkBlue: "#98C2E6", // opt 2 for buttons background color
    owner: "#AA9DF6", // distinctive owner color
    guest: "#EFE47E", // distinctive guest color
    success: "#A6C9C1", // any success or confirmation
    error: "#D03D3D", // any error or cancelation
  },
  fontSizes: {
    body: 14,
    subheading: 16,
    heading: 25,
  },
  fontWeights: {
    normal: "400",
    bold: "700",
  },
  fonts: {
    main: "System", // --> NEED TO BE CHANGED
  },
  border: {
    width: 2,
    borderRadius: 9,
    padding: 5,
    textAlign: "center",
  },
  aligns: {
    center: "center",
  },
  margins: {
    top: Constants.statusBarHeight,
    // this margin top adjusts to any status bar depending on the device.
    // extra padding or margin should be added
  },
};

export default theme;
