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
  const { isSeeking, setProgress, duration, setCurrentTime } = usePlayerContext();

  return useCallback(
    (data: OnProgressData) => {
      if (isSeeking) return;

      onProgress && onProgress(data);
      setCurrentTime(data.currentTime);
      setProgress(duration ? data.currentTime / duration : 0);
    },
    [isSeeking, onProgress, setProgress, duration]
  );
};
