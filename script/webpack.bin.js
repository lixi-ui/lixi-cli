var path = require("path");
var webpack = require("webpack");

var connfig = {
  mode:"development",
  entry: [
    './bin/index.js'
  ],
  output: {
    path: path.resolve(process.cwd() , './bin'),
    filename: 'bin.js',
    libraryTarget: 'umd'
  },
  // module: {
  //   rules:[
  //     {
  //       test: /\.jsx?$/,
  //       loader: 'babel-loader',
  //       options: {
  //         presets: [
  //           [
  //           "@babel/preset-env",
  //             {
  //               // useBuiltIns: 'usage',
  //               // "useBuiltIns": "entry",
  //               // options: {
  //               //   // useBuiltIns: 'entry'
  //               // }
  //               // "plugins" : ["@babel/plugin-transform-runtime"],
  //             }
  //           ],
  //           "@babel/preset-react"
  //         ],
  //         plugins:['@babel/plugin-transform-runtime']   
  //       },
  //     }
  //   ]
  // },
  plugins:[
  ]
}

webpack(connfig, function(err){
  if (err) {
    console.log('err', err)
  } else {
    console.log('build ok')
  }
})