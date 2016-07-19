//var babel = require('babel');
var wallabyWebpack = require('wallaby-webpack');

var webpackPostprocessor = wallabyWebpack({

    externals: {
      // Use external version of React instead of rebuilding it
      "react": "React",
      "chai": "chai"
    },
    resolve: {
      extensions: ['', '.ts', '.tsx'],
      modules: [
        "node_modules"
      ]
    },
    module: {
        loaders: [
          // {
          //           test: /\.js$/,
          //           loaders: ["babel-loader"],
          //           exclude: /node_modules/
          //       },
            {
                test: /\.json$/,
                loaders: ["json-loader"]
            },
            { test: /\.ts(x?)$/, loaders: ["babel-loader", "ts-loader"], exclude: /node_modules/ }
        ]
    }
   
});

module.exports = function (wallaby) {

  return {
    files: [
      {pattern: 'node_modules/babel/node_modules/babel-core/browser-polyfill.js', instrument: false},
      {pattern: 'node_modules/babel-polyfill/browser.js', instrument: false},
      {pattern: 'node_modules/phantomjs-polyfill/bind-polyfill.js', instrument: false},
      {pattern: 'node_modules/react/dist/react-with-addons.js', instrument: false},
      {pattern: 'node_modules/chai/chai.js', instrument: false},

      {pattern: 'src/**/*.ts', load: true},
      {pattern: 'src/**/*.tsx', load: true}
    ],

    tests: [
      {pattern: 'test/**/*Spec.ts', load: true},
      {pattern: 'test/**/*Spec.tsx', load: true}
    ],

    // compilers: {
    //   '**/*.ts?(x)': wallaby.compilers.typeScript({
    //     module: 'commonjs',
    //     jsx: 'React'
    //   })
    // },

    postprocessor: webpackPostprocessor,

    testFramework: 'mocha',

    // env: {
    //   type: 'node'
    // },

    bootstrap: function () {
      window.expect = chai.expect;
      var should = chai.should();

      window.__moduleBundler.loadTests();
    }
  };
};