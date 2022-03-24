import React from "react";
import { FlatList, StatusBar, StyleSheet } from "react-native";
import { Background, DogItem, Fab, LargeHeader } from "../../components";
import { HEIGHT } from "../../constants";
import { DOGS_DATA } from "../../data/data";
import { DogItemType } from "../../types/types";

interface DogsProps {}

function renderItem({ item }: { item: DogItemType }) {
  return <DogItem item={item} />;
}

const styles = StyleSheet.create({
  blackBackground: {
    backgroundColor: "#000",
  },
});

function Dogs({}: DogsProps) {
  return (
    <Background style={styles.blackBackground}>
      <StatusBar barStyle="light-content" backgroundColor="#000" />
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
