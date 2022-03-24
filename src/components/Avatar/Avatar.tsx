import React from "react";
import { View, Image } from "react-native";
import COMMON_STYLES from "../../theme/theme";
import styles from "./Avatar.styles";
import Text from "../Text/Text";

interface AvatarProps {
  name: string;
  title: string;
}

function Avatar({ name, title }: AvatarProps) {
  return (
    <View style={[COMMON_STYLES.flexRow, styles.topWrapper]}>
      <View style={styles.wrapper}>
        <Image source={require("../../../assets/pic.png")} style={styles.pic} />
      </View>
      <View style={COMMON_STYLES.paddingHorizontal}>
        <Text font="black" style={styles.name}>
          {name}
        </Text>
        <Text style={styles.title}>{title}</Text>
      </View>
    </View>
  );
}

export default Avatar;
