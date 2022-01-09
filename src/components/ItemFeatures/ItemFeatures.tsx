import React from "react";
import { View, Text } from "react-native";
import styles from "./ItemFeatures.styles";

interface ItemFeaturesProps {
  item: string;
}

function ItemFeatures({ item }: ItemFeaturesProps) {
  return <Text style={styles.wrapper}>{item}</Text>;
}

export default ItemFeatures;
