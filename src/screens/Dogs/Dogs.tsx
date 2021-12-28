import React from "react";
import { FlatList } from "react-native";
import { Background, DogItem, Fab, LargeHeader } from "../../components";
import { HEIGHT } from "../../constants";
import { DOGS_DATA } from "../../data/data";
import { DogItemType } from "../../types/types";

interface DogsProps {}

function renderItem({ item }: { item: DogItemType }) {
  return <DogItem item={item} />;
}

function Dogs({}: DogsProps) {
  return (
    <Background>
      <LargeHeader title="DOGS" subtitle="MY" />
      <FlatList
        data={DOGS_DATA}
        pagingEnabled
        decelerationRate="normal"
        snapToInterval={HEIGHT}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
      <Fab />
    </Background>
  );
}

export default Dogs;
