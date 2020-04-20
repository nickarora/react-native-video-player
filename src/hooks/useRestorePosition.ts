import { useState, useEffect, RefObject } from "react";
import Video from "react-native-video";

type UseRestorePosition = (config: {
  videoRef: RefObject<Video | null>;
  currentTime: number;
}) => void;

export const useRestorePosition: UseRestorePosition = ({ videoRef, currentTime }) => {
  const [hasRestored, setHasRestored] = useState(false);

  useEffect(() => {
    if (!videoRef.current || hasRestored) {
      return;
    }

    setHasRestored(true);

    if (!currentTime) {
      return;
    }

    videoRef.current.seek(currentTime);
  }, [videoRef, currentTime, hasRestored, setHasRestored]);
};
