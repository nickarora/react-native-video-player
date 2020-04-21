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
import React, { useState, useCallback, useRef } from "react";
import { View } from "react-native";
import VideoContent from "./VideoContent";
const defaultWidth = 200;
const VideoLayout = React.forwardRef((_a, ref) => {
    var { customStyles = {} } = _a, props = __rest(_a, ["customStyles"]);
    const wrapperRef = useRef(null);
    const [width, setWidth] = useState(defaultWidth);
    const onLayout = useCallback((event) => {
        setWidth(event.nativeEvent.layout.width);
    }, [setWidth]);
    return (<View ref={wrapperRef} onLayout={onLayout} style={customStyles.wrapper}>
      <VideoContent ref={ref} width={width} customStyles={customStyles} {...props}/>
    </View>);
});
export default VideoLayout;
