import { useCallback } from "react";
import { usePlayerContext } from "./usePlayerContext";
import { useShowControls } from "./useShowControls";
import { useHideControls } from "./useHideControls";
import { VideoPlayerProps } from "../types";

type UseOnVideoPress = (
  config: Pick<
    VideoPlayerProps,
    | "onShowControls"
    | "onHideControls"
    | "disableControlsAutoHide"
    | "controlsTimeout"
    | "onPlayPress"
    | "pauseOnPress"
  >
) => () => void;

export const useOnVideoPress: UseOnVideoPress = ({
  onHideControls,
  onShowControls,
  disableControlsAutoHide,
  controlsTimeout,
  onPlayPress,
  pauseOnPress,
}) => {
  const { isPlaying, setIsPlaying } = usePlayerContext();

  const hideControls = useHideControls({
    disableControlsAutoHide,
    onHideControls,
    controlsTimeout,
  });

  const showControls = useShowControls({
    onShowControls,
  });

  return useCallback(() => {
    showControls();
    hideControls();

    if (pauseOnPress) {
      onPlayPress && onPlayPress();
      setIsPlaying(!isPlaying);
    }
  }, [showControls, hideControls, onPlayPress, isPlaying, pauseOnPress]);
};
