import { View, Image, ImageSourcePropType } from "react-native";
import { styles } from "./style";

type ImageStackProps = {
  topImage: ImageSourcePropType;
  bottomImage: ImageSourcePropType;
};

const ImageStack = ({ topImage, bottomImage }: ImageStackProps) => {
  return (
    <View style={styles.stack}>
      <Image
        source={topImage}
        style={{ ...styles.image, top: 12, right: 20 }}
      />
      <Image source={bottomImage} style={styles.image} />
    </View>
  );
};

export default ImageStack;
