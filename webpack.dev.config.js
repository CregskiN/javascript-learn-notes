const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: __dirname,
        filename: './release/bundle.js' // 生成位置
    },

    module: {
        rules: [{
            test: /\.js?$/,
            exclude: /(node_modules)/, // 忽略
            loader: 'babel-loader'
        }]
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html' // 设置默认html模板，自动引入 filename对应的js文件
        })
    ],
    
    devServer: {
        contentBase: path.join(__dirname, './release'), // 执行webpack-dev-server的根目录,
        open: true, // 自动打开浏览器
        port: 9000
    }
}