import { StyleSheet } from "react-native";
import { HEIGHT, WIDTH } from "../constants";

const COMMON_STYLES = StyleSheet.create({
  flex: {
    flex: 1,
  },
  dimensions: {
    width: WIDTH,
    height: HEIGHT,
  },
  paddingHorizontal: {
    paddingHorizontal: 20,
  },
  marginHorizontal: {
    marginHorizontal: 20,
  },
  fullWidth: {
    width: "100%",
  },
  marginTop10: {
    marginTop: 10,
  },
  marginTop20: {
    marginTop: 20,
  },
  center: {
    justifyContent: "center",
    alignItems: "center",
  },
  whiteColor: {
    color: "white",
  },
});

export default COMMON_STYLES;
