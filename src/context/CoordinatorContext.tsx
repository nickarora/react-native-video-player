import React, { FC, useState } from "react";
import Orientation from "react-native-orientation-locker";
import { noop, isLandscape } from "../utils";
import { PlayerContextState } from "./VideoPlayerContext";

export type OrientationState = "landscape" | "portrait";

export interface CoordinatorContextTypes {
  fullscreen: boolean;
  orientation: "landscape" | "portrait";
  playerState?: PlayerContextState;
  setFullscreen(val: boolean): void;
  setPlayerState(state: PlayerContextState): void;
  setOrientation(state: OrientationState): void;
}

const CoordinatorContext = React.createContext<CoordinatorContextTypes>({
  fullscreen: false,
  orientation: "portrait",
  setFullscreen: noop,
  setPlayerState: noop,
  setOrientation: noop,
});

export const CoordinatorContextProvider: FC = ({ children }) => {
  const [fullscreen, setFullscreen] = useState(false);
  const [playerState, setPlayerState] = useState<PlayerContextState>();
  const [orientation, setOrientation] = useState<OrientationState>(
    isLandscape(Orientation.getInitialOrientation()) ? "landscape" : "portrait"
  );

  return (
    <CoordinatorContext.Provider
      value={{
        fullscreen,
        orientation,
        playerState,
        setFullscreen,
        setPlayerState,
        setOrientation,
      }}
    >
      {children}
    </CoordinatorContext.Provider>
  );
};

export default CoordinatorContext;
