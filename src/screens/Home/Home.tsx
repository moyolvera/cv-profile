import React from "react";
import { View, ScrollView, StatusBar } from "react-native";
import {
  Avatar,
  Background,
  BlurItem,
  Credits,
  Education,
  Fab,
  Intro,
  Skill,
  Social,
  Title,
  WhatCanIDo,
  WorkExperience,
  Works,
} from "../../components";
import {
  ABOUT,
  EDUCATION,
  WHAT_CAN_I_DO,
  WORK_EXPERIENCE,
} from "../../data/data";
import COMMON_STYLES from "../../theme/theme";
import styles from "./Home.styles";

interface HomeProps {}

function Home({}: HomeProps) {
  return (
    <Background>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <ScrollView contentContainerStyle={styles.scrollWrapper}>
        <View style={styles.wrapper}>
          <View style={COMMON_STYLES.fullWidth}>
            <Avatar name="Moy Olvera" title="REACT NATIVE DEVELOPER" />
            <Social
              git="https://github.com/moyolvera"
              linkedin="https://www.linkedin.com/in/%F0%9F%90%B6-moy-olvera-43062a168/"
              reddit="https://www.reddit.com/user/moyolvera"
              twitter="https://twitter.com/moyolverak"
            />
            <Title text="About me" />
            <BlurItem>
              <Intro about={ABOUT} />
            </BlurItem>
            <Title text="Skills" />
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <Skill title="TS" percentage={84} color="#2d7ac7" />
              <Skill title="React Native" percentage={95} color="#61dcfb" />
              <Skill title="JS" percentage={90} color="#f7df1e" />
              <Skill title="React" percentage={90} color="#61dafb" />
              <Skill title="Google Cloud" percentage={80} color="#fbbc07" />
              <Skill title="jQuery" percentage={80} color="#1968ab" />
              <Skill title="AWS" percentage={70} color="#f89903" />
              <Skill title="PHP" percentage={70} color="#8993c1" />
            </ScrollView>
            <Title text="What can I do" />
            <WhatCanIDo
              mainSkill={WHAT_CAN_I_DO.mainSkill}
              secondSkill={WHAT_CAN_I_DO.secondSkill}
              thirdSkill={WHAT_CAN_I_DO.thirdSkill}
              fourthSkill={WHAT_CAN_I_DO.fourthSkill}
            />
            <Title text="Work Experience" />
            <WorkExperience experience={WORK_EXPERIENCE} />
            <Works
              title="WORKS"
              description="Check a collection with my most important works"
            />
            <Title text="Trainings & Education" />
            <Education education={EDUCATION} />
            <Credits />
          </View>
        </View>
      </ScrollView>
      <Fab />
    </Background>
  );
}

export default Home;
