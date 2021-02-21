import HtmlWebpackPlugin from "html-webpack-plugin";
import { WebpackPluginInstance } from "webpack";
import { FILES } from "./constants";
import { PATHS } from "./path";

const HtmlPlugin: WebpackPluginInstance = new HtmlWebpackPlugin({
  template: PATHS.TEMPLATE,
  filename: FILES.ENTRYHTML,
  inject: "body",
});

export const webpackPlugins: WebpackPluginInstance[] = [HtmlPlugin];

