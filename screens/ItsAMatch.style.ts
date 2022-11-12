import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1F1F1F",
    width: "100%",
  },
  background: {
    flex: 1,
    height: "100%",
    width: "100%",
  },
  dimmer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  itsAMatch: {
    alignItems: "center",
    marginTop: "40%",
  },
  swapDiagram: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 40,
  },
  userAndItem: {
    marginLeft: 10,
    marginRight: 10,
  },
  userImage: {
    borderRadius: 100,
    width: 60,
    height: 60,
    borderWidth: 6,
    borderColor: "#1F1F1f",
    position: "absolute",
    bottom: -6,
  },
  itemImage: {
    borderRadius: 100,
    width: 150,
    height: 150,
  },
  caption: {
    marginTop: 40,
    color: "#fff",
    fontFamily: "AzeretMono_400Regular",
    width: "70%",
    textAlign: "center",
    flexGrow: 1,
  },
  sendMessageButton: {
    flexDirection: "row",
    backgroundColor: "#FFE600",
    justifyContent: "center",
    alignItems: "center",
    width: "70%",
    height: 50,
  },
  sendMessageText: {
    fontFamily: "AzeretMono_400Regular",
  },
  keepThriftingButton: {
    flexDirection: "row",
    borderWidth: 2,
    borderColor: "#FFF",
    justifyContent: "center",
    alignItems: "center",
    width: "70%",
    height: 50,
    marginTop: 24,
    marginBottom: 48,
  },
  keepThriftingText: {
    fontFamily: "AzeretMono_400Regular",
    color: "#FFF",
  },
  icon: {
    position: "absolute",
    left: 20,
  },
});
