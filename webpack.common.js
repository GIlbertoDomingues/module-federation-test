const path = require("path");
const DotenvPlugin = require("dotenv-webpack");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;
const ESLintPlugin = require("eslint-webpack-plugin");
const DOTENV = require("dotenv");
const ESLintConfig = require("./.eslintrc.js");
const { dependencies } = require("./package.json");

module.exports = (env) => {
  const NODE_ENV = env.NODE_ENV || "local";
  const isDevelopment = NODE_ENV !== "production";
  const dotenvPath = `./.env${isDevelopment ? "" : `.${env.NODE_ENV}`}`;
  const { parsed: currentDotenv } = DOTENV.config({ path: dotenvPath });

  process.stdout.write(
    `${"\n\n***-------------------------------------------***\n"}
    BUILD start for environment: ${NODE_ENV} 
    ${"\n***-------------------------------------------***\n\n\n"}`
  );

  return {
    entry: "./src",
    module: {
      rules: [
        {
          test: /\.[tj]s(x?)$/,
          exclude: /node_modules/,
          use: [
            {
              loader: "babel-loader",
              options: {
                presets: [
                  "@babel/preset-env",
                  [
                    "@babel/preset-react",
                    {
                      runtime: "automatic",
                    },
                  ],
                  "@babel/preset-typescript",
                ],
                plugins: [
                  "@babel/plugin-proposal-class-properties",
                  "@babel/plugin-transform-runtime",
                  isDevelopment && require.resolve("react-refresh/babel"),
                ].filter(Boolean),
              },
            },
          ],
        },
        {
          test: /\.css$/,
          use: ["style-loader", "css-loader"],
        },
        {
          test: /\.(png|woff|woff2|eot|ttf)$/,
          use: "url-loader",
        },
        {
          test: /\.svg$/i,
          type: "asset",
          resourceQuery: /url/,
        },
        {
          test: /\.svg$/i,
          issuer: /\.[jt]sx?$/,
          resourceQuery: { not: [/url/] },
          use: ["@svgr/webpack"],
        },
      ],
    },
    resolve: {
      extensions: [".ts", ".tsx", ".js"],
      alias: {
        "@utils": path.resolve(__dirname, "./src/utils"),
      },
    },
    plugins: [
      new ModuleFederationPlugin({
        name: "mf_portal",
        filename: "remoteEntry.js",
        exposes: {
          "./App": "./src/App.tsx",
        },
        remotes: {
          mf: `mf_portal@${currentDotenv.MF_URL}/remoteEntry.js`,
        },
        shared: {
          ...dependencies,
          "react-dom": {
            requiredVersion: dependencies["react-dom"],
            singleton: true,
            eager: true,
          },
          react: {
            requiredVersion: dependencies.react,
            singleton: true,
            eager: true,
          },
        },
      }),
      new ESLintPlugin({
        extensions: ["ts", "js", "tsx"],
        formatter: "pretty",
        overrideConfig: { ...ESLintConfig },
        quiet: true,
      }),
      new DotenvPlugin({
        path: `./.env${isDevelopment ? "" : `.${env.NODE_ENV}`}`,
        systemvars: true,
        safe: !(env && env.NODE_ENV),
      }),
      new HTMLWebpackPlugin({
        template: "./public/template.html",
        publicPath: "/",
      }),
      isDevelopment &&
        new ReactRefreshWebpackPlugin({
          exclude: [/node_modules/, /bootstrap\.js$/],
        }),
    ].filter(Boolean),
  };
};
