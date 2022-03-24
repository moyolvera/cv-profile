import React from "react";
import styles from "./Intro.styles";
import Text from "../Text/Text";

interface IntroProps {
  about: string;
}

function Intro({ about }: IntroProps) {
  return <Text style={styles.wrapper}>{about}</Text>;
}

export default Intro;
