import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    background: {
        backgroundColor: "#1F1F1F",
        flex: 1,
    },
    viewport: {
        flex: 20,
        justifyContent: "center",
        paddingLeft: 30,
        paddingRight: 30,
    },
    horizontalViewport : {
        flexDirection: "row",
        alignContent: "space-around"
    },   
    insideHorizontalViewport : {
        flex: 1,
        alignItems: "center",
    }, 
    optionButton: {
        width: 135,
        height: 40,
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1,
        pressed: false,
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
    }
})

