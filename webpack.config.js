const WebpackPwaManifest = require("webpack-pwa-manifest");
const path = require("path");

const config = {
    entry: "./public/assets/js/index.js",
    output: {
        path: __dirname + "/public/dist",
        filename: "bundle.js"
    },
    mode: "development",
    plugins: [
        new WebpackPwaManifest({
            name: "Budget Tracker App",
            short_name: "Budget App",
            description: "budget tracking app",
            background_color: "#ffffff",
            theme_color: "#ffffff",
            "theme-color": "#ffffff",
            start_url: "/",
            icons: [
                {
                    scr: path.resolve("public/assets/icons/icon-192x192.png"),
                    sizes: [192, 512],
                    destination: path.join("assets", "icons")
                }
            ]
        })
    ],
      // configure webpack to use babel-loader to bundle our separate modules and transpile the code
  module: {
    rules: [
      {
        test: /\.js$/, // files must end in ".js" to be transpiled
        exclude: /node_modules/, // don't transpile code from "node_modules"
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"]
          }
        }
      }
    ]
  }

};

module.exports = config; 