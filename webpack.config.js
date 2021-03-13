/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
// const ESLintPlugin = require('eslint-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

const CopyWebpackPlugin = require('copy-webpack-plugin');


// const isDev = process.env.NODE_ENV === 'development';
// const isProd = !isDev;

// const optimization = () => {
//   const config = {
//     splitChunks: {
//       chunks: 'all',
//     },
//   };
//   return config;
// };

module.exports = (env, options) => {
  const isProd = options.mode === 'production';

  const config = {
    mode: isProd ? 'production' : 'development',
    devtool: isProd ? false : 'source-map',
    // watch: !isProd,
    watchOptions: {
      aggregateTimeout: 6000,
    },
    entry: ['./src/index.tsx', './src/assets/sass/style.scss'],
    output: {
      path: path.join(__dirname, '/dist'),
      // publicPath: '/dist/',
      filename: '[name].js',
    },
    optimization: {
      splitChunks: {
        chunks: 'all',
      },
    },
    // optimization: {
    //   splitChunks: {
    //     chunks: 'async',
    //     minSize: 20000,
    //     minRemainingSize: 0,
    //     maxSize: 30000,
    //     minChunks: 1,
    //     maxAsyncRequests: 30,
    //     maxInitialRequests: 30,
    //     enforceSizeThreshold: 50000,
    //     cacheGroups: {
    //       defaultVendors: {
    //         test: /[\\/]node_modules[\\/]/,
    //         priority: -10,
    //         reuseExistingChunk: true,
    //       },
    //       default: {
    //         minChunks: 2,
    //         priority: -20,
    //         reuseExistingChunk: true,
    //       },
    //     },
    //   },
    // },

    module: {
      rules: [
        {
          test: /\.scss$/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
              options: {
                publicPath: '',
              },
            },
            'css-loader',
            'sass-loader',
          ],
        },
        {
          test: /\.(png|jpe?g|gif)$/,
          // use: ['file-loader'],
          use: [
            {
              loader: 'file-loader',
              options: {
                outputPath: 'assets/images',
                name: '[name].[ext]',
              },
            },
          ],
        },
        {
          test: /\.(svg)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                outputPath: 'assets/icons',
                name: '[name].[ext]',
              },
            },
          ],
        },
        {
          test: /\.(ttf|woff|woff2|eot)$/,
          use: ['file-loader'],
        },
        {
          test: /\.html$/i,
          loader: 'html-loader',
        },
        {
          test: /\.(ts|js)x?$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            options: {
              presets: [
                "@babel/preset-env",
                "@babel/preset-react",
                "@babel/preset-typescript",
              ],
            },
          },
        }
      ],
    },

    resolve: { extensions: ['*', '.js', '.jsx', '.ts', '.tsx'] },

    devServer: {
      contentBase: path.join(__dirname, 'dist/'),
      port: 5000,
      publicPath: 'http://localhost:5000',
      hotOnly: true,
    },

    plugins: [
      new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
      new HTMLWebpackPlugin({
        template: './src/index.html',
        output: {
          path: path.resolve(__dirname, './dist'),
          filename: 'index.html',
        },
        minify: {
          // collapseWhitespace: isProd
        },
      }),
      new MiniCssExtractPlugin({
        filename: 'style.css',
      }),

      // new ESLintPlugin({
      //   fix: true,
      // }),

      new CopyWebpackPlugin({
        patterns: [
          // { from: 'src/assets/audio/shifting.wav'},
          // { from: 'src/assets/audio/', to: 'assets/audio/' },
          // { from: 'src/assets/images/svg/favicon.svg' },
          // { from: 'favicon.svg' },
          { from: 'src/assets/images/', to: 'assets/images/' },
          // { from: 'src/assets/icons/', to: 'assets/icons/' },
          // { from: "src/assets/favicon/", to: "assets/favicon/" },
          // { from: 'src/assets/fonts/', to: 'assets/fonts/' },
        ],
      }),
      new ForkTsCheckerWebpackPlugin({
        async: false,
        eslint: {
          files: "./src/**/*.{js,ts,tsx}",
        },
      }),
    ],
  };

  return config;
};

/*
{
  context: path.resolve(__dirname, 'src'),
  mode: 'development',
  entry: {
    main: './index.js',
  },
  output: {
    filename: '[name].[id].js',
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    extensions: ['.js', '.json'],
    alias: {
      '@moduls': path.resolve(__dirname, 'src/moduls'),
      '@': path.resolve(__dirname, 'src'),
    }
  },
  optimization: optimization(),
*/
