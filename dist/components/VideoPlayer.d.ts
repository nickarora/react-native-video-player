import React from "react";
import VideoWrapper from "./VideoWrapper";
import { VideoPlayerProps } from "../types";
declare const VideoPlayer: React.ForwardRefExoticComponent<VideoPlayerProps & {
    isFullscreen?: boolean | undefined;
} & React.RefAttributes<VideoWrapper>>;
export default VideoPlayer;
