import { RuleSetRule } from "webpack";

// TSX/TS/TSX/JSX React files and javascript files
export const tsModule: RuleSetRule = {
  test: /\.(ts|js)x?$/i,
  exclude: /node_modules/,
  use: {
    loader: "babel-loader",
    options: {
      presets: ["@babel/preset-env", "@babel/preset-react", "@babel/preset-typescript"],
      plugins: [
        [
          "@babel/plugin-transform-runtime",
          {
            regenerator: true,
          },
        ],
      ],
    },
  },
};

// SVG Loader for import SVG as ReactComponents in JSX\TSX
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

// IMAGES Loader for import images
export const imageModule: RuleSetRule = {
  test: /\.(jpg|gif|jpeg|png|tiff|bmp)$/i,
  type: "assets/resource",
  generator: {
    filename: "images/[hash][ext][query]",
  },
};

export const commonRules: RuleSetRule[] = [tsModule, svgModule, imageModule];
