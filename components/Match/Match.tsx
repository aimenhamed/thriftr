import { View, Text, TouchableOpacity } from "react-native";
import { Backend } from "../../backend";
import { Match } from "../../types/match";
import { getLastMessage } from "../../utils";
import ImageStack from "../ImageStack/ImageStack";
import { styles } from "./style";

type MatchCardProps = {
  matched: Match;
  press: () => void;
};

const MatchCard = ({ matched, press }: MatchCardProps) => {
  const myProfile = Backend.getProfile(matched.userId)!;
  const matchedWith = Backend.getProfile(matched.matchId)!;
  const chat = Backend.getChat(matched.chatId)!;

  const matchedItem = matchedWith.items.find(
    (item) => item.itemId === matched.matchItemId
  )!;
  const myItem = myProfile.items.find(
    (item) => item.itemId === matched.itemId
  )!;

  const lastMessage = getLastMessage(chat);
  return (
    <TouchableOpacity
      onPress={press}
      style={{ flex: 1, flexDirection: "column", marginBottom: 16 }}
    >
      <View
        style={{
          flex: 1,
          flexDirection: "row",
        }}
      >
        <ImageStack
          topImage={myItem.photos[0]}
          bottomImage={matchedItem.photos[0]}
        />
        <Text
          style={{
            ...styles.text,
            fontFamily: "AzeretMono_700Bold",
            marginTop: 15,
            marginLeft: 15,
          }}
        >{`@${matchedWith?.name}`}</Text>
      </View>
      <Text
        style={{ ...styles.text, marginLeft: 105 }}
      >{`${lastMessage?.content.text?.substring(0, 35)}..`}</Text>
    </TouchableOpacity>
  );
};

export default MatchCard;
