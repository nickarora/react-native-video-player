import React, { useCallback, useRef } from "react";
import { Platform, View, TouchableOpacity, StyleSheet } from "react-native";
import RNVideo from "react-native-video";
import { usePlayerContext } from "../hooks/usePlayerContext";
import { useEndPlayback } from "../hooks/useEndPlayback";
import { useOnLoadCallback } from "../hooks/useOnLoadCallback";
import { useOnProgressCallback } from "../hooks/useOnProgressCallback";
import { useOnVideoPress } from "../hooks/useOnVideoPress";
import { useToggleFullScreen } from "../hooks/useToggleFullScreen";
import { useShowControls } from "../hooks/useShowControls";
import { useSeekTo } from "../hooks/useSeekTo";
import { usePause } from "../hooks/usePause";
import { useResume } from "../hooks/useResume";
import { useStop } from "../hooks/useStop";
import { VideoPlayerProps, SizeStyles } from "../types";
import VideoWrapper from "./VideoWrapper";
import VideoControls from "./VideoControls";
import VideoSeekBar from "./VideoSeekBar";

interface VideoProps extends VideoPlayerProps {
  sizeStyles: SizeStyles;
}

const Video = React.forwardRef<VideoWrapper, VideoProps>(
  (
    {
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
      onMutePress,
      onFullscreenPlayerWillDismiss,
      onFullscreenPlayerWillPresent,
      disableFullscreen,
      ...props
    },
    ref
  ) => {
    const videoRef = useRef<RNVideo>(null);

    const {
      isMuted,
      isPlaying,
      controlsVisible,
      setIsPlaying,
    } = usePlayerContext();

    const endPlayback = useEndPlayback({
      onEnd,
      videoRef,
      loop,
    });

    const onLoadCallback = useOnLoadCallback({
      onLoad,
    });

    const onProgressCallback = useOnProgressCallback({
      onProgress,
    });

    const toggleFullScreen = useToggleFullScreen({
      videoRef,
    });

    const onPressVideo = useOnVideoPress({
      pauseOnPress,
      onShowControls,
      onHideControls,
      onPlayPress,
      disableControlsAutoHide,
      controlsTimeout,
    });

    const onPressPlayPause = useOnVideoPress({
      pauseOnPress: true,
      onShowControls,
      onHideControls,
      onPlayPress,
      disableControlsAutoHide,
      controlsTimeout,
    });

    const onLongPress = useCallback(() => {
      if (!fullScreenOnLongPress) {
        return;
      }

      toggleFullScreen();
    }, [fullScreenOnLongPress]);

    const showControls = useShowControls({
      onShowControls,
    });

    const seekTo = useSeekTo({ videoRef });
    const pause = usePause({ showControls });
    const resume = useResume({ showControls });
    const stop = useStop({ showControls, seekTo });
    
    const fullScreenPlayerWillPresent = useCallback(() => {
      onFullscreenPlayerWillPresent && onFullscreenPlayerWillPresent();
    }, [onFullscreenPlayerWillPresent]);

    const fullScreenPlayerWillDismiss = useCallback(() => {
      onFullscreenPlayerWillDismiss && onFullscreenPlayerWillDismiss();
    }, [onFullscreenPlayerWillDismiss, isPlaying]);

    const fullScreenPlayerDidDismiss = useCallback(() => {
      // on iOS, react-native-video paused the video when full screen is dismissed
      // this operation ensures react state is in sync with the video player
      setIsPlaying(false);
    }, [setIsPlaying]);

    return (
      <VideoWrapper
        ref={ref}
        style={customStyles.videoWrapper}
        seek={seekTo}
        pause={pause}
        stop={stop}
        resume={resume}
      >
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
          onFullscreenPlayerWillPresent={fullScreenPlayerWillPresent}
          onFullscreenPlayerWillDismiss={fullScreenPlayerWillDismiss}
          onFullscreenPlayerDidDismiss={fullScreenPlayerDidDismiss}
        />
        <View style={[sizeStyles, { marginTop: -sizeStyles.height }]}>
          <TouchableOpacity
            style={styles.overlayButton}
            onPress={onPressVideo}
            onLongPress={onLongPress}
          />
        </View>
        {!isPlaying || controlsVisible ? (
          <VideoControls
            customStyles={customStyles}
            disableFullscreen={disableFullscreen}
            muted={muted}
            disableSeek={disableSeek}
            onPress={onPressPlayPause}
            onMutePress={onMutePress}
            seekTo={seekTo}
            showControls={showControls}
            onToggleFullScreen={toggleFullScreen}
          />
        ) : (
          <VideoSeekBar
            fullWidth
            disableSeek={disableSeek}
            customStyles={customStyles}
            seekTo={seekTo}
            showControls={showControls}
          />
        )}
      </VideoWrapper>
    );
  }
);

const styles = StyleSheet.create({
  video: {
    backgroundColor: Platform.Version >= 24 ? undefined : "black",
  },
  overlayButton: {
    flex: 1,
  },
});

export default Video;
