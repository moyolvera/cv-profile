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
    zIndex: 20,
    bottom: 40,
    width: 40,
    height: 40,
    borderRadius: 40 / 2,
    alignSelf: "center",
    backgroundColor: "#ffffff0f",
    justifyContent: "center",
    alignItems: "center",
  },
  paginationWrapper: {
    position: "absolute",
    top: 20,
    right: 40,
    flexDirection: "row",
    width: 30,
    justifyContent: "space-around",
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 10,
    backgroundColor: "white",
  },
});

export default styles;
