import React from "react";
import Text from "../Text/Text";
import styles from "./SmallTitle.styles";

interface SmallTitleProps {
  title: string;
}

function SmallTitle({ title }: SmallTitleProps) {
  return (
    <Text font="bold" style={styles.wrapper}>
      {title}
    </Text>
  );
}

export default SmallTitle;
