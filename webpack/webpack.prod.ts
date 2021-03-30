import { merge } from "webpack-merge";
import { CleanWebpackPlugin } from "clean-webpack-plugin";
import defaultConfig from "./webpack.base";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { styleModuleProd } from "./rules/prodRules";

// Файл конфигурации для PROD режима webpack
export default merge(defaultConfig, {
  mode: "production",
  target: "browserslist",
  optimization: {
    minimize: true,
    splitChunks: {
      chunks: "all",
    }
  },
  module: {
    rules: [styleModuleProd],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin(),
  ]
})
