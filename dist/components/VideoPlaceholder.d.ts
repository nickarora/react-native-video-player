import { FC } from "react";
import { VideoPlayerProps, SizeStyles } from "../types";
interface VideoPlaceholderProps extends VideoPlayerProps {
    sizeStyles: SizeStyles;
}
declare const VideoPlaceholder: FC<VideoPlaceholderProps>;
export default VideoPlaceholder;
