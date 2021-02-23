import { RuleSetRule } from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

// STYLE loaders for production mode
export const styleModuleProd: RuleSetRule = {
  test: /\.(s|sa|sc)ss$/i,
  exclude: /node_modules/,
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
