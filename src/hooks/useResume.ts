import { useCallback } from "react";
import { usePlayerContext } from "./usePlayerContext";

type UseResume = (config: { showControls(): void }) => () => void;

export const useResume: UseResume = ({ showControls }) => {
  const { setIsPlaying } = usePlayerContext();

  return useCallback(() => {
    setIsPlaying(true);
    showControls();
  }, [setIsPlaying, showControls]);
};
