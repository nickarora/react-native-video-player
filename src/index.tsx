import React, { Component, RefObject } from "react";
import { CoordinatorContextProvider } from "./context/CoordinatorContext";
import PlayerCoordinator from "./components/PlayerCoordinator";
import VideoWrapper from "./components/VideoWrapper";
import { VideoPlayerProps } from "./types";

class RNVideoPlayer extends Component<VideoPlayerProps> {
  videoPlayerRef: RefObject<VideoWrapper>;

  constructor(props: VideoPlayerProps) {
    super(props);

    this.videoPlayerRef = React.createRef<VideoWrapper>();
  }

  seek(time: number) {
    this.videoPlayerRef.current?.seek(time);
  }

  stop() {
    this.videoPlayerRef.current?.stop();
  }

  pause() {
    this.videoPlayerRef.current?.pause();
  }

  resume() {
    this.videoPlayerRef.current?.resume();
  }

  render() {
    return (
      <CoordinatorContextProvider>
        <PlayerCoordinator ref={this.videoPlayerRef} {...this.props} />
      </CoordinatorContextProvider>
    );
  }
}

export default RNVideoPlayer;
