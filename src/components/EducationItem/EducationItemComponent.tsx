import React from "react";
import { View, Text } from "react-native";
import {
  PanGestureHandler,
  PanGestureHandlerGestureEvent,
} from "react-native-gesture-handler";
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import { EducationItem } from "../../types/types";
import styles from "./EducationItem.styles";

interface EducationItemComponentProps {
  item: EducationItem;
  index: number;
}

function EducationItemComponent({ item }: EducationItemComponentProps) {
  const animation = useSharedValue(0);

  const gestureHandler = useAnimatedGestureHandler<
    PanGestureHandlerGestureEvent,
    { startX: number }
  >({
    onStart(_, context) {
      context.startX = animation.value;
    },
    onActive(event, context) {
      animation.value = context.startX + event.translationX;
    },
    onFinish() {
      animation.value = withSpring(0);
    },
  });

  const animatedStyles = useAnimatedStyle(
    () => ({
      transform: [
        {
          translateX: animation.value,
        },
      ],
    }),
    []
  );

  return (
    <PanGestureHandler onGestureEvent={gestureHandler}>
      <Animated.View key={item.id} style={[styles.item, animatedStyles]}>
        <View
          style={[
            styles.enfasis,
            {
              backgroundColor: item.colors.enfasis,
            },
          ]}
        />
        <View style={styles.itemWrapper}>
          <Text style={styles.year}>{item.year}</Text>
          <Text>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.location}> • </Text>
            <Text style={styles.location}>{item.location}</Text>
          </Text>
          {!!item.description && (
            <Text style={styles.description}>{item.description}</Text>
          )}
        </View>
      </Animated.View>
    </PanGestureHandler>
  );
}

export default React.memo(EducationItemComponent);
