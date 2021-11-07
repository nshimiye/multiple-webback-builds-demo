module.exports = {
  mode: 'development',
  entry: './widget.js',
  output: {
    filename: 'widget.[name].js',
    chunkFilename: 'widget-chunk.[name].js',
    // jsonpFunction: 'webpackJsonpCUSTOM222'
  }
};
