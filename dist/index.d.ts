import { Component, RefObject } from "react";
import VideoWrapper from "./components/VideoWrapper";
import { VideoPlayerProps } from "./types";
declare class RNVideoPlayer extends Component<VideoPlayerProps> {
    videoPlayerRef: RefObject<VideoWrapper>;
    constructor(props: VideoPlayerProps);
    seek(time: number): void;
    stop(): void;
    pause(): void;
    resume(): void;
    render(): JSX.Element;
}
export default RNVideoPlayer;
