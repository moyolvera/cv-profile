import React from "react";
import { View } from "react-native";
import Text from "../Text/Text";
import BlurItem from "../BlurItem/BlurItem";
import { WIDTH } from "../../constants";
import { WorkExperienceItem } from "../../types/types";
import styles from "./WorkExperience.styles";
import { Feather } from "@expo/vector-icons";

interface WorkExperienceProps {
  experience: WorkExperienceItem[];
}

function WorkExperience({ experience }: WorkExperienceProps) {
  return (
    <View>
      <View style={styles.lineWrapper}>
        <View style={styles.line} />
      </View>
      {experience.map((item, index) => (
        <View
          key={item.id}
          style={[
            styles.wrapper,
            {
              alignItems: index % 2 === 0 ? "flex-start" : "flex-end",
            },
          ]}
        >
          <View
            style={[
              styles.yearWrapper,
              index % 2 === 0 ? { right: WIDTH / 4.5 } : { left: WIDTH / 4.5 },
            ]}
          >
            <Feather name={item.icon} size={24} color="#32313E" />
            <Text font="bold" style={styles.year}>
              {item.year}
            </Text>
          </View>
          <BlurItem style={styles.blurWrapper} blurStyle={styles.blurInner}>
            <Text style={styles.subtitle}>{item.subtitle}</Text>
            <Text font="bold" style={styles.title}>
              {item.title}
            </Text>
          </BlurItem>
        </View>
      ))}
    </View>
  );
}

export default React.memo(WorkExperience);
