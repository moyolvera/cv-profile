import React from "react";
import { MotiView } from "moti";
import { ImageRequireSource, View } from "react-native";

import COMMON_STYLES from "../../theme/theme";
import { AppWordingResume } from "../../types/types";
import GooglePlayLink from "../GooglePlayLink/GooglePlayLink";
import ImagePreview from "../ImagePreview/ImagePreview";
import ItemFeatures from "../ItemFeatures/ItemFeatures";
import ItemSpecs from "../ItemSpecs/ItemSpecs";
import List from "../List/List";
import SmallTitle from "../SmallTitle/SmallTitle";
import Wording from "../Wording/Wording";
import styles from "./AppResume.styles";

const moti = {
  from: { opacity: 0, transform: [{ translateX: -20 }] },
  animate: { opacity: 1, transform: [{ translateX: 0 }] },
};

interface AppResumeProps {
  resume: AppWordingResume;
  features: string[];
  specs: string[];
  previewImages: ImageRequireSource[];
}

function AppResume({ resume, features, specs, previewImages }: AppResumeProps) {
  return (
    <MotiView from={moti.from} animate={moti.animate} exit={moti.exit}>
      <Wording wording={resume} />
      <View style={styles.featuresWrapper}>
        <View style={styles.width120}>
          <ImagePreview source={previewImages[0]} />
        </View>
        <View style={styles.listWrapper}>
          <SmallTitle title="Features" />
          <List data={features} itemComponent={ItemFeatures} />
        </View>
      </View>
      <View style={styles.specsWrapper}>
        <View style={styles.listWrapper}>
          <SmallTitle title="Tech Specs" />
          <List
            data={specs}
            itemComponent={ItemSpecs}
            style={COMMON_STYLES.marginTop10}
          />
        </View>
        <View style={styles.width120}>
          <ImagePreview source={previewImages[1]} />
        </View>
      </View>
      <GooglePlayLink />
    </MotiView>
  );
}

export default AppResume;
