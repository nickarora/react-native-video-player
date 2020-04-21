import React, { useState } from "react";
import Orientation from "react-native-orientation-locker";
import { noop, isLandscape } from "../utils";
const CoordinatorContext = React.createContext({
    fullscreen: false,
    orientation: "portrait",
    setFullscreen: noop,
    setPlayerState: noop,
    setOrientation: noop,
});
export const CoordinatorContextProvider = ({ children }) => {
    const [fullscreen, setFullscreen] = useState(false);
    const [playerState, setPlayerState] = useState();
    const [orientation, setOrientation] = useState(isLandscape(Orientation.getInitialOrientation()) ? "landscape" : "portrait");
    return (<CoordinatorContext.Provider value={{
        fullscreen,
        orientation,
        playerState,
        setFullscreen,
        setPlayerState,
        setOrientation,
    }}>
      {children}
    </CoordinatorContext.Provider>);
};
export default CoordinatorContext;
