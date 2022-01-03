import React, { useEffect } from "react";
import { Feather } from "@expo/vector-icons";
import { View, Text } from "react-native";
import styles from "./CanCard.styles";
import Animated, {
  useSharedValue,
  interpolate,
  useAnimatedStyle,
  useAnimatedGestureHandler,
  withDelay,
  withSpring,
} from "react-native-reanimated";
import {
  PanGestureHandler,
  PanGestureHandlerGestureEvent,
} from "react-native-gesture-handler";
import { Capability } from "../../types/types";

interface CanCardProps {
  skill: Capability;
}

function CanCard({ skill }: CanCardProps) {
  const rotation = useSharedValue(-180);

  const rotationStyles = useAnimatedStyle(
    () => ({
      zIndex: interpolate(rotation.value, [-180, 0, 180], [10, 1, 10]),
      transform: [
        { rotateY: `${interpolate(rotation.value, [0, 180], [180, 360])}deg` },
      ],
    }),
    []
  );

  const backRotationStyles = useAnimatedStyle(
    () => ({
      zIndex: interpolate(rotation.value, [-180, 0, 180], [1, 10, 1]),
      transform: [
        { rotateY: `${interpolate(rotation.value, [0, 180], [0, 180])}deg` },
      ],
    }),
    []
  );

  const gestureHandler = useAnimatedGestureHandler<
    PanGestureHandlerGestureEvent,
    { startX: number }
  >({
    onStart(_, context) {
      context.startX = rotation.value;
    },
    onActive(event, context) {
      const newValue = context.startX + event.translationX;
      if (newValue > -240 && newValue < 240) {
        rotation.value = newValue;
      }
    },
  });

  useEffect(() => {
    rotation.value = withDelay(250, withSpring(0));
  }, []);

  return (
    <View style={styles.wrapper}>
      <PanGestureHandler onGestureEvent={gestureHandler}>
        <Animated.View style={styles.modal}>
          <Animated.View style={[backRotationStyles, styles.modalWrapper]}>
            <View
              style={[styles.modalContentWrapper, styles.descriptionWrapper]}
            >
              <Text style={styles.descriptionText}>{skill.description}</Text>
            </View>
          </Animated.View>
          <Animated.View style={[rotationStyles, styles.modalWrapper]}>
            <View style={styles.modalContentWrapper}>
              <Feather name={skill.icon} size={70} color="#fff" />
              <Text style={styles.modalText}>{skill.name}</Text>
            </View>
          </Animated.View>
        </Animated.View>
      </PanGestureHandler>
    </View>
  );
}

export default CanCard;
