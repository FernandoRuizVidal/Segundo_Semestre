const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
module.exports ={
    entry:'./src/app.js',
    output:{
        path: __dirname + '/build',
        filename:'bundle.js'
    },
    devServer:{
        port:3000
    },
    module:{
        rules:[
            {
                test:/\.scss$/,
                    use:[
                    {loader: MiniCSSExtractPlugin.loader},
                    {loader:'css-loader'},
                    {loader: 'sass-loader'}
                ]
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new MiniCSSExtractPlugin({
            filename:'bundle.css'
        })
    ]
}