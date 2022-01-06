import { StyleSheet } from "react-native";
import { HEIGHT, WIDTH } from "../../constants";

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  largeItemWrapper: {
    width: (WIDTH - 40) / 2 - 10,
  },
  primaryBackground: {
    backgroundColor: "#00b8cb",
  },
  mainSkillWrapper: {
    justifyContent: "flex-end",
  },
  mainSkill: {
    marginTop: 10,
    fontSize: 18,
    color: "#fff",
    textAlign: "justify",
    fontWeight: "bold",
  },
  secondColumnWrapper: {
    width: (WIDTH - 40) / 2 - 10,
  },
  secondSkillWrapper: {
    justifyContent: "center",
    alignItems: "flex-end",
  },
  secondSkill: {
    marginTop: 10,
    fontSize: 14,
    color: "#fff",
    textAlign: "right",
    fontWeight: "bold",
  },
  extraSkillsWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  closeWrapper: {
    position: "absolute",
    bottom: 160,
    alignSelf: "center",
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  close: {
    fontWeight: "bold",
    color: "white",
  },
  leftWrapper: {
    flex: 1,
    paddingRight: 5,
  },
  rightWrapper: {
    flex: 1,
    paddingLeft: 5,
  },
});

export default styles;
