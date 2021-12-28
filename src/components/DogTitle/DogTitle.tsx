import React from "react";
import { Text } from "react-native";
import styles from "./DogTitle.styles";

interface DogTitleProps {
  name: string;
  date: string;
  description: string;
}

function DogTitle({ name, date, description }: DogTitleProps) {
  return (
    <>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.date}>{date}</Text>
      <Text style={styles.description}>{description}</Text>
    </>
  );
}

export default DogTitle;
