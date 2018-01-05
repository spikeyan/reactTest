/**
 * Created by spikeyan on 2017/12/25.
 */

var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var UglifyJSPlugin = require('uglifyjs-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = env => {

    const PRO = env.prod;

    let config = {
        entry: {
            final:'./dev/index.js',
            lib:['react','react-dom']
            // graph:['cytoscape']
        },
        output: {
            //filename: '[name].[chunkhash].js',
            filename: PRO ? '[name].[chunkhash].js' : '[name].js',
            path: path.resolve(__dirname, 'www'),
            //chunkFilename:'js/[name].[chunkhash].js',
            chunkFilename: PRO ? 'js/[name].[chunkhash].js' : 'js/[name].js'
        },
        module: {
            rules: [
                { test: /\.js$/, exclude: /(node_modules)/, loader: "babel-loader" },
                {
                    test: /\.jsx?$/,
                    exclude: /(node_modules)/,
                    loader: 'babel-loader',
                    query: {
                        presets: ['react']
                    }
                },
                {
                    test:/\.styl$/,
                    loader:ExtractTextPlugin.extract({
                        use:'css-loader?minimize&modules!stylus-loader'
                    })
                },
                {
                    test:/\.html$/,
                    loader:'html-loader'
                },
                {
                    test: /\.(png|jpg|gif)$/,
                    use: [
                        {
                            loader:'url-loader',
                            options:{
                                limit:8192,
                                outputPath:'res/img/'
                            }
                        }
                    ]
                },
                {
                    test:/\.(eot|svg|ttf|woff)$/,
                    use: "file-loader?name=[name].[ext]&outputPath=res/icon/"
                }
            ]
        },
        plugins: [
            new ExtractTextPlugin('final.css'),
            new webpack.optimize.CommonsChunkPlugin({
                names:["lib"]
            }),
            // PRO && new UglifyJSPlugin(),
            new HtmlWebpackPlugin({
                filename: 'index.html',
                template: './dev/index.html',
                hash:true
            })
        ],
        resolve:{
            alias:{
                devRoot:path.resolve(__dirname, 'dev'),
                archRoot:path.resolve(__dirname, 'dev/arch'),
                componentRoot:path.resolve(__dirname, 'dev/component'),
                configRoot:path.resolve(__dirname, 'dev/config')
            }
        },
        // devtool:'inline-source-map'
        // devtool:PRO && 'cheap-eval-source-map'
    }

    if(PRO){
        config.devtool = 'cheap-eval-source-map'
        config.plugins.push(new UglifyJSPlugin())
    }

    return config
}
