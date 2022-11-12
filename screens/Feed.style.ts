import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    paddingRight: 16,
    paddingLeft: 16,
    flex: 1,
    backgroundColor: "#1F1F1F",
    width: "100%",
  },
  cardStack: {
    position: "absolute",
    top: "1%",
    bottom: "15%",
    left: "5%",
    right: "5%",
    justifyContent: "center",
    alignItems: "center",
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
    position: "absolute",
    bottom: "5%",
    left: "5%",
    right: "5%",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
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