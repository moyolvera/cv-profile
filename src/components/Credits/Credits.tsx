import React from "react";
import { View, Text, Image } from "react-native";
import styles from "./Credits.styles";

interface CreditsProps {}

function Credits({}: CreditsProps) {
  return (
    <View style={styles.wrapper}>
      <Image
        source={require("../../../assets/labs-logo.png")}
        style={styles.image}
      />
      <Text style={styles.text}>{new Date().getFullYear()}</Text>
    </View>
  );
}

export default React.memo(Credits);
