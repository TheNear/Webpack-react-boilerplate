import { RuleSetRule } from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

export const tsModule: RuleSetRule = {
  test: /\.(ts|js)x?$/i,
  exclude: /node_modules/,
  loader: "babel-loader",
};

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
        sourceMap: true,
        modules: true,
      },
    },
    {
      loader: "sass-loader",
      options: {
        sourceMap: true,
      },
    },
  ],
};

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
        modules: true,
      },
    },
    {
      loader: "sass-loader",
    },
  ],
};

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

export const imageModule: RuleSetRule = {
  test: /\.(jpg|gif|jpeg|png|tiff|bmp)$/i,
  type: "assets/resource",
  generator: {
    filename: "images/[hash][ext][query]",
  },
};

export const moduleRules: RuleSetRule[] = [tsModule, svgModule, imageModule];
