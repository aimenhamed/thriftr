import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    backgroundView: {
        backgroundColor: "#1F1F1F",
        flex: 1,
        overflow: "hidden",
    },
    upperView: {
        marginTop: 200,
        marginBottom: 250,
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    logoimage: {
        zIndex: 2,
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
    lowerView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
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
    inputPhoneNumber: {
        borderBottomWidth: 2,
        borderColor: "white",
        color: "#AAAAAA",
        position: "absolute",
        width: 200,
        height: 30,
        top: 80,
        fontFamily: "AzeretMono_400Regular",
    },
    inputPassword: {
        borderBottomWidth: 2,
        borderColor: "white",
        color: "#AAAAAA",
        position: "absolute",
        width: 200,
        height: 30,
        top: 130,
        fontFamily: "AzeretMono_400Regular",
    },
    inputConfirmPassword: {
        borderBottomWidth: 2,
        borderColor: "white",
        color: "#AAAAAA",
        position: "absolute",
        width: 200,
        height: 30,
        top: 180,
        fontFamily: "AzeretMono_400Regular",
    },
    signupButton: {
        backgroundColor: "white",
        height: 40,
        width: 200,
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        top: 260,
    },
    signupText: {
        fontSize: 16,
        fontFamily: "AzeretMono_400Regular",
    },
    alreadyHaveAccountButton: {
        position: "absolute",
        top: 330,
        height: 40,
    },
    alreadyHaveAccountText: {
        color: "white",
        fontSize: 12,
        fontFamily: "AzeretMono_400Regular",
    },
    backArrow: {
        zIndex: 3,
        position: "absolute",
        top: -150,
        left: 20,
    }
});
