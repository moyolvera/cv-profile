import React from "react";
import { View, Image } from "react-native";
import styles from "./Credits.styles";
import Text from "../Text/Text";

interface CreditsProps {}

function Credits({}: CreditsProps) {
  return (
    <View style={styles.wrapper}>
      <Image
        source={require("../../../assets/logo.png")}
        style={styles.image}
      />
      <Text style={styles.text}>{new Date().getFullYear()}</Text>
    </View>
  );
}

export default React.memo(Credits);
