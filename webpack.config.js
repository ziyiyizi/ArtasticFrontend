const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'CommunityPage.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {

    rules: [{
            test: /(\.jsx|\.js)$/,
            use: {
                loader: "babel-loader"
            },
            exclude: /node_modules/
        },
        {
                   test: /\.css$/,
                   use: [
                     'style-loader',
                     'css-loader'
                   ]
                 },
                        {
                           test: /\.(png|svg|jpg|gif)$/,
                           use: [
                           'file-loader'
                           ]
                         }
    ]
 },
plugins: [

]
};