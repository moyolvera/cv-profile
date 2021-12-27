import React from "react";
import { View, Image, Text } from "react-native";
import styles from "./Avatar.styles";

interface AvatarProps {
  name: string;
  title: string;
}

function Avatar({ name, title }: AvatarProps) {
  return (
    <>
      <View style={styles.wrapper}>
        <Image source={require("../../../assets/pic.png")} style={styles.pic} />
      </View>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.title}>{title}</Text>
    </>
  );
}

export default Avatar;
