var path = require("path");

module.exports = {
    entry: "./src/index.tsx",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "build/js"),
        publicPath: "/js/"
    },

    // Enable sourcemaps for debugging webpack's output.
    devtool: "inline-source-map",

    devServer: {
      open: false,
      static: {
        directory: path.join(__dirname, 'build'),
        serveIndex: true,
      },
    },

    watch: false,

    node: {
        __dirname: true
    },
    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".ts", ".tsx", ".js", ".json"]
    },

    module: {
        rules: [
          // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
          {
            test: /\.tsx?$/,
            loader: "ts-loader",
            exclude: /node_modules/
          },

          {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader']
          },

          // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
          { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },
        ]
    }
};
