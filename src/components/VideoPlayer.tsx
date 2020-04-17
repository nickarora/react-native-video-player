import React, { useState, useCallback } from "react";
import { View, LayoutChangeEvent } from "react-native";
import { VideoPlayerProvider } from "../context/VideoPlayerContext";
import VideoWrapper from "./VideoWrapper";
import VideoContent from "./VideoContent";
import { VideoPlayerProps } from "../types";

const defaultWidth = 200;

const VideoPlayer = React.forwardRef<VideoWrapper, VideoPlayerProps>(
  (
    {
      autoplay = false,
      defaultMuted = false,
      hideControlsOnStart = false,
      customStyles = {},
      ...props
    },
    ref
  ) => {
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
          <VideoContent
            ref={ref}
            width={width}
            customStyles={customStyles}
            {...props}
          />
        </View>
      </VideoPlayerProvider>
    );
  }
);

export default VideoPlayer;
