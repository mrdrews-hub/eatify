const { merge } = require('webpack-merge')
const common = require('./webpack.common')
const ImageminWebpackPlugin = require('imagemin-webpack-plugin').default
const ImageminMozJpeg = require('imagemin-mozjpeg')
const BundleAnlyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const cssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const miniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = merge(common, {
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: '/node_modules/',
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
            },
          },
        ],
      },
      // {
      //   test: /\.css$/,
      //   use: [miniCssExtractPlugin.loader,"css-loader"]
      // }
    ],
  },
  optimization: {
    // minimizer: [
    //   new cssMinimizerPlugin({
    //     minify: [
    //       cssMinimizerPlugin.cssnanoMinify,
    //       cssMinimizerPlugin.cssoMinify,
    //       cssMinimizerPlugin.cleanCssMinify,
    //     ]
    //   })
    // ],
    splitChunks: {
      chunks: 'all',
      minSize: 20000,
      maxSize: 70000,
      minChunks: 1,
      maxAsyncRequests: 30,
      maxInitialRequests: 30,
      automaticNameDelimiter: '~',
      enforceSizeThreshold: 50000,
      cacheGroups: {
        defaultVendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true
        }
      }
    }
  },
  plugins: [
    new BundleAnlyzerPlugin(),
    // new miniCssExtractPlugin(),
    new ImageminWebpackPlugin({
      pngquant: {
        quality: 50
      },
      plugins: [
        ImageminMozJpeg({
          quality: 50,
          progressive: true
        })
      ]
    })
  ]
})
