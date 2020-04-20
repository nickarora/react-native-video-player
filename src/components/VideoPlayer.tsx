import React from "react";
import { VideoPlayerProvider } from "../context/VideoPlayerContext";
import { useCoordinatorContext } from "../hooks/useCoordinatorContext";
import VideoWrapper from "./VideoWrapper";
import VideoLayout from "./VideoLayout";
import { VideoPlayerProps } from "../types";

const VideoPlayer = React.forwardRef<VideoWrapper, VideoPlayerProps & {
  isFullscreen?: boolean
}>(
  (
    {
      autoplay = false,
      defaultMuted = false,
      hideControlsOnStart = false,
      isFullscreen = false,
      ...props
    },
    ref
  ) => {
    const { playerState } = useCoordinatorContext();
    
    return (
      <VideoPlayerProvider
        autoplay={autoplay}
        defaultMuted={defaultMuted}
        hideControlsOnStart={hideControlsOnStart}
        isFullscreen={isFullscreen}
        priorState={playerState}
      >
        <VideoLayout {...props} ref={ref} />
      </VideoPlayerProvider>
    );
  }
);

export default VideoPlayer;
