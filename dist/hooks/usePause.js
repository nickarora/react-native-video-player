import { useCallback } from "react";
import { usePlayerContext } from "./usePlayerContext";
export const usePause = ({ showControls }) => {
    const { setIsPlaying } = usePlayerContext();
    return useCallback(() => {
        setIsPlaying(false);
        showControls();
    }, [setIsPlaying, showControls]);
};
