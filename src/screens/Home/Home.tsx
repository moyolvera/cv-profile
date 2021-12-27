import React from "react";
import { View, Text, ScrollView, StatusBar } from "react-native";
import {
  Avatar,
  Background,
  BlurItem,
  Intro,
  Skill,
  Social,
  Title,
  WhatCanIDo,
} from "../../components";
import COMMON_STYLES from "../../theme/theme";
import styles from "./Home.styles";

interface HomeProps {}

function Home({}: HomeProps) {
  return (
    <Background>
      <StatusBar translucent />
      <ScrollView contentContainerStyle={{ paddingTop: 30, paddingBottom: 80 }}>
        <View style={styles.wrapper}>
          <View style={COMMON_STYLES.fullWidth}>
            <Avatar name="Moy Olvera" title="REACT NATIVE DEVELOPER" />
            <Social
              git="https://github.com/moyolvera"
              linkedin="https://www.linkedin.com/in/%F0%9F%90%B6-moy-olvera-43062a168/"
            />
            <Title text="About me" />
            <BlurItem>
              <Intro
                about="Currently working at Luxoft, I have +4 years of experience in React
      Native, and +5 as a software developer."
              />
            </BlurItem>
            <Title text="What can I do" />
            <WhatCanIDo
              mainSkill={{
                name: "Mobile\nDevelopment",
                icon: "smartphone",
                description: "",
              }}
              secondSkill={{
                name: "Automated\nTesting",
                icon: "check-circle",
                description: "",
              }}
              thirdSkill={{
                icon: "pen-tool",
                name: "UI/UX",
                description: "",
              }}
              fourthSkill={{
                icon: "settings",
                name: "Performance",
                description: "",
              }}
            />
            <Title text="Skills" />
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <Skill title="Typescript" percentage={84} color="#2d7ac7" />
              <Skill title="React Native" percentage={95} color="#61dcfb" />
              <Skill title="Javascript" percentage={90} color="#f7df1e" />
              <Skill title="React JS" percentage={90} color="#61dafb" />
              <Skill title="Google Cloud" percentage={80} color="#fbbc07" />
              <Skill title="jQuery" percentage={80} color="#1968ab" />
              <Skill title="AWS" percentage={70} color="#f89903" />
              <Skill title="PHP & mySQL" percentage={70} color="#8993c1" />
            </ScrollView>
          </View>
        </View>
      </ScrollView>
    </Background>
  );
}

export default Home;
