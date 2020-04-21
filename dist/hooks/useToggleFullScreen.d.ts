import { RefObject } from "react";
import Video from "react-native-video";
declare type UseToggleFullScreen = (config: {
    videoRef: RefObject<Video | null>;
}) => () => void;
export declare const useToggleFullScreen: UseToggleFullScreen;
export {};
