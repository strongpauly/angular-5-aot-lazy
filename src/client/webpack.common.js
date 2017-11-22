const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const helpers = require('./helpers');
const HtmlWebpackPugPlugin = require('html-webpack-pug-plugin');
module.exports = {
    entry: {
        'polyfills': helpers.root('./src/client/polyfills.ts'),
        'vendor': helpers.root('./src/client/vendor.ts'),
        'app': helpers.root('./src/client/main.ts')
    },

    resolve: {
        extensions: ['.ts', '.json', '.js']
    },

    module: {
        rules: [
            {
                test: /\.json$/,
                loader: "json-loader"
            },
            {
                test: /\.html$/,
                loader: 'html-loader'
            },
            {
                test: /.*\.js/,
                loader: 'string-replace-loader',
                query: {
                    search: 'moduleId: module.id,',
                    replace: ''
                }
            }
        ]
    },

    plugins: [
        // Workaround for angular/angular#11580
        new webpack.ContextReplacementPlugin(
            // The (\\|\/) piece accounts for path separators in *nix and Windows
            /(.+)?angular(\\|\/)core(.+)?/,
            helpers.root('./src/client'), // location of your src
            {} // a map of your routes
        ),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'commons',
            chunks: ['app']
        }),
        new webpack.WatchIgnorePlugin([
            helpers.root('./src/server/')
        ]),
        new HtmlWebpackPlugin({
            template: helpers.root('./src/server/app/views/index/index-ng.pug'),
            filetype: 'pug',
            filename: helpers.root('./build/server/app/views/index/index-ng.pug'),
            chunks: ['polyfills', 'vendor', 'commons', 'app'],
            chunksSortMode: 'manual'
        }),
        new HtmlWebpackPugPlugin()

    ]
};
