import React from "react";
import { View, Text } from "react-native";
import BlurItem from "../BlurItem/BlurItem";
import { WIDTH } from "../../constants";
import { WorkExperienceItem } from "../../types/types";
import styles from "./WorkExperience.styles";

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
            <Text style={styles.year}>{item.year}</Text>
          </View>
          <BlurItem style={styles.blurWrapper} blurStyle={styles.blurInner}>
            <Text style={styles.subtitle}>{item.subtitle}</Text>
            <Text style={styles.title}>{item.title}</Text>
          </BlurItem>
        </View>
      ))}
    </View>
  );
}

export default React.memo(WorkExperience);
