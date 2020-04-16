import React, { FC, useCallback } from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { usePlayerContext } from "../hooks/usePlayerContext";
import { useToggleFullScreen } from "../hooks/useToggleFullScreen";
import { useOnMutePress } from "../hooks/useOnMutePress";
import { VideoPlayerProps } from "../types";
import VideoSeekBar from "./VideoSeekBar";

interface VideVideoControlsProps
  extends Pick<
    VideoPlayerProps,
    | "customStyles"
    | "disableFullscreen"
    | "muted"
    | "disableSeek"
    | "onMutePress"
    | "onShowControls"
  > {
  onPress(): void;
}

const VideoControls: FC<VideVideoControlsProps> = ({
  customStyles = {},
  disableFullscreen = false,
  onPress,
  muted: showMuteButtton,
  disableSeek,
  onMutePress,
  onShowControls,
}) => {
  const { isPlaying, isMuted } = usePlayerContext();

  const mutePress = useOnMutePress({
    onMutePress,
    onShowControls,
  });

  const onToggleFullScreen = useToggleFullScreen();

  return (
    <View style={[styles.controls, customStyles.controls]}>
      <TouchableOpacity
        onPress={onPress}
        style={[customStyles.controlButton, customStyles.playControl]}
      >
        <Icon
          style={[
            styles.playControl,
            customStyles.controlIcon,
            customStyles.playIcon,
          ]}
          name={isPlaying ? "pause" : "play-arrow"}
          size={32}
        />
      </TouchableOpacity>
      <VideoSeekBar disableSeek={disableSeek} customStyles={customStyles} />
      {showMuteButtton ? null : (
        <TouchableOpacity
          onPress={mutePress}
          style={customStyles.controlButton}
        >
          <Icon
            style={[styles.extraControl, customStyles.controlIcon]}
            name={isMuted ? "volume-off" : "volume-up"}
            size={24}
          />
        </TouchableOpacity>
      )}
      {disableFullscreen ? null : (
        <TouchableOpacity
          onPress={onToggleFullScreen}
          style={customStyles.controlButton}
        >
          <Icon
            style={[styles.extraControl, customStyles.controlIcon]}
            name="fullscreen"
            size={32}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

export const styles = StyleSheet.create({
  controls: {
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    height: 48,
    marginTop: -48,
    flexDirection: "row",
    alignItems: "center",
  },
  playControl: {
    color: "white",
    padding: 8,
  },
  extraControl: {
    color: "white",
    padding: 8,
  },
});

export default VideoControls;
