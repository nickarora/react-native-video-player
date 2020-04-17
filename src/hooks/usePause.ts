import { useCallback } from "react";
import { usePlayerContext } from "./usePlayerContext";

type UsePause = (config: { showControls(): void }) => () => void;

export const usePause: UsePause = ({ showControls }) => {
  const { setIsPlaying } = usePlayerContext();

  return useCallback(() => {
    setIsPlaying(false);
    showControls();
  }, [setIsPlaying, showControls]);
};
