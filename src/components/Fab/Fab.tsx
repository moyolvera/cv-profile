import React, { useMemo } from "react";
import { View, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import {
  NavigationProp,
  useNavigation,
  useRoute,
} from "@react-navigation/native";
import styles from "./Fab.styles";
import { RootStackScreensList } from "../../../App";

interface FabProps {}

function Fab({}: FabProps) {
  const animation = useSharedValue(0);

  const { name } = useRoute();
  const { navigate } = useNavigation<NavigationProp<RootStackScreensList>>();

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

  function navigateTo(screen: keyof RootStackScreensList) {
    toggle();
    navigate(screen);
  }

  const dotIndicatorStyle = useMemo(() => {
    switch (name) {
      case "Home":
        return styles.homeItem;
      case "Dogs":
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
        <TouchableOpacity
          onPress={function () {
            navigateTo("Archive");
          }}
          style={styles.archive}
        >
          <Feather
            name="archive"
            size={26}
            color={name === "Archive" ? "#00b8cb" : "white"}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={function () {
            navigateTo("Personal");
          }}
          style={styles.user}
        >
          <Feather
            name="user"
            size={26}
            color={name === "Personal" ? "#00b8cb" : "white"}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={function () {
            navigateTo("Dogs");
          }}
          style={styles.dog}
        >
          <MaterialCommunityIcons
            name="dog"
            size={26}
            color={name === "Dogs" ? "#00b8cb" : "white"}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={function () {
            navigateTo("Home");
          }}
          style={styles.home}
        >
          <MaterialCommunityIcons
            name="home"
            size={26}
            color={name === "Home" ? "#00b8cb" : "white"}
          />
        </TouchableOpacity>
      </Animated.View>
      <TouchableOpacity onPress={toggle} style={styles.menuWrapper}>
        <Feather name="menu" size={20} color="white" />
      </TouchableOpacity>
    </View>
  );
}

export default Fab;
