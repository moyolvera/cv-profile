import { StyleSheet } from "react-native";

export const START_GRADIENT = { x: 0.5, y: 0.0 };
export const END_GRADIENT = { x: 0.5, y: 1.0 };

const styles = StyleSheet.create({
  wrapper: {
    position: "absolute",
    top: 0,
    zIndex: 10,
    width: "100%",
    height: 120,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  title: {
    color: "#fff",
    textAlign: "left",
    fontSize: 50,
    fontWeight: "bold",
  },
  subtitle: {
    color: "#fff",
    bottom: -10,
    left: 2,
    fontSize: 16,
  },
});

export default styles;
