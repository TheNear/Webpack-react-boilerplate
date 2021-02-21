import webpack from "webpack";
import { merge } from "webpack-merge";
import { styleModuleDev, styleModuleProd } from "./modules";
import defaultConfig from "./webpack.base";

export default merge(defaultConfig, {
  mode: "development",
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
