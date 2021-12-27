import React, { useEffect } from "react";
import { View, Text } from "react-native";
import Animated, {
  Extrapolation,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withSpring,
  withTiming,
} from "react-native-reanimated";
import styles, { BAR_SIZE } from "./Skill.styles";

interface SkillProps {
  title: string;
  percentage: number;
  color: string;
}

function Skill({ title, percentage, color }: SkillProps) {
  const animation = useSharedValue(BAR_SIZE * (percentage / 100));
  const opacity = useSharedValue(0);

  const animatedStyle = useAnimatedStyle(
    () => ({
      transform: [{ translateY: animation.value }],
    }),
    []
  );

  const textStyle = useAnimatedStyle(
    () => ({
      width: 65,
      opacity: opacity.value,
    }),
    []
  );

  useEffect(() => {
    animation.value = withDelay(250, withTiming(0));
    opacity.value = withDelay(600, withTiming(1, { duration: 250 }));
  }, [percentage]);

  return (
    <View style={styles.wrapper}>
      <View
        style={{
          width: 65,
          alignItems: "center",
        }}
      >
        <View style={styles.progressBackground}>
          {percentage && (
            <Animated.View style={animatedStyle}>
              <Animated.View style={textStyle}>
                <Text style={styles.title}>{title}</Text>
              </Animated.View>
              <View
                style={[
                  styles.progress,
                  {
                    backgroundColor: color,
                    height: BAR_SIZE * (percentage / 100),
                  },
                ]}
              />
            </Animated.View>
          )}
        </View>
      </View>
    </View>
  );
}

export default Skill;
