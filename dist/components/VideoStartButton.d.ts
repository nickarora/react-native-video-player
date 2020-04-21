import { FC } from "react";
import { VideoPlayerProps } from "../types";
declare type VideoStartButtonProps = Pick<VideoPlayerProps, "customStyles" | "onStart" | "onHideControls" | "disableControlsAutoHide" | "controlsTimeout">;
declare const VideoStartButton: FC<VideoStartButtonProps>;
export declare const styles: {
    playButton: {
        backgroundColor: string;
        width: number;
        height: number;
        borderRadius: number;
        justifyContent: "center";
        alignItems: "center";
    };
    playArrow: {
        color: string;
    };
};
export default VideoStartButton;
