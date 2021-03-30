import { RuleSetRule } from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
// Файл лоадеров, которые работают в PROD режиме.

// STYLE loaders для стилей
export const styleModuleProd: RuleSetRule = {
  test: /\.(c|sa|sc)ss$/i,
  use: [
    {
      loader: MiniCssExtractPlugin.loader,
    },
    {
      loader: "css-loader",
      options: {
        importLoaders: 2,
        modules: {
          localIdentName: "[hash:base64]",
          exportGlobals: true,
          compileType: "module",
          auto: true,
          mode: "local",
          exportOnlyLocals: false,
        },
      },
    },
    {
      loader: "postcss-loader",
      options: {
        postcssOptions: {
          plugins: [
            [
              "postcss-preset-env",
            ]
          ]
        }
      }
    },
    {
      loader: "sass-loader",
    },
  ],
};
