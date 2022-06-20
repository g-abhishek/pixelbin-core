const path = require("path");

module.exports = {
    entry: {
        pixelbin: path.resolve(__dirname, "src", "pixelbin.js")
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "pixelbin.js",
        library: "Pixelbin",
        libraryTarget: 'umd',
        libraryExport: "default",
    },
    module: {
        rules: [
            {
                test: /\.(js)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                },
            },
        ],
    },
    resolve: {
        extensions: ["*", ".js"],
    },
};
