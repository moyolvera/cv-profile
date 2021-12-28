import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { Text } from "react-native";
import styles, { END_GRADIENT, START_GRADIENT } from "./LargeHeader.styles";

interface LargeHeaderProps {
  title: string;
  subtitle: string;
}

function LargeHeader({ subtitle, title }: LargeHeaderProps) {
  return (
    <LinearGradient
      colors={["black", "transparent"]}
      start={START_GRADIENT}
      end={END_GRADIENT}
      style={styles.wrapper}
    >
      <Text style={styles.subtitle}>{subtitle}</Text>
      <Text style={styles.title}>{title}</Text>
    </LinearGradient>
  );
}

export default LargeHeader;
