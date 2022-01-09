import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  backWrapper: {
    position: "absolute",
    top: 10,
    left: 0,
    zIndex: 20,
  },
  navigationWrapper: {
    position: "absolute",
    bottom: 10,
    zIndex: 10,
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
  },
  navigationLeft: {
    marginRight: 10,
  },
  navigationRight: {
    marginLeft: 10,
  },
  separator: {
    marginBottom: 60,
  },
  coverWrapper: {
    width: "100%",
    height: 250,
    position: "absolute",
    overflow: "hidden",
  },
});

export default styles;
