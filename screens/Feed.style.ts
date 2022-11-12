import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    paddingRight: 16,
    paddingLeft: 16,
    flex: 1,
    backgroundColor: "#1F1F1F",
    width: "100%",
  },
  slantedBackground: {
    position: "absolute",
    top: -300,
    left: -300,
    height: 500,
    width: 1000,
    transform: [{ rotate: "-15deg" }],
    backgroundColor: "#FFE600",
  },
  userActions: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 16,
  },
  userAction: {
    backgroundColor: "#fff",
    width: "30%",
    paddingTop: 8,
    paddingBottom: 8,
    alignItems: "center",
  },
  userActionText: {
    marginTop: 4,
    fontFamily: "AzeretMono_400Regular"
  },
});
