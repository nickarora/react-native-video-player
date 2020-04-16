import { useCallback } from "react";
import { VideoPlayerProps } from "../types";
import { usePlayerContext } from "./usePlayerContext";
import { useShowControls } from "./useShowControls";

type UseOnMutePress = (
  config: Pick<VideoPlayerProps, "onMutePress" | "onShowControls">
) => () => void;

export const useOnMutePress: UseOnMutePress = ({
  onMutePress,
  onShowControls
}) => {
  const { isMuted, setIsMuted } = usePlayerContext();
  const showControls = useShowControls({
    onShowControls,
  });
  
  return useCallback(() => {
    onMutePress && onMutePress();
    setIsMuted(!isMuted);
    showControls();
  }, [onMutePress, isMuted, setIsMuted, showControls]);
};
