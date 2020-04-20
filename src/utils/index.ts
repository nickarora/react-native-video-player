import { OrientationType } from "react-native-orientation-locker";

export const noop: (val: unknown) => void = () => undefined;

export const isLandscape = (orientation: OrientationType) =>
  orientation.match(/LANDSCAPE/);
