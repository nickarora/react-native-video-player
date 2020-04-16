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
  >
) => () => void;

export const useOnVideoPress: UseOnVideoPress = ({
  onHideControls,
  onShowControls,
  disableControlsAutoHide,
  controlsTimeout,
  onPlayPress
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

    onPlayPress && onPlayPress();
    setIsPlaying(!isPlaying);
  }, [showControls, hideControls, onPlayPress, isPlaying]);
};
