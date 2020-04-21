import { useCallback } from "react";
import { usePlayerContext } from "./usePlayerContext";
export const useOnLoadCallback = ({ onLoad }) => {
    const { setDuration } = usePlayerContext();
    return useCallback((data) => {
        onLoad && onLoad(data);
        setDuration(data.duration);
    }, [onLoad, setDuration]);
};
