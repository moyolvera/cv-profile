import { Feather } from "@expo/vector-icons";
import React from "react";
import { View, Text } from "react-native";
import styles from "./Social.styles";

interface SocialProps {
  git?: string;
  linkedin?: string;
  twitter?: string;
  instagram?: string;
}

function Social({ git, linkedin, twitter, instagram }: SocialProps) {
  return (
    <View style={styles.wrapper}>
      {!!git ? (
        <Feather name="github" size={20} color="#fff" style={styles.item} />
      ) : null}
      {!!linkedin ? (
        <Feather name="linkedin" size={20} color="#fff" style={styles.item} />
      ) : null}
      {!!twitter ? (
        <Feather name="twitter" size={20} color="#fff" style={styles.item} />
      ) : null}
      {!!instagram ? (
        <Feather name="instagram" size={20} color="#fff" style={styles.item} />
      ) : null}
    </View>
  );
}

export default Social;
