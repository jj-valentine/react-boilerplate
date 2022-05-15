const path = require("path");
const InstallPlugin = require('npm-install-webpack-plugin');

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "bundle.js"
  },
  mode: "development",
  /* source maps help map errors to original react code */
  devtool: "source-map",
  /* configuration for webpack-dev-server */
  devServer: {
    host: process.env.HOST,
    port: process.env.PORT || 3000,
    static: {
      directory: path.join(__dirname, 'public'),
    },    
    /* enable so HTML5 History API-based routing works. 
    good default that will come in handy in more complicated setups. */
    historyApiFallback: true, 
    hot: true,
    client: {
      overlay: {
        errors: true,
        warnings: false
      }
    
    }
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-react", ["@babel/preset-env", { targets: { node: "12" } }]]
          }
        }
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // creates `style` nodes from JS strings
          "style-loader",
          // translates CSS into CommonJS
          "css-loader",
          // compiles SASS to CSS
          "sass-loader"
        ]
      }
    ]
  }
};