const webpackMerge = require('webpack-merge');
const prodConfig = require('./webpack.prod.js');
const helpers = require('./helpers');
const ngTools = require('@ngtools/webpack');

module.exports = webpackMerge(prodConfig, {
  module: {
      rules: [
          {
              test: /(?:\.ngfactory\.js|\.ngstyle\.js|\.ts)$/,
              loader: '@ngtools/webpack'
          }
      ]
  },

  plugins: [
      new ngTools.AngularCompilerPlugin({
          mainPath: "main.ts",
          tsConfigPath: helpers.root('./src/client/tsconfig.json'),
          entryModule: helpers.root('./src/client/app.module#AppModule'),
          sourceMap: true
      })
  ]
});
