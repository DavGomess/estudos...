const path = require('path')


module.exports = {
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'dist')
        }
    },
    entry: {
        index: './src/index.js'
    },
    mode: 'production',
    module: {
        rules: [{
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        }, {
            test: /\.jss$/,
            use: ['babel-loader']
        }]
    },
    output: {
    filename: '[name].min.js',
    }
}