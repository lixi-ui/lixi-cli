var path = require("path");
var webpack = require("webpack");

var WebpackDevServer = require("webpack-dev-server");
var HtmlWebpackPlugin = require("html-webpack-plugin");

var connfig = {
  mode:"development",
  entry: [
    './site/index.js'
  ],
  output: {
    path: path.resolve(process.cwd() , './dist'),
    filename: 'index.js',
    publicPath: '/qms/',
    environment: {
      arrowFunction: false
    }
  },
  module: {
    rules:[
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        include: [
          path.resolve(process.cwd() , './src'),
          path.resolve(process.cwd() , './site'),
          path.resolve(process.cwd() , './material/project/lixi-material-react/src'),
          path.resolve(process.cwd() , './material/project/lixi-material-react/site')
        ],
        options: {
          presets: [
            [
            "@babel/preset-env",
              {
                // useBuiltIns: 'usage',
                // "useBuiltIns": "entry",
                // options: {
                //   // useBuiltIns: 'entry'
                // }
                // "plugins" : ["@babel/plugin-transform-runtime"],
              }
            ],
            "@babel/preset-react"
          ],
          plugins:['@babel/plugin-transform-runtime']   
        },
        // use:[[
        //   'babel-loader',{
        //     presets: [
        //       [
        //       "@babel/preset-env",
        //       // {
        //       //   options: {
        //       //     useBuiltIns: 'entry'
        //       //   }
        //       // }
        //       ],
        //       "@babel/preset-react"
        //     ],
        //     plugins:['@babel/plugin-transform-runtime']         
        // }],
        // [
        //   'babel-loader',{
        //     presets: "@babel/preset-react"
        //   }
        // ]
      },
      {
        test: /\.(tsx?)$/,
        include: process.cwd(),
        loader: 'babel-loader',
        options: {
          presets:[
            [
              '@babel/preset-typescript',
              // {
              //   allExtensions: true
              // }
            ]
          ]
        }
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
      },
    ]
  },
  plugins:[
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: './index.html',
      favicon: './public/lixi-logo.png'
    }),
  ]
}

var server = new WebpackDevServer(webpack(connfig),{
  publicPath: '/qms/',
  contentBase: path.resolve(process.cwd() , './public'),
  proxy: {
    '/qms': {
      target: "http://localhost:8012",
      pathRewrite: {'^/qms' : ''}
    }
  }
});

server.listen("8012",'0.0.0.0',(err)=>{
  if(!err){
    console.log('http://localhost:8012')
  } else {
    console.log('err', err);
  }
})