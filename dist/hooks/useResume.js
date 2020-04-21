import { useCallback } from "react";
import { usePlayerContext } from "./usePlayerContext";
export const useResume = ({ showControls }) => {
    const { setIsPlaying } = usePlayerContext();
    return useCallback(() => {
        setIsPlaying(true);
        showControls();
    }, [setIsPlaying, showControls]);
};
