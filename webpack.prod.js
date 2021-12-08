const { merge } = require('webpack-merge')
const common = require('./webpack.common')
const ImageminWebpackPlugin = require('imagemin-webpack-plugin').default
const ImageminMozJpeg = require('imagemin-mozjpeg')
const ImageminWebpWebpackPlugin = require('imagemin-webp-webpack-plugin')
const BundleAnlyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const miniCssExtractPlugin = require('mini-css-extract-plugin')
const cssMinimizerPlugin = require('css-minimizer-webpack-plugin')

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
      {
        test: /.s?css$/,
        use: [miniCssExtractPlugin.loader,"css-loader"]
      }
    ],
  },
  optimization: {
    minimizer: [
      new cssMinimizerPlugin()
    ],
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
    new miniCssExtractPlugin(),
    new ImageminWebpackPlugin({
      plugins: [
        ImageminMozJpeg({
          quality: 45,
          progressive: true
        })
      ]
    }),
    new BundleAnlyzerPlugin({
      analyzerMode: "static"
    }), 
    new ImageminWebpWebpackPlugin({
      config: [
        {
          test: /\.(jpe?g|png)/,
          options: {
            quality: 45
          }
        }
      ],
      overrideExtension: true
    }),
  ]
})
