import { StyleSheet } from "react-native";

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
    color: "#fff",
  },
  title: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#fff",
  },
  location: {
    fontSize: 12,
    fontWeight: "100",
    color: "#fff",
  },
  itemWrapper: {
    flex: 1,
    padding: 10,
    backgroundColor: "#00b8cb0f",
  },
});

export default styles;
