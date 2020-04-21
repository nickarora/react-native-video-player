import React from "react";
import { Modal, View, StyleSheet } from "react-native";
import VideoPlayer from "./VideoPlayer";
import { useCoordinatorContext } from "../hooks/useCoordinatorContext";
import { useOrientation } from "../hooks/useOrientation";
import { useFullscreenHooks } from "../hooks/useFullscreenHooks";
const PlayerCoordinator = React.forwardRef((props, ref) => {
    useOrientation();
    const { fullscreen } = useCoordinatorContext();
    useFullscreenHooks({
        onFullscreenPlayerWillDismiss: props.onFullscreenPlayerWillDismiss,
        onFullscreenPlayerWillPresent: props.onFullscreenPlayerWillPresent,
    });
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
        alignItems: "center",
    },
});
export default PlayerCoordinator;
