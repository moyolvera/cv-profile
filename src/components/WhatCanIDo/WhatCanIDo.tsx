import React from "react";
import { View, Text } from "react-native";
import { Feather } from "@expo/vector-icons";
import BlurItem from "../BlurItem/BlurItem";
import styles from "./WhatCanIDo.styles";
import COMMON_STYLES from "../../theme/theme";
import { Capability } from "../../types/types";

export interface WhatCanIDoProps {
  mainSkill: Capability;
  secondSkill: Capability;
  thirdSkill: Capability;
  fourthSkill: Capability;
}

function WhatCanIDo({
  mainSkill,
  secondSkill,
  thirdSkill,
  fourthSkill,
}: WhatCanIDoProps) {
  return (
    <View style={styles.wrapper}>
      <View style={styles.largeItemWrapper}>
        <BlurItem
          style={[COMMON_STYLES.flex, styles.primaryBackground]}
          blurStyle={[COMMON_STYLES.flex, styles.mainSkillWrapper]}
        >
          <Feather name={mainSkill.icon} size={38} color="#fff" />
          <Text style={styles.mainSkill}>{mainSkill.name}</Text>
        </BlurItem>
      </View>
      <View style={styles.secondColumnWrapper}>
        <BlurItem blurStyle={styles.secondSkillWrapper}>
          <Feather name={secondSkill.icon} size={26} color="#fff" />
          <Text style={styles.secondSkill}>{secondSkill.name}</Text>
        </BlurItem>
        <View style={styles.extraSkillsWrapper}>
          <BlurItem
            small
            style={[COMMON_STYLES.marginTop20, COMMON_STYLES.center]}
          >
            <Feather name={thirdSkill.icon} size={26} color="#fff" />
          </BlurItem>
          <BlurItem
            small
            style={[COMMON_STYLES.marginTop20, COMMON_STYLES.center]}
          >
            <Feather name={fourthSkill.icon} size={26} color="#fff" />
          </BlurItem>
        </View>
      </View>
    </View>
  );
}

export default WhatCanIDo;
