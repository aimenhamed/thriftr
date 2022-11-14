import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  message: {
    color: "#1F1F1F",
    fontSize: 16,
    fontFamily: "AzeretMono_400Regular",
  },
  rightArrow: {
    position: "absolute",
    backgroundColor: "#FFE600",
    width: 20,
    height: 25,
    bottom: 0,
    borderBottomLeftRadius: 25,
    right: -10,
  },

  rightArrowOverlap: {
    position: "absolute",
    backgroundColor: "#1F1F1F",
    width: 20,
    height: 35,
    bottom: -6,
    borderBottomLeftRadius: 18,
    right: -20,
  },

  /*Arrow head for recevied messages*/
  leftArrow: {
    position: "absolute",
    backgroundColor: "#fff",
    width: 20,
    height: 25,
    bottom: 0,
    borderBottomRightRadius: 25,
    left: -10,
  },

  leftArrowOverlap: {
    position: "absolute",
    backgroundColor: "#1F1F1F",
    width: 20,
    height: 35,
    bottom: -6,
    borderBottomRightRadius: 18,
    left: -20,
  },

  container: {
    borderColor: "#FFE600",
    borderWidth: 3,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  text: {
    color: "#FFE600",
    fontFamily: "AzeretMono_700Bold",
    marginBottom: 16,
  },
  regular: {
    color: "#FFE600",
    fontFamily: "AzeretMono_400Regular",
    marginBottom: 16,
  },
  items: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: "100%",
    marginBottom: 16,
  },
  item: {
    borderColor: "#FFE600",
    borderWidth: 3,
    height: 100,
    width: 100,
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#FFE600",
    borderWidth: 3,
    color: "#FFE600",
    fontFamily: "AzeretMono_700Bold",
    padding: 12,
    marginTop: 16,
  },
});
