import React, { FC, useState } from "react";
import { VideoPlayerProps } from "../types";

const noop: (val: any) => void = () => {};

export interface PlayerContextTypes {
  hasStarted: boolean;
  isPlaying: boolean;
  hasEnded: boolean;
  isSeeking: boolean;
  progress: number;
  isMuted: boolean;
  controlsTimeoutId?: number;
  controlsVisible: boolean;
  duration: number;
  setHasStarted(val: boolean): void;
  setIsPlaying(val: boolean): void;
  setHasEnded(val: boolean): void;
  setIsSeeking(val: boolean): void;
  setProgress(val: number): void;
  setIsMuted(val: boolean): void;
  setControlsTimeoutId(val: number | undefined): void;
  setControlsVisible(val: boolean): void;
  setDuration(val: number): void;
}

const VideoPlayerContext = React.createContext<PlayerContextTypes>({
  hasStarted: false,
  isPlaying: false,
  hasEnded: false,
  isSeeking: false,
  progress: 0,
  isMuted: false,
  controlsVisible: true,
  duration: 0,
  setHasStarted: noop,
  setIsPlaying: noop,
  setHasEnded: noop,
  setIsSeeking: noop,
  setProgress: noop,
  setIsMuted: noop,
  setControlsTimeoutId: noop,
  setControlsVisible: noop,
  setDuration: noop,
});

export const VideoPlayerProvider: FC<Required<
  Pick<VideoPlayerProps, "autoplay" | "defaultMuted" | "hideControlsOnStart">
>> = ({ autoplay, defaultMuted, hideControlsOnStart, children }) => {
  const [hasStarted, setHasStarted] = useState(autoplay);
  const [isPlaying, setIsPlaying] = useState(autoplay);
  const [hasEnded, setHasEnded] = useState(false);
  const [isSeeking, setIsSeeking] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isMuted, setIsMuted] = useState(defaultMuted);
  const [controlsTimeoutId, setControlsTimeoutId] = useState<number>();
  const [controlsVisible, setControlsVisible] = useState(!hideControlsOnStart);
  const [duration, setDuration] = useState(0);

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
        setHasStarted,
        setIsPlaying,
        setHasEnded,
        setIsSeeking,
        setProgress,
        setIsMuted,
        setControlsTimeoutId,
        setControlsVisible,
        setDuration,
      }}
    >
      {children}
    </VideoPlayerContext.Provider>
  );
};

export default VideoPlayerContext;
