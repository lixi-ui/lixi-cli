var path = require("path");
var webpack = require("webpack");

var HtmlWebpackPlugin = require("html-webpack-plugin");
var CopyWebpackPlugin= require('copy-webpack-plugin');

var connfig = {
  mode:"production",
  entry: [
    './src/index.js'
  ],
  output: {
    path: path.resolve(process.cwd() , './dist'),
    filename: 'index.js',
    publicPath: '/qms/'
  },
  module: {
    rules:[
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        include: [
          path.resolve(process.cwd() , './src')
        ],
        options: {
          presets: [
            [
            "@babel/preset-env",
            ],
            "@babel/preset-react"
          ],
          plugins:['@babel/plugin-transform-runtime']   
        },
      },
      {
        test: /\.(scss|css)$/,
        use: ["style-loader",
        "css-loader",
        'sass-loader']
      },
      {
        test: /.md$/,
        loader: 'raw-loader'
      }
    ]
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns:[
        {
          from: path.resolve(process.cwd() , './public'),
          to:   path.resolve(process.cwd() , './dist'),
          globOptions: {
            ignore: ['**/public/index.html']
          }
        }
      ]
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: './index.html'
    }),
  ]
}

webpack(connfig,function(err){
  console.log(err);
})
