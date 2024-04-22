const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './app_kura/src/index.js',
    output: {
        path: path.resolve(__dirname, 'app_kura', 'public'),
        filename: 'bundle.js',
    },
      
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: ['file-loader'],
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
              
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './app_kura/public/index.html',
            filename: 'index.html',
          }),          
    ],
};
