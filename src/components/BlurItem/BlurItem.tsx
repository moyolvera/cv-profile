import { BlurView } from "expo-blur";
import React from "react";
import { View, ViewStyle } from "react-native";
import styles from "./BlurItem.styles";

interface BlurItemProps {
  blurStyle?: ViewStyle | ViewStyle[];
  children: React.ReactNode;
  small?: boolean;
  style?: ViewStyle | ViewStyle[];
}

function BlurItem({ small, children, style, blurStyle }: BlurItemProps) {
  return (
    <View
      style={[
        styles.wrapper,
        small ? styles.wrapperSmall : styles.wrapperNormal,
        style,
      ]}
    >
      <BlurView
        tint="dark"
        intensity={10}
        style={[small ? styles.smallPadding : styles.padding, blurStyle]}
      >
        {children}
      </BlurView>
    </View>
  );
}

export default BlurItem;
