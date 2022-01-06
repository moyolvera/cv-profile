import React from "react";
import { View, FlatList, FlatListProps } from "react-native";
import Animated from "react-native-reanimated";
import { EducationItem } from "../../types/types";
import EducationItemComponent from "../EducationItem/EducationItemComponent";

const AnimatedFlatList = Animated.createAnimatedComponent(
  FlatList
) as React.ComponentClass<Animated.AnimateProps<FlatListProps<EducationItem>>>;

interface EducationProps {
  education: EducationItem[];
}

function renderItem({ item, index }: { item: EducationItem; index: number }) {
  return <EducationItemComponent item={item} index={index} />;
}

function Education({ education }: EducationProps) {
  return (
    <View>
      <AnimatedFlatList
        data={education}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

export default React.memo(Education);
