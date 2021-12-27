import { StyleSheet } from "react-native";
import { WIDTH } from "../../constants";

const styles = StyleSheet.create({
  wrapper: {
    width: WIDTH / 3,
    height: WIDTH / 3,
    borderRadius: 60,
    borderWidth: 3,
    transform: [{ rotateZ: "7deg" }],
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#00b8cb",

    marginBottom: 20,
    alignSelf: "center",
  },
  pic: {
    width: WIDTH / 3 - 20,
    height: WIDTH / 3 - 20,
    borderRadius: 60,
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
    alignSelf: "center",
  },
  title: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#fff",
    alignSelf: "center",
  },
});

export default styles;
