import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    backgroundView: {
        backgroundColor: "#1F1F1F",
        flex: 1,
        overflow: "hidden",
    },
    keyboardDismisser: {
        position: "absolute",
        height: "200%",
        width: "100%",
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
    yellowBox: {
        backgroundColor: "#FFE600",
        transform: [{ rotate: "-15deg" }],
        position: "absolute",
        width: 830,
        height: 600,
        top: -250,
        left: -100,
    },
    backArrow: {
        zIndex: 3,
        position: "absolute",
        top: -150,
        left: 20,
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
    getDetailsButton: {
        backgroundColor: "white",
        height: 40,
        width: 200,
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        top: 170,
      },
    getDetailsText: {
        fontSize: 16,
        fontFamily: "AzeretMono_400Regular",
    },
    logoimage: {
        zIndex: 2,
    },
}
)
