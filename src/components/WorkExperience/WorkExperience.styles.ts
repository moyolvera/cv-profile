import { StyleSheet } from "react-native";
import { WIDTH } from "../../constants";

const styles = StyleSheet.create({
  lineWrapper: {
    position: "absolute",
    paddingTop: 30,
    paddingBottom: 50,
    height: "100%",
    width: 6,
    alignSelf: "center",
  },
  line: {
    flex: 1,
    width: "100%",
    backgroundColor: "#00b8cb2f",
    borderRadius: 3,
  },
  yearWrapper: {
    position: "absolute",
    alignSelf: "flex-end",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    width: 40,
    height: 40,
    backgroundColor: "#ffffff0f",
  },
  year: {
    fontSize: 12,
    fontWeight: "bold",
    color: "white",
  },
  wrapper: {
    marginBottom: 20,
    justifyContent: "center",
  },
  subtitle: {
    color: "#fff",
    fontSize: 12,
  },
  title: {
    color: "#fff",
    fontWeight: "bold",
  },
  blurWrapper: {
    width: WIDTH / 2 + 20,
  },
  blurInner: {
    padding: 14,
  },
});

export default styles;
