import { OnLoadData } from "react-native-video";
import { VideoPlayerProps } from "../types";
declare type UseOnLoadCallback = (config: Pick<VideoPlayerProps, "onLoad">) => (data: OnLoadData) => void;
export declare const useOnLoadCallback: UseOnLoadCallback;
export {};
