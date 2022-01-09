import React from "react";
import { Image, ImageStyle, Linking, Pressable, StyleProp } from "react-native";
import styles from "./GooglePlayLink.styles";

interface GooglePlayLinkProps {
  link?: string;
  style?: StyleProp<ImageStyle>;
}

function GooglePlayLink({ style, link }: GooglePlayLinkProps) {
  function onPress() {
    if (link) {
      Linking.openURL(link);
    }
  }

  return (
    <Pressable onPress={onPress} style={styles.wrapper}>
      <Image
        source={require("../../../assets/works/playstore.png")}
        style={[styles.image, style]}
      />
    </Pressable>
  );
}

export default GooglePlayLink;
