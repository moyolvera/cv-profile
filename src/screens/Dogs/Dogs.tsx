import React from "react";
import { View, Text } from "react-native";
import { Background, Fab } from "../../components";
import COMMON_STYLES from "../../theme/theme";

interface DogsProps {}

function Dogs({}: DogsProps) {
  return (
    <Background>
      <View>
        <Text style={COMMON_STYLES.whiteColor}>More text</Text>
      </View>
      <Fab />
    </Background>
  );
}

export default Dogs;
