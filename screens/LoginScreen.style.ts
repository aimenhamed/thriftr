import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  backgroundView: {
    backgroundColor: "#1F1F1F",
    flex: 1,
  },
  upperView: {
    marginTop: 200,
    marginBottom: 250,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  lowerView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  logoimage: {
    zIndex: 2,
    width: 182,
    height: 76,
  },
  yellowBox: {
    backgroundColor: "#FFE600",
    transform: [{ rotate: "-15deg" }],
    position: "absolute",
    width: 830,
    height: 600,
    top: -250,
    left: -100,
  },
  inputUsername: {
    borderBottomWidth: 2,
    borderColor: "white",
    color: "#AAAAAA",
    position: "absolute",
    width: 200,
    height: 30,
    top: 30,
    fontFamily: "AzeretMono_400Regular",
  },
  inputPassword: {
    borderBottomWidth: 2,
    borderColor: "white",
    color: "#AAAAAA",
    position: "absolute",
    width: 200,
    height: 30,
    top: 80,
    fontFamily: "AzeretMono_400Regular",
    placeholderOpacity: 1,
  },
  loginButton: {
    backgroundColor: "white",
    height: 40,
    width: 200,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: 170,
  },
  signupButton: {
    borderWidth: 2,
    borderColor: "white",
    height: 40,
    width: 200,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: 230,
  },
  loginText: {
    fontSize: 16,
    fontFamily: "AzeretMono_400Regular",
  },
  signupText: {
    fontSize: 16,
    color: "white",
    fontFamily: "AzeretMono_400Regular",
  },
  forgotButton: {
    position: "absolute",
    top: 330,
    height: 40,
  },
  forgotText: {
    color: "white",
    fontSize: 12,
    fontFamily: "AzeretMono_400Regular",
    zIndex: 2,
  },
});
