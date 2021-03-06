import { WhatCanIDoProps } from "../components/WhatCanIDo/WhatCanIDo";
import { DogItemType, EducationItem, WorkExperienceItem } from "../types/types";

export const ABOUT =
  "Currently working at Luxoft, I have +4 years of experience in ReactNative, and +5 as a software developer.";

export const WHAT_CAN_I_DO: WhatCanIDoProps = {
  mainSkill: {
    name: "Mobile\nDevelopment",
    icon: "smartphone",
    description:
      "I can build native mobile applications using React Native.\nI have worked from gathering the requirements to deploying the application to production in both Android and iOS app stores.\nI can work using the latest technologies such as React Native, Redux, TypeScript, Node.js, Express.js, and more.\nI have experience on agile development methodologies such as Scrum, Kanban, and more.\nAnd I have also worked with several different CI/CD tools such as Github Actions and Appcenter.",
  },
  secondSkill: {
    name: "Automated\nTesting",
    icon: "check-circle",
    description:
      "I can write automated tests using Jest and the React Native Testing suite of libraries.\nI have experience with both unit and integration tests.\nI have worked with the more stricts stardars of quality assurance such as code coverage (at least 90%), and code quality.\nI have worked testing code written in class bases components and functional components, testing hooks aswell as testing state management.",
  },
  thirdSkill: {
    icon: "pen-tool",
    name: "UI/UX",
    description:
      "I can design and develop user interfaces and experiences using React Native including awesome animations and gesture based effects using latest technologies like reanimated2.\nI have several projects to showcase my skills in the form of design and development, leaning towards minimalism and simplicity.\nI have experience with the latest design trends such as Material Design, and I have worked with the latest design tools such as Invision, Figma, and more.",
  },
  fourthSkill: {
    icon: "settings",
    name: "Performance",
    description:
      "I can optimize and profile code using React Native's performance tools.\nI can identify potential bottlenecks and implement strategies to prevent and fix them.\nI have a very good uderstanding of the React Native architecture including the new refactor that facebook is building with technologies like JSI\nI have experience with the latest performance tools such as Flipper and the RN Debugger, and I have worked with the latest performance tools such as DevTools Profiling helper, and more",
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
    icon: "smartphone",
  },
  {
    id: "2-tcp",
    title: "TimeClock Plus",
    subtitle: "React Native Developer",
    description: "",
    date: "2020 - 2021",
    location: "TX, USA - Remote",
    year: 2020,
    icon: "smartphone",
  },
  {
    id: "3-improving",
    title: "Improving",
    subtitle: "React Native Developer",
    description: "",
    date: "2019 - 2020",
    location: "AGS, MX - Remote",
    year: 2019,
    icon: "smartphone",
  },
  {
    id: "4-ssf",
    title: "Smart Software Factory",
    subtitle: "React Native Developer",
    description: "",
    date: "2018 - 2019",
    location: "GDL, MX",
    year: 2018,
    icon: "smartphone",
  },
  {
    id: "5-visoor",
    title: "Visoor",
    subtitle: "Full Stack Developer",
    description: "",
    date: "2017 - 2018",
    location: "AGS, MX",
    year: 2017,
    icon: "monitor",
  },
  {
    id: "6-gplatform",
    title: "G-Platform",
    subtitle: "Full Stack Developer",
    description: "",
    date: "2016 - 2017",
    location: "AGS, MX",
    year: 2016,
    icon: "monitor",
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
    description: `Birthday: 3rd of May, 2019 \n\nKoda is very protective, always full of energy and with a strong personality, he's always looking to go out for a walk, for a picnic day or even just a trip in the car.\nHe was the first one to benefit from all the perks and good stuff that Kenai worked so hard to have.\nWe love Koda, we know that he love us back.`,
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
    description: `Birthday: 12th of September, 2019 \n\nCabito is the bigger in size of the 3, but he is the most playful, he will beg you throw him a stick a ball or even a bottle, he just wants something to fetch, and then repeat it 100 times.\nHe is kind, he will always be a good boy, be careful to not hurt you when playing, he's a softy lol.\nHe is so easy to like, so open to receive people and when playing is the most focused dog there is.`,
    pictures: {
      main: require("../../assets/dogs/cabo.png"),
      second: require("../../assets/dogs/cabo-2.png"),
    },
  },
  {
    id: "4-coli",
    name: "Coli",
    date: "2020",
    smallDescription:
      "Coli mix of Australian Shepherd and Border Collie, he is the most energetic and chubby buddy.",
    description: `Birthday: 2nd of September, 2020 \n\nColi is the little one, the youngest of all. He also loves to fetch, not as Cabo but still, he will always be ready to play with you, he's son energetic that he is always looking for somethong to do, sometimes event things that he doesn't supose to do.\nHe is not a fan of going out and swim like Koda and Cabo, but he will enjoy the sun and all the things out there to sniff and smell.`,
    pictures: {
      main: require("../../assets/dogs/coli-2.png"),
      second: require("../../assets/dogs/coli.png"),
    },
  },
];

