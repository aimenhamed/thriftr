import {
  useWindowDimensions,
  View,
  Image,
  Pressable,
  Text,
} from "react-native";
import { Profile } from "../types/profile";
import { styles } from "./Matches.style";

type AccountScreenProps = {
  currentUser: Boolean;
  profile: Profile;
};

export default function (props: AccountScreenProps) {
  const { height, width } = useWindowDimensions();
  const profilePictureStyle = {
    ...styles.profilePicture,
    borderRadius: height / 8,
  };

  return (
    <View>
      <View style={{ padding: 24 }}>
        <View
          style={{
            justifyContent: "space-between",
            flexDirection: "row",
          }}
        >
          <Image style={profilePictureStyle} source={props.profile.image} />
          {props.currentUser && (
            <Pressable style={styles.addListingPressable}>
              <Image
                style={{ width: "50%", height: "50%" }}
                source={require("../assets/plus.svg")}
              />
              <Text style={styles.addListingText}>Add Listing</Text>
            </Pressable>
          )}
        </View>
        <Text style={styles.usernameText}>{"@" + props.profile.name}</Text>
        {props.currentUser && (
          <Pressable style={styles.editProfilePressable}>
            <Text style={styles.addListingText}>Edit Profile</Text>
          </Pressable>
        )}
      </View>
      <View style={{ flexDirection: "row" }}>
        {props.profile.items.map((item) => (
          <Image
            style={{ width: width / 3, height: width / 3 }}
            source={item.photos[0]}
          />
        ))}
      </View>
    </View>
  );
}
