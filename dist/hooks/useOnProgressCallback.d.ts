import { OnProgressData } from "react-native-video";
import { VideoPlayerProps } from "../types";
declare type UseOnProgressCallback = (config: Pick<VideoPlayerProps, "onProgress">) => (data: OnProgressData) => void;
export declare const useOnProgressCallback: UseOnProgressCallback;
export {};
