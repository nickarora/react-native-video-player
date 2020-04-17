import { useCallback } from "react";
import { usePlayerContext } from "./usePlayerContext";

type useStop = (config: {
  showControls(): void;
  seekTo(time: number): void;
}) => () => void;

export const useStop: useStop = ({ showControls, seekTo }) => {
  const { setIsPlaying, setProgress } = usePlayerContext();

  return useCallback(() => {
    setIsPlaying(false);
    setProgress(0);
    seekTo(0);
    showControls();
  }, [setIsPlaying, setProgress, showControls]);
};
