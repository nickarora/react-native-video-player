import { FC } from "react";
import { VideoPlayerProps } from "../types";
interface VideoSeekBarProps extends Pick<VideoPlayerProps, "customStyles" | "disableSeek"> {
    fullWidth?: boolean;
    seekTo(time: number): void;
    showControls(): void;
}
declare const VideoSeekBar: FC<VideoSeekBarProps>;
export declare const styles: {
    seekBar: {
        alignItems: "center";
        height: number;
        flexGrow: number;
        flexDirection: "row";
        paddingHorizontal: number;
        marginLeft: number;
        marginRight: number;
    };
    seekBarFullWidth: {
        marginLeft: number;
        marginRight: number;
        paddingHorizontal: number;
        marginTop: number;
        height: number;
    };
    seekBarProgress: {
        height: number;
        backgroundColor: string;
    };
    seekBarKnob: {
        width: number;
        height: number;
        marginHorizontal: number;
        marginVertical: number;
        borderRadius: number;
        backgroundColor: string;
        transform: {
            scale: number;
        }[];
        zIndex: number;
    };
    seekBarBackground: {
        backgroundColor: string;
        height: number;
    };
};
export default VideoSeekBar;
