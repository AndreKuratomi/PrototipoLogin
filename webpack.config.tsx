import webpack from 'webpack';

module.exports = {
  resolve: {
    fallback: {},
  },
  plugins: [
    new webpack.ProvidePlugin({
      Buffer: ['buffer', 'Buffer'],
    }),
  ],
};
