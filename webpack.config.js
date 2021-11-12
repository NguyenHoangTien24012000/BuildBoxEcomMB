const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = {
    entry: './src/test/jsRenderBoxData/renderBox3.js',
    output :{
        filename : 'index.js',
        path : path.resolve(__dirname, 'build3')
    },
    mode : 'development',
    watch :true,
    plugins : [
        new CleanWebpackPlugin,
        new HtmlWebpackPlugin({
            title : 'EcomMB',
            filename : 'index.html'
        })
    ],
    devtool : 'inline-source-map',
    module: {
        rules: [
          {
            test: /\.js$/,
            exclude: /node_modules/,
            use: [{
              loader: 'uglify-template-string-loader'
            }]
          }
        ]
      }
}