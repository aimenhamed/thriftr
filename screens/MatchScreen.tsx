import { View, Text, ImageBackground, Image, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import ItsA from "../assets/ItsA";
import Match from "../assets/Match";
import { PageProps } from "../Router";
import { Item } from "../types/item";
import { styles } from "./Match.style";
import ExchangeArrows from "../assets/ExchangeArrows";
import Bag from "../assets/Bag";
import MessagesOutline from "../assets/MessagesFilled";

export type MatchScreenProps = {
    itemMatched: Item;
  } & PageProps;

const MatchScreen = ({ itemMatched }: MatchScreenProps) => {

  const onSendMessagePress = () => {
    console.log("send message button pressed");
  };

  const onKeepThriftingPress = () => {
    console.log("keep thrifting button pressed");
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../data/images/items/faa794a4-9ff0-426b-ad31-69421db6c176.png")}
        resizeMode="cover"
        style={styles.background}
      >
        <LinearGradient
          colors={["#1F1F1FB0", "#1F1F1FFF"]}
          start={{x: 0, y: 0}}
          end={{x:0, y: 0.5}}
          style={styles.dimmer}
        >
          <View style={styles.itsAMatch}>
            <ItsA />
            <Match />
          </View>
          <View style={styles.swapDiagram}>
            <View style={styles.userAndItem}>
              <Image
                  source={require("../data/images/items/65f73402-6225-11ed-9b6a-0242ac120002.png")}
                  style={styles.itemImage}
              />
                <Image
                  source={require("../data/images/users/49b6a8f8-ca20-4e71-a4ec-73b705f476b3.jpg")}
                  style={{...styles.userImage, left: -6 }}
              />
            </View>
            <ExchangeArrows />
            <View style={styles.userAndItem}>
              <Image
                  source={require("../data/images/items/65f73402-6225-11ed-9b6a-0242ac120002.png")}
                  style={styles.itemImage}
              />
                <Image
                  source={require("../data/images/users/49b6a8f8-ca20-4e71-a4ec-73b705f476b3.jpg")}
                  style={{...styles.userImage, right: -6 }}
              />
            </View>
          </View>
          <Text style={styles.caption}>
            @yepstyle also wants your Super Cool Hoodie!
          </Text>
          <TouchableOpacity
            style={styles.sendMessageButton}
            onPress={onSendMessagePress}
          >
            <MessagesOutline style={styles.icon} />
            <Text style={styles.sendMessageText}>Send Message</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.keepThriftingButton}
            onPress={onKeepThriftingPress}
          >
            <Bag style={styles.icon} />
            <Text style={styles.keepThriftingText}>Keep Thrifting</Text>
          </TouchableOpacity>
        </LinearGradient>
      </ImageBackground>
    </View>
  );
};

export default MatchScreen;
