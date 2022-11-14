import { useState } from "react";
import {
  View,
  TouchableOpacity,
  Text,
  Dimensions,
  DeviceEventEmitter,
} from "react-native";
import Swiper from "react-native-deck-swiper";
import IgnoreIcon from "../assets/IgnoreIcon";
import LikeIcon from "../assets/LikeIcon";
import OfferIcon from "../assets/OfferIcon";
import ItemCard from "../components/ItemCard";
import { profiles } from "../data/profiles";
import { PageProps } from "../Router";
import { Item } from "../types/item";
import { styles } from "./Thrifting.style";

export type ThriftingScreenProps = {
  logOut: () => void;
  userId: string;
} & PageProps;

const SCREEN_WIDTH = Dimensions.get("screen").width;
const SCREEN_HEIGHT = Dimensions.get("screen").height;

const isMatch = (
  item: Item,
  userId: string,
  selectedItems: string[] = []
): boolean => {
  const userProfile = profiles.find((profile) => profile.userId === userId);
  const filteredMatches =
    selectedItems.length > 0
      ? userProfile?.matches.filter((match) =>
          selectedItems.includes(match.itemId)
        )
      : userProfile?.matches;
  return (
    filteredMatches?.some((match) => match.matchItemId === item.itemId) || false
  );
};

const ThriftingScreen = ({ navigation, userId }: ThriftingScreenProps) => {
  let swiperRef:
    | Swiper<{ item: Item; seller: { name: string; image: any } }>
    | undefined = undefined;

  DeviceEventEmitter.addListener(
    "cancelOfferSelectively",
    ({ startingIndex }) => {
      swiperRef?.jumpToCardIndex(startingIndex);
    }
  );

  DeviceEventEmitter.addListener(
    "finishOfferSelectively",
    ({ swipedCardIndex, selectedItems }) => {
      if (isMatch(items[swipedCardIndex].item, userId, selectedItems)) {
        navigation.navigate("ItsAMatchScreen", {
          userId,
          itemMatched: items[swipedCardIndex].item,
          sellerMatched: items[swipedCardIndex].seller,
        });
      }
      swiperRef?.jumpToCardIndex(nextCardIndex(swipedCardIndex));
      setLastSwipedCard(swipedCardIndex);
    }
  );

  const items = profiles
    .filter((profile) => profile.userId !== userId)
    .map((profile) =>
      profile.items.map((item) => ({
        item,
        seller: { name: profile.name, image: profile.image },
      }))
    )
    .flat();

  const [lastSwipedCard, setLastSwipedCard] = useState(items.length - 1);
  const nextCardIndex = (idx: number) => (idx + 1) % items.length;

  const updateCardIndex = (swipedCardIndex: number) => {
    setLastSwipedCard(swipedCardIndex);
  };

  const onLike = (swipedCardIndex: number) => {
    if (isMatch(items[swipedCardIndex].item, userId)) {
      navigation.navigate("ItsAMatchScreen", {
        userId,
        itemMatched: items[swipedCardIndex].item,
        sellerMatched: items[swipedCardIndex].seller,
      });
    }
  };

  const onOfferSelectively = (swipedCardIndex: number) => {
    navigation.navigate("OfferSelectivelyScreen", {
      userId,
      itemMatched: items[swipedCardIndex].item,
      sellerMatched: items[swipedCardIndex].seller,
      swipedCardIndex,
    });
  };

  //! Ignore type error below, the react-native-deck-swiper library incorrectly defined
  //! outputOverlayLabelsOpacityRangeX and outputOverlayLabelsOpacityRangeY to be of type
  //! [number, number, number] instead of [number, number, number, number, number]
  return (
    <View style={styles.container}>
      <View style={styles.slantedBackground} />
      <Swiper
        ref={(swiper) => {
          swiperRef = swiper;
        }}
        cards={items}
        renderCard={(item) => (
          <ItemCard item={item.item} seller={item.seller} />
        )}
        onSwiped={updateCardIndex}
        onSwipedRight={onLike}
        onSwipedTop={onOfferSelectively}
        backgroundColor="transparent"
        stackSize={3}
        cardVerticalMargin={0}
        marginTop={20}
        containerStyle={{ height: "80%" }}
        cardStyle={{ height: "100%" }}
        infinite
        verticalThreshold={SCREEN_HEIGHT / 5}
        horizontalThreshold={SCREEN_WIDTH / 4}
        disableBottomSwipe
        stackSeparation={20}
        animateCardOpacity
        outputOverlayLabelsOpacityRangeX={[1, 0.5, 0, 0.5, 1]} //! Incorrectly defined type here
        outputOverlayLabelsOpacityRangeY={[1, 0.5, 0, 0.5, 1]} //! Incorrectly defined type here
        overlayOpacityHorizontalThreshold={1}
        overlayOpacityVerticalThreshold={1}
        animateOverlayLabelsOpacity
        overlayLabels={{
          left: {
            title: "Ignore",
            style: {
              label: {
                backgroundColor: "#1F1F1F",
                borderColor: "#FF0000",
                color: "#FF0000",
                borderWidth: 4,
                fontFamily: "AzeretMono_400Regular",
                borderRadius: 0,
                fontSize: 36,
              },
              wrapper: {
                flexDirection: "column",
                alignItems: "flex-end",
                justifyContent: "flex-start",
                marginTop: 20,
                marginLeft: -20,
              },
            },
          },
          right: {
            title: "Like",
            style: {
              label: {
                backgroundColor: "#1F1F1F",
                borderColor: "#00BF36",
                color: "#00BF36",
                borderWidth: 4,
                fontFamily: "AzeretMono_400Regular",
                borderRadius: 0,
                fontSize: 36,
              },
              wrapper: {
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "flex-start",
                marginTop: 20,
                marginLeft: 20,
              },
            },
          },
          top: {
            title: "Offer\nSelectively",
            style: {
              label: {
                backgroundColor: "#1F1F1F",
                borderColor: "#00BF36",
                color: "#00BF36",
                borderWidth: 4,
                fontFamily: "AzeretMono_400Regular",
                borderRadius: 0,
                fontSize: 36,
                textAlign: "center",
                marginBottom: "50%",
              },
              wrapper: {
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "flex-end",
              },
            },
          },
        }}
      />

      <View style={styles.userActions}>
        <TouchableOpacity
          style={styles.userAction}
          onPress={() => swiperRef?.swipeLeft()}
        >
          <IgnoreIcon />
          <Text style={styles.userActionText}>Ignore</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.userAction}
          onPress={() => onOfferSelectively(nextCardIndex(lastSwipedCard))}
        >
          <OfferIcon />
          <Text style={styles.userActionText}>Offer</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.userAction}
          onPress={() => swiperRef?.swipeRight()}
        >
          <LikeIcon />
          <Text style={styles.userActionText}>Like</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ThriftingScreen;
