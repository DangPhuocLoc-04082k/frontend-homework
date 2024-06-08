const path = require('path');


module.exports = {
    mode: 'development',
    entry: ['./src/index.tsx'],
    module: {
        rules: require('./webpack.rules'),
    },
    output: {
        publicPath: '/',
    },
    plugins: [...require('./webpack.plugins'), ...require('./webpack.plugins.dev')],
    resolve: {
        extensions: ['.js', '.ts', '.jsx', '.tsx', '.css'],
        alias: {
            // Custom Aliases
            ...require('./webpack.aliases'),
        },
    },
    stats: 'errors-warnings',
    devtool: 'source-map',
    devServer: {
        open: true,
        hot: true,
        static: {
            directory: path.join(__dirname, 'public'),
        },
        compress: true,
        historyApiFallback: true
    },
    optimization: {
        splitChunks: {
            chunks: 'all',
        },
    },
    performance: {
        hints: false,
    },
};

