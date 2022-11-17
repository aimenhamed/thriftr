import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    paddingRight: 16,
    paddingLeft: 16,
    flex: 1,
    backgroundColor: "#1F1F1F",
    width: "100%",
  },
  handStyle: {
    zIndex: 5,
    margin: 20,
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
    paddingTop: "3%",
    paddingBottom: "3%",
    alignItems: "center",
  },
  userActionText: {
    marginTop: 4,
    color: "#1F1F1F",
    fontFamily: "AzeretMono_400Regular",
  },
  overlay: {
    backgroundColor: "#000000",
    flex: 83,
    zIndex: 3,
    borderColor: "white",
    position: "relative",
    borderWidth: 2,
    opacity: 0.85,
  },
  upperView: {
    flex: 3,
    borderColor: "white",
    borderBottomWidth: 2,
    flexDirection: "row",
  },
  lowerView: {
    flex: 1,
    borderColor: "white",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  upperLeftView: {
    borderRightWidth: 1,
    borderColor: "white",
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  upperRightView: {
    borderLeftWidth: 1,
    borderColor: "white",
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  normalText: {
    fontSize: 16,
    fontFamily: "AzeretMono_400Regular",
    color: "white",
    zIndex: 1
  },
});
