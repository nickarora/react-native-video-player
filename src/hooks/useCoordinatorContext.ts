import { useContext } from "react";
import CoordinatorContext, {
  CoordinatorContextTypes,
} from "../context/CoordinatorContext";

export const useCoordinatorContext = (): CoordinatorContextTypes =>
  useContext<CoordinatorContextTypes>(CoordinatorContext);
