const { resolve } = require("path");

module.exports = {

    entry: {
        app: "./src/js/main.js"
    },

    output: {
        path: resolve(__dirname + "/src/dist/js/"),
        filename: "[name].js"
    },

    devtool: "sourcemap",

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["es2015"]
                    }
                }
            }
        ]
    }

};