const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: {
        'main': './src/index.js',
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader',
                options: { presets: ['@babel/env'] },
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|jpg|svg)/,
                type: 'asset/resource',
            },
        ]
    },
    resolve: { extensions: ['*', '.js', '.jsx'] },
    output: {
        path: path.resolve(__dirname, '../dist/'),
        filename: 'bundle.js',
        clean: true,
    },
};
