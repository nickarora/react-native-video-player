import React from "react";
import VideoWrapper from "./VideoWrapper";
import { VideoPlayerProps } from "../types";
declare const PlayerCoordinator: React.ForwardRefExoticComponent<VideoPlayerProps & React.RefAttributes<VideoWrapper>>;
export default PlayerCoordinator;
