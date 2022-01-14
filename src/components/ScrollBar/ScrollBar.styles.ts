import { StyleSheet } from "react-native";
import { HEIGHT } from "../../constants";

const styles = StyleSheet.create({
  wrapper: {
    width: 20,
    height: HEIGHT,
    right: 10,
    position: "absolute",
    justifyContent: "center",
    zIndex: 10,
  },
  scrollBar: {
    backgroundColor: "#ffffff09",
    width: 20,
    height: HEIGHT * 0.6,
    borderRadius: 20,
  },
});

export default styles;
