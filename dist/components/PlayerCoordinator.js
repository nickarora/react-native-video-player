import React, { useCallback } from "react";
import { TouchableOpacity, Modal, View, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
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
    const onRequestClose = useCallback(() => {
        var _a, _b;
        (_b = (_a = ref) === null || _a === void 0 ? void 0 : _a.current) === null || _b === void 0 ? void 0 : _b.toggleFullscreen();
    }, [ref]);
    return !fullscreen ? (<VideoPlayer ref={ref} {...props}/>) : (<Modal onRequestClose={onRequestClose}>
        <View style={styles.modalContent}>
          <VideoPlayer ref={ref} {...props} isFullscreen/>
        </View>
        <TouchableOpacity onPress={onRequestClose} style={styles.closeButton}>
          <Icon style={styles.closeIcon} name="close" size={32}/>
        </TouchableOpacity>
      </Modal>);
});
const styles = StyleSheet.create({
    closeButton: {
        position: "absolute",
        top: 16,
        left: 16,
        backgroundColor: "rgba(0, 0, 0, 0.6)",
    },
    closeIcon: {
        color: "white",
        padding: 8,
    },
    modalContent: {
        flex: 1,
        backgroundColor: "black",
        justifyContent: "center",
        alignItems: "center",
    },
});
export default PlayerCoordinator;
