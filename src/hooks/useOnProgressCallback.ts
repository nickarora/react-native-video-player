import { useCallback } from "react";
import { OnProgressData } from "react-native-video";
import { usePlayerContext } from "./usePlayerContext";
import { VideoPlayerProps } from "../types";

type UseOnProgressCallback = (
  config: Pick<VideoPlayerProps, "onProgress">
) => (data: OnProgressData) => void;

export const useOnProgressCallback: UseOnProgressCallback = ({
  onProgress,
}) => {
  const { isSeeking, setProgress, duration } = usePlayerContext();

  return useCallback(
    (data: OnProgressData) => {
      if (isSeeking) return;

      onProgress && onProgress(data);
      setProgress(duration ? data.currentTime / duration : 0);
    },
    [isSeeking, onProgress, setProgress, duration]
  );
};
