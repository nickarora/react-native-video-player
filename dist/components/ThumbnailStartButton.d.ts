import { FC } from "react";
import { ViewProps, ImageSourcePropType } from "react-native";
import { VideoPlayerProps } from "../types";
interface ThumbnailStartButtonProps extends VideoPlayerProps {
    sizeStyles: ViewProps["style"];
    source: ImageSourcePropType;
}
declare const ThumbnailStartButton: FC<ThumbnailStartButtonProps>;
export default ThumbnailStartButton;
