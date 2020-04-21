import { useEffect, useCallback } from "react";
import Orientation from "react-native-orientation-locker";
import { isLandscape } from "../utils";
import { useCoordinatorContext } from "./useCoordinatorContext";
export const useOrientation = () => {
    const { setOrientation } = useCoordinatorContext();
    const callback = useCallback((o) => {
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
