import React from "react";
import { MotiView } from "moti";
import { Image, ImageRequireSource } from "react-native";
import styles from "./CoverImage.styles";

const moti = {
  from: { opacity: 0, scale: 1.1 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 1.1 },
};

interface CoverImageProps {
  image: ImageRequireSource;
}

function CoverImage({ image }: CoverImageProps) {
  return (
    <MotiView from={moti.from} animate={moti.animate} exit={moti.exit}>
      <Image source={image} resizeMode="cover" style={styles.image} />
    </MotiView>
  );
}

export default CoverImage;
