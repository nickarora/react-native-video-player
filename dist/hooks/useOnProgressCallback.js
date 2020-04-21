import { useCallback } from "react";
import { usePlayerContext } from "./usePlayerContext";
export const useOnProgressCallback = ({ onProgress, }) => {
    const { isSeeking, setProgress, duration, setCurrentTime } = usePlayerContext();
    return useCallback((data) => {
        if (isSeeking)
            return;
        onProgress && onProgress(data);
        setCurrentTime(data.currentTime);
        setProgress(duration ? data.currentTime / duration : 0);
    }, [isSeeking, onProgress, setProgress, duration]);
};
