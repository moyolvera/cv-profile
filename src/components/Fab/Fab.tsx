import React, { useMemo } from "react";
import { View, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useRoute } from "@react-navigation/native";
import styles from "./Fab.styles";

interface FabProps {}

function Fab({}: FabProps) {
  const animation = useSharedValue(0);

  const { name } = useRoute();

  const animatedStyle = useAnimatedStyle(
    () => ({
      transform: [
        {
          scale: animation.value,
        },
      ],
    }),
    []
  );

  function toggle() {
    if (animation.value === 0) {
      animation.value = withSpring(1);
    } else {
      animation.value = withSpring(0);
    }
  }

  const dotIndicatorStyle = useMemo(() => {
    switch (name) {
      case "Home":
        return styles.homeItem;
      case "Dog":
        return styles.dogItem;
      case "Personal":
        return styles.userItem;
      case "Archive":
        return styles.archiveItem;
      default:
        return styles.archiveItem;
    }
  }, [name]);

  return (
    <View style={styles.wrapper}>
      <Animated.View style={[styles.container, animatedStyle]}>
        <View style={styles.radio} />
        <View style={[styles.dot, dotIndicatorStyle]} />
        <View style={styles.archive}>
          <Feather name="archive" size={26} color="white" />
        </View>
        <View style={styles.user}>
          <Feather name="user" size={26} color="white" />
        </View>
        <View style={styles.dog}>
          <MaterialCommunityIcons name="dog" size={26} color="#fff" />
        </View>
        <View style={styles.home}>
          <MaterialCommunityIcons name="home" size={26} color="#00b8cb" />
        </View>
      </Animated.View>
      <TouchableOpacity onPress={toggle} style={styles.menuWrapper}>
        <Feather name="menu" size={20} color="white" />
      </TouchableOpacity>
    </View>
  );
}

export default Fab;
