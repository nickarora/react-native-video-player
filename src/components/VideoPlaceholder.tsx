import React, { FC } from "react";
import { View, StyleSheet } from "react-native";
import { usePlayerContext } from "../hooks/usePlayerContext";
import { VideoPlayerProps, SizeStyles } from "../types";
import VideoStartButton from "./VideoStartButton";
import ThumbnailStartButton from "./ThumbnailStartButton";

interface VideoPlaceholderProps extends VideoPlayerProps {
  sizeStyles: SizeStyles;
}

const VideoPlaceholder: FC<VideoPlaceholderProps> = (props) => {
  const {
    thumbnail,
    endThumbnail,
    customStyles,
    onStart,
    onHideControls,
    disableControlsAutoHide,
    controlsTimeout,
    sizeStyles,
    style,
  } = props;

  const { hasEnded, hasStarted } = usePlayerContext();

  if (hasEnded && endThumbnail) {
    return <ThumbnailStartButton {...props} source={endThumbnail} />;
  }

  if (!hasStarted && thumbnail) {
    return <ThumbnailStartButton {...props} source={thumbnail} />;
  }

  return (
    <View style={[styles.preloadingPlaceholder, sizeStyles, style]}>
      <VideoStartButton
        customStyles={customStyles}
        onStart={onStart}
        onHideControls={onHideControls}
        disableControlsAutoHide={disableControlsAutoHide}
        controlsTimeout={controlsTimeout}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  preloadingPlaceholder: {
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default VideoPlaceholder;
