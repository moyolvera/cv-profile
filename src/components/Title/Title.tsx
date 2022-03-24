import React from "react";
import Text from "../Text/Text";
import styles from "./Title.styles";

interface TitleProps {
  text: string;
}

function Title({ text }: TitleProps) {
  return (
    <Text font="bold" style={styles.wrapper}>
      {text}
    </Text>
  );
}

export default Title;
