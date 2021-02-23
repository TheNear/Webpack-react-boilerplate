import { RuleSetRule } from "webpack";

// STYLE Loaders for development mode
export const styleModuleDev: RuleSetRule = {
  test: /\.(c|sa|sc)ss$/i,
  exclude: /node_modules/,
  use: [
    {
      loader: "style-loader",
    },
    {
      loader: "css-loader",
      options: {
        importLoaders: 2,
        sourceMap: true,
        modules: {
          localIdentName: "[path][name]__[local]",
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
        sourceMap: true,
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
      options: {
        sourceMap: true,
      },
    },
  ],
};
