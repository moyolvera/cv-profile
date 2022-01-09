import React from "react";
import { Text } from "react-native";
import styles from "./SmallTitle.styles";

interface SmallTitleProps {
  title: string;
}

function SmallTitle({ title }: SmallTitleProps) {
  return <Text style={styles.wrapper}>{title}</Text>;
}

export default SmallTitle;
