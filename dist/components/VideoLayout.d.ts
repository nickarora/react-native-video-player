import React from "react";
import VideoWrapper from "./VideoWrapper";
import { VideoPlayerProps } from "../types";
declare const VideoLayout: React.ForwardRefExoticComponent<Pick<VideoPlayerProps, "style" | "resizeMode" | "testID" | "onEnd" | "onProgress" | "onLoad" | "onFullscreenPlayerWillPresent" | "onFullscreenPlayerWillDismiss" | "video" | "thumbnail" | "endThumbnail" | "videoWidth" | "videoHeight" | "duration" | "paused" | "muted" | "controlsTimeout" | "disableControlsAutoHide" | "disableFullscreen" | "loop" | "endWithThumbnail" | "disableSeek" | "pauseOnPress" | "fullScreenOnLongPress" | "customStyles" | "onStart" | "onPlayPress" | "onHideControls" | "onShowControls" | "onMutePress"> & React.RefAttributes<VideoWrapper>>;
export default VideoLayout;
