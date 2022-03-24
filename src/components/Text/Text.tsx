import * as React from "react";
import { Text as RNText, TextProps, StyleSheet } from "react-native";

interface ExtendedTextProps extends TextProps {
  font?: "regular" | "light" | "black" | "bold";
}

const styles = StyleSheet.create({
  regular: {
    fontFamily: "Lato-Regular",
  },
  light: {
    fontFamily: "Lato-Light",
  },
  black: {
    fontFamily: "Lato-Black",
  },
  bold: {
    fontFamily: "Lato-Bold",
  },
});

function Text({ font = "regular", ...props }: ExtendedTextProps) {
  const textStyles = React.useMemo(() => {
    switch (font) {
      case "regular":
        return styles.regular;
      case "light":
        return styles.light;
      case "black":
        return styles.black;
      case "bold":
        return styles.bold;
      default:
        return styles.regular;
    }
  }, [font]);

  return <RNText {...props} style={[props.style, textStyles]} />;
}

export default Text;
