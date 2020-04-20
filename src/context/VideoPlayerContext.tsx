import React, { FC, useState } from "react";
import { VideoPlayerProps } from "../types";
import { noop } from "../utils";

export interface PlayerContextState {
  hasStarted: boolean;
  isPlaying: boolean;
  hasEnded: boolean;
  isSeeking: boolean;
  progress: number;
  isMuted: boolean;
  controlsTimeoutId?: number;
  controlsVisible: boolean;
  duration: number;
  currentTime: number;
}

interface PlayerContextUpdaters {
  setHasStarted(val: boolean): void;
  setIsPlaying(val: boolean): void;
  setHasEnded(val: boolean): void;
  setIsSeeking(val: boolean): void;
  setProgress(val: number): void;
  setIsMuted(val: boolean): void;
  setControlsTimeoutId(val: number | undefined): void;
  setControlsVisible(val: boolean): void;
  setDuration(val: number): void;
  setCurrentTime(val: number): void;
}

export type PlayerContextTypes = PlayerContextState &
  PlayerContextUpdaters & {
    isFullscreen: boolean;
  };

const VideoPlayerContext = React.createContext<PlayerContextTypes>({
  hasStarted: false,
  isPlaying: false,
  hasEnded: false,
  isSeeking: false,
  progress: 0,
  isMuted: false,
  controlsVisible: true,
  duration: 0,
  currentTime: 0,
  setHasStarted: noop,
  setIsPlaying: noop,
  setHasEnded: noop,
  setIsSeeking: noop,
  setProgress: noop,
  setIsMuted: noop,
  setControlsTimeoutId: noop,
  setControlsVisible: noop,
  setDuration: noop,
  setCurrentTime: noop,
  isFullscreen: false,
});

export const VideoPlayerProvider: FC<Required<
  Pick<
    VideoPlayerProps,
    "autoplay" | "defaultMuted" | "hideControlsOnStart"
  > & {
    priorState: PlayerContextState | undefined;
    isFullscreen: boolean;
  }
>> = ({ autoplay, defaultMuted, hideControlsOnStart, priorState, isFullscreen, children }) => {
  const [hasStarted, setHasStarted] = useState(priorState?.hasStarted || autoplay);
  const [isPlaying, setIsPlaying] = useState(priorState?.isPlaying || autoplay);
  const [hasEnded, setHasEnded] = useState(priorState?.isSeeking || false);
  const [isSeeking, setIsSeeking] = useState(priorState?.isSeeking || false);
  const [progress, setProgress] = useState(priorState?.progress || 0);
  const [isMuted, setIsMuted] = useState(priorState?.isMuted || defaultMuted);
  const [duration, setDuration] = useState(priorState?.duration ||0);
  const [currentTime, setCurrentTime] = useState(priorState?.currentTime || 0);
  const [controlsTimeoutId, setControlsTimeoutId] = useState<number>();
  const [controlsVisible, setControlsVisible] = useState(!hideControlsOnStart);

  return (
    <VideoPlayerContext.Provider
      value={{
        hasStarted,
        isPlaying,
        hasEnded,
        isSeeking,
        progress,
        isMuted,
        controlsTimeoutId,
        controlsVisible,
        duration,
        currentTime,
        setHasStarted,
        setIsPlaying,
        setHasEnded,
        setIsSeeking,
        setProgress,
        setIsMuted,
        setControlsTimeoutId,
        setControlsVisible,
        setDuration,
        isFullscreen,
        setCurrentTime,
      }}
    >
      {children}
    </VideoPlayerContext.Provider>
  );
};

export default VideoPlayerContext;
