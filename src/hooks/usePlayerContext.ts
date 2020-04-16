import { useContext } from "react";
import VideoPlayerContext, {
  PlayerContextTypes,
} from "../context/VideoPlayerContext";

export const usePlayerContext = () =>
  useContext<PlayerContextTypes>(VideoPlayerContext);
