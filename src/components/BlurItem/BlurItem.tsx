import { BlurView } from "expo-blur";
import React from "react";
import { TouchableOpacity, View, ViewStyle } from "react-native";
import styles from "./BlurItem.styles";

interface BlurItemProps {
  blurStyle?: ViewStyle | ViewStyle[];
  children: React.ReactNode;
  small?: boolean;
  style?: ViewStyle | ViewStyle[];
  onPress?: () => void;
}

interface WrapperProps {
  onPress?: () => void;
  contentStyle?: ViewStyle | ViewStyle[];
  children: React.ReactNode;
}

function Wrapper({ onPress, contentStyle, children }: WrapperProps) {
  return !!onPress ? (
    <TouchableOpacity onPress={onPress} style={contentStyle}>
      {children}
    </TouchableOpacity>
  ) : (
    <View style={contentStyle}>{children}</View>
  );
}

function BlurItem({
  small,
  children,
  style,
  blurStyle,
  onPress,
}: BlurItemProps) {
  const wrapperStyle = React.useMemo(() => {
    return [
      styles.wrapper,
      small ? styles.wrapperSmall : styles.wrapperNormal,
      style,
    ] as ViewStyle[];
  }, [small, style]);

  return (
    <Wrapper contentStyle={wrapperStyle} onPress={onPress}>
      <BlurView
        tint="dark"
        intensity={10}
        style={[small ? styles.smallPadding : styles.padding, blurStyle]}
      >
        {children}
      </BlurView>
    </Wrapper>
  );
}

export default BlurItem;
