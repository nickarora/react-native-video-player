import { useCallback } from "react";
import { usePlayerContext } from "./usePlayerContext";
import { useShowControls } from "./useShowControls";
import { useHideControls } from "./useHideControls";
export const useOnVideoPress = ({ onHideControls, onShowControls, disableControlsAutoHide, controlsTimeout, onPlayPress, pauseOnPress, }) => {
    const { isPlaying, setIsPlaying } = usePlayerContext();
    const hideControls = useHideControls({
        disableControlsAutoHide,
        onHideControls,
        controlsTimeout,
    });
    const showControls = useShowControls({
        onShowControls,
    });
    return useCallback(() => {
        showControls();
        hideControls();
        if (pauseOnPress) {
            onPlayPress && onPlayPress();
            setIsPlaying(!isPlaying);
        }
    }, [showControls, hideControls, onPlayPress, isPlaying, pauseOnPress]);
};
