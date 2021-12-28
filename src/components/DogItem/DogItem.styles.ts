import { StyleSheet } from "react-native";
import { HEIGHT } from "../../constants";

const styles = StyleSheet.create({
  infoWrapper: {
    position: "absolute",
    top: 0,
    width: "100%",
    height: HEIGHT,
    borderRadius: 8,
  },
  gradient: {
    width: "100%",
    height: 220,
    justifyContent: "flex-end",
    paddingBottom: 100,
    paddingHorizontal: 20,
  },
  descriptionWrapper: {
    flex: 1,
    backgroundColor: "black",
    paddingHorizontal: 20,
  },
  description: {
    color: "#fff",
    fontSize: 14,
  },
  button: {
    position: "absolute",
    zIndex: 10,
    bottom: 40,
    width: 40,
    height: 40,
    borderRadius: 40 / 2,
    alignSelf: "center",
    backgroundColor: "#ffffff0f",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default styles;
