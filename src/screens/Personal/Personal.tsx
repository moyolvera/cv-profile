import React from "react";
import { View, StatusBar } from "react-native";
import { Background, Fab, Text } from "../../components";
import COMMON_STYLES from "../../theme/theme";

interface PersonalProps {}

function Personal({}: PersonalProps) {
  return (
    <Background>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <View
        style={[
          COMMON_STYLES.flex,
          COMMON_STYLES.fullWidth,
          COMMON_STYLES.center,
        ]}
      >
        <Text style={{ paddingHorizontal: 60, textAlign: "center" }}>
          Reach me on my social networks while I find time to work on this
          screen
        </Text>
      </View>
      <Fab />
    </Background>
  );
}

export default Personal;
