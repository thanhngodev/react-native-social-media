import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Image } from "expo-image";
import { hp } from "../helpers/common";
import { theme } from "../constants/theme";
import { getUserImageSrc } from "../services/image.service";

const Avatar = ({
  uri,
  size = hp(4.5),
  rounded = theme.radius.md,
  style = {},
}) => {
  return (
    <Image
      source={getUserImageSrc(uri)}
      transition={100}
      style={[
        styles.avatar,
        { width: size, height: size, borderRadius: rounded },
        style,
      ]}
    />
  );
};

export default Avatar;

const styles = StyleSheet.create({
  avatar: {
    borderCurve: "continuous",
    borderColor: theme.colors.darkLight,
    borderWidth: 1,
  },
});
