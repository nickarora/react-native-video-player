import React, { FC } from "react";
import { usePlayerContext } from "../hooks/usePlayerContext";
import { VideoPlayerProps, SizeStyles } from "../types";
import VideoPlaceholder from "./VideoPlaceholder";
import Video from "./Video";

interface VideoContentProps
  extends Omit<
    VideoPlayerProps,
    "autoplay" | "defaultMuted" | "hideControlsOnStart"
  > {
  width: number;
}

const VideoContent: FC<VideoContentProps> = ({ width, ...props }) => {
  const { hasEnded, hasStarted } = usePlayerContext();
  const { videoWidth, videoHeight } = props;

  const sizeStyles = createSizeStyles({ videoWidth, videoHeight, width });

  if (!hasStarted || hasEnded) {
    return <VideoPlaceholder sizeStyles={sizeStyles} {...props} />;
  }

  return <Video sizeStyles={sizeStyles} {...props} />;
};

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
