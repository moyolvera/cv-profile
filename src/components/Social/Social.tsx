import { Feather, Ionicons } from "@expo/vector-icons";
import React from "react";
import { View, Linking } from "react-native";
import styles from "./Social.styles";

interface SocialProps {
  git?: string;
  linkedin?: string;
  twitter?: string;
  instagram?: string;
  reddit?: string;
}

function Social({ git, linkedin, twitter, instagram, reddit }: SocialProps) {
  function openLink(url: string) {
    Linking.openURL(url);
  }

  return (
    <View style={styles.wrapper}>
      {!!git ? (
        <Feather
          name="github"
          size={20}
          color="#32313E"
          style={styles.item}
          onPress={() => openLink(git)}
        />
      ) : null}
      {!!linkedin ? (
        <Feather
          name="linkedin"
          size={20}
          color="#32313E"
          style={styles.item}
          onPress={() => openLink(linkedin)}
        />
      ) : null}
      {!!reddit ? (
        <Ionicons
          name="logo-reddit"
          size={20}
          color="#32313E"
          style={styles.item}
          onPress={() => openLink(reddit)}
        />
      ) : null}
      {!!twitter ? (
        <Feather
          name="twitter"
          size={20}
          color="#32313E"
          style={styles.item}
          onPress={() => openLink(twitter)}
        />
      ) : null}
      {!!instagram ? (
        <Feather
          name="instagram"
          size={20}
          color="#32313E"
          style={styles.item}
          onPress={() => openLink(instagram)}
        />
      ) : null}
    </View>
  );
}

export default Social;
