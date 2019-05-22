const path = require('path');

module.exports = {
  mode: 'production',
  entry: {
    probe: './src/LoginProbe.jsx',
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].min.js',
  },
  externals: {
    react: 'react',
  },
  module: {
    rules: [
      {
        test: /.(js|jsx)$/,
        exclude: [/node_modules/],
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
    ],
  },
};
