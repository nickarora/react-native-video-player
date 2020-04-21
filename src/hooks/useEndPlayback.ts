import { useCallback, RefObject } from "react";
import Video from "react-native-video";
import { usePlayerContext } from "./usePlayerContext";
import { VideoPlayerProps } from "../types";

interface EndConfig extends Pick<VideoPlayerProps, "onEnd" | "loop"> {
  videoRef: RefObject<Video | null>;
  isFullscreen: boolean;
  toggleFullscreen(): void;
}

type UseEndPlayback = (config: EndConfig) => () => void;

export const useEndPlayback: UseEndPlayback = ({
  onEnd,
  loop,
  videoRef,
  isFullscreen,
  toggleFullscreen,
}) => {
  const {
    setHasStarted,
    setHasEnded,
    setProgress,
    setIsPlaying,
  } = usePlayerContext();

  return useCallback(() => {
    onEnd && onEnd();

    setHasStarted(false);
    setHasEnded(true);
    setProgress(1);

    if (!loop) {
      setIsPlaying(false);
    }

    videoRef.current?.seek(0);

    if (isFullscreen) {
      toggleFullscreen();
    }
  }, [
    onEnd,
    loop,
    setHasStarted,
    setHasEnded,
    setProgress,
    setIsPlaying,
    videoRef,
  ]);
};
