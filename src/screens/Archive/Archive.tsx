import React, { useState } from "react";
import { ScrollView, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { AnimatePresence } from "moti";
import { PanGestureHandlerGestureEvent } from "react-native-gesture-handler";
import {
  runOnJS,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import { snapPoint } from "react-native-redash";
import {
  AppResume,
  Background,
  CoverImage,
  Fab,
  RoundButton,
  ScrollBar,
} from "../../components";
import GradientCover from "../../components/GradientCover/GradientCover";
import { APPS_INFO } from "../../data/data";
import COMMON_STYLES from "../../theme/theme";
import styles from "./Archive.styles";

interface ArchiveProps {}

const ITEM_HEIGHT = 100;
const snapPointsY = [
  0,
  -ITEM_HEIGHT,
  -2 * ITEM_HEIGHT,
  -3 * ITEM_HEIGHT,
  -4 * ITEM_HEIGHT,
];
export const START_GRADIENT = { x: 0.2, y: 0.0 };
export const END_GRADIENT = { x: 0.2, y: 1 };

function Archive({}: ArchiveProps) {
  const { goBack } = useNavigation();

  const [index, setIndex] = useState(0);
  const animation = useSharedValue(0);

  useDerivedValue(() => {
    runOnJS(setIndex)(Math.round(animation.value / ITEM_HEIGHT));
  });

  const gestureHandler = useAnimatedGestureHandler<
    PanGestureHandlerGestureEvent,
    { startY: number }
  >({
    onStart(_, context) {
      context.startY = animation.value;
    },
    onActive(event, context) {
      animation.value = context.startY + event.translationY;
    },
    onEnd(event) {
      const snapPointY = snapPoint(
        event.translationY,
        event.velocityY,
        snapPointsY
      );
      animation.value = withSpring(snapPointY, { velocity: event.velocityY });
    },
  });

  const animatedLogo = useAnimatedStyle(
    () => ({
      transform: [
        {
          translateY: animation.value,
        },
      ],
    }),
    []
  );

  function increaseIndex() {
    switch (animation.value) {
      case 0:
        animation.value = withSpring(-ITEM_HEIGHT);
        break;
      case -ITEM_HEIGHT:
        animation.value = withSpring(-2 * ITEM_HEIGHT);
        break;
      case -2 * ITEM_HEIGHT:
        animation.value = withSpring(-3 * ITEM_HEIGHT);
        break;
      case -3 * ITEM_HEIGHT:
        animation.value = withSpring(-4 * ITEM_HEIGHT);
        break;
      case -4 * ITEM_HEIGHT:
      default:
        break;
    }
  }

  function decreaseIndex() {
    switch (animation.value) {
      case -ITEM_HEIGHT:
        animation.value = withSpring(0);
        break;
      case -2 * ITEM_HEIGHT:
        animation.value = withSpring(-ITEM_HEIGHT);
        break;
      case -3 * ITEM_HEIGHT:
        animation.value = withSpring(-2 * ITEM_HEIGHT);
        break;
      case -4 * ITEM_HEIGHT:
        animation.value = withSpring(-3 * ITEM_HEIGHT);
        break;
      case 0:
      default:
        break;
    }
  }

  return (
    <Background>
      <View style={styles.backWrapper}>
        <RoundButton onPress={goBack} icon="chevron-left" />
      </View>
      <ScrollBar gestureEvent={gestureHandler} />
      <View style={styles.coverWrapper}>
        <AnimatePresence>
          {index === 0 && (
            <CoverImage image={require("../../../assets/dogs/kenai.png")} />
          )}
        </AnimatePresence>
        <AnimatePresence>
          {index === -1 && (
            <CoverImage image={require("../../../assets/dogs/koda-2.png")} />
          )}
        </AnimatePresence>
        <AnimatePresence>
          {index === -2 && (
            <CoverImage image={require("../../../assets/dogs/cabo-2.png")} />
          )}
        </AnimatePresence>
        <AnimatePresence>
          {index === -3 && (
            <CoverImage image={require("../../../assets/dogs/coli.png")} />
          )}
        </AnimatePresence>
        <AnimatePresence>
          {index === -4 && (
            <CoverImage image={require("../../../assets/dogs/cabo.png")} />
          )}
        </AnimatePresence>
      </View>
      <GradientCover animatedStyle={animatedLogo} />
      <ScrollView style={COMMON_STYLES.padding20}>
        <AnimatePresence>
          {index === 0 && (
            <AppResume
              resume={APPS_INFO[0].resume}
              features={APPS_INFO[0].features}
              specs={APPS_INFO[0].specs}
              previewImages={APPS_INFO[0].previews}
            />
          )}
        </AnimatePresence>
        <AnimatePresence>
          {index === -1 && (
            <AppResume
              resume={APPS_INFO[1].resume}
              features={APPS_INFO[1].features}
              specs={APPS_INFO[1].specs}
              previewImages={APPS_INFO[1].previews}
            />
          )}
        </AnimatePresence>
        <AnimatePresence>
          {index === -2 && (
            <AppResume
              resume={APPS_INFO[2].resume}
              features={APPS_INFO[2].features}
              specs={APPS_INFO[2].specs}
              previewImages={APPS_INFO[2].previews}
            />
          )}
        </AnimatePresence>
        <AnimatePresence>
          {index === -3 && (
            <AppResume
              resume={APPS_INFO[3].resume}
              features={APPS_INFO[3].features}
              specs={APPS_INFO[3].specs}
              previewImages={APPS_INFO[3].previews}
            />
          )}
        </AnimatePresence>
        <AnimatePresence>
          {index === -4 && (
            <AppResume
              resume={APPS_INFO[4].resume}
              features={APPS_INFO[4].features}
              specs={APPS_INFO[4].specs}
              previewImages={APPS_INFO[4].previews}
            />
          )}
        </AnimatePresence>
        <View style={styles.separator} />
      </ScrollView>
      <View style={styles.navigationWrapper}>
        <RoundButton
          onPress={decreaseIndex}
          icon="chevron-left"
          style={styles.navigationLeft}
        />
        <RoundButton
          onPress={increaseIndex}
          icon="chevron-right"
          style={styles.navigationRight}
        />
      </View>
      <Fab />
    </Background>
  );
}

export default Archive;
