import React from "react";
import { ImageBackground, StyleSheet, } from "react-native";
import VideoStartButton from "./VideoStartButton";
const ThumbnailStartButton = ({ source, style, customStyles = {}, sizeStyles, onStart, onHideControls, disableControlsAutoHide, controlsTimeout, }) => (<ImageBackground style={[styles.thumbnail, sizeStyles, style, customStyles.thumbnail]} source={source}>
    <VideoStartButton customStyles={customStyles} onStart={onStart} onHideControls={onHideControls} disableControlsAutoHide={disableControlsAutoHide} controlsTimeout={controlsTimeout}/>
  </ImageBackground>);
const styles = StyleSheet.create({
    thumbnail: {
        backgroundColor: "black",
        justifyContent: "center",
        alignItems: "center",
    },
});
export default ThumbnailStartButton;
