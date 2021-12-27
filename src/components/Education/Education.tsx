import React from "react";
import { View, Text } from "react-native";
import { EducationItem } from "../../types/types";
import styles from "./Education.styles";

interface EducationProps {
  education: EducationItem[];
}

function Education({ education }: EducationProps) {
  return (
    <View>
      {education.map((item) => (
        <View key={item.id} style={styles.item}>
          <View
            style={[
              styles.enfasis,
              {
                backgroundColor: item.colors.enfasis,
              },
            ]}
          />
          <View style={styles.itemWrapper}>
            <Text style={styles.year}>{item.year}</Text>
            <Text>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.location}> • </Text>
              <Text style={styles.location}>{item.location}</Text>
            </Text>
            {!!item.description && (
              <Text style={styles.description}>{item.description}</Text>
            )}
          </View>
        </View>
      ))}
    </View>
  );
}

export default React.memo(Education);
