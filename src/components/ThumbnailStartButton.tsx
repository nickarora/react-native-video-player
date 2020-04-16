import React, { FC } from "react";
import {
  ImageBackground,
  ViewProps,
  StyleSheet,
  ImageSourcePropType,
} from "react-native";
import { VideoPlayerProps } from "../types";
import VideoStartButton from "./VideoStartButton";

interface ThumbnailStartButtonProps extends VideoPlayerProps {
  sizeStyles: ViewProps["style"];
  source: ImageSourcePropType;
}

const ThumbnailStartButton: FC<ThumbnailStartButtonProps> = ({
  source,
  style,
  customStyles = {},
  sizeStyles,
  onStart,
  onHideControls,
  disableControlsAutoHide,
  controlsTimeout,
}) => (
  <ImageBackground
    style={[styles.thumbnail, sizeStyles, style, customStyles.thumbnail]}
    source={source}
  >
    <VideoStartButton
      customStyles={customStyles}
      onStart={onStart}
      onHideControls={onHideControls}
      disableControlsAutoHide={disableControlsAutoHide}
      controlsTimeout={controlsTimeout}
    />
  </ImageBackground>
);

const styles = StyleSheet.create({
  thumbnail: {
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ThumbnailStartButton;
