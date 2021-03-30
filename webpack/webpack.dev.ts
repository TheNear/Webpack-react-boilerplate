import webpack from "webpack";
import { merge } from "webpack-merge";
import { styleModuleDev } from "./rules/devRules";
import defaultConfig from "./webpack.base";

// Файл конфигурации для DEV режима webpack
export default merge(defaultConfig, {
  mode: "development",
  target: "web",
  devtool: "eval-cheap-module-source-map",
  devServer: {
    contentBase: false,
    compress: true,
    port: 3000,
    hot: true,
    open: true,
    overlay: true,
  },
  module: {
    rules: [styleModuleDev],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
});
