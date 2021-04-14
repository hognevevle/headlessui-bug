module.exports = {
  configureWebpack: {
    resolve: {
      // webpack 5 electron workaround
      fallback: {
        path: require.resolve("path-browserify"),
        fs: false,
      },
    },
  },
}
