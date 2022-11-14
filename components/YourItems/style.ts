import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
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
