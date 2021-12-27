import React from "react";
import { Text } from "react-native";
import styles from "./Title.styles";

interface TitleProps {
  text: string;
}

function Title({ text }: TitleProps) {
  return <Text style={styles.wrapper}>{text}</Text>;
}

export default Title;
