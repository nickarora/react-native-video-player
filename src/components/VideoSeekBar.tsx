import React, { FC, useCallback, useState } from "react";
import {
  View,
  LayoutChangeEvent,
  StyleSheet,
  ViewStyle,
} from "react-native";
import { usePlayerContext } from "../hooks/usePlayerContext";
import { VideoPlayerProps } from "../types";

interface VideoSeekBarProps
  extends Pick<VideoPlayerProps, "customStyles" | "disableSeek"> {
  fullWidth?: boolean;
}

const VideoSeekBar: FC<VideoSeekBarProps> = ({
  fullWidth = false,
  disableSeek = false,
  customStyles = {},
}) => {
  const { progress, isSeeking } = usePlayerContext();
  const [seekBarWidth, setSeekBarWidth] = useState(200);

  const onLayout = useCallback((event: LayoutChangeEvent) => {
    let padding = 20;

    const customStyle = (customStyles.seekBar as any) as ViewStyle;

    if (!customStyle) {
      setSeekBarWidth(event.nativeEvent.layout.width - padding);
    }

    if (customStyle.paddingHorizontal) {
      padding = parseInt(customStyle.paddingHorizontal as string, 10) * 2;
    } else if (
      customStyle.paddingLeft !== undefined ||
      customStyle.paddingRight !== undefined
    ) {
      padding = parseInt(customStyle.paddingLeft as string, 10) || 0;
      padding += parseInt(customStyle.paddingRight as string, 10) || 0;
    }

    setSeekBarWidth(event.nativeEvent.layout.width - padding);
  }, [setSeekBarWidth]);
  const onStartShouldSetResponder = useCallback(() => true, []);
  const onMoveShouldSetResponder = useCallback(() => true, []);
  
  const onSeekGrant = useCallback(() => {}, []);
  const onSeek = useCallback(() => {}, []);
  const onSeekRelease = useCallback(() => {}, []);

  return (
    <View
      style={[
        styles.seekBar,
        fullWidth ? styles.seekBarFullWidth : {},
        customStyles.seekBar,
        fullWidth ? customStyles.seekBarFullWidth : {},
      ]}
      onLayout={onLayout}
    >
      <View
        style={[
          { flexGrow: progress },
          styles.seekBarProgress,
          customStyles.seekBarProgress,
        ]}
      />
      {!fullWidth && !disableSeek ? (
        <View
          style={[
            styles.seekBarKnob,
            customStyles.seekBarKnob,
            isSeeking ? { transform: [{ scale: 1 }] } : {},
            isSeeking ? customStyles.seekBarKnobSeeking : {},
          ]}
          hitSlop={{ top: 20, bottom: 20, left: 10, right: 20 }}
          onStartShouldSetResponder={onStartShouldSetResponder}
          onMoveShouldSetResponder={onMoveShouldSetResponder}
          onResponderGrant={onSeekGrant}
          onResponderMove={onSeek}
          onResponderRelease={onSeekRelease}
          onResponderTerminate={onSeekRelease}
        />
      ) : null}
      <View
        style={[
          styles.seekBarBackground,
          { flexGrow: 1 - progress },
          customStyles.seekBarBackground,
        ]}
      />
    </View>
  );
};

export const styles = StyleSheet.create({
  seekBar: {
    alignItems: "center",
    height: 30,
    flexGrow: 1,
    flexDirection: "row",
    paddingHorizontal: 10,
    marginLeft: -10,
    marginRight: -5,
  },
  seekBarFullWidth: {
    marginLeft: 0,
    marginRight: 0,
    paddingHorizontal: 0,
    marginTop: -3,
    height: 3,
  },
  seekBarProgress: {
    height: 3,
    backgroundColor: "#F00",
  },
  seekBarKnob: {
    width: 20,
    height: 20,
    marginHorizontal: -8,
    marginVertical: -10,
    borderRadius: 10,
    backgroundColor: "#F00",
    transform: [{ scale: 0.8 }],
    zIndex: 1,
  },
  seekBarBackground: {
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    height: 3,
  },
});

export default VideoSeekBar;
