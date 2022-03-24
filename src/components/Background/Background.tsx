import React from "react";
import { View, StatusBar, StyleProp, ViewStyle } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./Background.styles";

interface BackgroundProps {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
}

function Background({ children, style }: BackgroundProps) {
  return (
    <View style={[styles.wrapper, style]}>
      <StatusBar barStyle="light-content" backgroundColor="black" />
      <SafeAreaView>
        <View style={styles.image}>{children}</View>
      </SafeAreaView>
    </View>
  );
}

export default Background;
