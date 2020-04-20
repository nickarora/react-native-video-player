import { useEffect } from "react";
import { VideoPlayerProps } from "../types";
import { usePrevious } from "./usePrevious";
import { useCoordinatorContext } from "./useCoordinatorContext";

type useFullscreenHooks = (
  config: Pick<
    VideoPlayerProps,
    "onFullscreenPlayerWillDismiss" | "onFullscreenPlayerWillPresent"
  >
) => void;

export const useFullscreenHooks: useFullscreenHooks = ({
  onFullscreenPlayerWillDismiss,
  onFullscreenPlayerWillPresent,
}) => {
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
