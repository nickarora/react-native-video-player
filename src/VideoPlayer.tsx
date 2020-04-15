import React, { FC } from "react";
import Video, { VideoProperties } from "react-native-video";

interface VideoPlayerProps extends VideoProperties {}

const VideoPlayer: FC<VideoPlayerProps> = (props) => {
  return <Video {...props} />;
};

export default VideoPlayer;
