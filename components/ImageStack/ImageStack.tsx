import { View, Image, ImageSourcePropType } from "react-native";
import { styles } from "./style";

type ImageStackProps = {
  topImage: ImageSourcePropType;
  bottomImage: ImageSourcePropType;
  stackStyling?: any
  topImageStyling?: any
  bottomImageStyling?: any
};

const ImageStack = ({
  topImage,
  bottomImage,
  stackStyling = {},
  topImageStyling = {},
  bottomImageStyling = {}
}: ImageStackProps) => {
  return (
    <View style={{ height: 45, width: 75, ...stackStyling }}>
      <Image
        source={topImage}
        style={{ ...styles.image, top: 12, right: 20, ...topImageStyling }}
      />
      <Image source={bottomImage} style={{...styles.image, ...bottomImageStyling}} />
    </View>
  );
};

export default ImageStack;
