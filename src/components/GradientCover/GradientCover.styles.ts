import { StyleSheet } from "react-native";

export const START_GRADIENT = { x: 0.2, y: 0.0 };
export const END_GRADIENT = { x: 0.2, y: 1 };

const styles = StyleSheet.create({
  gradient: {
    height: 250,
    width: "100%",
  },
  wrapper: {
    height: 250,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  viewPort: {
    width: 100,
    height: 100,
    borderRadius: 100 / 2,
    alignItems: "center",
    overflow: "hidden",
  },
  item: {
    width: 100,
    height: 100,
    resizeMode: "cover",
    borderRadius: 100 / 2,
  },
});

export default styles;
