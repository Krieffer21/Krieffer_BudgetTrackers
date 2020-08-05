const WebpackPwaManifest = require("webpack-pwa-manifest");
const path = require("path");

const config = {
    entry: "./public/index.js",
    output: {
        path: __dirname + "/public/dist",
        filename: "bundle.js"
    },
    mode: "production",
    plugins: [
        new WebpackPwaManifest({
            filename: "manifest.json",
            inject: false,
            fingerprints: false,

            name: "Budget Tracker App",
            short_name: "Budget App",
            theme_color: "#fffff",
            background_color: "#fffff",
            start_url: "/",
            display: "standalone",

            icons: [
                {
                    scr: path.resolve(
                        __dirname,
                        "public/icons/icon-512x512.png"
                    ),
                    size: [192, 512]
                }
            ]
        })
    ]
};

module.exports = config; 