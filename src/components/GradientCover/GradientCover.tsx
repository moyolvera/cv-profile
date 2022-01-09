import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import {
  View,
  Image,
  StyleProp,
  ViewStyle,
  ImageRequireSource,
} from "react-native";
import Animated from "react-native-reanimated";
import styles, { END_GRADIENT, START_GRADIENT } from "./GradientCover.styles";

interface GradientCoverProps {
  animatedStyle?: StyleProp<Animated.AnimateStyle<StyleProp<ViewStyle>>>;
}

interface ItemImageProps {
  image: ImageRequireSource;
}

function ItemImage({ image }: ItemImageProps) {
  return <Image source={image} style={styles.item} />;
}

function GradientCover({ animatedStyle }: GradientCoverProps) {
  return (
    <LinearGradient
      colors={["transparent", "black"]}
      start={START_GRADIENT}
      end={END_GRADIENT}
      style={styles.gradient}
    >
      <View style={styles.wrapper}>
        <View style={styles.viewPort}>
          <Animated.View style={animatedStyle}>
            <ItemImage image={require("../../../assets/works/crypta.png")} />
            <ItemImage image={require("../../../assets/works/storify.png")} />
            <ItemImage image={require("../../../assets/logo.png")} />
            <ItemImage image={require("../../../assets/logo.png")} />
          </Animated.View>
        </View>
      </View>
    </LinearGradient>
  );
}

export default GradientCover;
