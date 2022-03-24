import React from "react";
import Text from "../Text/Text";
import styles from "./ItemSpecs.styles";

interface ItemSpecsProps {
  item: string;
}

function ItemSpecs({ item }: ItemSpecsProps) {
  return <Text style={styles.wrapper}>{`• ${item}`}</Text>;
}

export default ItemSpecs;
