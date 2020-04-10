const path = require("path");

module.exports = {
  entry: "./src/scripts/main.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "src/scripts"),
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
};

// {
//   test: /\.(s*)css$/,
//   use: ["style-loader", "css-loader", "sass-loader"],
// },
// {
//   test: /\.(png|svg|jpg|gif)$/,
//   use: ["file-loader"],
// },
