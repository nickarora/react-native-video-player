import { VideoPlayerProps } from "../types";
declare type UseShowControls = (config: Pick<VideoPlayerProps, "onShowControls">) => () => void;
export declare const useShowControls: UseShowControls;
export {};
