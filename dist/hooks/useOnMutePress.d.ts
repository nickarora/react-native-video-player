import { VideoPlayerProps } from "../types";
interface PressMuteConfig extends Pick<VideoPlayerProps, "onMutePress"> {
    showControls(): void;
}
declare type UseOnMutePress = (config: PressMuteConfig) => () => void;
export declare const useOnMutePress: UseOnMutePress;
export {};
