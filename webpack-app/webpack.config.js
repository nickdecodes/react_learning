const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path'); // 设置路径

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
          loader: "babel-loader",
          options: {
            presets: [
              ['@babel/preset-env',
                {
                  useBuiltIns: 'usage', // 按需引入需要使用polyfill
                  corejs: { version: 3}, // 解决warn
                  targets: { // 指定兼容性处理那些浏览器
                    "chrome": "58",
                    "ie": "9",
                  }
                }
              ]
            ],
            cacheDirectory: true, // 开启babel缓存
          }
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
        test: /\.(png|jpe?g|gif|svg|eot|ttf|woff|woff2)$/,
        loader: "url-loader",
        options: {
          limit: 8192, // 8kb --> 8kb以下的图片会base64处理
          outputPath: 'images', // 决定文件本地输出路径
          publicPath: 'images/', // 决定图片的url路径
          name: '[hash:8].[ext]' // 修改文件名称[hash:8]hash值取8位[ext]文件扩展名
        },
      },
      {
        test: /\.(html)$/,
        use: {
         loader: "html-loader" 
        }
      },
      {
        test: /\.(eot|svg|woff|woff2|ttf|mp3|mp4|avi)$/, // 处理其他资源
        loader: "file-loader",
        options: {
          outputPath: 'media', // 决定文件本地输出路径
          name: '[hash:8].[ext]' // 修改文件名称[hash:8]hash值取8位[ext]文件扩展名
        },
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
    	template: './src/index.html', //以当前文件为模版创建新的HTML（1.结构和原来一样，会自动引入打包的资源）
  	}),
  ],
  devServer: {
    open: true, // 自动打开浏览器
    // compress: true, // 启用gzip压缩
    port: 3000,
    hot: true,
  }
};