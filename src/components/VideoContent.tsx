import React from "react";
import { usePlayerContext } from "../hooks/usePlayerContext";
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
    const { hasEnded, hasStarted } = usePlayerContext();
    const { videoWidth, videoHeight } = props;

    const sizeStyles = createSizeStyles({ videoWidth, videoHeight, width });

    if (!hasStarted || hasEnded) {
      return <VideoPlaceholder sizeStyles={sizeStyles} {...props} />;
    }

    return <Video ref={ref} sizeStyles={sizeStyles} {...props} />;
  }
);

const createSizeStyles = ({
  videoWidth = 1280,
  videoHeight = 720,
  width,
}: {
  videoWidth?: number;
  videoHeight?: number;
  width: number;
}): SizeStyles => ({
  height: width * (videoHeight / videoWidth),
  width,
});

export default VideoContent;