export const APPS_INFO = [
  {
    logo: require("../../assets/works/crypta.png"),
    cover: require("../../assets/dogs/kenai.png"),
    specs: [
      "Typescript",
      "React Hooks",
      "React Context",
      "Reanimated2",
      "Biometric auth",
      "i18n localization",
      "Dark and Light modes",
      "MMKV local storage",
      "Data encryption with passprase",
      "Performant",
    ],
    features: [
      "Store passwords locally with the option to encrypt them",
      "Restrict app usage with a password or a fingerprint",
      "Supported spanish and english languages",
      "Back up your data exporting it to wherever you want",
    ],
    resume: {
      title: "Crypta",
      subtitle: "A secure password manager app",
      intro: "Design & Development entirely by me",
      link: "https://crypta.app",
      description:
        "It let's the user manage them passwords without using any clouds services so he can be sure that the info is always secured in the device",
    },
    previews: [
      require("../../assets/works/crypta-show.png"),
      require("../../assets/works/crypta-show-2.png"),
    ],
  },
  {
    logo: require("../../assets/works/storify.png"),
    cover: require("../../assets/dogs/kenai.png"),
    specs: [
      "Typescript",
      "React Hooks",
      "React Context",
      "Reanimated2",
      "Firebase",
      "Dark and Light modes",
      "MMKV local storage",
      "Data encryption",
      "Performant",
      "Camera and gallery",
      "Push notifications",
      "Serverless",
      "Linking",
    ],
    features: [
      "Create a story and add moments to share with your friends",
      "Restrict access to only the persons you want, always in control",
      "Collaborate with the special persons you select to build memories together",
      "Receive push notifications when someone wants to see your story, adds a comment or like a memory",
      "Lots of features to make your story more fun and interesting",
    ],
    resume: {
      title: "Storify",
      subtitle: "A private social network app",
      intro: "Design & Development entirely by me",
      link: "https://crypta.app",
      description:
        "It lets the user share their memories and special moments with a close circle of people and build stories with them",
    },
    previews: [
      require("../../assets/works/storify-show.jpg"),
      require("../../assets/works/storify-show-2.jpg"),
    ],
  },
  {
    logo: require("../../assets/works/tcp.png"),
    cover: require("../../assets/dogs/kenai.png"),
    specs: [
      "Typescript",
      "React Hooks",
      "Redux Toolkit",
      "Biometric auth",
      "GPS",
      "Reanimated",
      "Dark and Light modes",
      "Multiple iOS targets and Android flavors repo",
      "Strongly tested",
      "Data encryption in filesystem",
      "Performant",
      "Push Notifications",
      "Camera & QR Scanner",
      "Analytics",
    ],
    features: [
      "Single repository for the 4 apps usign targets and flavors and env configs",
      "Server side config driven app to manage UI and access features",
      "Multiple low level API's features like GPS, biometric auth, etc",
      "Exaustive test coverage, at least 90% on all files",
    ],
    resume: {
      title: "MobileClock & MobileKiosk",
      subtitle: "Dynamic Employee Functionality",
      intro: "Worked in TimeClock Plus and Improving in this 2 apps",
      link: "https://play.google.com/store/apps/developer?id=TimeClock+Plus,+LLC&hl=en&gl=US",
      description:
        "It lets licensed employees to manage their time, schedules, pto request, paychecks, and more. Available only for US.",
    },
    previews: [
      require("../../assets/works/tcp-show.jpg"),
      require("../../assets/works/tcp-show-2.jpg"),
    ],
  },
  {
    logo: require("../../assets/works/simple.png"),
    cover: require("../../assets/dogs/kenai.png"),
    specs: [
      "Typescript",
      "React Hooks",
      "Reanimated",
      "Dark and Light modes",
      "Data encryption in filesystem",
      "Performant",
      "Push Notifications",
      "Camera & QR Scanner",
      "Analytics",
      "Graph reports",
      "Serverless",
      "Firestore",
    ],
    features: [
      "Register accounts and log the incomes and expenses",
      "Add important payments dates and receive notifications as reminders",
      "Generate reports and visualize your expenses by categories to help you have a healthy budget",
      "Light and dark mode support, and much more",
    ],
    resume: {
      title: "Simple Wallet",
      subtitle: "Expenses tracker",
      intro: "Design & Development entirely by me",
      link: "https://play.google.com/store/apps/details?id=com.kenailabs.simplewallet&hl=es_PR",
      description:
        "It enables you to manage and track your incomes and expenses manually. User doesn't need to use bank accounts to use this app.",
    },
    previews: [
      require("../../assets/works/simple-show.jpg"),
      require("../../assets/works/simple-show-2.jpg"),
    ],
  },
  {
    logo: require("../../assets/works/guma.png"),
    cover: require("../../assets/dogs/kenai.png"),
    specs: [
      "Typescript",
      "React Hooks",
      "Redux",
      "GPS",
      "Firestore",
      "Dark and Light modes",
      "Google Maps",
      "Camera & QR Scanner",
      "Performant",
      "Push Notifications",
      "Analytics",
    ],
    features: [
      "Accept payments from customers using OpenPay API",
      "Track in real time the location of the deliveries and receive notifications when they arrive",
      "Real time chat with support people using real time databases",
      "Multiple low level API's features like GPS, Camera, Camera Roll, etc",
    ],
    resume: {
      title: "Gas Noel & Gas Rosa",
      subtitle: "Real time tracking delivery app",
      intro: "Worked while being part of SSF",
      link: "https://play.google.com/store/apps/developer?id=TimeClock+Plus,+LLC&hl=en&gl=US",
      description:
        "This app let's people buy Gas from some of the biggest companies on the area using the app. User can track in real time the location of the delivery, chat with support and pay using credit, debit or cash.",
    },
    previews: [
      require("../../assets/works/guma-show.png"),
      require("../../assets/works/guma-show-2.png"),
    ],
  },
];
