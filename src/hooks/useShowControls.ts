import { useCallback } from "react";
import { usePlayerContext } from "./usePlayerContext";
import { VideoPlayerProps } from "../types";

type UseShowControls = (
  config: Pick<VideoPlayerProps, "onShowControls">
) => () => void;

export const useShowControls: UseShowControls = ({ onShowControls }) => {
  const { setControlsVisible } = usePlayerContext();

  return useCallback(() => {
    onShowControls && onShowControls();
    setControlsVisible(true);
  }, [onShowControls, setControlsVisible]);
};
