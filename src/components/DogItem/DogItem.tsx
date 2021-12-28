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

interface DogItemProps {}

export const START_GRADIENT = { x: 0.5, y: 0.0 };
export const END_GRADIENT = { x: 0.5, y: 0.8 };

function DogItem({}: DogItemProps) {
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
          source={require("../../../assets/dogs/kenai.png")}
          resizeMode="cover"
          style={COMMON_STYLES.dimensions}
        />
        <Image
          source={require("../../../assets/dogs/kenai-2.png")}
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
            name="Kenai"
            date="2017-2019"
            description='Kenai was the only one to win the "Best Dog of the World" award twice. He was a mix of blue heleer and german shepperd'
          />
        </LinearGradient>
        <View style={styles.descriptionWrapper}>
          <Text style={styles.description}>
            {`Birthday: 1st of February, 2017 \n\nHe was my first own dog and I loved him aswell as my whole family. The impact of his life has been so profound that I can't imagine how I ever lived without him. He changed me and my family for good, since then my family and me understand the love and importance of this little friends who are grown to be another member of the family.\n\nHe died in an accident in the middle of the summer of 2019, but we will always remember him and his memory.`}
          </Text>
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
