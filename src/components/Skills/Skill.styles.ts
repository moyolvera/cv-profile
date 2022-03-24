import { StyleSheet } from "react-native";

export const BAR_SIZE = 110;

const styles = StyleSheet.create({
  wrapper: {
    marginBottom: 0,
  },
  title: {
    textAlign: "center",
    fontSize: 12,
    fontWeight: "bold",
    color: "#32313E",
    top: -35,
    alignSelf: "center",
    marginBottom: 15,
    position: "absolute",
  },
  progressBackground: {
    width: "100%",
    alignItems: "center",
    height: BAR_SIZE + 30,
    justifyContent: "flex-end",
    overflow: "hidden",
  },
  progress: {
    width: 20,
    alignSelf: "center",
    borderRadius: 20,
    elevation: 4,
  },
});

export default styles;
