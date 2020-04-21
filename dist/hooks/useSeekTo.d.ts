import { RefObject } from "react";
import Video from "react-native-video";
declare type UseSeekTo = (config: {
    videoRef: RefObject<Video>;
}) => (time: number) => void;
export declare const useSeekTo: UseSeekTo;
export {};
