import React, { FC } from "react";
import { VideoPlayerProps } from "../types";
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
export declare type PlayerContextTypes = PlayerContextState & PlayerContextUpdaters & {
    isFullscreen: boolean;
};
declare const VideoPlayerContext: React.Context<PlayerContextTypes>;
export declare const VideoPlayerProvider: FC<Required<Pick<VideoPlayerProps, "autoplay" | "defaultMuted" | "hideControlsOnStart"> & {
    priorState: PlayerContextState | undefined;
    isFullscreen: boolean;
}>>;
export default VideoPlayerContext;
