import React, { useState, useCallback, useRef } from "react";
import { View, LayoutChangeEvent } from "react-native";
import VideoWrapper from "./VideoWrapper";
import VideoContent from "./VideoContent";
import { VideoPlayerProps } from "../types";

const defaultWidth = 200;

const VideoLayout = React.forwardRef<
  VideoWrapper,
  Omit<VideoPlayerProps, "autoplay" | "defaultMuted" | "hideControlsOnStart">
>(({ customStyles = {}, ...props }, ref) => {
  const wrapperRef = useRef<View>(null);
  const [width, setWidth] = useState(defaultWidth);

  const onLayout = useCallback(
    (event: LayoutChangeEvent) => {
      setWidth(event.nativeEvent.layout.width);
    },
    [setWidth]
  );

  return (
    <View ref={wrapperRef} onLayout={onLayout} style={customStyles.wrapper}>
      <VideoContent
        ref={ref}
        width={width}
        customStyles={customStyles}
        {...props}
      />
    </View>
  );
});

export default VideoLayout;
