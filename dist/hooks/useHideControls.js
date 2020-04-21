import { useCallback } from "react";
import { usePlayerContext } from "./usePlayerContext";
export const useHideControls = ({ disableControlsAutoHide = false, onHideControls, controlsTimeout = 2000, }) => {
    const { controlsTimeoutId, setControlsVisible, setControlsTimeoutId, } = usePlayerContext();
    return useCallback(() => {
        if (disableControlsAutoHide) {
            return;
        }
        if (controlsTimeoutId) {
            clearTimeout(controlsTimeoutId);
            setControlsTimeoutId(undefined);
        }
        const id = setTimeout(() => {
            onHideControls && onHideControls();
            setControlsVisible(false);
        }, controlsTimeout);
        setControlsTimeoutId(id);
    }, [
        disableControlsAutoHide,
        controlsTimeoutId,
        onHideControls,
        setControlsVisible,
        setControlsTimeoutId,
    ]);
};
