import { Component } from "react";
import { ViewProps } from "react-native";
interface VideoWrapperProps {
    style: ViewProps["style"];
    seek(time: number): void;
    stop(): void;
    pause(): void;
    resume(): void;
    toggleFullscreen(): void;
}
declare class VideoWrapper extends Component<VideoWrapperProps> {
    seek(time: number): void;
    stop(): void;
    pause(): void;
    resume(): void;
    toggleFullscreen(): void;
    render(): JSX.Element;
}
export default VideoWrapper;
