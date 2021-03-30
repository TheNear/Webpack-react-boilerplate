import { RuleSetRule } from "webpack";
// Файл лоадеров, которые работают в DEV режиме.

// STYLE Loaders для стилей
export const styleModuleDev: RuleSetRule = {
  test: /\.(c|sa|sc)ss$/i,
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
