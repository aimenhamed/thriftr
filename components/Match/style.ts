import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  stack: {
    width: 75,
    height: 45,
  },

  image: {
    position: "absolute",
    top: 1,
    width: 50,
    height: 50,
    borderRadius: 25,
    borderColor: "#fff",
    borderWidth: 3,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 15,
    marginBottom: 15,
  },
  text: {
    color: "#fff",
    fontFamily: "AzeretMono_400Regular",
    flex: 1,
  },
});
