import { Dimensions, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1F1F1F",
    width: "100%",
  },
  background: {
    flex: 1,
    height: "100%",
    width: "100%",
  },
  dimmer: {
    flex: 1,
    alignItems: "center",
  },
  closeIcon: {
    marginTop: "10%",
    marginLeft: "10%",
    marginBottom: "5%",
    alignSelf: "flex-start",
  },
  caption: {
    color: "#fff",
    fontFamily: "AzeretMono_400Regular",
    width: "80%",
    fontSize: 18,
    lineHeight: 28,
  },
  boldCaption: {
    fontFamily: "AzeretMono_700Bold",
  },
  scrollViewContainer: {
    flexWrap: "wrap",
    flexDirection: "row",
    margin: "5%",
  },
  itemSelector: {
    marginTop: 20,
    marginBottom: 20,
  },
  itemPhotoButton: {
    height: Dimensions.get("screen").width / 2.5,
    width: Dimensions.get("screen").width / 2.5,
    margin: 10,
    overflow: "hidden",
  },
  itemPhoto: {
    height: "100%",
    width: "100%",
  },
  itemPhotoDimmer: {
    backgroundColor: "#000000AA",
    height: "100%",
    width: "100%",
  },
  selectedIcon: {
    position: "absolute",
    bottom: 10,
    right: 10,
  },
  disabledOfferButton: {
    flexDirection: "row",
    backgroundColor: "#FFE60030",
    justifyContent: "center",
    alignItems: "center",
    width: "70%",
    height: 50,
    marginBottom: "10%",
  },
  offerButton: {
    flexDirection: "row",
    backgroundColor: "#FFE600",
    justifyContent: "center",
    alignItems: "center",
    width: "70%",
    height: 50,
    marginBottom: "10%",
  },
  offerButtonText: {
    fontFamily: "AzeretMono_400Regular",
  },
});
