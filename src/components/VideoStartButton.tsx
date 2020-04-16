import React, { FC, useCallback } from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { useOnStartPress } from "../hooks/useOnStartPress";
import { VideoPlayerProps } from "../types";

interface VideoStartButtonProps
  extends Pick<
    VideoPlayerProps,
    | "customStyles"
    | "onStart"
    | "onHideControls"
    | "disableControlsAutoHide"
    | "controlsTimeout"
  > {}

const VideoStartButton: FC<VideoStartButtonProps> = ({
  customStyles = {},
  controlsTimeout,
  disableControlsAutoHide,
  onStart,
  onHideControls,
}) => {
  const onStartPress = useOnStartPress({
    onStart,
    onHideControls,
    disableControlsAutoHide,
    controlsTimeout,
  });

  return (
    <TouchableOpacity
      style={[styles.playButton, customStyles.playButton]}
      onPress={onStartPress}
    >
      <Icon
        style={[styles.playArrow, customStyles.playArrow]}
        name="play-arrow"
        size={42}
      />
    </TouchableOpacity>
  );
};

export const styles = StyleSheet.create({
  playButton: {
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    width: 64,
    height: 64,
    borderRadius: 32,
    justifyContent: "center",
    alignItems: "center",
  },
  playArrow: {
    color: "white",
  },
});

export default VideoStartButton;
