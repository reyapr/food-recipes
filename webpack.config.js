const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin')

module.exports = (_, argv) => {
  const outputPath = argv.mode === 'production'? path.join(__dirname, 'build') : path.join(__dirname, 'bundle')

  return {
    mode: argv.mode,
    devtool: 'source-map',
    output: {
      path: outputPath,
      publicPath: '/',
      filename: 'bundle.js'
    },
    devServer: {
      contentBase: outputPath,
      publicPath: '/',
      port: 3000,
      historyApiFallback: true,
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: ["babel-loader", "eslint-loader"]
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader']
        },
        {
          test: /\.svg$/,
          use: ['svg-loader']
        },
        {
          test: /\.(eot|woff|woff2|svg|ttf)([\?]?.*)$/,
          use: ['file-loader'],
          include: [/fonts/]
        }
      ]
    },
    plugins: [
      new HtmlWebPackPlugin({
        template: path.resolve(__dirname, 'public/index.html'),
        filename: "./index.html"
      })
    ],
    resolve: {
      extensions: ['.js', '.jsx']
    }
  }
}