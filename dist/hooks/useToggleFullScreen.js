import { useCallback } from "react";
import { Platform } from "react-native";
import { usePlayerContext } from "./usePlayerContext";
import { useCoordinatorContext } from "./useCoordinatorContext";
export const useToggleFullScreen = ({ videoRef }) => {
    const { fullscreen, setFullscreen, setPlayerState } = useCoordinatorContext();
    const playerContext = usePlayerContext();
    return useCallback(() => {
        var _a;
        if (Platform.OS === "android") {
            clearInterval(playerContext.controlsTimeoutId);
            const wasPlaying = playerContext.isPlaying;
            playerContext.setIsPlaying(false);
            // wait for next tick to minimize playback interruption
            setTimeout(() => {
                setPlayerState(stateFromPlayerContext(Object.assign(Object.assign({}, playerContext), { isPlaying: wasPlaying })));
                setFullscreen(!fullscreen);
            }, 0);
        }
        (_a = videoRef.current) === null || _a === void 0 ? void 0 : _a.presentFullscreenPlayer();
    }, [videoRef, fullscreen, setFullscreen, setPlayerState, playerContext]);
};
const stateFromPlayerContext = ({ hasStarted, isPlaying, hasEnded, isSeeking, progress, isMuted, controlsVisible, duration, currentTime, }) => ({
    hasStarted,
    isPlaying,
    hasEnded,
    isSeeking,
    progress,
    isMuted,
    controlsVisible,
    duration,
    currentTime,
});
