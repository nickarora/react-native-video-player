import { useContext } from "react";
import VideoPlayerContext from "../context/VideoPlayerContext";
export const usePlayerContext = () => useContext(VideoPlayerContext);
