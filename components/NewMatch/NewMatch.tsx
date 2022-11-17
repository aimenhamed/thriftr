import { Text, Pressable } from "react-native";
import ImageStack from "../ImageStack/ImageStack";
import { Match } from "../../types/match";
import { styles } from "./style";
import { Backend } from "../../backend";

type NewMatchCardProps = {
  matched: Match;
  press: () => void;
};

const NewMatchCard = ({ matched, press }: NewMatchCardProps) => {
  const myProfile = Backend.getProfile(matched.userId)!;
  const matchedWith = Backend.getProfile(matched.matchId)!;

  const matchedItem = matchedWith.items.find(
    (item) => item.itemId === matched.matchItemId
  )!;
  const myItem = myProfile.items.find(
    (item) => item.itemId === matched.itemId
  )!;

  return (
    <Pressable onPress={press}>
      <ImageStack
        topImage={myItem.photos[0]}
        bottomImage={matchedItem.photos[0]}
      />
      <Text style={styles.text}>{`@${
        matchedWith?.name.substring(0, 5) || "missing"
      }..`}</Text>
    </Pressable>
  );
};

export default NewMatchCard;
