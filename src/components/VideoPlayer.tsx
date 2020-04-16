import React, { FC, useState, useCallback } from "react";
import { View, LayoutChangeEvent } from "react-native";
import { VideoPlayerProvider } from "../context/VideoPlayerContext";
import VideoContent from "./VideoContent";
import { VideoPlayerProps } from "../types";

const defaultWidth = 200;

const VideoPlayer: FC<VideoPlayerProps> = ({
  autoplay = false,
  defaultMuted = false,
  hideControlsOnStart = false,
  customStyles = {},
  ...props
}) => {
  const [width, setWidth] = useState(defaultWidth);

  const onLayout = useCallback(
    (event: LayoutChangeEvent) => {
      setWidth(event.nativeEvent.layout.width);
    },
    [setWidth]
  );

  return (
    <VideoPlayerProvider
      autoplay={autoplay}
      defaultMuted={defaultMuted}
      hideControlsOnStart={hideControlsOnStart}
    >
      <View onLayout={onLayout} style={customStyles.wrapper}>
        <VideoContent width={width} customStyles={customStyles} {...props} />
      </View>
    </VideoPlayerProvider>
  );
};

export default VideoPlayer;
