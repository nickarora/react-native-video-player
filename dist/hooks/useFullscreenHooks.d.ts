import { VideoPlayerProps } from "../types";
declare type useFullscreenHooks = (config: Pick<VideoPlayerProps, "onFullscreenPlayerWillDismiss" | "onFullscreenPlayerWillPresent">) => void;
export declare const useFullscreenHooks: useFullscreenHooks;
export {};
