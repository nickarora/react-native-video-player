import { useEffect, useCallback } from "react";
import Orientation, { OrientationType} from "react-native-orientation-locker";
import { isLandscape } from "../utils";
import { useCoordinatorContext } from "./useCoordinatorContext";

type UseOrientation = () => void;
export const useOrientation: UseOrientation = () => {
  const { setOrientation } = useCoordinatorContext();

  const callback = useCallback((o: OrientationType) => {
    if (isLandscape(o)) {
      setOrientation("landscape");
      return;
    }

    setOrientation("portrait");
  }, [setOrientation, isLandscape]);

  useEffect(() => {
    Orientation.addOrientationListener(callback);
    return () => Orientation.removeOrientationListener(callback);
  }, [Orientation, callback]);
};
