import { useCallback } from "react";
import { VideoPlayerProps } from "../types";
import { usePlayerContext } from "./usePlayerContext";

interface PressMuteConfig extends Pick<VideoPlayerProps, "onMutePress"> {
  showControls(): void;
}

type UseOnMutePress = (
  config: PressMuteConfig
) => () => void;

export const useOnMutePress: UseOnMutePress = ({
  onMutePress,
  showControls
}) => {
  const { isMuted, setIsMuted } = usePlayerContext();
  
  return useCallback(() => {
    onMutePress && onMutePress();
    setIsMuted(!isMuted);
    showControls();
  }, [onMutePress, isMuted, setIsMuted, showControls]);
};
