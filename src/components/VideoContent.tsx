import React, { useMemo } from "react";
import { StatusBar, useWindowDimensions, ScaledSize } from "react-native";
import { OrientationState } from "../context/CoordinatorContext";
import { usePlayerContext } from "../hooks/usePlayerContext";
import { useCoordinatorContext } from "../hooks/useCoordinatorContext";
import { VideoPlayerProps, SizeStyles } from "../types";
import VideoWrapper from "./VideoWrapper";
import VideoPlaceholder from "./VideoPlaceholder";
import Video from "./Video";

interface VideoContentProps
  extends Omit<
    VideoPlayerProps,
    "autoplay" | "defaultMuted" | "hideControlsOnStart"
  > {
  width: number;
}

const VideoContent = React.forwardRef<VideoWrapper, VideoContentProps>(
  ({ width, ...props }, ref) => {
    const { orientation } = useCoordinatorContext();
    const { hasEnded, hasStarted, isFullscreen } = usePlayerContext();
    const windowDimensions = useWindowDimensions();

    const { videoWidth, videoHeight } = props;

    const sizeStyles = useMemo(
      () =>
        createSizeStyles(
          width,
          orientation,
          isFullscreen,
          windowDimensions,
          videoWidth,
          videoHeight
        ),
      [
        width,
        orientation,
        isFullscreen,
        windowDimensions,
        videoWidth,
        videoHeight,
      ]
    );

    if (!hasStarted || hasEnded) {
      return <VideoPlaceholder sizeStyles={sizeStyles} {...props} />;
    }

    return <Video ref={ref} sizeStyles={sizeStyles} {...props} />;
  }
);

const createSizeStyles = (
  width: number,
  orientation: OrientationState,
  isFullscreen: boolean,
  windowDimensions: ScaledSize,
  videoWidth = 1280,
  videoHeight = 720
): SizeStyles => {
  if (!isFullscreen) {
    return {
      width,
      height: width * (videoHeight / videoWidth),
    };
  }

  const windowWidth = windowDimensions.width;
  const windowHeight = windowDimensions.height - (StatusBar.currentHeight || 0);

  return orientation === "landscape"
    ? {
        width: windowHeight * (videoWidth / videoHeight),
        height: windowHeight,
      }
    : {
        width: windowWidth,
        height: windowWidth * (videoHeight / videoWidth),
      };
};

export default VideoContent;
