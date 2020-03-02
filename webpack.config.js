const path = require('path');
const { webpackConfig, webpackMerge, htmlOverlay } = require('just-scripts');

module.exports = webpackMerge(
  webpackConfig,
  htmlOverlay({
    template: 'public/index.html'
  }),
  {
    // Here you can custom webpack configurations
    devServer: {
      contentBase: path.join(__dirname, 'public'),
      historyApiFallback: true
    },
    output: {
      publicPath: '/'
    }
  }
);
