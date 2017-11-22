const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const commonConfig = require('./webpack.common.js');
const helpers = require('./helpers');

const ENV = process.env.ENV = 'development';
const NODE_ENV = process.env.TS_ENV || process.env.tsui_env || 'development';

module.exports = webpackMerge(commonConfig, {
    devtool: 'cheap-module-eval-source-map',

    output: {
        path: helpers.root('build/client'),
        publicPath: '/client',
        filename: '[name].js',
        chunkFilename: '[id].chunk.js'
    },

    module: {
      rules: [
        {
            test: /\.ts$/,
            loaders: [{
                    loader: 'awesome-typescript-loader',
                    options: {
                        configFileName: helpers.root('./src/client/tsconfig.json')
                    }
                },
                'angular2-template-loader',
                'angular-router-loader'
            ]
        },
        {
            test: /\.ts$/,
            enforce: 'pre',
            loader: 'tslint-loader',
            options: {
                tsConfigFile: helpers.root('./tslint.json'),
                failOnHint: true,
                typeCheck: false
            }
        },
      ]
    },

    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify(NODE_ENV),
                'ENV': JSON.stringify(ENV)
            }
        })
    ]
});
