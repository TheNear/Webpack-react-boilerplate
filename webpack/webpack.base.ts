import TsconfigPathsPlugin from "tsconfig-paths-webpack-plugin";
import { Configuration } from "webpack";
import { PATHS } from "./path";
import { webpackPlugins } from "./plugins";
import { commonRules } from "./rules/commonRules";

const config: Configuration = {
  entry: PATHS.ENTRY,
  output: {
    path: PATHS.OUTPUT,
    filename: "js/[name].app.js",
    assetModuleFilename: "assets/[hash][ext][query]",
    publicPath: "/",
  },
  stats: "errors-warnings",
  module: {
    rules: commonRules,
  },
  plugins: webpackPlugins,
  resolve: {
    extensions: [".ts", ".tsx", ".js", "jsx"],
    // Плагин для алиасов пути, что-бы не было ../../../../../../component
    plugins: [new TsconfigPathsPlugin() as unknown as "..."],
  },
};

export default config;
