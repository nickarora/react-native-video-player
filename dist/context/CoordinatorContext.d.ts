import React, { FC } from "react";
import { PlayerContextState } from "./VideoPlayerContext";
export declare type OrientationState = "landscape" | "portrait";
export interface CoordinatorContextTypes {
    fullscreen: boolean;
    orientation: "landscape" | "portrait";
    playerState?: PlayerContextState;
    setFullscreen(val: boolean): void;
    setPlayerState(state: PlayerContextState): void;
    setOrientation(state: OrientationState): void;
}
declare const CoordinatorContext: React.Context<CoordinatorContextTypes>;
export declare const CoordinatorContextProvider: FC;
export default CoordinatorContext;
