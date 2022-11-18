import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    background: {
        backgroundColor: "#1F1F1F",
        flex: 1,
    },
    viewport: {
        flex: 20,
        justifyContent: "center",
        paddingLeft: 10,
        paddingRight: 10,
    },
    horizontalViewport : {
        flexDirection: "row",
        alignContent: "space-around",
    },
    insideHorizontalViewport : {
        flex: 1,
        alignItems: "center",
    },
    submitButton: {
        backgroundColor: "#FFE500",
        width: 200,
        height: 40,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
    },
    buttonText: {
        fontSize: 16,
        fontFamily: "AzeretMono_400Regular",
        color: "black",
        position: "absolute",
    },
    normalText: {
        fontSize: 12,
        fontFamily: "AzeretMono_400Regular",
        color: "white",
    },
    arrow: {
        zIndex: 2,
    },
    backarrow: {
        zIndex: 3,
        position: "absolute",
        top: 50,
        left: 20,
    }
})

