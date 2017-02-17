var path = require('path'),
    webpack = require('webpack'),
    COMMON = require('./webpack-common.config');

module.exports = Object.assign(COMMON, {
    devtool: 'source-map',
    entry: [
        'webpack-hot-middleware/client?path=/__webpack_hmr&reload=true',
        './src/index.js'
    ],
    output: {
        filename: 'stephen-ui.js',
        path: path.resolve(__dirname, 'build'),
        publicPath: '/'
    },
    plugins: [
        // 热替换插件
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        // 定义全局常量
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: process.env.npm_lifecycle_event === 'connect'
                    ? JSON.stringify('connect') : JSON.stringify('mock')
            }
        })
    ],
});