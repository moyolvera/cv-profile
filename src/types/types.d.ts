import { Feather } from "@expo/vector-icons";
import { ImageRequireSource } from "react-native";

export type Capability = {
  name: string;
  icon: keyof typeof Feather.glyphMap;
  description: string;
};

export type WorkExperienceItem = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  date: string;
  location: string;
  year: number;
};

export type EducationItem = {
  id: string;
  year: string;
  title: string;
  description: string;
  location: string;
  colors: { enfasis: string };
};

export type DogItemType = {
  id: string;
  name: string;
  date: string;
  smallDescription: string;
  description: string;
  pictures: {
    main: ImageRequireSource;
    second: ImageRequireSource;
  };
};
