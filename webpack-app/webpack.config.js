var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path'); // 设置路径

module.exports = {
  entry: './src/index.js', // 入口文件配置（简写）
  /*
  完成写法
  entry:{
  	main:'./src/index.js'
  }
  */
  output: { // 输出配置
    path: path.resolve(__dirname, 'dist'), // 输出文件路径配置
    filename: 'index.js' //输出文件名
  },
  mode: 'development', // 开发环境（二选一）自己开发时候用，编译成浏览器识别的语言
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
            loader: "babel-loader"
        }
      },
      {
        test: /\.css$/, 
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.(png|jpe?g|gif|svg|eot|ttf|woff|woff2)$/i,
        loader: "url-loader",
        options: {
          limit: 8192,
        },
      }
    ]
  },
  plugins: [new HtmlWebpackPlugin({
    template: './src/index.html'
  })]
};