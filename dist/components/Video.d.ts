import React from "react";
import { VideoPlayerProps, SizeStyles } from "../types";
import VideoWrapper from "./VideoWrapper";
interface VideoProps extends VideoPlayerProps {
    sizeStyles: SizeStyles;
}
declare const Video: React.ForwardRefExoticComponent<VideoProps & React.RefAttributes<VideoWrapper>>;
export default Video;
