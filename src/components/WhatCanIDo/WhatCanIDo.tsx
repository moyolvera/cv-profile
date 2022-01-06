import React from "react";
import { View, Text, TouchableOpacity, Modal, StatusBar } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Feather } from "@expo/vector-icons";
import BlurItem from "../BlurItem/BlurItem";
import styles from "./WhatCanIDo.styles";
import COMMON_STYLES from "../../theme/theme";
import { Capability } from "../../types/types";
import CanCard from "../CanCard/CanCard";
import Animated from "react-native-reanimated";

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
  const [selectedSkill, setSelectedSkill] = React.useState<Capability | null>(
    null
  );

  function closeModal() {
    setSelectedSkill(null);
  }

  return (
    <>
      <View style={styles.wrapper}>
        <Animated.View style={styles.largeItemWrapper}>
          <BlurItem
            onPress={() => setSelectedSkill(mainSkill)}
            style={[COMMON_STYLES.flex, styles.primaryBackground]}
            blurStyle={[COMMON_STYLES.flex, styles.mainSkillWrapper]}
          >
            <Feather name={mainSkill.icon} size={38} color="#fff" />
            <Text style={styles.mainSkill}>{mainSkill.name}</Text>
          </BlurItem>
        </Animated.View>
        <View style={styles.secondColumnWrapper}>
          <Animated.View>
            <BlurItem
              onPress={() => setSelectedSkill(secondSkill)}
              blurStyle={styles.secondSkillWrapper}
            >
              <Feather name={secondSkill.icon} size={26} color="#fff" />
              <Text style={styles.secondSkill}>{secondSkill.name}</Text>
            </BlurItem>
          </Animated.View>
          <View style={styles.extraSkillsWrapper}>
            <Animated.View
              style={[
                COMMON_STYLES.marginTop20,
                COMMON_STYLES.center,
                styles.leftWrapper,
              ]}
            >
              <BlurItem
                small
                onPress={() => setSelectedSkill(thirdSkill)}
                style={[COMMON_STYLES.center, COMMON_STYLES.fullWidth]}
              >
                <Feather name={thirdSkill.icon} size={26} color="#fff" />
              </BlurItem>
            </Animated.View>
            <Animated.View
              style={[
                COMMON_STYLES.marginTop20,
                COMMON_STYLES.center,
                styles.rightWrapper,
              ]}
            >
              <BlurItem
                small
                onPress={() => setSelectedSkill(fourthSkill)}
                style={[COMMON_STYLES.center, COMMON_STYLES.fullWidth]}
              >
                <Feather name={fourthSkill.icon} size={26} color="#fff" />
              </BlurItem>
            </Animated.View>
          </View>
        </View>
      </View>
      {!!selectedSkill && (
        <Modal animationType="fade" transparent onRequestClose={closeModal}>
          <StatusBar barStyle="light-content" backgroundColor="black" />
          <GestureHandlerRootView style={COMMON_STYLES.flex}>
            <CanCard skill={selectedSkill} />
            <TouchableOpacity style={styles.closeWrapper} onPress={closeModal}>
              <Text style={styles.close}>Close</Text>
            </TouchableOpacity>
          </GestureHandlerRootView>
        </Modal>
      )}
    </>
  );
}

export default WhatCanIDo;
