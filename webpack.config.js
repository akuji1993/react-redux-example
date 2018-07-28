const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/js/index.js',
  devtool: 'eval-source-map',
  devServer: {
    contentBase: './dist',
    hot: true
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  }, 
  plugins: [
      new HtmlWebpackPlugin({
          title: "react-redux-example",
          template: "./src/index.html"
      }),
      new webpack.HotModuleReplacementPlugin()
  ],
  module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: [
                    'style-loader?sourceMap',  
                    'css-loader?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]',
                    'sass-loader',          
            ]},        
        ]
    }
};