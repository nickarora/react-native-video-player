import React, { useCallback, useState } from "react";
import { View, StyleSheet, } from "react-native";
import { usePlayerContext } from "../hooks/usePlayerContext";
const VideoSeekBar = ({ fullWidth = false, disableSeek = false, customStyles = {}, seekTo, showControls, }) => {
    const { duration, progress, isSeeking, isPlaying, setIsSeeking, setIsPlaying, setProgress, } = usePlayerContext();
    const [seekBarWidth, setSeekBarWidth] = useState(200);
    const [onSeekData, setOnSeekData] = useState({
        seekTouchPageX: 0,
        seekBeginProgress: progress,
        seekBeginIsPlaying: isPlaying,
    });
    const onLayout = useCallback((event) => {
        const padding = calculatePadding((customStyles.seekBar || {}));
        setSeekBarWidth(event.nativeEvent.layout.width - padding);
    }, [setSeekBarWidth, customStyles]);
    const onStartShouldSetResponder = useCallback(() => true, []);
    const onMoveShouldSetResponder = useCallback(() => true, []);
    const onSeekGrant = useCallback((event) => {
        setOnSeekData({
            seekTouchPageX: event.nativeEvent.pageX,
            seekBeginProgress: progress,
            seekBeginIsPlaying: isPlaying,
        });
        setIsSeeking(true);
        setIsPlaying(false);
    }, [setOnSeekData, progress, isPlaying, setIsSeeking, setIsPlaying]);
    const onSeek = useCallback((event) => {
        const diff = event.nativeEvent.pageX - onSeekData.seekTouchPageX;
        const ratio = 100 / seekBarWidth;
        const seekProgress = onSeekData.seekBeginProgress + (ratio * diff) / 100;
        setProgress(seekProgress);
        seekTo(seekProgress * duration);
    }, [onSeekData, setProgress, seekTo, duration]);
    const onSeekRelease = useCallback(() => {
        setIsSeeking(false);
        setIsPlaying(onSeekData.seekBeginIsPlaying);
        showControls();
    }, [setIsSeeking, setIsPlaying, onSeekData]);
    return (<View style={[
        styles.seekBar,
        fullWidth ? styles.seekBarFullWidth : {},
        customStyles.seekBar,
        fullWidth ? customStyles.seekBarFullWidth : {},
    ]} onLayout={onLayout}>
      <View style={[
        { flexGrow: progress },
        styles.seekBarProgress,
        customStyles.seekBarProgress,
    ]}/>
      {!fullWidth && !disableSeek ? (<View style={[
        styles.seekBarKnob,
        customStyles.seekBarKnob,
        isSeeking ? { transform: [{ scale: 1 }] } : {},
        isSeeking ? customStyles.seekBarKnobSeeking : {},
    ]} hitSlop={{ top: 20, bottom: 20, left: 10, right: 20 }} onStartShouldSetResponder={onStartShouldSetResponder} onMoveShouldSetResponder={onMoveShouldSetResponder} onResponderGrant={onSeekGrant} onResponderMove={onSeek} onResponderRelease={onSeekRelease} onResponderTerminate={onSeekRelease}/>) : null}
      <View style={[
        styles.seekBarBackground,
        { flexGrow: 1 - progress },
        customStyles.seekBarBackground,
    ]}/>
    </View>);
};
const calculatePadding = (seekBarStyle) => {
    let padding = 20;
    const { paddingHorizontal, paddingLeft, paddingRight } = seekBarStyle;
    if (paddingHorizontal !== undefined) {
        padding = parseInt(paddingHorizontal, 10) * 2;
    }
    else if (paddingLeft !== undefined || paddingRight !== undefined) {
        padding = parseInt(paddingLeft, 10) || 0;
        padding += parseInt(paddingRight, 10) || 0;
    }
    return padding;
};
export const styles = StyleSheet.create({
    seekBar: {
        alignItems: "center",
        height: 30,
        flexGrow: 1,
        flexDirection: "row",
        paddingHorizontal: 10,
        marginLeft: -10,
        marginRight: -5,
    },
    seekBarFullWidth: {
        marginLeft: 0,
        marginRight: 0,
        paddingHorizontal: 0,
        marginTop: -3,
        height: 3,
    },
    seekBarProgress: {
        height: 3,
        backgroundColor: "#F00",
    },
    seekBarKnob: {
        width: 20,
        height: 20,
        marginHorizontal: -8,
        marginVertical: -10,
        borderRadius: 10,
        backgroundColor: "#F00",
        transform: [{ scale: 0.8 }],
        zIndex: 1,
    },
    seekBarBackground: {
        backgroundColor: "rgba(255, 255, 255, 0.5)",
        height: 3,
    },
});
export default VideoSeekBar;
