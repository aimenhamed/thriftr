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
    opacity: 0.85,
    height: "83%",
    zIndex: 3,
    position: "relative",
    borderColor: "white",
    borderWidth: 2,
  },
  upperView: {
    height: "76%",
    borderColor: "white",
    borderBottomWidth: 2,
    flexDirection: "row",
  },
  lowerView: {
    height: "24%",
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
  centerView: {
    // justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },
  bold: {
    fontFamily: "AzeretMono_700Bold",
  },
  normalText: {
    fontSize: 18,
    fontFamily: "AzeretMono_400Regular",
    color: "white",
    zIndex: 1,
    margin: 3,
    textAlign: "center",
  },
  swipeArrows: {
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    top: "30%",
  },
  horizontalSwipeArrows: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  swipeTutorialCaption: {
    marginTop: "100%",
  },
  likeColor: {
    color: "#00BF36",
  },
  ignoreColor: {
    color: "#FF0000",
  },
});
