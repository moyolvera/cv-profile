import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: "#000000CF",
    justifyContent: "center",
    alignItems: "center",
  },
  modal: {
    flex: 1,
    justifyContent: "center",
    width: "100%",
  },
  modalWrapper: {
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  modalContentWrapper: {
    backfaceVisibility: "hidden",
    width: "70%",
    justifyContent: "flex-end",
    borderRadius: 10,
    minHeight: 330,
    backgroundColor: "#00b8cb",
    padding: 20,
  },
  modalText: {
    marginTop: 12,
    color: "#fff",
    fontSize: 26,
    fontWeight: "bold",
  },
  descriptionWrapper: {
    justifyContent: "center",
  },
  descriptionText: {
    textAlign: "justify",
    color: "#fff",
  },
});

export default styles;
