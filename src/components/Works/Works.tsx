import { NavigationProp, useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { View, ImageBackground } from "react-native";
import Text from "../Text/Text";
import { RootStackScreensList } from "../../../App";
import BlurItem from "../BlurItem/BlurItem";
import styles, { END_GRADIENT, START_GRADIENT } from "./Works.styles";

interface WorksProps {
  title: string;
  description: string;
}

function Works({ title, description }: WorksProps) {
  const { navigate } = useNavigation<NavigationProp<RootStackScreensList>>();

  function toArchive() {
    navigate("Archive");
  }

  return (
    <View>
      <BlurItem
        blurStyle={styles.blurWrapper}
        style={styles.wrapper}
        onPress={toArchive}
      >
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
            <Text font="bold" style={styles.title}>
              {title}
            </Text>
            <Text style={styles.description}>{description}</Text>
          </LinearGradient>
        </ImageBackground>
      </BlurItem>
    </View>
  );
}

export default Works;
