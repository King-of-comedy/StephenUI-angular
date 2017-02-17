var path = require('path'),
    webpack = require('webpack'),
    // postcss插件
    autoprefixer = require('autoprefixer'),

    // 路径常量
    NODE_MODULE_PATH = /node_modules/,
    SRC_PATH = path.resolve(__dirname, 'src');

module.exports = {
    externals: {
        'angular': 'angular'
    },
    module: {
        loaders: [
            // babel转换
            {
                test: /\.js$/,
                loader: 'babel',
                exclude: NODE_MODULE_PATH,
                include: SRC_PATH,
                query: {
                    presets: ['es2015']
                }
            },
            // 样式文件
            {
                test: /\.(sc|c)ss$/,
                loaders: ['style', 'css', 'postcss', 'sass?sourceMap'],
                exclude: NODE_MODULE_PATH,
                include: SRC_PATH
            },
            // html模板
            {
                test: /\.tpl\.html$/,
                loader: 'html',
                query: {interpolate: true},
                exclude: /(node_modules|bower_components)/
            },
            // 静态资源
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loaders: [
                    'file?hash=sha512&digest=hex&name=[hash:8].[ext]'
                ],
                exclude: NODE_MODULE_PATH
            },
            {
                test: /\.(woff|woff2)(\?t=\d+)?$/,
                loader: 'url?limit=10000&mimetype=application/font-woff&prefix=fonts',
                exclude: NODE_MODULE_PATH
            },
            {
                test: /\.ttf(\?t=\d+)?$/,
                loader: 'url?limit=10000&mimetype=application/octet-stream&prefix=fonts',
                exclude: NODE_MODULE_PATH
            },
            {
                test: /\.eot(\?t=\d+)?$/,
                loader: 'url?limit=10000&mimetype=application/vnd.ms-fontobject&prefix=fonts',
                exclude: NODE_MODULE_PATH
            },
            {
                test: /\.svg(\?t=\d+)?$/,
                loader: 'url?limit=10000&mimetype=image/svg+xml&prefix=fonts',
                exclude: NODE_MODULE_PATH
            }
        ]
    },
    postcss: [
        autoprefixer({
            browsers: ['last 2 versions']
        })
    ]
};