import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { View, Text, ImageBackground } from "react-native";
import BlurItem from "../BlurItem/BlurItem";
import styles, { END_GRADIENT, START_GRADIENT } from "./Works.styles";

interface WorksProps {
  title: string;
  description: string;
}

function Works({ title, description }: WorksProps) {
  return (
    <View>
      <BlurItem blurStyle={styles.blurWrapper} style={styles.wrapper}>
        <ImageBackground
          style={styles.image}
          source={require("../../../assets/work.jpeg")}
          resizeMode="cover"
        >
          <LinearGradient
            colors={["transparent", "black"]}
            start={START_GRADIENT}
            end={END_GRADIENT}
            style={styles.gradient}
          >
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.description}>{description}</Text>
          </LinearGradient>
        </ImageBackground>
      </BlurItem>
    </View>
  );
}

export default Works;
