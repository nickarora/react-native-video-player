import { VideoPlayerProps } from "../types";
declare type UseOnStartPress = (config: Pick<VideoPlayerProps, "onStart" | "onHideControls" | "disableControlsAutoHide" | "controlsTimeout">) => () => void;
export declare const useOnStartPress: UseOnStartPress;
export {};
