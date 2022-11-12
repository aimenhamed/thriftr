import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    padding: 25,
    flex: 1,
    backgroundColor: "#1F1F1F",
    alignItems: "center",
    width: "100%",
  },
  slantedBackground: {
    position: "absolute",
    top: -300,
    height: 500,
    width: 1000,
    transform: [{ rotate: "-15deg" }],
    backgroundColor: "#FFE600",
  },
});
