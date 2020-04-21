import React, { Component } from "react";
import { View, ViewProps } from "react-native";

interface VideoWrapperProps {
  style: ViewProps["style"];
  seek(time: number): void;
  stop(): void;
  pause(): void;
  resume(): void;
  toggleFullscreen(): void;
}

/* primarily exists to catch refs */
class VideoWrapper extends Component<VideoWrapperProps> {
  seek(time: number) {
    this.props.seek(time);
  }

  stop() {
    this.props.stop();
  }

  pause() {
    this.props.pause();
  }

  resume() {
    this.props.resume();
  }

  toggleFullscreen() {
    this.props.toggleFullscreen();
  }

  render() {
    return <View style={this.props.style}>{this.props.children}</View>;
  }
}

export default VideoWrapper;
