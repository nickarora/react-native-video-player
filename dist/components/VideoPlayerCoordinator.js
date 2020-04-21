import React from "react";
import { Modal, View, StyleSheet } from "react-native";
import VideoPlayer from "./VideoPlayer";
import { useCoordinatorContext } from "../hooks/useCoordinatorContext";
const VideoPlayerCoordinator = React.forwardRef((props, ref) => {
    const { fullscreen } = useCoordinatorContext();
    return !fullscreen ? (<VideoPlayer ref={ref} {...props}/>) : (<Modal>
        <View style={styles.modalContent}>
          <VideoPlayer ref={ref} {...props} isFullscreen/>
        </View>
      </Modal>);
});
const styles = StyleSheet.create({
    modalContent: {
        flex: 1,
        backgroundColor: "black",
        justifyContent: "center",
    },
});
export default VideoPlayerCoordinator;
