import React, { FC, useCallback, useRef } from "react";
import { Platform, View, TouchableOpacity, StyleSheet } from "react-native";
import RNVideo from "react-native-video";
import { usePlayerContext } from "../hooks/usePlayerContext";
import { useEndPlayback } from "../hooks/useEndPlayback";
import { useOnLoadCallback } from "../hooks/useOnLoadCallback";
import { useOnProgressCallback } from "../hooks/useOnProgressCallback";
import { useOnVideoPress } from "../hooks/useOnVideoPress";
import { useToggleFullScreen } from "../hooks/useToggleFullScreen";
import { VideoPlayerProps, SizeStyles } from "../types";
import VideoControls from "./VideoControls";
import VideoSeekBar from "./VideoSeekBar";

interface VideoProps extends VideoPlayerProps {
  sizeStyles: SizeStyles;
}

const Video: FC<VideoProps> = ({
  video,
  style,
  resizeMode = "contain",
  pauseOnPress = false,
  fullScreenOnLongPress = false,
  customStyles = {},
  sizeStyles,
  onProgress,
  muted,
  paused,
  onEnd,
  onLoad,
  onShowControls,
  onPlayPress,
  loop,
  disableControlsAutoHide,
  controlsTimeout,
  onHideControls,
  disableSeek,
  disableFullscreen,
  ...props
}) => {
  const videoRef = useRef<RNVideo>(null);

  const { isMuted, isPlaying, controlsVisible } = usePlayerContext();

  const endPlayback = useEndPlayback({
    onEnd,
    videoRef,
  });

  const onLoadCallback = useOnLoadCallback({
    onLoad,
  });

  const onProgressCallback = useOnProgressCallback({
    onProgress,
  });

  const toggleFullScreen = useToggleFullScreen();

  const onPress = useOnVideoPress({
    onShowControls,
    onHideControls,
    disableControlsAutoHide,
    controlsTimeout,
  });

  const onLongPress = useCallback(() => {
    if (!fullScreenOnLongPress) {
      return;
    }

    toggleFullScreen();
  }, [fullScreenOnLongPress]);

  return (
    <View style={customStyles.videoWrapper}>
      <RNVideo
        {...props}
        style={[styles.video, sizeStyles, style, customStyles.video]}
        ref={videoRef}
        muted={muted || isMuted}
        paused={paused || !isPlaying}
        onProgress={onProgressCallback}
        onEnd={endPlayback}
        onLoad={onLoadCallback}
        source={video}
        resizeMode={resizeMode}
      />
      <View style={[sizeStyles, { marginTop: -sizeStyles.height }]}>
        <TouchableOpacity
          style={styles.overlayButton}
          onPress={onPress}
          onLongPress={onLongPress}
        />
      </View>
      {!isPlaying || controlsVisible ? (
        <VideoControls
          customStyles={customStyles}
          disableFullscreen={disableFullscreen}
          muted={muted}
          disableSeek={disableSeek}
          onPress={onPress}
        />
      ) : (
        <VideoSeekBar
          fullWidth
          disableSeek={disableSeek}
          customStyles={customStyles}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  video: {
    backgroundColor: Platform.Version >= 24 ? undefined : "black",
  },
  overlayButton: {
    flex: 1,
  },
});

export default Video;
