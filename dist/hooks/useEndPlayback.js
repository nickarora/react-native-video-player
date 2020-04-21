import { useCallback } from "react";
import { usePlayerContext } from "./usePlayerContext";
export const useEndPlayback = ({ onEnd, loop, videoRef }) => {
    const { setHasStarted, setHasEnded, setProgress, setIsPlaying, } = usePlayerContext();
    return useCallback(() => {
        var _a;
        onEnd && onEnd();
        setHasStarted(false);
        setHasEnded(true);
        setProgress(1);
        if (!loop) {
            setIsPlaying(false);
        }
        (_a = videoRef.current) === null || _a === void 0 ? void 0 : _a.seek(0);
    }, [
        onEnd,
        loop,
        setHasStarted,
        setHasEnded,
        setProgress,
        setIsPlaying,
        videoRef,
    ]);
};
