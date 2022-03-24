import { StyleSheet } from "react-native";
import { WIDTH } from "../../constants";

const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    marginBottom: 20,
    borderRadius: 6,
    paddingLeft: 10,
    overflow: "hidden",
  },
  enfasis: {
    width: 10,
    borderTopLeftRadius: 6,
    borderBottomLeftRadius: 6,
  },
  year: {
    fontSize: 12,
    color: "#32313E",
  },
  title: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#32313E",
  },
  location: {
    fontSize: 12,
    fontWeight: "100",
    color: "#32313E",
  },
  itemWrapper: {
    flex: 1,
    padding: 10,
    backgroundColor: "#DDF8FF",
  },
  description: {
    fontSize: 10,
    width: WIDTH / 2,
    color: "#32313E",
  },
});

export default styles;
