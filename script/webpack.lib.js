var path = require("path");
var webpack = require("webpack");

var config = {
  mode: 'production',
  entry:  path.resolve(process.cwd(), './src/component-ui/index.jsx'),
  output: {
    path: path.resolve(process.cwd(), './lib'),
    publicPath: '',
    filename: 'lixi-ui.common.js',
    chunkFilename: '[id].js',
    libraryExport: 'default',
    library: 'LIXI',
    libraryTarget: 'umd'
  },
  externals: {
    react: {
      commonjs: 'react',
      commonjs2: 'react',
      amd: 'react',
    }
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
    modules: ['node_modules']
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        include: [
          path.resolve(process.cwd(), './src/component-ui')
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
      },
      {
        test: /\.(svg|otf|ttf|woff2?|eot|gif|png|jpe?g)(\?\S*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10,
          name: path.posix.join("static", 'img/[name].[hash:7].[ext]'),
          esModule: false
        }
      }
    ]
  }
};

webpack(config,function(err){
  console.log('err', err);
})