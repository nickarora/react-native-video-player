import React, { useState } from "react";
import { noop } from "../utils";
const VideoPlayerContext = React.createContext({
    hasStarted: false,
    isPlaying: false,
    hasEnded: false,
    isSeeking: false,
    progress: 0,
    isMuted: false,
    controlsVisible: true,
    duration: 0,
    currentTime: 0,
    setHasStarted: noop,
    setIsPlaying: noop,
    setHasEnded: noop,
    setIsSeeking: noop,
    setProgress: noop,
    setIsMuted: noop,
    setControlsTimeoutId: noop,
    setControlsVisible: noop,
    setDuration: noop,
    setCurrentTime: noop,
    isFullscreen: false,
});
export const VideoPlayerProvider = ({ autoplay, defaultMuted, hideControlsOnStart, priorState, isFullscreen, children }) => {
    const [hasStarted, setHasStarted] = useState((priorState === null || priorState === void 0 ? void 0 : priorState.hasStarted) || autoplay);
    const [isPlaying, setIsPlaying] = useState((priorState === null || priorState === void 0 ? void 0 : priorState.isPlaying) || autoplay);
    const [hasEnded, setHasEnded] = useState((priorState === null || priorState === void 0 ? void 0 : priorState.isSeeking) || false);
    const [isSeeking, setIsSeeking] = useState((priorState === null || priorState === void 0 ? void 0 : priorState.isSeeking) || false);
    const [progress, setProgress] = useState((priorState === null || priorState === void 0 ? void 0 : priorState.progress) || 0);
    const [isMuted, setIsMuted] = useState((priorState === null || priorState === void 0 ? void 0 : priorState.isMuted) || defaultMuted);
    const [duration, setDuration] = useState((priorState === null || priorState === void 0 ? void 0 : priorState.duration) || 0);
    const [currentTime, setCurrentTime] = useState((priorState === null || priorState === void 0 ? void 0 : priorState.currentTime) || 0);
    const [controlsTimeoutId, setControlsTimeoutId] = useState();
    const [controlsVisible, setControlsVisible] = useState(!hideControlsOnStart);
    return (<VideoPlayerContext.Provider value={{
        hasStarted,
        isPlaying,
        hasEnded,
        isSeeking,
        progress,
        isMuted,
        controlsTimeoutId,
        controlsVisible,
        duration,
        currentTime,
        setHasStarted,
        setIsPlaying,
        setHasEnded,
        setIsSeeking,
        setProgress,
        setIsMuted,
        setControlsTimeoutId,
        setControlsVisible,
        setDuration,
        isFullscreen,
        setCurrentTime,
    }}>
      {children}
    </VideoPlayerContext.Provider>);
};
export default VideoPlayerContext;
