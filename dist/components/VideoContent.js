var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React, { useMemo } from "react";
import { StatusBar, useWindowDimensions } from "react-native";
import { usePlayerContext } from "../hooks/usePlayerContext";
import { useCoordinatorContext } from "../hooks/useCoordinatorContext";
import VideoPlaceholder from "./VideoPlaceholder";
import Video from "./Video";
const VideoContent = React.forwardRef((_a, ref) => {
    var { width } = _a, props = __rest(_a, ["width"]);
    const { orientation } = useCoordinatorContext();
    const { hasEnded, hasStarted, isFullscreen } = usePlayerContext();
    const windowDimensions = useWindowDimensions();
    const { videoWidth, videoHeight } = props;
    const sizeStyles = useMemo(() => createSizeStyles(width, orientation, isFullscreen, windowDimensions, videoWidth, videoHeight), [
        width,
        orientation,
        isFullscreen,
        windowDimensions,
        videoWidth,
        videoHeight,
    ]);
    if (!hasStarted || hasEnded) {
        return <VideoPlaceholder sizeStyles={sizeStyles} {...props}/>;
    }
    return <Video ref={ref} sizeStyles={sizeStyles} {...props}/>;
});
const createSizeStyles = (width, orientation, isFullscreen, windowDimensions, videoWidth = 1280, videoHeight = 720) => {
    if (!isFullscreen) {
        return {
            width,
            height: width * (videoHeight / videoWidth),
        };
    }
    const windowWidth = windowDimensions.width;
    const windowHeight = windowDimensions.height - (StatusBar.currentHeight || 0);
    return orientation === "landscape" &&
        windowDimensions.width > windowDimensions.height
        ? {
            width: windowHeight * (videoWidth / videoHeight),
            height: windowHeight,
        }
        : {
            width: windowWidth,
            height: windowWidth * (videoHeight / videoWidth),
        };
};
export default VideoContent;
