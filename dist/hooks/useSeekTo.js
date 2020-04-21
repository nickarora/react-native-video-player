import { useCallback } from "react";
export const useSeekTo = ({ videoRef }) => useCallback((time) => {
    var _a;
    (_a = videoRef.current) === null || _a === void 0 ? void 0 : _a.seek(time);
}, [videoRef]);
