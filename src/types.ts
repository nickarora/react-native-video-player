import {
  ImageProps,
  ViewProps,
  TouchableOpacityProperties,
} from "react-native";
import { IconProps } from "react-native-vector-icons/Icon";
import { VideoProperties } from "react-native-video";

export interface SizeStyles {
  width: number;
  height: number;
}

interface VideoPlayerCustomStyles {
  wrapper?: ViewProps["style"];
  video?: VideoProperties["style"];
  videoWrapper?: ViewProps["style"];
  controls?: ViewProps["style"];
  playControl?: TouchableOpacityProperties["style"];
  controlButton?: TouchableOpacityProperties["style"];
  controlIcon?: IconProps["style"];
  playIcon?: IconProps["style"];
  seekBar?: ViewProps["style"];
  seekBarFullWidth?: ViewProps["style"];
  seekBarProgress?: ViewProps["style"];
  seekBarKnob?: ViewProps["style"];
  seekBarKnobSeeking?: ViewProps["style"];
  seekBarBackground?: ViewProps["style"];
  thumbnail?: ImageProps["style"];
  playButton?: TouchableOpacityProperties["style"];
  playArrow?: IconProps["style"];
}

export interface VideoPlayerProps {
  video: VideoProperties["source"];
  thumbnail?: ImageProps["source"];
  endThumbnail?: ImageProps["source"];
  videoWidth?: number;
  videoHeight?: number;
  duration?: number;
  autoplay?: boolean;
  paused?: boolean;
  defaultMuted?: boolean;
  muted?: boolean;
  style: ViewProps["style"];
  controlsTimeout?: number;
  disableControlsAutoHide?: boolean;
  disableFullscreen?: boolean;
  loop?: boolean;
  resizeMode?: VideoProperties["resizeMode"];
  hideControlsOnStart?: boolean;
  endWithThumbnail?: boolean;
  disableSeek?: boolean;
  pauseOnPress?: boolean;
  fullScreenOnLongPress?: boolean;
  customStyles?: VideoPlayerCustomStyles;
  onEnd?: VideoProperties["onEnd"];
  onProgress?: VideoProperties["onProgress"];
  onLoad?: VideoProperties["onLoad"];
  onFullscreenPlayerWillPresent: VideoProperties["onFullscreenPlayerWillPresent"];
  onFullscreenPlayerWillDismiss: VideoProperties["onFullscreenPlayerWillDismiss"];
  onStart?(): void;
  onPlayPress?(): void;
  onHideControls?(): void;
  onShowControls?(): void;
  onMutePress?(): void;
}
