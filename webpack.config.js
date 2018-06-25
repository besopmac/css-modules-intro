var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: './src',
    output: {
        /*
         *
         * There was an error here: the path needs to be absolute.
         * I found a simple solution here: https://goo.gl/z2BkoK
         * 
         */  
        path: __dirname + '/build',
        filename: 'bundle.js',
    },
    module: {
        /*
         *
         * Webpack +4 changes 'loaders' to 'rules': https://goo.gl/RDtvF8
         * For the CSS we need to change some things: https://goo.gl/sxntJZ
         * 
         */
        rules: [
            {
                test: /\.js/,
                loader: 'babel-loader',
                include: __dirname + '/src',
            },
            {
                // test: /\.css$/,
                // use: ['style-loader', 'css-loader'],
                // include: __dirname + '/src',

                /*
                 * The correct comand to install the ExtractPlugin is: npm i -D extract-text-webpack-plugin@next
                 */
                test: /\.css/,
                loader: ExtractTextPlugin.extract('css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]')
            }
        ],
    },
    plugins: [
        new ExtractTextPlugin('styles.css')
    ]
};