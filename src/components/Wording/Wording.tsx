import React from "react";
import { Text } from "react-native";
import { AppWordingResume } from "../../types/types";
import styles from "./Wording.styles";

interface WordingProps {
  wording: AppWordingResume;
}
function Wording({
  wording: { title, subtitle, intro, description },
}: WordingProps) {
  return (
    <>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
      <Text style={styles.intro}>{intro}</Text>
      <Text style={styles.description}>{description}</Text>
    </>
  );
}

export default Wording;
