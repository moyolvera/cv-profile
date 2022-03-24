import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  topWrapper: {
    paddingHorizontal: 10,
    alignItems: "center",
  },
  wrapper: {
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
    borderWidth: 0,
    transform: [{ rotateZ: "7deg" }],
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#32313E",
    marginBottom: 0,
    alignSelf: "center",
  },
  pic: {
    width: 50 - 5,
    height: 50 - 5,
    borderRadius: 50 / 2,
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#32313E",
  },
  title: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#32313E",
  },
});

export default styles;
