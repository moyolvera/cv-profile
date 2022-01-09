import React from "react";
import { FlatList, StyleProp, ViewStyle } from "react-native";

interface ListProps {
  data: string[];
  itemComponent: React.FC<{ item: string }>;
  style?: StyleProp<ViewStyle>;
}

function List({ data, itemComponent, style }: ListProps) {
  return (
    <FlatList
      style={style}
      data={data}
      renderItem={itemComponent}
      keyExtractor={(item) => String(item)}
    />
  );
}

export default React.memo(List);
