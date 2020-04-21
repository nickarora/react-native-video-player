import { useCallback } from "react";
import { usePlayerContext } from "./usePlayerContext";
export const useOnMutePress = ({ onMutePress, showControls }) => {
    const { isMuted, setIsMuted } = usePlayerContext();
    return useCallback(() => {
        onMutePress && onMutePress();
        setIsMuted(!isMuted);
        showControls();
    }, [onMutePress, isMuted, setIsMuted, showControls]);
};
