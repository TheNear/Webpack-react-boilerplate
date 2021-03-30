import path from "path";
import { FILES, FOLDERS } from "./constants";

// Пути для конфигурации webpack
export const PATHS = {
  ENTRY: path.join(__dirname, "..", FOLDERS.SRC, FILES.ENTRYJS),
  OUTPUT: path.join(__dirname, "..", FOLDERS.DIST),
  TEMPLATE: path.join(__dirname, "..", FOLDERS.SRC, FILES.ENTRYHTML),
};
