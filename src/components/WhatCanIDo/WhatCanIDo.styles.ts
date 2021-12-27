import { StyleSheet } from "react-native";
import { WIDTH } from "../../constants";

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
});

export default styles;
