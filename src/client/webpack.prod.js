const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
require('extract-text-webpack-plugin');
const commonConfig = require('./webpack.common.js');
const helpers = require('./helpers');

const ENV = process.env.ENV = 'production';
const NODE_ENV = process.env.TS_ENV || process.env.tsui_env || 'production';

module.exports = webpackMerge(commonConfig, {
    devtool: 'source-map',

    output: {
        path: helpers.root('build/client'),
        publicPath: '/client/',
        filename: '[name].[hash].js',
        chunkFilename: '[id].[hash].chunk.js'
    },

    plugins: [
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.optimize.UglifyJsPlugin({ // https://github.com/angular/angular/issues/10618
            mangle: {
                keep_fnames: true
            },
            compress: {
                warnings: false
            },
            output: {
                comments: false
            },
            sourceMap: false
        }),
        // new ExtractTextPlugin('[name].[hash].css'),
        new webpack.DefinePlugin({
            'process.env': {
                'ENV': JSON.stringify(ENV),
                'NODE_ENV': JSON.stringify(NODE_ENV),
            }
        }),
        new webpack.LoaderOptionsPlugin({
            htmlLoader: {
                minimize: false // workaround for ng2
            }
        })
    ]
});
