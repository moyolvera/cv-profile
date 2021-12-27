import { StyleSheet } from "react-native";
import { HEIGHT, WIDTH } from "../../constants";

export const GRADIENT_COLORS = ["#00458E", "#004e92", "#000328"];
export const GRADIENT_START = { x: 0.3, y: 0 };
export const GRADIENT_END = { x: 0.1, y: 1 };
export const GRADIENT_LOCATIONS = [0, 0.1, 0.9];

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },
  dark: {
    backgroundColor: "#000000df",
  },
  gradient: {
    flex: 1,
    width: "100%",
  },
  image: {
    width: WIDTH,
    height: HEIGHT,
  },
  blur: {
    flex: 1,
    width: WIDTH,
  },
});

export default styles;
