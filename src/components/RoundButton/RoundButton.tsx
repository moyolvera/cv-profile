import React from "react";
import { Feather } from "@expo/vector-icons";
import { Pressable, StyleProp, ViewStyle } from "react-native";
import styles from "./RoundButton.styles";

interface RoundButtonProps {
  onPress: () => void;
  icon: keyof typeof Feather.glyphMap;
  style?: StyleProp<ViewStyle>;
}

function RoundButton({ onPress, icon, style }: RoundButtonProps) {
  return (
    <Pressable style={[styles.wrapper, style]} onPress={onPress}>
      <Feather name={icon} color="white" size={27} />
    </Pressable>
  );
}

export default RoundButton;
