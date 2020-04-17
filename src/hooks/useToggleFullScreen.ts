import { useCallback, RefObject } from "react";
import { Platform } from "react-native";
import Video from "react-native-video";

type UseToggleFullScreen = (config: {
  videoRef: RefObject<Video | null>;
}) => () => void;

export const useToggleFullScreen: UseToggleFullScreen = ({ videoRef }) =>
  useCallback(() => {
    if (Platform.OS === "android") {
      return;
    }

    videoRef.current?.presentFullscreenPlayer();
  }, [videoRef]);
