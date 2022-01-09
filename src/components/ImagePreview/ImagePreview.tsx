import React from "react";
import { Image, ImageRequireSource } from "react-native";
import styles from "./ImagePrevie.styles";

interface ImagePreviewProps {
  source: ImageRequireSource;
}

function ImagePreview({ source }: ImagePreviewProps) {
  return <Image source={source} style={styles.image} />;
}

export default ImagePreview;
