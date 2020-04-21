import React, { Component } from "react";
import { CoordinatorContextProvider } from "./context/CoordinatorContext";
import PlayerCoordinator from "./components/PlayerCoordinator";
class RNVideoPlayer extends Component {
    constructor(props) {
        super(props);
        this.videoPlayerRef = React.createRef();
    }
    seek(time) {
        var _a;
        (_a = this.videoPlayerRef.current) === null || _a === void 0 ? void 0 : _a.seek(time);
    }
    stop() {
        var _a;
        (_a = this.videoPlayerRef.current) === null || _a === void 0 ? void 0 : _a.stop();
    }
    pause() {
        var _a;
        (_a = this.videoPlayerRef.current) === null || _a === void 0 ? void 0 : _a.pause();
    }
    resume() {
        var _a;
        (_a = this.videoPlayerRef.current) === null || _a === void 0 ? void 0 : _a.resume();
    }
    render() {
        return (<CoordinatorContextProvider>
        <PlayerCoordinator ref={this.videoPlayerRef} {...this.props}/>
      </CoordinatorContextProvider>);
    }
}
export default RNVideoPlayer;
