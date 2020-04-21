import { VideoPlayerProps } from "../types";
declare type UseOnVideoPress = (config: Pick<VideoPlayerProps, "onShowControls" | "onHideControls" | "disableControlsAutoHide" | "controlsTimeout" | "onPlayPress" | "pauseOnPress">) => () => void;
export declare const useOnVideoPress: UseOnVideoPress;
export {};
