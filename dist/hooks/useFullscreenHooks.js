import { useEffect } from "react";
import { usePrevious } from "./usePrevious";
import { useCoordinatorContext } from "./useCoordinatorContext";
export const useFullscreenHooks = ({ onFullscreenPlayerWillDismiss, onFullscreenPlayerWillPresent, }) => {
    const { fullscreen } = useCoordinatorContext();
    const prevFullscreen = usePrevious(fullscreen);
    useEffect(() => {
        if (fullscreen === true && prevFullscreen === false) {
            onFullscreenPlayerWillPresent && onFullscreenPlayerWillPresent();
        }
        if (fullscreen === false && prevFullscreen === true) {
            onFullscreenPlayerWillDismiss && onFullscreenPlayerWillDismiss();
        }
    }, [fullscreen, prevFullscreen]);
};
