import { VideoPlayerProps } from "../types";
declare type UseHidecontrols = (config: Pick<VideoPlayerProps, "disableControlsAutoHide" | "onHideControls" | "controlsTimeout">) => () => void;
export declare const useHideControls: UseHidecontrols;
export {};
