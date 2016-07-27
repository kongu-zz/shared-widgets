
//var webpackConfig = require('./webpack-karma.config');
var dwebpack = require('webpack');
let gulp = require("gulp");
var gutil = require("gulp-util");
var runSequence = require("run-sequence");
var path = require('path');

gulp.task('react:build', function () {
    dwebpack({
        entry: './src/index.ts',
        output: {
            filename: 'dist/bundle.js'
        },
        resolve: {
            extensions: ['.ts', '.js', '.tsx', '.jsx', ''],
            modules: [
                path.resolve("./src"),
                "node_modules"
            ]
        },
        plugins: [
            // new dwebpack.LoaderOptionsPlugin({
            //     minimize: false,
            //     debug: true
            // }),
            new dwebpack.DefinePlugin({
                "process.env": { NODE_ENV: JSON.stringify("production") }
            }),
            //new dwebpack.IgnorePlugin(/^\.\/locale$/, /moment$/) 
        ],
        module: {
            loaders: [
                {
                    test: /\.tsx?$/,
                    exclude: /node_modules/,
                    loaders: ["babel-loader", "ts-loader"]
                },
                { test: /\.json$/, loader: "json-loader", exclude: /node_modules/ }
            ]
        },
        // plugins: [
        //   new dwebpack.IgnorePlugin(/^\.\/locale$/, /moment$/) 
        // ],
        externals: {
            // 'cheerio': 'window',
            // 'react/addons': true,
            // 'react/lib/ExecutionEnvironment': true,
            // 'react/lib/ReactContext': true,
            "react": "React",
            "react-dom": "ReactDOM",
            "moment": true
        },
        ts: {
            compiler: "typescript"
        }
    }, function (err, stats) {
        if (err) throw new gutil.PluginError("webpack", err);
        gutil.log("[webpack]", stats.toString());
        //callback();  
    });

});

gulp.task("default", function (callback) {
    runSequence("react:build", callback);
});