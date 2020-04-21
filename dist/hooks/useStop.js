import { useCallback } from "react";
import { usePlayerContext } from "./usePlayerContext";
export const useStop = ({ showControls, seekTo }) => {
    const { setIsPlaying, setProgress } = usePlayerContext();
    return useCallback(() => {
        setIsPlaying(false);
        setProgress(0);
        seekTo(0);
        showControls();
    }, [setIsPlaying, setProgress, showControls]);
};
