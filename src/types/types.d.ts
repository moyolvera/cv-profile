import { Feather } from "@expo/vector-icons";

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
