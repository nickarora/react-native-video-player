import React from "react";
import { VideoPlayerProps } from "../types";
import VideoWrapper from "./VideoWrapper";
interface VideoContentProps extends Omit<VideoPlayerProps, "autoplay" | "defaultMuted" | "hideControlsOnStart"> {
    width: number;
}
declare const VideoContent: React.ForwardRefExoticComponent<VideoContentProps & React.RefAttributes<VideoWrapper>>;
export default VideoContent;
