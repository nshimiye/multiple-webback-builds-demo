module.exports = {
  mode: 'development',
  entry: './main.js',
  output: {
    filename: 'app.[name].js',
    chunkFilename: 'app-chunk.[name].js',
    // jsonpFunction: 'webpackJsonpCUSTOM111'
  }
};
