import React from "react";
import { BlurView } from "expo-blur";
import { LinearGradient } from "expo-linear-gradient";
import { View, ImageBackground, Platform, StatusBar } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styles, {
  GRADIENT_COLORS,
  GRADIENT_END,
  GRADIENT_LOCATIONS,
  GRADIENT_START,
} from "./Background.styles";
import COMMON_STYLES from "../../theme/theme";

interface BackgroundProps {
  children: React.ReactNode;
}

interface WrapperProps {
  isImage: boolean;
  children: React.ReactNode;
}

function Wrapper({ isImage, children }: WrapperProps) {
  return isImage ? (
    <ImageBackground
      source={require("../../../assets/dark-bg.png")}
      style={styles.image}
    >
      {children}
    </ImageBackground>
  ) : (
    <ImageBackground
      source={require("../../../assets/dark-bg.png")}
      style={styles.image}
    >
      <View style={[styles.image, styles.dark]}>{children}</View>
    </ImageBackground>
  );
}

function Background({ children }: BackgroundProps) {
  return (
    <View style={styles.wrapper}>
      <StatusBar barStyle="light-content" />
      <SafeAreaView>
        <LinearGradient
          colors={GRADIENT_COLORS}
          start={GRADIENT_START}
          end={GRADIENT_END}
          locations={GRADIENT_LOCATIONS}
          style={styles.gradient}
        >
          <Wrapper isImage={Platform.OS !== "android"}>
            <BlurView tint="dark" intensity={40} style={styles.blur}>
              {children}
            </BlurView>
          </Wrapper>
        </LinearGradient>
      </SafeAreaView>
    </View>
  );
}

export default Background;
