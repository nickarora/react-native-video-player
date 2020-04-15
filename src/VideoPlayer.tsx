import React, { FC } from "react";
import Video from "react-native-video";
import { VideoPlayerProps } from "./types";

const VideoPlayer: FC<VideoPlayerProps> = ({ video }) => {
  return <Video source={video} />;
};

export default VideoPlayer;
