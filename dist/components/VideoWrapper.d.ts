import { Component } from "react";
import { ViewProps } from "react-native";
interface VideoWrapperProps {
    style: ViewProps["style"];
    seek(time: number): void;
    stop(): void;
    pause(): void;
    resume(): void;
}
declare class VideoWrapper extends Component<VideoWrapperProps> {
    seek(time: number): void;
    stop(): void;
    pause(): void;
    resume(): void;
    render(): JSX.Element;
}
export default VideoWrapper;
