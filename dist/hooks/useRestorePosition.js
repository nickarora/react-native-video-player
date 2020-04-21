import { useState, useEffect } from "react";
export const useRestorePosition = ({ videoRef, currentTime }) => {
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
