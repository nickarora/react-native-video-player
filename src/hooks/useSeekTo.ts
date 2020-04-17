import { useCallback, RefObject } from "react";
import Video from "react-native-video";

type UseSeekTo = (config: {
  videoRef: RefObject<Video>;
}) => (time: number) => void;

export const useSeekTo: UseSeekTo = ({ videoRef }) =>
  useCallback(
    (time: number) => {
      videoRef.current?.seek(time);
    },
    [videoRef]
  );
