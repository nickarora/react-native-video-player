import { useCallback, RefObject } from "react";
import { Platform } from "react-native";
import Video from "react-native-video";
import { usePlayerContext } from "./usePlayerContext";
import { useCoordinatorContext } from "./useCoordinatorContext";
import {
  PlayerContextTypes,
  PlayerContextState,
} from "../context/VideoPlayerContext";

type UseToggleFullScreen = (config: {
  videoRef: RefObject<Video | null>;
}) => () => void;

export const useToggleFullScreen: UseToggleFullScreen = ({ videoRef }) => {
  const { fullscreen, setFullscreen, setPlayerState } = useCoordinatorContext();
  const playerContext = usePlayerContext();

  return useCallback(() => {
    if (Platform.OS === "android") {
      clearInterval(playerContext.controlsTimeoutId);
      setPlayerState(stateFromPlayerContext(playerContext));
      playerContext.setIsPlaying(false);
      
      // wait for next tick to minimize playback interruption
      setTimeout(() => setFullscreen(!fullscreen), 0);
      return;
    }

    videoRef.current?.presentFullscreenPlayer();
  }, [videoRef, fullscreen, setFullscreen, setPlayerState, playerContext]);
};

type StateFromPlayerContext = (val: PlayerContextTypes) => PlayerContextState;
const stateFromPlayerContext: StateFromPlayerContext = ({
  hasStarted,
  isPlaying,
  hasEnded,
  isSeeking,
  progress,
  isMuted,
  controlsVisible,
  duration,
  currentTime
}) => ({
  hasStarted,
  isPlaying,
  hasEnded,
  isSeeking,
  progress,
  isMuted,
  controlsVisible,
  duration,
  currentTime
});
