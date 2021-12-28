import { WhatCanIDoProps } from "../components/WhatCanIDo/WhatCanIDo";
import { DogItemType, EducationItem, WorkExperienceItem } from "../types/types";

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

export const DOGS_DATA: DogItemType[] = [
  {
    id: "1-kenai",
    name: "Kenai",
    date: "2017-2019",
    smallDescription:
      'Kenai was the only one to win the "Best Dog of the World" award twice. He was a mix of Blue Heleer and German Shepherd',
    description: `Birthday: 1st of February, 2017 \n\nHe was my first own dog and I loved him aswell as my whole family. The impact of his life has been so profound that I can't imagine how I ever lived without him. He changed me and my family for good, since then my family and me understand the love and importance of this little friends who are grown to be another member of the family.\n\nHe died in an accident in the middle of the summer of 2019, but we will always remember him and his memory.`,
    pictures: {
      main: require("../../assets/dogs/kenai.png"),
      second: require("../../assets/dogs/kenai-2.png"),
    },
  },
  {
    id: "2-koda",
    name: "Koda",
    date: "2019",
    smallDescription:
      "Little brother of Kenai, Koda is a blue heeler, he is the most loyal and protective buddy.",
    description: `Birthday: 3rd of May, 2019 \n\nHe was my first own dog and I loved him aswell as my whole family. The impact of his life has been so profound that I can't imagine how I ever lived without him. He changed me and my family for good, since then my family and me understand the love and importance of this little friends who are grown to be another member of the family.`,
    pictures: {
      main: require("../../assets/dogs/koda-2.png"),
      second: require("../../assets/dogs/koda.png"),
    },
  },
  {
    id: "3-cabo",
    name: "Cabo",
    date: "2019",
    smallDescription:
      "Cabo is a handsome Belgian Shepherd, he is the most playful and kind buddy.",
    description: `Birthday: 12th of September, 2019 \n\nHe was my first own dog and I loved him aswell as my whole family. The impact of his life has been so profound that I can't imagine how I ever lived without him. He changed me and my family for good, since then my family and me understand the love and importance of this little friends who are grown to be another member of the family.`,
    pictures: {
      main: require("../../assets/dogs/cabo-2.png"),
      second: require("../../assets/dogs/cabo.png"),
    },
  },
  {
    id: "4-coli",
    name: "Coli",
    date: "2020",
    smallDescription:
      "Coli mix of Australian Shepherd and Border Collie, he is the most energetic and chubby buddy.",
    description: `Birthday: 2nd of September, 2020 \n\nHe was my first own dog and I loved him aswell as my whole family. The impact of his life has been so profound that I can't imagine how I ever lived without him. He changed me and my family for good, since then my family and me understand the love and importance of this little friends who are grown to be another member of the family.`,
    pictures: {
      main: require("../../assets/dogs/coli-2.png"),
      second: require("../../assets/dogs/coli.png"),
    },
  },
];
