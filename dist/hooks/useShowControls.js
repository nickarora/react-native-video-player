import { useCallback } from "react";
import { usePlayerContext } from "./usePlayerContext";
export const useShowControls = ({ onShowControls }) => {
    const { setControlsVisible } = usePlayerContext();
    return useCallback(() => {
        onShowControls && onShowControls();
        setControlsVisible(true);
    }, [onShowControls, setControlsVisible]);
};
