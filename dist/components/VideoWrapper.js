import React, { Component } from "react";
import { View } from "react-native";
/* primarily exists to catch refs */
class VideoWrapper extends Component {
    seek(time) {
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
