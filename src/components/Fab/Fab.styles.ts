import { Platform, StyleSheet } from "react-native";
import { WIDTH } from "../../constants";

const styles = StyleSheet.create({
  wrapper: {
    position: "absolute",
    bottom: Platform.OS === "ios" ? 100 : 50,
    right: 20,
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    width: 280,
    height: 280,
    borderRadius: 140,
    backgroundColor: "#161616",
    position: "absolute",
    elevation: 4,
    justifyContent: "center",
    alignItems: "center",
  },
  radio: {
    position: "absolute",
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 1,
    borderColor: "#212121",
  },
  dot: {
    position: "absolute",
    width: 8,
    height: 8,
    borderRadius: 8 / 2,
    backgroundColor: "#00b8cb",
  },
  archive: {
    position: "absolute",
    transform: [{ rotate: "0deg" }, { translateX: -100 }],
  },
  user: {
    position: "absolute",
    transform: [
      { rotate: "30deg" },
      { translateX: -100 },
      { rotate: "-30deg" },
    ],
  },
  homeItem: {
    transform: [{ rotate: "90deg" }, { translateX: -60 }],
  },
  dogItem: {
    transform: [{ rotate: "60deg" }, { translateX: -60 }],
  },
  userItem: {
    transform: [{ rotate: "30deg" }, { translateX: -60 }],
  },
  archiveItem: {
    transform: [{ rotate: "0deg" }, { translateX: -60 }],
  },
  dog: {
    position: "absolute",
    transform: [
      { rotate: "60deg" },
      { translateX: -100 },
      { rotate: "-60deg" },
    ],
  },
  home: {
    position: "absolute",
    transform: [
      { rotate: "90deg" },
      { translateX: -100 },
      { rotate: "-90deg" },
    ],
  },
  menuWrapper: {
    backgroundColor: "#00b8cb",
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    elevation: 5,
  },
});

export default styles;
