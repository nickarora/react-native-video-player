import { useCallback } from "react";
import { usePlayerContext } from "./usePlayerContext";
import { useHideControls } from "./useHideControls";
export const useOnStartPress = ({ onStart, onHideControls, disableControlsAutoHide, controlsTimeout, }) => {
    const { controlsTimeoutId, progress, setIsPlaying, setHasStarted, setHasEnded, setProgress, setControlsTimeoutId, } = usePlayerContext();
    const hideControls = useHideControls({
        disableControlsAutoHide,
        onHideControls,
        controlsTimeout,
    });
    return useCallback(() => {
        onStart && onStart();
        setIsPlaying(true);
        setHasStarted(true);
        setHasEnded(false);
        setProgress(progress === 1 ? 0 : progress);
        hideControls();
    }, [
        progress,
        controlsTimeoutId,
        onStart,
        setIsPlaying,
        setHasStarted,
        setHasEnded,
        setProgress,
        setControlsTimeoutId,
    ]);
};
