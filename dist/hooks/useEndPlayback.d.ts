import { RefObject } from "react";
import Video from "react-native-video";
import { VideoPlayerProps } from "../types";
interface EndConfig extends Pick<VideoPlayerProps, "onEnd" | "loop"> {
    videoRef: RefObject<Video | null>;
}
declare type UseEndPlayback = (config: EndConfig) => () => void;
export declare const useEndPlayback: UseEndPlayback;
export {};
