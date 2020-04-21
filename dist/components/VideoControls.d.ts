import { FC } from "react";
import { VideoPlayerProps } from "../types";
interface VideVideoControlsProps extends Pick<VideoPlayerProps, "customStyles" | "disableFullscreen" | "muted" | "disableSeek" | "onMutePress"> {
    onPress(): void;
    seekTo(time: number): void;
    showControls(): void;
    onToggleFullScreen(): void;
}
declare const VideoControls: FC<VideVideoControlsProps>;
export declare const styles: {
    controls: {
        backgroundColor: string;
        height: number;
        marginTop: number;
        flexDirection: "row";
        alignItems: "center";
    };
    playControl: {
        color: string;
        padding: number;
    };
    extraControl: {
        color: string;
        padding: number;
    };
};
export default VideoControls;
