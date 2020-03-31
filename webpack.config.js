const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
module.exports = (env) => {
    mode: env.NODE_ENV
    const configs = {
        entry: path.join(__dirname, './src/index.js'),
        output: {
        path: path.join(__dirname, 'build'),
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.(js)$/,
                use: 'babel-loader'
            },
            {
                test : /\.css$/,
                use : ['style-loader','css-loader']
            },
            {
                test : /\.html$/,
                use :['html-loader']
            },
            {
                test : /\.(png|svg|jpg|gif)$/i,
                use : {
                   loader: 'file-loader',
                options: {
                    name: '[path][name].[ext]'
                 
                  }
                }
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                  // Creates `style` nodes from JS strings
                  'style-loader',
                  // Translates CSS into CommonJS
                  'css-loader',
                  // Compiles Sass to CSS
                  'sass-loader',
                ]
            }
            
        ]
     },
     plugins: [
         new HtmlWebpackPlugin({
             template: './index.html'
         })
     ],
     devServer: {
        port: 3002,
      }
    }
    return configs
}