import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1F1F1F",
    // alignItems: "center",
    flexDirection: "column",
    width: "100%",
  },
  section: {
    flex: 1,
    alignItems: "center",
    flexDirection: "column",
  },
  title: {
    width: 300,
    textAlign: "left",
    fontSize: 32,
    fontWeight: "bold",
  },
  profile: {
    marginTop: 50,
    width: 150,
    height: 150,
    resizeMode: "stretch",
  },
  buttonContainer: {
    marginTop: 50,
    backgroundColor: "#cccccc",
    borderRadius: 40,
    width: 100,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: {
      width: 5,
      height: 4,
    },
  },
  heading: {
    fontSize: 18,
    color: "white",
    fontFamily: "AzeretMono_700Bold",
  },
  fact: {
    fontSize: 18,
    marginTop: 16,
    shadowOpacity: 0,
  },
  facts: {
    backgroundColor: "#ededed",
    borderRadius: 10,
    paddingTop: 0,
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 16,
    width: "100%",
    textAlign: "left",
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 4,
    shadowOffset: {
      width: 5,
      height: 4,
    },
  },
  profilePicture: {
    width: "25vw",
    height: "25vw",
  },
  addListingPressable: {
    width: "25vw",
    height: "25vw",
    backgroundColor: "#FFE600",
    alignItems: "center",
    justifyContent: "center",
  },
  addListingText: {
    fontSize: 13,
    fontFamily: "Azeret",
  },
  usernameText: {
    fontSize: 13,
    fontFamily: "Azeret",
    color: "white",
    marginVertical: "2px",
  },
  editProfilePressable: {
    width: "100%",
    height: 21,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
});
