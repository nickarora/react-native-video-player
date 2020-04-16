import { useCallback } from "react";
import { OnLoadData } from "react-native-video";
import { usePlayerContext } from "./usePlayerContext";
import { VideoPlayerProps } from "../types";

type UseOnLoadCallback = (
  config: Pick<VideoPlayerProps, "onLoad">
) => (data: OnLoadData) => void;

export const useOnLoadCallback: UseOnLoadCallback = ({ onLoad }) => {
  const { setDuration } = usePlayerContext();

  return useCallback(
    (data: OnLoadData) => {
      onLoad && onLoad(data);
      setDuration(data.duration);
    },
    [onLoad, setDuration]
  );
};
