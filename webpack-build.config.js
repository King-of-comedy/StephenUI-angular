var path = require('path'),
    webpack = require('webpack'),
    CleanPlugin = require('clean-webpack-plugin'),
    HTMLPlugin = require('html-webpack-plugin'),
    COMMON = require('./webpack-common.config');

module.exports = Object.assign(COMMON, {
    entry: {
        'stephen-ui': './src/index.js'
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: '[name].js'
    },
    plugins: [
        // 清除目录
        new CleanPlugin(['build']),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production')
            }
        }),
        // 压缩代码
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    ]
});
