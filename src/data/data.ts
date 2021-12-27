import { WhatCanIDoProps } from "../components/WhatCanIDo/WhatCanIDo";
import { EducationItem, WorkExperienceItem } from "../types/types";

export const ABOUT =
  "Currently working at Luxoft, I have +4 years of experience in ReactNative, and +5 as a software developer.";

export const WHAT_CAN_I_DO: WhatCanIDoProps = {
  mainSkill: {
    name: "Mobile\nDevelopment",
    icon: "smartphone",
    description: "",
  },
  secondSkill: {
    name: "Automated\nTesting",
    icon: "check-circle",
    description: "",
  },
  thirdSkill: {
    icon: "pen-tool",
    name: "UI/UX",
    description: "",
  },
  fourthSkill: {
    icon: "settings",
    name: "Performance",
    description: "",
  },
};

export const WORK_EXPERIENCE: WorkExperienceItem[] = [
  {
    id: "1-luxoft",
    title: "Luxoft",
    subtitle: "React Native Developer",
    description: "",
    date: "2021 - Present",
    location: "AGS, MX - Remote",
    year: 2021,
  },
  {
    id: "2-tcp",
    title: "TimeClock Plus",
    subtitle: "React Native Developer",
    description: "",
    date: "2020 - 2021",
    location: "TX, USA - Remote",
    year: 2020,
  },
  {
    id: "3-improving",
    title: "Improving",
    subtitle: "React Native Developer",
    description: "",
    date: "2019 - 2020",
    location: "AGS, MX - Remote",
    year: 2019,
  },
  {
    id: "4-ssf",
    title: "Smart Software Factory",
    subtitle: "React Native Developer",
    description: "",
    date: "2018 - 2019",
    location: "GDL, MX",
    year: 2018,
  },
  {
    id: "5-visoor",
    title: "Visoor",
    subtitle: "Full Stack Developer",
    description: "",
    date: "2017 - 2018",
    location: "AGS, MX",
    year: 2017,
  },
  {
    id: "6-gplatform",
    title: "G-Platform",
    subtitle: "Full Stack Developer",
    description: "",
    date: "2016 - 2017",
    location: "AGS, MX",
    year: 2016,
  },
];

export const EDUCATION: EducationItem[] = [
  {
    id: "1-luxoft",
    year: "2021",
    title: "Epic React",
    description: "",
    location: "Luxoft",
    colors: {
      enfasis: "#faca16",
    },
  },
  {
    id: "2-tcp",
    year: "2020",
    title: "React Native Optimization",
    description: "",
    location: "TimeClock Plus",
    colors: {
      enfasis: "#00b8cb",
    },
  },
  {
    id: "3-itexico",
    year: "2019",
    title: "Docker",
    description: "",
    location: "Improving",
    colors: {
      enfasis: "#faca16",
    },
  },
  {
    id: "4-uaa",
    year: "2018",
    title: "MQTT & GPS",
    description:
      "Generic model for the location and tracking of vehicles using MQTT & GPS.\nThesis, UAA.",
    location: "UAA",
    colors: {
      enfasis: "#00b8cb",
    },
  },
  {
    id: "5-uaa",
    year: "2013-2018",
    title: "Intelligent Computation Engineer",
    description: "My CS degree, UAA.",
    location: "UAA",
    colors: {
      enfasis: "#faca16",
    },
  },
];
