import { useEffect } from "react";
import Orientation from "react-native-orientation-locker";
import { isLandscape } from "../utils"
import { useCoordinatorContext } from "./useCoordinatorContext";


type UseOrientation = () => void;
export const useOrientation: UseOrientation = () => {
  const { setOrientation } = useCoordinatorContext();

  useEffect(() => {
    Orientation.addOrientationListener(o => {
      if (isLandscape(o)) {
        setOrientation('landscape');
        return;
      }

      setOrientation('portrait');
    });
  }, [setOrientation, Orientation])
};
