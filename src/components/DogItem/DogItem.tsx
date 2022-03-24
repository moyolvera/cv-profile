import React from "react";
import { Image, TouchableOpacity, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import Text from "../Text/Text";
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

interface PaginationDotProps {
  scroll: Animated.SharedValue<number>;
}

function PaginationDot({ scroll }: PaginationDotProps) {
  const mainDot = useAnimatedStyle(() => {
    return {
      transform: [
        {
          scale: interpolate(
            scroll.value,
            [-1 * WIDTH, 0 * WIDTH, 1 * WIDTH],
            [0.4, 1, 0.4],
            Extrapolate.CLAMP
          ),
        },
      ],
    };
  });

  const secondDot = useAnimatedStyle(() => {
    return {
      transform: [
        {
          scale: interpolate(
            scroll.value,
            [0 * WIDTH, 1 * WIDTH, 2 * WIDTH],
            [0.4, 1, 0.4],
            Extrapolate.CLAMP
          ),
        },
      ],
    };
  });

  return (
    <View style={styles.paginationWrapper}>
      <Animated.View style={[styles.dot, mainDot]} />
      <Animated.View style={[styles.dot, secondDot]} />
    </View>
  );
}

function DogItem({ item }: DogItemProps) {
  const animation = useSharedValue(HEIGHT - 220);
  const scrollX = useSharedValue(0);

  function toggleAnimation() {
    if (animation.value === 200) {
      animation.value = withTiming(HEIGHT - 220);
    } else {
      animation.value = withTiming(200);
    }
  }

  const scrollHandler = useAnimatedScrollHandler((event) => {
    scrollX.value = event.contentOffset.x;
  });

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
      <Animated.ScrollView
        horizontal
        pagingEnabled
        snapToInterval={WIDTH}
        decelerationRate="fast"
        onScroll={scrollHandler}
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
      </Animated.ScrollView>
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
          <PaginationDot scroll={scrollX} />
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
