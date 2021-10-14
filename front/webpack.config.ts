import path from 'path';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import webpack from 'webpack';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
// import 'webpack-dev-server';
import { Configuration as WebpackConfiguration } from "webpack";
import { Configuration as WebpackDevServerConfiguration } from "webpack-dev-server";
const isDevelopment = process.env.NODE_ENV !== 'production';
import dotenv from 'dotenv';

dotenv.config();
interface Configuration extends WebpackConfiguration {
  devServer?: WebpackDevServerConfiguration;
}

const config: Configuration = {
  name: 'dontpanic',
  mode: isDevelopment ? 'development' : 'production',
  devtool: isDevelopment ? 'hidden-source-map' : 'eval', //'inline-source-map'
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json', '.css'],
    alias: {
      '@hooks': path.resolve(__dirname, 'hooks'),
      '@components': path.resolve(__dirname, 'components'),
      '@layouts': path.resolve(__dirname, 'layouts'),
      '@pages': path.resolve(__dirname, 'pages'),
      '@utils': path.resolve(__dirname, 'utils'),
      '@typings': path.resolve(__dirname, 'typings'),
    },
  },
  entry: {
    app: './client',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'babel-loader',
        options: {
          presets: [
            [
              '@babel/preset-env',
              {
                targets: { browsers: ['last 2 chrome versions'] },
                debug: isDevelopment,
              },
            ],
            '@babel/preset-react',
            '@babel/preset-typescript',
          ],
          env: {
            development: {
              // plugins: [require.resolve('react-refresh/babel')],
              plugins: [['@emotion', { sourceMap: true}], require.resolve('react-refresh/babel')],
            },
            production: {
              plugins: ['@emotion'],
            }
          },
        },
        exclude: path.join(__dirname, 'node_modules'),
      },
      { test: /\.css$/, use: [ 
        { loader: "style-loader" },
        { loader: "css-loader"},
       
    ] },
    {
      test: /\.(eot|ttf|woff|woff2)$/,
      exclude: /node_modules/,
      loader: "file-loader"
  }
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env": JSON.stringify(process.env)
    }),
    new ForkTsCheckerWebpackPlugin({
      async: false,
      // eslint: {
      //   files: "./src/**/*",
      // },
    }),
    new webpack.EnvironmentPlugin({ NODE_ENV: isDevelopment ? 'development' : 'production' }),
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
    publicPath: '/dist/',
  },
  devServer: {
    historyApiFallback: true,
    port: 4200,
    publicPath: '/dist/',
    proxy: {
      '/api/': {
        target: 'http://localhost:4242',
        changeOrigin: true,
      }
    }
  },
};

if (isDevelopment && config.plugins) {
  config.plugins.push(new webpack.HotModuleReplacementPlugin());
  config.plugins.push(new ReactRefreshWebpackPlugin());
}
if (!isDevelopment && config.plugins) {
}

export default config;
