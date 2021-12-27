import { StyleSheet } from "react-native";
import { WIDTH } from "../../constants";

export const START_GRADIENT = { x: 0.5, y: 0.0 };
export const END_GRADIENT = { x: 0.5, y: 1.0 };

const styles = StyleSheet.create({
  blurWrapper: {
    padding: 0,
  },
  wrapper: {
    borderWidth: 0,
  },
  image: {
    width: "100%",
    height: WIDTH - 120,
    justifyContent: "flex-end",
    borderRadius: 6,
  },
  gradient: {
    height: 120,
    justifyContent: "flex-end",
    alignItems: "flex-end",
    padding: 20,
  },
  title: {
    color: "white",
    fontSize: 42,
    fontWeight: "bold",
  },
  description: {
    color: "white",
    width: "70%",
    fontSize: 16,
    textAlign: "right",
  },
});

export default styles;
