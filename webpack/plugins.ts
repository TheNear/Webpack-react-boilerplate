import HtmlWebpackPlugin from "html-webpack-plugin";
import DotendWebpackPlugin from "dotenv-webpack";
import { WebpackPluginInstance } from "webpack";
import { FILES } from "./constants";
import { PATHS } from "./path";

const HtmlPlugin: WebpackPluginInstance = new HtmlWebpackPlugin({
  template: PATHS.TEMPLATE,
  filename: FILES.ENTRYHTML,
  inject: "body",
});

const dotenvPlugin = new DotendWebpackPlugin();

export const webpackPlugins: WebpackPluginInstance[] = [HtmlPlugin, dotenvPlugin];

