import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  content: {
    flexDirection: "column",
    marginTop: "10%",
    justifyContent: "flex-end",
  },
  container: {
    padding: 25,
    flex: 1,
    backgroundColor: "#1F1F1F",
    flexDirection: "column",
    justifyContent: "space-between",
    width: "100%",
  },
  header: {
    flexDirection: "column",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  text: {
    color: "white",
    fontFamily: "AzeretMono_700Bold",
  },
  heading: {
    fontSize: 18,
    color: "white",
    fontFamily: "AzeretMono_700Bold",
  },
});
