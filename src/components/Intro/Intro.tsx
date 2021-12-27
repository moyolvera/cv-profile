import React from "react";
import { Text } from "react-native";
import styles from "./Intro.styles";

interface IntroProps {
  about: string;
}

function Intro({ about }: IntroProps) {
  return <Text style={styles.wrapper}>{about}</Text>;
}

export default Intro;
