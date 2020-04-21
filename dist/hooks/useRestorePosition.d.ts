import { RefObject } from "react";
import Video from "react-native-video";
declare type UseRestorePosition = (config: {
    videoRef: RefObject<Video | null>;
    currentTime: number;
}) => void;
export declare const useRestorePosition: UseRestorePosition;
export {};
