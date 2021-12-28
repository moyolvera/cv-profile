import React from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { HEIGHT, WIDTH } from "../../constants";
import COMMON_STYLES from "../../theme/theme";
import DogTitle from "../DogTitle/DogTitle";
import styles from "./DogItem.styles";
import { DogItemType } from "../../types/types";

interface DogItemProps {
  item: DogItemType;
}

export const START_GRADIENT = { x: 0.5, y: 0.0 };
export const END_GRADIENT = { x: 0.5, y: 0.8 };

function DogItem({ item }: DogItemProps) {
  const animation = useSharedValue(HEIGHT - 220);

  function toggleAnimation() {
    if (animation.value === 200) {
      animation.value = withTiming(HEIGHT - 220);
    } else {
      animation.value = withTiming(200);
    }
  }

  const animatedStyle = useAnimatedStyle(
    () => ({
      transform: [
        {
          translateY: animation.value,
        },
      ],
    }),
    []
  );

  const buttonStyle = useAnimatedStyle(
    () => ({
      transform: [
        {
          rotate:
            interpolate(
              animation.value,
              [HEIGHT - 220, 200],
              [0, 180],
              Extrapolate.CLAMP
            ) + "deg",
        },
      ],
    }),
    []
  );

  return (
    <View style={COMMON_STYLES.dimensions}>
      <ScrollView
        horizontal
        pagingEnabled
        snapToInterval={WIDTH}
        decelerationRate="fast"
      >
        <Image
          source={item.pictures.main}
          resizeMode="cover"
          style={COMMON_STYLES.dimensions}
        />
        <Image
          source={item.pictures.second}
          resizeMode="cover"
          style={COMMON_STYLES.dimensions}
        />
      </ScrollView>
      <Animated.View style={[styles.infoWrapper, animatedStyle]}>
        <LinearGradient
          colors={["transparent", "black"]}
          start={START_GRADIENT}
          end={END_GRADIENT}
          style={styles.gradient}
        >
          <DogTitle
            name={item.name}
            date={item.date}
            description={item.smallDescription}
          />
        </LinearGradient>
        <View style={styles.descriptionWrapper}>
          <Text style={styles.description}>{item.description}</Text>
        </View>
      </Animated.View>
      <TouchableOpacity style={styles.button} onPress={toggleAnimation}>
        <Animated.View style={buttonStyle}>
          <Feather name="chevron-up" color="white" size={28} />
        </Animated.View>
      </TouchableOpacity>
    </View>
  );
}

export default DogItem;
