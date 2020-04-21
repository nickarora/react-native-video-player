var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React from "react";
import { VideoPlayerProvider } from "../context/VideoPlayerContext";
import { useCoordinatorContext } from "../hooks/useCoordinatorContext";
import VideoLayout from "./VideoLayout";
const VideoPlayer = React.forwardRef((_a, ref) => {
    var { autoplay = false, defaultMuted = false, hideControlsOnStart = false, isFullscreen = false } = _a, props = __rest(_a, ["autoplay", "defaultMuted", "hideControlsOnStart", "isFullscreen"]);
    const { playerState } = useCoordinatorContext();
    return (<VideoPlayerProvider autoplay={autoplay} defaultMuted={defaultMuted} hideControlsOnStart={hideControlsOnStart} isFullscreen={isFullscreen} priorState={playerState}>
        <VideoLayout {...props} ref={ref}/>
      </VideoPlayerProvider>);
});
export default VideoPlayer;
