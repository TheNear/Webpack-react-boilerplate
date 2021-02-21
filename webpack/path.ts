import path from "path";
import { FILES, FOLDERS } from "./constants";

export const PATHS = {
  ENTRY: path.join(__dirname, "..", FOLDERS.SRC, FILES.ENTRYJS),
  OUTPUT: path.join(__dirname, "..", FOLDERS.DIST),
  TEMPLATE: path.join(__dirname, "..", FOLDERS.SRC, FILES.ENTRYHTML),
};
