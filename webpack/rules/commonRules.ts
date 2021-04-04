import { RuleSetRule } from "webpack";
// Файл базовых лоадеров, которые используются как в DEV, так и в PROD режиме.

// TSX/TS/TSX/JSX Loader базовый, который обрабатывает все основные файлы
export const tsModule: RuleSetRule = {
  test: /\.(ts|js)x?$/i,
  exclude: /node_modules/,
  use: {
    loader: "babel-loader",
  },
};

// SVG Loader который позволяет импортировать SVG как реакт компоненты
export const svgModule: RuleSetRule = {
  test: /\.svg$/,
  exclude: /node_modules/,
  use: [
    "babel-loader",
    {
      loader: "react-svg-loader",
      options: {
        svgo: {
          plugins: [{ removeTitle: false }],
          floatPrecision: 2,
        },
      },
    },
  ],
};

// IMAGES Loader для импорта изображений
export const imageModule: RuleSetRule = {
  test: /\.(jpg|gif|jpeg|png|tiff|bmp)$/i,
  type: "asset/resource",
  generator: {
    filename: "images/[hash][ext][query]",
  },
};

export const commonRules: RuleSetRule[] = [tsModule, svgModule, imageModule];
