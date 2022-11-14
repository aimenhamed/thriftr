import { Text, View, Image } from "react-native";
import Arrow from "../../assets/Arrow";
import CrossIcon from "../../assets/CrossIcon";
import TickIcon from "../../assets/TickIcon";
import { Message } from "../../types/chat";
import { Profile } from "../../types/profile";
import { styles } from "./style";

type CounterTradeProps = {
  user: Profile;
  matchedWith: Profile;
  message: Message;
};

// User's counter trade
const CounterTrade = ({ user, matchedWith, message }: CounterTradeProps) => {
  const yourItems = user.items.filter((item) =>
    message.content.offer?.yourItems.includes(item.itemId)
  );
  const theirItems = matchedWith.items.filter((item) =>
    message.content.offer?.theirItems.includes(item.itemId)
  );
  const offerStatus = message.content.status!;

  const getOfferIcon = () => {
    if (offerStatus === "PENDING") {
      return "";
    } else if (offerStatus === "ACCEPTED") {
      return <TickIcon />;
    } else if (offerStatus === "REJECTED") {
      return <CrossIcon />;
    }
  };

  const getOfferStatus = () => {
    if (offerStatus === "PENDING") {
      return "Offer sent";
    } else if (offerStatus === "ACCEPTED") {
      return `${matchedWith.name} accepted your offer`;
    } else if (offerStatus === "REJECTED") {
      return `${matchedWith.name} rejected your offer`;
    }
    return "";
  };

  const getTextColor = () => {
    if (offerStatus === "PENDING") {
      return "#FFE600";
    } else if (offerStatus === "ACCEPTED") {
      return "#00FF00";
    } else if (offerStatus === "REJECTED") {
      return "#FF0000";
    }
    return "#000000";
  };

  return (
    <>
      <View style={styles.container}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            width: "100%",
          }}
        >
          {getOfferIcon()}
          <Text style={styles.text}>Counter Trade</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <View style={{ flexDirection: "column", justifyContent: "center" }}>
            <Text style={styles.regular}>Yours</Text>
            {yourItems.map((item) => (
              <Image
                key={item.itemId}
                source={item.photos[0]}
                style={{
                  width: 100,
                  height: 100,
                  borderColor: "#fff",
                  borderWidth: 3,
                  marginBottom: 6,
                }}
              />
            ))}
          </View>
          <View style={{ justifyContent: "center" }}>
            <Arrow />
          </View>
          <View
            style={{
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Text style={styles.regular}>Theirs</Text>
            {theirItems.map((item) => (
              <Image
                key={item.itemId}
                source={item.photos[0]}
                style={{
                  width: 100,
                  height: 100,
                  borderColor: "#FFE600",
                  borderWidth: 3,
                  marginBottom: 6,
                }}
              />
            ))}
          </View>
        </View>
      </View>
      <Text style={{ ...styles.regular, marginTop: 10, color: getTextColor() }}>
        {getOfferStatus()}
      </Text>
    </>
  );
};

export default CounterTrade;
