import { StyleSheet } from "react-native";
import { WIDTH } from "../../constants";

const styles = StyleSheet.create({
  name: {
    color: "white",
    fontWeight: "bold",
    fontSize: 40,
  },
  date: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  description: {
    color: "white",
    fontSize: 14,
    width: WIDTH - 60,
  },
});

export default styles;
