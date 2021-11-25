var path = require("path");
var webpack = require("webpack");

var HtmlWebpackPlugin = require("html-webpack-plugin");
const { VueLoaderPlugin, default: loader } = require('vue-loader');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");


var config = {
  mode:"production",
  entry: [
    './site/index.js'
  ],
  output: {
    path: path.resolve(process.cwd() , './dist'),
    // path: path.join(__dirname, "dist"),
    filename: 'index.js',
    publicPath: '/material/',
    environment: {
      arrowFunction: false
    }
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.vue', '.json'],
    alias: {
      // vue: `vue/dist/${vueBundle}`,
      'vue': path.resolve(__dirname, '../node_modules/vue/dist/vue.esm-browser.prod.js'),
      '@lixi': path.join(__dirname , '../src'),
      '@site': path.join(__dirname , '../site')
    },
  },
  module: {
    rules: [
      {
        test: /\.(jsx?)$/,
        loader: 'babel-loader',
        options: {
          plugins: [
            "@vue/babel-plugin-jsx"
          ]
        }
      },
      {
        test: /\.(tsx?)$/,
        loader: 'babel-loader',
        options:{
          presets: [
            [
              "@babel/preset-typescript",
              {
                allExtensions: true,
                isTSX: true
              }
            ]
          ],
          plugins: [
            "@vue/babel-plugin-jsx"
          ]
        }
      },
      {
        test: /\.vue$/,
        use: 'vue-loader',
      },
      {
        test: /\.md$/,
        use: [
          {
            loader: 'vue-loader',
            options: {
              compilerOptions: {
                preserveWhitespace: false,
              },
            },
          },
          {
            loader: path.resolve(__dirname, '../site/md-loader/index.js'),
          },
        ],
      },
      {
        test: /\.(scss|css)$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              url: false
            }
          },
          'sass-loader'
        ]
      },
      {
        test: /\.(otf|ttf|woff2?|eot|gif|png|jpe?g)(\?\S*)?$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 30,
              name: path.posix.join("static", 'img/[name].[ext]'),
              esModule: false
            }
          },
          // {
          //   loader: 'file-loader',
          //   options: {
          //     limit: 10,
          //     name: path.posix.join("static", 'img/[name].[hash:7].[ext]'),
          //     esModule: false
          //   }
          // },
        ]
      },
      {
        test: /\.svg$/,
        loader: 'svg-sprite-loader',
        options: {
          symbolId: 'icon-[name]'
        }
      }
    ]
  },
  plugins:[
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: './index.html',
      favicon: './public/lixi-logo.png'
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
    new VueLoaderPlugin(),
    new webpack.DefinePlugin({
      __VUE_OPTIONS_API__: JSON.stringify(true),
      __VUE_PROD_DEVTOOLS__: JSON.stringify(false),
    })
  ]
}


webpack(config, function(err) {
  if(err){
    console.log(err)
  } else {
    console.log('build ok')
  }
})