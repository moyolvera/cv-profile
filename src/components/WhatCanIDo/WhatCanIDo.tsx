import React from "react";
import { View, TouchableOpacity, Modal, StatusBar } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Feather } from "@expo/vector-icons";
import { MotiView } from "moti";

import Text from "../Text/Text";
import BlurItem from "../BlurItem/BlurItem";
import styles from "./WhatCanIDo.styles";
import COMMON_STYLES from "../../theme/theme";
import { Capability } from "../../types/types";
import CanCard from "../CanCard/CanCard";

export interface WhatCanIDoProps {
  mainSkill: Capability;
  secondSkill: Capability;
  thirdSkill: Capability;
  fourthSkill: Capability;
}

const FROM_ANIMATE_CONFIG = {
  opacity: 0.6,
  scale: 1.3,
  transform: [{ translateY: 10, translateX: 10 }],
};
const TO_ANIMATE_CONFIG = {
  opacity: 1,
  scale: 1,
  transform: [{ translateY: 0, translateX: 0 }],
};

function WhatCanIDo({
  mainSkill,
  secondSkill,
  thirdSkill,
  fourthSkill,
}: WhatCanIDoProps) {
  const [selectedSkill, setSelectedSkill] = React.useState<Capability | null>(
    null
  );

  function closeModal() {
    setSelectedSkill(null);
  }

  return (
    <>
      <View style={styles.wrapper}>
        <MotiView
          delay={0}
          from={FROM_ANIMATE_CONFIG}
          animate={TO_ANIMATE_CONFIG}
          style={styles.largeItemWrapper}
        >
          <BlurItem
            onPress={() => setSelectedSkill(mainSkill)}
            style={[COMMON_STYLES.flex, styles.primaryBackground]}
            blurStyle={[COMMON_STYLES.flex, styles.mainSkillWrapper]}
          >
            <Feather name={mainSkill.icon} size={38} color="#fff" />
            <Text font="bold" style={styles.mainSkill}>
              {mainSkill.name}
            </Text>
          </BlurItem>
        </MotiView>
        <View style={styles.secondColumnWrapper}>
          <MotiView
            delay={200}
            from={FROM_ANIMATE_CONFIG}
            animate={TO_ANIMATE_CONFIG}
          >
            <BlurItem
              onPress={() => setSelectedSkill(secondSkill)}
              blurStyle={styles.secondSkillWrapper}
            >
              <Feather name={secondSkill.icon} size={26} color="#fff" />
              <Text font="bold" style={styles.secondSkill}>
                {secondSkill.name}
              </Text>
            </BlurItem>
          </MotiView>
          <View style={styles.extraSkillsWrapper}>
            <MotiView
              delay={400}
              from={FROM_ANIMATE_CONFIG}
              animate={TO_ANIMATE_CONFIG}
              style={[
                COMMON_STYLES.marginTop20,
                COMMON_STYLES.center,
                styles.leftWrapper,
              ]}
            >
              <BlurItem
                small
                onPress={() => setSelectedSkill(thirdSkill)}
                style={[
                  COMMON_STYLES.center,
                  COMMON_STYLES.fullWidth,
                  styles.primaryBackground,
                ]}
              >
                <Feather name={thirdSkill.icon} size={26} color="#fff" />
              </BlurItem>
            </MotiView>
            <MotiView
              delay={600}
              from={FROM_ANIMATE_CONFIG}
              animate={TO_ANIMATE_CONFIG}
              style={[
                COMMON_STYLES.marginTop20,
                COMMON_STYLES.center,
                styles.rightWrapper,
              ]}
            >
              <BlurItem
                small
                onPress={() => setSelectedSkill(fourthSkill)}
                style={[
                  COMMON_STYLES.center,
                  COMMON_STYLES.fullWidth,
                  styles.primaryBackground,
                ]}
              >
                <Feather name={fourthSkill.icon} size={26} color="#fff" />
              </BlurItem>
            </MotiView>
          </View>
        </View>
      </View>
      {!!selectedSkill && (
        <Modal animationType="fade" transparent onRequestClose={closeModal}>
          <StatusBar barStyle="light-content" backgroundColor="black" />
          <GestureHandlerRootView style={COMMON_STYLES.flex}>
            <CanCard skill={selectedSkill} />
            <TouchableOpacity style={styles.closeWrapper} onPress={closeModal}>
              <Text font="bold" style={styles.close}>
                Close
              </Text>
            </TouchableOpacity>
          </GestureHandlerRootView>
        </Modal>
      )}
    </>
  );
}

export default WhatCanIDo;
