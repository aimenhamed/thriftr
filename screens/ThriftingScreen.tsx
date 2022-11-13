import { useState } from "react";
import { View, TouchableOpacity, Text, Dimensions } from "react-native";
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

const isMatch = (item: Item, userId: string): boolean => {
  const userProfile = profiles.find((profile) => profile.userId === userId);
  return userProfile?.matches.some((match) => match.matchItemId === item.itemId) || false;
};

const ThriftingScreen = ({ navigation, userId }: ThriftingScreenProps) => {
  const [page, setPage] = useState(0);
  let swiperRef: Swiper<{ item: Item; seller: { name: string; image: any; }; }> | null | undefined = undefined;

  const items = profiles.filter((profile) => profile.userId !== userId)
                  .map((profile) => profile.items.map((item) => ({item, seller: {name: profile.name, image: profile.image}})))
                  .flat();

  const nextPage = (page + 1) % items.length;

  const onIgnore = () => {
    setPage(nextPage);
  };

  const onLike = () => {
    if (isMatch(items[page].item, userId)) {
      navigation.navigate("ItsAMatchScreen", {
        userId,
        itemMatched: items[page].item,
        sellerMatched: items[page].seller,
      });
    }

    setPage(nextPage);
  };

  const onOfferSelectively = () => {
    setPage(nextPage);
    // TODO
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
        renderCard={(item) => <ItemCard item={item.item} seller={item.seller} />}
        onSwipedLeft={onIgnore}
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
        outputOverlayLabelsOpacityRangeX={[1, 0.5, 0, 0.5, 1]}
        outputOverlayLabelsOpacityRangeY={[1, 0.5, 0, 0.5, 1]}
        overlayOpacityHorizontalThreshold={1}
        overlayOpacityVerticalThreshold={1}
        animateOverlayLabelsOpacity
        overlayLabels={{
          left: {
            title: 'Ignore',
            style: {
              label: {
                backgroundColor: '#1F1F1F',
                borderColor: '#FF0000',
                color: '#FF0000',
                borderWidth: 4,
                fontFamily: "AzeretMono_400Regular",
                borderRadius: 0,
                fontSize: 36,
              },
              wrapper: {
                flexDirection: 'column',
                alignItems: 'flex-end',
                justifyContent: 'flex-start',
                marginTop: 20,
                marginLeft: -20
              }
            }
          },
          right: {
            title: 'Like',
            style: {
              label: {
                backgroundColor: '#1F1F1F',
                borderColor: '#00BF36',
                color: '#00BF36',
                borderWidth: 4,
                fontFamily: "AzeretMono_400Regular",
                borderRadius: 0,
                fontSize: 36,
              },
              wrapper: {
                flexDirection: 'column',
                alignItems: 'flex-start',
                justifyContent: 'flex-start',
                marginTop: 20,
                marginLeft: 20
              }
            }
          },
          top: {
            title: 'Offer\nSelectively',
            style: {
              label: {
                backgroundColor: '#1F1F1F',
                borderColor: '#00BF36',
                color: '#00BF36',
                borderWidth: 4,
                fontFamily: "AzeretMono_400Regular",
                borderRadius: 0,
                fontSize: 36,
                textAlign: "center",
                marginBottom: "50%"
              },
              wrapper: {
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'flex-end',
              }
            }
          }
        }}
      />

      <View style={styles.userActions}>
        <TouchableOpacity style={styles.userAction} onPress={() => swiperRef?.swipeLeft()}>
          <IgnoreIcon />
          <Text style={styles.userActionText}>Ignore</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.userAction} onPress={() => swiperRef?.swipeTop()}>
          <OfferIcon />
          <Text style={styles.userActionText}>Offer</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.userAction} onPress={() => swiperRef?.swipeRight()}>
          <LikeIcon />
          <Text style={styles.userActionText}>Like</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ThriftingScreen;
