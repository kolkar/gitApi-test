var webpack = require('webpack');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var precss = require('precss');
var autoprefixer = require('autoprefixer');
var path = require("path");
var pkg = require('./package.json');

var rootPath = path.resolve(__dirname, "");

var distPath = path.join(rootPath, "dist");
var srcPath = path.join(rootPath, "src");
var webpackConfig = {
    context: srcPath,
    entry: {
        app: "./app/index.js"
        // vendor: getVendorsArr()
    },
    output: {
        path: distPath,
        filename: "[name].bundle.js"
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            pkg: pkg,
            template: path.join(srcPath, "index.html")
        }),
        // new webpack.optimize.CommonsChunkPlugin("vendor", "vendor.bundle.js"),
        // new webpack.ProvidePlugin({
        // 	angular: "angular",
        // 	$: "jquery",
        // 	jQuery: "jquery",
        // 	jquery: "jquery",
        // 	lodash: "lodash",
        // 	_: "lodash"
        // }),
        new CopyWebpackPlugin([
            {from: 'data', to: 'data'}, //manifest.json
            {from: 'assets', to: 'assets'}	//img folder
        ]),
        new CleanWebpackPlugin([distPath])
    ],
    module: {
        loaders: [
            {test: /\.js$/, loader: 'ng-annotate!babel-loader', exclude: /node_modules/},
            {test: /\.html$/, loader: 'raw'},
            {test: /\.css$/, loader: 'style!css!postcss'},
            {test: /\.scss$/, loader: 'style!css!postcss!sass'},
            {test: /\.json/, loader: 'json'},
            {test: /\.png$|\.jpg$|\.gif$/, loader: 'url?name=[path][name].[ext]'}
        ]
    },
    postcss: function () {
        return [precss, autoprefixer];
    },
    devServer: {inline: true},
    historyApiFallback: true
};



// function getVendorsArr() {
// 	let vendors = [];
// 	for (let i in pkg.dependencies) {
// 		vendors.push(i);
// 	}
// 	return vendors;
// }

module.exports = webpackConfig;