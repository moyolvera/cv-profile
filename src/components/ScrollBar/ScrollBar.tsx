import React from "react";
import { View } from "react-native";
import {
  GestureEvent,
  PanGestureHandler,
  PanGestureHandlerEventPayload,
} from "react-native-gesture-handler";
import Animated from "react-native-reanimated";
import styles from "./ScrollBar.styles";

interface ScrollBarProps {
  gestureEvent: (event: GestureEvent<PanGestureHandlerEventPayload>) => void;
}

function ScrollBar({ gestureEvent }: ScrollBarProps) {
  return (
    <View style={styles.wrapper}>
      <PanGestureHandler onGestureEvent={gestureEvent}>
        <Animated.View style={styles.scrollBar} />
      </PanGestureHandler>
    </View>
  );
}

export default ScrollBar;
